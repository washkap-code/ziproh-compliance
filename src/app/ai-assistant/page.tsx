"use client";
import { useState, useRef, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
};

const SUGGESTED_QUESTIONS = [
  "What are the CQC 5 Key Questions?",
  "How do I conduct a medication audit?",
  "What does the Mental Capacity Act say about best interests decisions?",
  "How often should care plans be reviewed?",
  "What are the safeguarding reporting duties under the Care Act?",
  "How should I handle a complaint from a service user's family?",
];

function formatMessage(text: string) {
  // Simple markdown-like formatting
  return text
    .split("\n")
    .map((line, i) => {
      if (line.startsWith("## ")) return <h3 key={i} className="font-bold text-gray-900 mt-3 mb-1">{line.slice(3)}</h3>;
      if (line.startsWith("# ")) return <h2 key={i} className="font-bold text-gray-900 text-lg mt-3 mb-1">{line.slice(2)}</h2>;
      if (line.startsWith("**") && line.endsWith("**")) return <p key={i} className="font-semibold text-gray-900">{line.slice(2, -2)}</p>;
      if (line.startsWith("- ") || line.startsWith("• ")) return <li key={i} className="ml-4 list-disc text-gray-700">{line.slice(2)}</li>;
      if (line.match(/^\d+\. /)) return <li key={i} className="ml-4 list-decimal text-gray-700">{line.replace(/^\d+\. /, "")}</li>;
      if (line === "") return <br key={i} />;
      return <p key={i} className="text-gray-700">{line}</p>;
    });
}

export default function AIAssistantPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hello! I'm Ziproh AI, your compliance assistant. I can help you understand CQC regulations, interpret your policies, navigate complex care legislation, and answer compliance questions. What would you like to know?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(content: string) {
    if (!content.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: "user",
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Build conversation history for API (exclude welcome message)
    const history = [...messages.filter((m) => m.id !== "welcome"), userMsg].map((m) => ({
      role: m.role,
      content: m.content,
    }));

    try {
      const res = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.content || data.error || "Sorry, I couldn't get a response. Please try again.",
          timestamp: new Date(),
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, there was an error connecting to the AI. Please check your internet connection and try again.",
          timestamp: new Date(),
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col h-full" style={{ height: "calc(100vh - 7rem)" }}>
        {/* Header */}
        <div className="flex items-center gap-3 mb-4 flex-shrink-0">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
            style={{ background: "linear-gradient(135deg, #2E6FFF, #1a57e8)" }}>
            🤖
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Ziproh AI</h1>
            <p className="text-sm text-gray-500">Your 24/7 compliance assistant — powered by AI</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs text-green-600 font-medium bg-green-50 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              Online
            </span>
          </div>
        </div>

        <div className="flex gap-4 flex-1 min-h-0">
          {/* Chat area */}
          <div className="flex-1 flex flex-col min-h-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4 pr-1">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold ${
                    msg.role === "assistant"
                      ? "text-white"
                      : "text-white"
                  }`}
                    style={{ backgroundColor: msg.role === "assistant" ? "#2E6FFF" : "#374151" }}>
                    {msg.role === "assistant" ? "Z" : "W"}
                  </div>
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.role === "user"
                      ? "text-white rounded-tr-sm"
                      : "bg-white border border-gray-100 rounded-tl-sm"
                  }`}
                    style={msg.role === "user" ? { backgroundColor: "#2E6FFF" } : {}}>
                    <div className={`text-sm leading-relaxed space-y-1 ${msg.role === "user" ? "text-white" : ""}`}>
                      {msg.role === "assistant" ? (
                        <div>{formatMessage(msg.content)}</div>
                      ) : (
                        <p>{msg.content}</p>
                      )}
                    </div>
                    <p className={`text-xs mt-1.5 ${msg.role === "user" ? "text-blue-100" : "text-gray-400"}`}>
                      {msg.timestamp.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-sm font-bold text-white"
                    style={{ backgroundColor: "#2E6FFF" }}>
                    Z
                  </div>
                  <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1 items-center h-5">
                      <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                      <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                      <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input area */}
            <div className="flex-shrink-0 bg-white rounded-2xl border border-gray-200 p-3">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about CQC regulations, policies, safeguarding, medication management..."
                className="w-full resize-none text-sm text-gray-700 placeholder-gray-400 outline-none"
                rows={2}
                style={{ fontFamily: "inherit" }}
              />
              <div className="flex items-center justify-between mt-2">
                <p className="text-xs text-gray-400">Press Enter to send · Shift+Enter for new line</p>
                <button
                  onClick={() => sendMessage(input)}
                  disabled={!input.trim() || loading}
                  className="px-4 py-2 rounded-xl text-sm font-semibold text-white transition-all"
                  style={{
                    backgroundColor: input.trim() && !loading ? "#2E6FFF" : "#cbd5e1",
                    cursor: input.trim() && !loading ? "pointer" : "not-allowed",
                  }}
                >
                  Send →
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar: suggested questions */}
          <div className="w-64 flex-shrink-0 space-y-3">
            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-3">💡 Suggested Questions</h3>
              <div className="space-y-2">
                {SUGGESTED_QUESTIONS.map((q) => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="w-full text-left text-xs text-gray-600 hover:text-blue-600 bg-gray-50 hover:bg-blue-50 px-3 py-2.5 rounded-lg transition-colors leading-snug"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">⚡ Capabilities</h3>
              <ul className="space-y-1.5 text-xs text-gray-500">
                <li>✓ CQC regulation interpretation</li>
                <li>✓ Policy guidance & advice</li>
                <li>✓ Safeguarding queries</li>
                <li>✓ MCA & DoLS / LPS questions</li>
                <li>✓ Audit preparation support</li>
                <li>✓ Complaints process guidance</li>
                <li>✓ HR & workforce queries</li>
                <li>✓ GDPR & data protection</li>
              </ul>
            </div>

            <div className="rounded-2xl p-4 text-xs text-blue-100"
              style={{ backgroundColor: "#2E6FFF" }}>
              <p className="font-semibold text-white mb-1">📋 Disclaimer</p>
              <p>Ziproh AI provides general guidance only. For complex regulatory matters or legal questions, consult a qualified professional.</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
