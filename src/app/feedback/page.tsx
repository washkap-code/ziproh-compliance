"use client";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";

type SurveyStatus = "active" | "draft" | "closed";
type ResponseSentiment = "positive" | "neutral" | "negative";

type Survey = {
  id: string;
  title: string;
  audience: "residents" | "families" | "staff" | "mixed";
  status: SurveyStatus;
  responses: number;
  sent: number;
  created: string;
  closes?: string;
  avgScore: number | null;
};

type Response = {
  id: string;
  surveyId: string;
  respondent: string;
  date: string;
  score: number;
  comment: string;
  sentiment: ResponseSentiment;
};

const SURVEYS: Survey[] = [
  { id: "sv1", title: "Resident Experience Survey — Q2 2026", audience: "residents", status: "active", responses: 18, sent: 24, created: "2026-05-01", closes: "2026-06-30", avgScore: 4.3 },
  { id: "sv2", title: "Family & Visitor Satisfaction Survey", audience: "families", status: "active", responses: 11, sent: 20, created: "2026-05-10", closes: "2026-06-30", avgScore: 4.1 },
  { id: "sv3", title: "Staff Wellbeing & Culture Survey", audience: "staff", status: "active", responses: 6, sent: 7, created: "2026-06-01", closes: "2026-06-20", avgScore: 3.8 },
  { id: "sv4", title: "Annual Resident Survey 2025", audience: "residents", status: "closed", responses: 22, sent: 26, created: "2025-11-01", closes: "2025-12-31", avgScore: 4.5 },
  { id: "sv5", title: "Post-CQC Inspection Feedback", audience: "staff", status: "draft", responses: 0, sent: 0, created: "2026-06-08", avgScore: null },
];

const RESPONSES: Response[] = [
  { id: "r1", surveyId: "sv1", respondent: "Resident (anonymous)", date: "2026-06-07", score: 5, comment: "The care here is outstanding. Staff always make me feel valued and respected.", sentiment: "positive" },
  { id: "r2", surveyId: "sv1", respondent: "Resident (anonymous)", date: "2026-06-05", score: 4, comment: "Generally very happy. The meals could have a bit more variety but everything else is great.", sentiment: "positive" },
  { id: "r3", surveyId: "sv1", respondent: "Resident (anonymous)", date: "2026-06-03", score: 3, comment: "Sometimes hard to get staff at night. Could be quicker to respond to call buttons.", sentiment: "neutral" },
  { id: "r4", surveyId: "sv2", respondent: "Family member (anonymous)", date: "2026-06-06", score: 5, comment: "We feel our mother is in very safe hands. Communication from the team is excellent.", sentiment: "positive" },
  { id: "r5", surveyId: "sv2", respondent: "Family member (anonymous)", date: "2026-06-04", score: 2, comment: "Updates about care plans feel infrequent. We had to chase for information several times.", sentiment: "negative" },
  { id: "r6", surveyId: "sv3", respondent: "Staff member (anonymous)", date: "2026-06-08", score: 4, comment: "Team morale is good. Would appreciate more recognition for going above and beyond.", sentiment: "positive" },
  { id: "r7", surveyId: "sv3", respondent: "Staff member (anonymous)", date: "2026-06-07", score: 3, comment: "Workload has been heavy lately. More support during busy periods would help.", sentiment: "neutral" },
];

