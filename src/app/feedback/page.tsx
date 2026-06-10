"use client";
import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { createBrowserClient } from "@supabase/ssr";

type SurveyAudience  = "residents" | "families" | "staff" | "mixed";
type SurveyStatus    = "active" | "draft" | "closed";
type ResponseSentiment = "positive" | "neutral" | "negative";

type Survey = {
  id: string;
  org_id: string;
  title: string;
  audience: SurveyAudience;
  status: SurveyStatus;
  closes_at: string | null;
  created_at: string;
};

type SurveyResponse = {
  id: string;
  survey_id: string;
  respondent: string;
  score: number;
  comment: string;
  sentiment: ResponseSentiment;
  responded_at: string;
};

const AUDIENCE_LABELS: Record<string, { label: string; color: string }> = {
  residents: { label: "Residents", color: "#2E6FFF"  },
  families:  { label: "Families",  color: "#8b5cf6"  },
  staff:     { label: "Staff",     color: "#22c55e"  },
  mixed:     { label: "Mixed",     color: "#f59e0b"  },
};

const STATUS_STYLE: Record<SurveyStatus, { label: string; bg: string; color: string }> = {
  active: { label: "Active", bg: "#dcfce7", color: "#15803d" },
  draft:  { label: "Draft",  bg: "#f3f4f6", color: "#6b7280" },
  closed: { label: "Closed", bg: "#fee2e2", color: "#b91c1c" },
};

const SENTIMENT_STYLE: Record<ResponseSentiment, { icon: string; color: string }> = {
  positive: { icon: "😊", color: "#15803d" },
  neutral:  { icon: "😐", color: "#b45309" },
  negative: { icon: "😟", color: "#b91c1c" },
};

function inferSentiment(score: number): ResponseSentiment {
  if (score >= 4) return "positive";
  if (score >= 3) return "neutral";
  return "negative";
}

function ScoreDots({ score }: { score: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(i => (
        <div key={i} className="w-2.5 h-2.5 rounded-full"
          style={{ backgroundColor: i <= score ? "#2E6FFF" : "#e2e8f0" }} />
      ))}
    </div>
  );
}

function sb() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

