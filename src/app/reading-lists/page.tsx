"use client";
import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { DOCUMENTS } from "@/lib/documents";
import { createBrowserClient } from "@supabase/ssr";

type ReadingList = {
  id: string;
  name: string;
  description: string | null;
  document_ids: string[];
  assigned_to: string[];
  due_date: string | null;
  created_at: string;
  org_id: string;
  created_by: string;
};

type StaffOption = {
  userId: string;
  name: string;
  email: string;
  initials: string;
};

function supabase() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

const KQ_COLORS: Record<string, string> = {
  Safe: "#22c55e",
  Effective: "#2E6FFF",
  Caring: "#ec4899",
  Responsive: "#f59e0b",
  "Well-Led": "#8b5cf6",
};

export default function ReadingListsPage() {
  const [lists, setLists] = useState<ReadingList[]>([]);
  const [readDocIds, setReadDocIds] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(true);
  const [showCreate, setShowCreate] = useState(false);
  const [activeList, setActiveList] = useState<ReadingList | null>(null);
  const [isManager, setIsManager] = useState(false);
  const [staffOptions, setStaffOptions] = useState<StaffOption[]>([]);

  // New list form state
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newDue, setNewDue] = useState("");
  const [selectedDocIds, setSelectedDocIds] = useState<string[]>([]);
  const [selectedAssignees, setSelectedAssignees] = useState<string[]>([]);
  const [docSearch, setDocSearch] = useState("");
  const [saving, setSaving] = useState(false);

  // Assign modal state
  const [assigningList, setAssigningList] = useState<ReadingList | null>(null);
  const [assignIds, setAssignIds] = useState<string[]>([]);
  const [assigning, setAssigning] = useState(false);

  const sb = supabase();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    const { data: { user } } = await sb.auth.getUser();
    if (!user) {
      setLists(DEMO_LISTS);
      setLoading(false);
      return;
    }

    // Check if user is an org owner (has their own staff) or a staff member
    const [profileRes, staffCheckRes] = await Promise.all([
      sb.from("profiles").select("id").eq("id", user.id).single(),
      sb.from("staff_members").select("org_id").eq("user_id", user.id).limit(1),
    ]);

    const staffRow = staffCheckRes.data?.[0];
    const orgId = staffRow ? staffRow.org_id : user.id;
    const isOrgOwner = !staffRow;
    setIsManager(isOrgOwner);

    // Fetch reading lists — org owners see all, staff see only assigned
    const listsQuery = isOrgOwner
      ? sb.from("reading_lists").select("*").eq("org_id", orgId).order("created_at", { ascending: false })
      : sb.from("reading_lists").select("*").eq("org_id", orgId)
          .contains("assigned_to", [user.id]).order("created_at", { ascending: false });

    const [listsRes, readsRes, staffRes] = await Promise.all([
      listsQuery,
      sb.from("read_records").select("document_id").eq("user_id", user.id),
      isOrgOwner
        ? sb.from("staff_members").select("user_id, email, first_name, last_name")
            .eq("org_id", user.id).eq("status", "active").not("user_id", "is", null)
        : Promise.resolve({ data: [] }),
    ]);

    setLists((listsRes.data ?? []) as ReadingList[]);
    setReadDocIds(new Set((readsRes.data ?? []).map((r: { document_id: string }) => r.document_id)));

    const options: StaffOption[] = (staffRes.data ?? []).map((r: { user_id: string; email: string; first_name: string | null; last_name: string | null }) => {
      const name = [r.first_name, r.last_name].filter(Boolean).join(" ") || r.email;
      const initials = name.split(" ").map((n: string) => n[0] ?? "").join("").toUpperCase().slice(0, 2);
      return { userId: r.user_id, name, email: r.email, initials };
    });
    setStaffOptions(options);
    setLoading(false);
  }

  async function createList() {
    if (!newName.trim() || selectedDocIds.length === 0) return;
    setSaving(true);

    const { data: { user } } = await sb.auth.getUser();
    if (!user) {
      const demo: ReadingList = {
        id: `demo-${Date.now()}`,
        name: newName,
        description: newDesc || null,
        document_ids: selectedDocIds,
        assigned_to: selectedAssignees,
        due_date: newDue || null,
        created_at: new Date().toISOString(),
        org_id: "demo",
        created_by: "demo",
      };
      setLists((prev) => [demo, ...prev]);
      resetForm();
      setSaving(false);
      return;
    }

    const { data, error } = await sb.from("reading_lists").insert({
      name: newName,
      description: newDesc || null,
      document_ids: selectedDocIds,
      assigned_to: selectedAssignees,
      due_date: newDue || null,
      org_id: user.id,
      created_by: user.id,
    }).select().single();

    if (!error && data) {
      setLists((prev) => [data as ReadingList, ...prev]);
    }
    resetForm();
    setSaving(false);
  }

  async function saveAssignment() {
    if (!assigningList) return;
    setAssigning(true);
    await sb.from("reading_lists").update({ assigned_to: assignIds }).eq("id", assigningList.id);
    setLists(prev => prev.map(l => l.id === assigningList.id ? { ...l, assigned_to: assignIds } : l));
    setAssigningList(null);
    setAssigning(false);
  }

  function openAssignModal(list: ReadingList) {
    setAssignIds(list.assigned_to ?? []);
    setAssigningList(list);
  }

  function resetForm() {
    setNewName("");
    setNewDesc("");
    setNewDue("");
    setSelectedDocIds([]);
    setSelectedAssignees([]);
    setDocSearch("");
    setShowCreate(false);
  }

  async function markRead(docId: string) {
    const { data: { user } } = await sb.auth.getUser();
    if (!user) {
      setReadDocIds((prev) => new Set([...prev, docId]));
      return;
    }
    await sb.from("read_records").upsert({ user_id: user.id, document_id: docId });
    setReadDocIds((prev) => new Set([...prev, docId]));
  }

  function toggleDoc(id: string) {
    setSelectedDocIds((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id]
    );
  }

  const filteredDocs = DOCUMENTS.filter((d) =>
    d.title.toLowerCase().includes(docSearch.toLowerCase()) ||
    d.subcategory.toLowerCase().includes(docSearch.toLowerCase())
  );

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-64 text-gray-400">Loading reading lists...</div>
      </DashboardLayout>
    );
  }

  // Detail view
  if (activeList) {
    const docs = activeList.document_ids.map((id) => DOCUMENTS.find((d) => d.id === id)).filter(Boolean) as typeof DOCUMENTS;
    const readCount = docs.filter((d) => readDocIds.has(d.id)).length;
    const pct = docs.length > 0 ? Math.round((readCount / docs.length) * 100) : 0;
    const overdue = activeList.due_date && new Date(activeList.due_date) < new Date();

    return (
      <DashboardLayout>
        <div className="max-w-3xl">
          <button onClick={() => setActiveList(null)} className="text-sm text-gray-400 hover:text-gray-600 mb-4 flex items-center gap-1">
            ← All Reading Lists
          </button>

          <div className="card p-6 mb-5">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-xl font-bold text-gray-900 mb-1">{activeList.name}</h1>
                {activeList.description && <p className="text-sm text-gray-500 mb-2">{activeList.description}</p>}
                {activeList.due_date && (
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${overdue ? "bg-red-100 text-red-600" : "bg-amber-50 text-amber-700"}`}>
                    {overdue ? "⚠️ Overdue" : "📅"} Due {new Date(activeList.due_date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                  </span>
                )}
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: pct === 100 ? "#22c55e" : "#2E6FFF" }}>{pct}%</div>
                <div className="text-xs text-gray-500">{readCount}/{docs.length} read</div>
              </div>
            </div>
            <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all"
                style={{ width: `${pct}%`, backgroundColor: pct === 100 ? "#22c55e" : "#2E6FFF" }} />
            </div>
          </div>

          <div className="space-y-3">
            {docs.map((doc) => {
              const isRead = readDocIds.has(doc.id);
              return (
                <div key={doc.id} className={`card p-4 flex items-center gap-4 ${isRead ? "opacity-75" : ""}`}>
                  <div className="w-1 h-10 rounded-full flex-shrink-0"
                    style={{ backgroundColor: KQ_COLORS[doc.keyQuestion] ?? "#ccc" }} />
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold ${isRead ? "line-through text-gray-400" : "text-gray-900"}`}>{doc.title}</p>
                    <p className="text-xs text-gray-400">{doc.subcategory} · {doc.readTime} min read</p>
                  </div>
                  {isRead ? (
                    <span className="text-xs text-green-600 font-medium flex items-center gap-1">✓ Read</span>
                  ) : (
                    <button
                      onClick={() => markRead(doc.id)}
                      className="text-xs px-3 py-1.5 rounded-lg font-semibold border border-gray-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-colors"
                    >
                      Mark as Read
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Reading Lists</h1>
            <p className="text-sm text-gray-500 mt-0.5">Organise policies into reading lists and track staff completion</p>
          </div>
          <button onClick={() => setShowCreate(true)} className="btn-primary flex items-center gap-2">
            <span>＋</span> Create Reading List
          </button>
        </div>

        {/* Create form */}
        {showCreate && (
          <div className="card p-6 mb-6 border-2" style={{ borderColor: "#2E6FFF" }}>
            <h2 className="font-bold text-gray-900 mb-4">New Reading List</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g. New Starter Mandatory Reading"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <input
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  placeholder="Optional description..."
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
                <input
                  type="date"
                  value={newDue}
                  onChange={(e) => setNewDue(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Policies * ({selectedDocIds.length} selected)
                </label>
                <input
                  value={docSearch}
                  onChange={(e) => setDocSearch(e.target.value)}
                  placeholder="Search policies..."
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 mb-2"
                />
                <div className="max-h-48 overflow-y-auto border border-gray-100 rounded-lg">
                  {filteredDocs.map((doc) => (
                    <label key={doc.id} className="flex items-center gap-3 px-3 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0">
                      <input
                        type="checkbox"
                        checked={selectedDocIds.includes(doc.id)}
                        onChange={() => toggleDoc(doc.id)}
                        className="rounded"
                        style={{ accentColor: "#2E6FFF" }}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 truncate">{doc.title}</p>
                        <p className="text-xs text-gray-400">{doc.keyQuestion} · {doc.subcategory}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
              {/* Assign to staff — only shown if there are active staff */}
              {staffOptions.length > 0 && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Assign to Staff ({selectedAssignees.length === 0 ? "all staff can see" : `${selectedAssignees.length} selected`})
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {staffOptions.map(s => {
                      const sel = selectedAssignees.includes(s.userId);
                      return (
                        <button
                          key={s.userId}
                          type="button"
                          onClick={() => setSelectedAssignees(prev => sel ? prev.filter(id => id !== s.userId) : [...prev, s.userId])}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
                          style={{
                            backgroundColor: sel ? "#2E6FFF" : "#f3f4f6",
                            color: sel ? "white" : "#374151",
                            border: `1px solid ${sel ? "#2E6FFF" : "#e2e8f0"}`,
                          }}
                        >
                          <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
                            style={{ backgroundColor: sel ? "rgba(255,255,255,0.3)" : "#94a3b8" }}>
                            {s.initials}
                          </span>
                          {s.name}
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Leave all unselected to make visible to everyone.</p>
                </div>
              )}

              <div className="flex gap-3 pt-2">
                <button onClick={resetForm} className="btn-secondary flex-1">Cancel</button>
                <button
                  onClick={createList}
                  disabled={!newName.trim() || selectedDocIds.length === 0 || saving}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
                  style={{
                    backgroundColor: newName.trim() && selectedDocIds.length > 0 ? "#2E6FFF" : "#cbd5e1",
                    cursor: newName.trim() && selectedDocIds.length > 0 ? "pointer" : "not-allowed",
                  }}
                >
                  {saving ? "Saving..." : "Create Reading List"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Lists */}
        {lists.length === 0 ? (
          <div className="card p-12 text-center">
            <div className="text-4xl mb-3">📚</div>
            <h3 className="font-bold text-gray-900 mb-1">No reading lists yet</h3>
            <p className="text-sm text-gray-500 mb-4">Create your first reading list to organise policies for your team.</p>
            <button onClick={() => setShowCreate(true)} className="btn-primary">Create Reading List</button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {lists.map((list) => {
              const docs = list.document_ids.map((id) => DOCUMENTS.find((d) => d.id === id)).filter(Boolean);
              const readCount = docs.filter((d) => d && readDocIds.has(d.id)).length;
              const pct = docs.length > 0 ? Math.round((readCount / docs.length) * 100) : 0;
              const overdue = list.due_date && new Date(list.due_date) < new Date();

              return (
                <div
                  key={list.id}
                  className="card p-5 cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => setActiveList(list)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-900 leading-snug flex-1 pr-2">{list.name}</h3>
                    <span className="text-lg font-bold flex-shrink-0" style={{ color: pct === 100 ? "#22c55e" : "#2E6FFF" }}>
                      {pct}%
                    </span>
                  </div>
                  {list.description && (
                    <p className="text-xs text-gray-500 mb-2 line-clamp-2">{list.description}</p>
                  )}
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3">
                    <div className="h-full rounded-full transition-all"
                      style={{ width: `${pct}%`, backgroundColor: pct === 100 ? "#22c55e" : "#2E6FFF" }} />
                  </div>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{docs.length} {docs.length === 1 ? "policy" : "policies"}</span>
                    {list.due_date ? (
                      <span className={overdue ? "text-red-500" : "text-amber-600"}>
                        {overdue ? "⚠️ Overdue" : `Due ${new Date(list.due_date).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}`}
                      </span>
                    ) : (
                      <span>{readCount}/{docs.length} read</span>
                    )}
                  </div>

                  {/* Assigned staff avatars + assign button */}
                  <div className="mt-3 pt-3 border-t flex items-center justify-between" style={{ borderColor: "#f3f4f6" }}>
                    <div className="flex items-center gap-1">
                      {(list.assigned_to ?? []).length === 0 ? (
                        <span className="text-xs text-gray-300">Everyone</span>
                      ) : (
                        <>
                          {(list.assigned_to ?? []).slice(0, 4).map(uid => {
                            const s = staffOptions.find(o => o.userId === uid);
                            return s ? (
                              <div key={uid}
                                className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold -ml-1 first:ml-0 border-2 border-white"
                                style={{ backgroundColor: "#2E6FFF" }}
                                title={s.name}
                              >
                                {s.initials}
                              </div>
                            ) : null;
                          })}
                          {(list.assigned_to ?? []).length > 4 && (
                            <span className="text-xs text-gray-400 ml-1">+{(list.assigned_to ?? []).length - 4}</span>
                          )}
                        </>
                      )}
                    </div>
                    {isManager && (
                      <button
                        onClick={(e) => { e.stopPropagation(); openAssignModal(list); }}
                        className="text-xs font-semibold px-2.5 py-1 rounded-lg border transition-all hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
                        style={{ borderColor: "#e2e8f0", color: "#6b7280" }}
                      >
                        Assign →
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Assign modal */}
        {assigningList && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="fixed inset-0 bg-black/40" onClick={() => setAssigningList(null)} />
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm z-10">
              <h2 className="font-bold text-gray-900 mb-1">Assign Reading List</h2>
              <p className="text-sm text-gray-500 mb-4">
                &ldquo;{assigningList.name}&rdquo; — choose who this is assigned to.
              </p>

              {staffOptions.length === 0 ? (
                <p className="text-sm text-gray-400 py-4 text-center">No active staff members yet.</p>
              ) : (
                <div className="space-y-2 max-h-64 overflow-y-auto mb-4">
                  {staffOptions.map(s => {
                    const sel = assignIds.includes(s.userId);
                    return (
                      <label key={s.userId}
                        className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all"
                        style={{
                          backgroundColor: sel ? "#eff6ff" : "#f9fafb",
                          border: `1px solid ${sel ? "#93c5fd" : "#e2e8f0"}`,
                        }}
                      >
                        <input type="checkbox" checked={sel}
                          onChange={() => setAssignIds(prev => sel ? prev.filter(id => id !== s.userId) : [...prev, s.userId])}
                          className="rounded" style={{ accentColor: "#2E6FFF" }} />
                        <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                          style={{ backgroundColor: "#2E6FFF" }}>
                          {s.initials}
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{s.name}</div>
                          <div className="text-xs text-gray-400">{s.email}</div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              )}

              <p className="text-xs text-gray-400 mb-4">
                {assignIds.length === 0
                  ? "No one selected — this list will be visible to all staff."
                  : `Assigned to ${assignIds.length} staff member${assignIds.length === 1 ? "" : "s"}.`}
              </p>

              <div className="flex gap-2">
                <button onClick={() => setAssigningList(null)} className="btn-secondary flex-1">Cancel</button>
                <button
                  onClick={saveAssignment}
                  disabled={assigning}
                  className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white transition-all"
                  style={{ backgroundColor: "#2E6FFF", opacity: assigning ? 0.7 : 1 }}
                >
                  {assigning ? "Saving…" : "Save Assignment"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

// Demo data for unauthenticated preview
const DEMO_LISTS: ReadingList[] = [
  {
    id: "demo-1",
    name: "New Starter Mandatory Reading",
    description: "All new staff must complete within first 2 weeks",
    document_ids: ["saf-001", "saf-005", "saf-003", "car-001", "wl-004"],
    assigned_to: [],
    due_date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
    created_at: new Date().toISOString(),
    org_id: "demo",
    created_by: "demo",
  },
  {
    id: "demo-2",
    name: "CQC Inspection Prep Pack",
    description: "Key policies to review before an inspection visit",
    document_ids: ["wl-001", "saf-006", "eff-001", "res-001", "wl-002"],
    assigned_to: [],
    due_date: null,
    created_at: new Date().toISOString(),
    org_id: "demo",
    created_by: "demo",
  },
];
