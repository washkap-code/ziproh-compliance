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
  due_date: string | null;
  created_at: string;
  org_id: string;
  created_by: string;
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

  // New list form state
  const [newName, setNewName] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newDue, setNewDue] = useState("");
  const [selectedDocIds, setSelectedDocIds] = useState<string[]>([]);
  const [docSearch, setDocSearch] = useState("");
  const [saving, setSaving] = useState(false);

  const sb = supabase();

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    const { data: { user } } = await sb.auth.getUser();
    if (!user) {
      // Fallback: show demo data for unauthenticated preview
      setLists(DEMO_LISTS);
      setLoading(false);
      return;
    }

    const [listsRes, readsRes] = await Promise.all([
      sb.from("reading_lists").select("*").eq("org_id", user.id).order("created_at", { ascending: false }),
      sb.from("read_records").select("document_id").eq("user_id", user.id),
    ]);

    setLists(listsRes.data ?? []);
    setReadDocIds(new Set((readsRes.data ?? []).map((r) => r.document_id)));
    setLoading(false);
  }

  async function createList() {
    if (!newName.trim() || selectedDocIds.length === 0) return;
    setSaving(true);

    const { data: { user } } = await sb.auth.getUser();
    if (!user) {
      // Demo mode: add locally
      const demo: ReadingList = {
        id: `demo-${Date.now()}`,
        name: newName,
        description: newDesc || null,
        document_ids: selectedDocIds,
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
      due_date: newDue || null,
      org_id: user.id,
      created_by: user.id,
    }).select().single();

    if (!error && data) {
      setLists((prev) => [data, ...prev]);
    }
    resetForm();
    setSaving(false);
  }

  function resetForm() {
    setNewName("");
    setNewDesc("");
    setNewDue("");
    setSelectedDocIds([]);
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
                </div>
              );
            })}
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
    due_date: null,
    created_at: new Date().toISOString(),
    org_id: "demo",
    created_by: "demo",
  },
];