const AUDIENCE_LABELS: Record<string, { label: string; color: string }> = {
  residents: { label: "Residents",  color: "#2E6FFF" },
  families:  { label: "Families",   color: "#8b5cf6" },
  staff:     { label: "Staff",      color: "#22c55e" },
  mixed:     { label: "Mixed",      color: "#f59e0b" },
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

export default function FeedbackPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "responses">("overview");
  const [selectedSurvey, setSelectedSurvey] = useState<string | null>(null);
  const [filterAudience, setFilterAudience] = useState("All");

  const displayedSurveys = filterAudience === "All"
    ? SURVEYS
    : SURVEYS.filter(s => s.audience === filterAudience);

  const displayedResponses = selectedSurvey
    ? RESPONSES.filter(r => r.surveyId === selectedSurvey)
    : RESPONSES;

  const activeSurveys  = SURVEYS.filter(s => s.status === "active").length;
  const totalResponses = SURVEYS.reduce((sum, s) => sum + s.responses, 0);
  const avgOverall     = (SURVEYS.filter(s => s.avgScore).reduce((sum, s) => sum + (s.avgScore ?? 0), 0) / SURVEYS.filter(s => s.avgScore).length).toFixed(1);
  const responseRate   = Math.round((SURVEYS.filter(s => s.sent > 0).reduce((sum, s) => sum + s.responses, 0) /
                          SURVEYS.filter(s => s.sent > 0).reduce((sum, s) => sum + s.sent, 0)) * 100);

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Feedback Surveys</h1>
          <p className="text-gray-500 mt-1 text-sm">Collect and review feedback from residents, families, and staff</p>
        </div>
        <button className="btn-primary text-sm">+ New Survey</button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Active Surveys",   value: activeSurveys,         icon: "📋", color: "#2E6FFF" },
          { label: "Total Responses",  value: totalResponses,        icon: "💬", color: "#22c55e" },
          { label: "Avg. Score",       value: `${avgOverall} / 5`,   icon: "⭐", color: "#f59e0b" },
          { label: "Response Rate",    value: `${responseRate}%`,    icon: "📈", color: "#8b5cf6" },
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
              color: activeTab === tab ? "#1e293b" : "#6b7280",
              boxShadow: activeTab === tab ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
            }}>
            {tab === "overview" ? "Surveys" : "Responses"}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <>
          {/* Audience filter */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {["All", "residents", "families", "staff"].map(a => (
              <button key={a} onClick={() => setFilterAudience(a)}
                className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all capitalize"
                style={{
                  backgroundColor: filterAudience === a ? "#2E6FFF" : "#f3f4f6",
                  color: filterAudience === a ? "white" : "#6b7280",
                }}>
                {a === "All" ? "All" : AUDIENCE_LABELS[a].label}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {displayedSurveys.map(survey => {
              const aud = AUDIENCE_LABELS[survey.audience];
              const st  = STATUS_STYLE[survey.status];
              const pct = survey.sent > 0 ? Math.round((survey.responses / survey.sent) * 100) : 0;
              return (
                <div key={survey.id} className="card hover:shadow-md transition-all cursor-pointer"
                  onClick={() => { setSelectedSurvey(survey.id); setActiveTab("responses"); }}>
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
                        <span>{survey.responses} of {survey.sent} responded ({pct}%)</span>
                        {survey.closes && <span>Closes {new Date(survey.closes).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>}
                        {survey.avgScore && <span>Avg score: <strong className="text-gray-700">{survey.avgScore}/5</strong></span>}
                      </div>
                      {/* Progress bar */}
                      {survey.sent > 0 && (
                        <div className="mt-2.5 h-1.5 rounded-full bg-gray-100 w-64 max-w-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: "#2E6FFF" }} />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      {survey.avgScore && (
                        <div className="text-right hidden sm:block">
                          <div className="text-xl font-bold text-gray-900">{survey.avgScore}</div>
                          <div className="text-xs text-gray-400">out of 5</div>
                        </div>
                      )}
                      <span className="text-gray-300 text-sm">→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}

      {activeTab === "responses" && (
        <>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <select
              value={selectedSurvey ?? ""}
              onChange={e => setSelectedSurvey(e.target.value || null)}
              className="text-sm px-3 py-2 rounded-lg outline-none bg-white"
              style={{ border: "1.5px solid #e2e8f0" }}>
              <option value="">All surveys</option>
              {SURVEYS.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
            </select>
            <span className="text-xs text-gray-400">{displayedResponses.length} response{displayedResponses.length !== 1 ? "s" : ""}</span>
          </div>

          <div className="space-y-3">
            {displayedResponses.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-4xl mb-3">💬</div>
                <p className="text-gray-500 text-sm">No responses yet for this survey</p>
              </div>
            ) : displayedResponses.map(resp => {
              const sent = SENTIMENT_STYLE[resp.sentiment];
              return (
                <div key={resp.id} className="card">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl flex-shrink-0 mt-0.5">{sent.icon}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                        <span className="text-sm font-semibold text-gray-900">{resp.respondent}</span>
                        <ScoreDots score={resp.score} />
                        <span className="text-xs text-gray-400">{new Date(resp.date).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}</span>
                        <span className="text-xs font-semibold" style={{ color: sent.color }}>{resp.sentiment}</span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{resp.comment}</p>
                      <div className="mt-2 text-xs text-gray-400">
                        {SURVEYS.find(s => s.id === resp.surveyId)?.title}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </DashboardLayout>
  );
}