export default function FeedbackPage() {
  const [surveys,   setSurveys]   = useState<Survey[]>([]);
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [loading,   setLoading]   = useState(true);
  const [userId,    setUserId]    = useState<string | null>(null);

  // UI state
  const [activeTab,      setActiveTab]      = useState<"overview" | "responses">("overview");
  const [filterAudience, setFilterAudience] = useState("All");
  const [selectedSurvey, setSelectedSurvey] = useState<string | null>(null);

  // Create survey modal
  const [showCreate, setShowCreate]   = useState(false);
  const [newTitle,   setNewTitle]     = useState("");
  const [newAud,     setNewAud]       = useState<SurveyAudience>("residents");
  const [newStatus,  setNewStatus]    = useState<SurveyStatus>("active");
  const [newCloses,  setNewCloses]    = useState("");
  const [creating,   setCreating]     = useState(false);

  // Log response modal
  const [showResponse,  setShowResponse]  = useState<Survey | null>(null);
  const [respComment,   setRespComment]   = useState("");
  const [respScore,     setRespScore]     = useState(5);
  const [respRespondent,setRespRespondent]= useState("");
  const [logging,       setLogging]       = useState(false);

  useEffect(() => { loadData(); }, []);

  async function loadData() {
    setLoading(true);
    const client = sb();
    const { data: { user } } = await client.auth.getUser();
    if (!user) { setLoading(false); return; }
    setUserId(user.id);

    const [survRes, respRes] = await Promise.all([
      client.from("feedback_surveys")
        .select("*")
        .eq("org_id", user.id)
        .order("created_at", { ascending: false }),
      client.from("feedback_responses")
        .select("*")
        .eq("org_id", user.id)
        .order("responded_at", { ascending: false }),
    ]);

    setSurveys((survRes.data as Survey[]) ?? []);
    setResponses((respRes.data as SurveyResponse[]) ?? []);
    setLoading(false);
  }

  async function createSurvey() {
    if (!newTitle.trim() || !userId) return;
    setCreating(true);
    const client = sb();
    const { data, error } = await client
      .from("feedback_surveys")
      .insert({
        org_id:    userId,
        title:     newTitle.trim(),
        audience:  newAud,
        status:    newStatus,
        closes_at: newCloses || null,
      })
      .select()
      .single();

    if (!error && data) setSurveys((prev) => [data as Survey, ...prev]);
    setShowCreate(false);
    setNewTitle(""); setNewAud("residents"); setNewStatus("active"); setNewCloses("");
    setCreating(false);
  }

  async function logResponse() {
    if (!showResponse || !userId) return;
    setLogging(true);
    const client = sb();
    const sentiment = inferSentiment(respScore);
    const { data, error } = await client
      .from("feedback_responses")
      .insert({
        survey_id:    showResponse.id,
        org_id:       userId,
        respondent:   respRespondent || `${AUDIENCE_LABELS[showResponse.audience].label} (anonymous)`,
        score:        respScore,
        comment:      respComment.trim(),
        sentiment,
        responded_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (!error && data) setResponses((prev) => [data as SurveyResponse, ...prev]);
    setShowResponse(null);
    setRespComment(""); setRespScore(5); setRespRespondent("");
    setLogging(false);
  }

  // Derived stats
  const activeSurveys  = surveys.filter(s => s.status === "active").length;
  const totalResponses = responses.length;
  const scored         = responses.filter(r => r.score > 0);
  const avgOverall     = scored.length > 0
    ? (scored.reduce((sum, r) => sum + r.score, 0) / scored.length).toFixed(1)
    : "—";

  const displayedSurveys   = filterAudience === "All" ? surveys : surveys.filter(s => s.audience === filterAudience);
  const displayedResponses = selectedSurvey ? responses.filter(r => r.survey_id === selectedSurvey) : responses;

  return (
    <DashboardLayout>
      <div className="max-w-5xl">
        {/* Header */}
        <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Feedback Surveys</h1>
            <p className="text-gray-500 mt-1 text-sm">Collect and review feedback from residents, families, and staff</p>
          </div>
          <button onClick={() => setShowCreate(true)} className="btn-primary text-sm">＋ New Survey</button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[
            { label: "Active Surveys",  value: loading ? "…" : activeSurveys,          icon: "📋", color: "#2E6FFF" },
            { label: "Total Responses", value: loading ? "…" : totalResponses,          icon: "💬", color: "#22c55e" },
            { label: "Avg. Score",      value: loading ? "…" : `${avgOverall}${avgOverall !== "—" ? " / 5" : ""}`, icon: "⭐", color: "#f59e0b" },
          ].map(stat => (
            <div key={stat.label} className="card flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ backgroundColor: `${stat.color}18` }}>
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-5 p-1 rounded-lg w-fit" style={{ backgroundColor: "#f3f4f6" }}>
          {(["overview", "responses"] as const).map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className="px-5 py-2 rounded-md text-sm font-semibold capitalize transition-all"
              style={{
                backgroundColor: activeTab === tab ? "white" : "transparent",
                color:           activeTab === tab ? "#1e293b" : "#6b7280",
                boxShadow:       activeTab === tab ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
              }}>
              {tab === "overview" ? "Surveys" : "Responses"}
            </button>
          ))}
        </div>

        {/* ── Surveys tab ─────────────────────────────────────────── */}
        {activeTab === "overview" && (
          <>
            <div className="flex gap-2 mb-4 flex-wrap">
              {["All", "residents", "families", "staff"].map(a => (
                <button key={a} onClick={() => setFilterAudience(a)}
                  className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all capitalize"
                  style={{
                    backgroundColor: filterAudience === a ? "#2E6FFF" : "#f3f4f6",
                    color:           filterAudience === a ? "white" : "#6b7280",
                  }}>
                  {a === "All" ? "All" : AUDIENCE_LABELS[a].label}
                </button>
              ))}
            </div>

            {loading ? (
              <div className="text-sm text-gray-400 py-12 text-center">Loading surveys…</div>
            ) : displayedSurveys.length === 0 ? (
              <div className="card p-12 text-center">
                <div className="text-5xl mb-4">💬</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">No surveys yet</h3>
                <p className="text-sm text-gray-500 mb-6 max-w-sm mx-auto">
                  Create your first feedback survey to start collecting views from residents, families, and staff.
                </p>
                <button onClick={() => setShowCreate(true)} className="btn-primary">Create Your First Survey</button>
              </div>
            ) : (
              <div className="space-y-3">
                {displayedSurveys.map(survey => {
                  const aud       = AUDIENCE_LABELS[survey.audience];
                  const st        = STATUS_STYLE[survey.status];
                  const survResps = responses.filter(r => r.survey_id === survey.id);
                  const avg       = survResps.length > 0
                    ? (survResps.reduce((s, r) => s + r.score, 0) / survResps.length).toFixed(1)
                    : null;

                  return (
                    <div key={survey.id} className="card hover:shadow-md transition-all">
                      <div className="flex items-center gap-4">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap mb-1">
                            <h3 className="text-sm font-bold text-gray-900">{survey.title}</h3>
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                              style={{ backgroundColor: st.bg, color: st.color }}>{st.label}</span>
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full"
                              style={{ backgroundColor: `${aud.color}18`, color: aud.color }}>{aud.label}</span>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-gray-400">
                            <span>{survResps.length} response{survResps.length !== 1 ? "s" : ""}</span>
                            {avg && <span>Avg score: <strong className="text-gray-700">{avg}/5</strong></span>}
                            {survey.closes_at && (
                              <span>Closes {new Date(survey.closes_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>
                            )}
                          </div>
                        </div>
                        <div className="flex gap-2 flex-shrink-0">
                          <button
                            onClick={() => { setSelectedSurvey(survey.id); setActiveTab("responses"); }}
                            className="px-3 py-1.5 text-xs font-semibold border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-600"
                          >
                            View Responses
                          </button>
                          {survey.status === "active" && (
                            <button
                              onClick={() => setShowResponse(survey)}
                              className="px-3 py-1.5 text-xs font-semibold rounded-lg text-white"
                              style={{ backgroundColor: "#2E6FFF" }}
                            >
                              Log Response
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}

        {/* ── Responses tab ─────────────────────────────────────────── */}
        {activeTab === "responses" && (
          <>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <select
                value={selectedSurvey ?? ""}
                onChange={e => setSelectedSurvey(e.target.value || null)}
                className="text-sm px-3 py-2 rounded-lg outline-none bg-white"
                style={{ border: "1.5px solid #e2e8f0" }}>
                <option value="">All surveys</option>
                {surveys.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
              </select>
              <span className="text-xs text-gray-400">{displayedResponses.length} response{displayedResponses.length !== 1 ? "s" : ""}</span>
            </div>

            {loading ? (
              <div className="text-sm text-gray-400 py-12 text-center">Loading…</div>
            ) : displayedResponses.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-4xl mb-3">💬</div>
                <p className="text-gray-500 text-sm">No responses yet for this survey</p>
              </div>
            ) : (
              <div className="space-y-3">
                {displayedResponses.map(resp => {
                  const sent    = SENTIMENT_STYLE[resp.sentiment];
                  const survey  = surveys.find(s => s.id === resp.survey_id);
                  return (
                    <div key={resp.id} className="card">
                      <div className="flex items-start gap-4">
                        <div className="text-2xl flex-shrink-0 mt-0.5">{sent.icon}</div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                            <span className="text-sm font-semibold text-gray-900">{resp.respondent}</span>
                            <ScoreDots score={resp.score} />
                            <span className="text-xs text-gray-400">
                              {new Date(resp.responded_at).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
                            </span>
                            <span className="text-xs font-semibold capitalize" style={{ color: sent.color }}>{resp.sentiment}</span>
                          </div>
                          {resp.comment && <p className="text-sm text-gray-600 leading-relaxed">{resp.comment}</p>}
                          {survey && <div className="mt-1 text-xs text-gray-400">{survey.title}</div>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>

      {/* ── Create Survey Modal ──────────────────────────────────────── */}
      {showCreate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4">New Feedback Survey</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Survey Title *</label>
                <input
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  placeholder="e.g. Resident Experience Survey — Q3 2026"
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Audience</label>
                <select
                  value={newAud}
                  onChange={e => setNewAud(e.target.value as SurveyAudience)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
                >
                  <option value="residents">Residents</option>
                  <option value="families">Families &amp; Visitors</option>
                  <option value="staff">Staff</option>
                  <option value="mixed">Mixed</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={newStatus}
                  onChange={e => setNewStatus(e.target.value as SurveyStatus)}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
                >
                  <option value="active">Active</option>
                  <option value="draft">Draft</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Closes On (optional)</label>
                <input
                  type="date"
                  value={newCloses}
                  onChange={e => setNewCloses(e.target.value)}
                  className="border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setShowCreate(false)} className="btn-secondary flex-1">Cancel</button>
              <button
                onClick={createSurvey}
                disabled={!newTitle.trim() || creating}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ backgroundColor: newTitle.trim() && !creating ? "#2E6FFF" : "#cbd5e1" }}
              >
                {creating ? "Creating…" : "Create Survey"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Log Response Modal ───────────────────────────────────────── */}
      {showResponse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Log Response</h2>
            <p className="text-sm text-gray-500 mb-4">{showResponse.title}</p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Respondent (optional)</label>
                <input
                  value={respRespondent}
                  onChange={e => setRespRespondent(e.target.value)}
                  placeholder={`${AUDIENCE_LABELS[showResponse.audience].label} (anonymous)`}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Score: {respScore}/5</label>
                <div className="flex gap-2">
                  {[1,2,3,4,5].map(s => (
                    <button
                      key={s}
                      onClick={() => setRespScore(s)}
                      className="w-10 h-10 rounded-full text-sm font-bold transition-all border"
                      style={{
                        backgroundColor: s <= respScore ? "#2E6FFF" : "white",
                        color:           s <= respScore ? "white"    : "#6b7280",
                        borderColor:     s <= respScore ? "#2E6FFF"  : "#e5e7eb",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Comment</label>
                <textarea
                  value={respComment}
                  onChange={e => setRespComment(e.target.value)}
                  placeholder="What did they say?"
                  rows={3}
                  className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-400 resize-none"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => { setShowResponse(null); setRespComment(""); setRespScore(5); setRespRespondent(""); }}
                className="btn-secondary flex-1">Cancel</button>
              <button
                onClick={logResponse}
                disabled={logging}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ backgroundColor: logging ? "#cbd5e1" : "#2E6FFF" }}
              >
                {logging ? "Saving…" : "Log Response"}
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
