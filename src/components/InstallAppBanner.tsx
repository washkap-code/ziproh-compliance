"use client";

/**
 * InstallAppBanner
 * ─────────────────
 * Dismissible banner shown on the Compliance Centre page that tells users
 * how to save the Ziproh app to their device (iOS, Android, Desktop).
 * Dismissal is remembered in localStorage so it only shows once.
 */

import { useState, useEffect } from "react";
import Image from "next/image";

type DeviceTab = "ios" | "android" | "desktop";

const STEPS: Record<DeviceTab, { icon: string; label: string; steps: string[] }> = {
  ios: {
    icon: "🍎",
    label: "iPhone / iPad",
    steps: [
      'Open app.ziprohtraining.co.uk in Safari',
      'Tap the Share button at the bottom of the screen  ↑',
      'Scroll down and tap "Add to Home Screen"',
      'Tap "Add" in the top-right corner',
      'The Ziproh icon will appear on your home screen',
    ],
  },
  android: {
    icon: "🤖",
    label: "Android",
    steps: [
      'Open app.ziprohtraining.co.uk in Chrome',
      'Tap the three-dot menu  ⋮  in the top-right corner',
      'Tap "Add to Home Screen" or "Install App"',
      'Tap "Add" to confirm',
      'The Ziproh icon will appear on your home screen',
    ],
  },
  desktop: {
    icon: "💻",
    label: "Desktop",
    steps: [
      'Open app.ziprohtraining.co.uk in Chrome or Edge',
      'Look for the install icon  ⊕  in the browser address bar',
      'Click it and select "Install"',
      'Ziproh will open as a standalone app outside the browser',
      'You can also pin it to your taskbar for quick access',
    ],
  },
};

export default function InstallAppBanner() {
  const [visible, setVisible]     = useState(false);
  const [tab, setTab]             = useState<DeviceTab>("ios");
  const [expanded, setExpanded]   = useState(false);

  // Show banner unless the user has already dismissed it
  useEffect(() => {
    try {
      const dismissed = localStorage.getItem("zp_install_dismissed");
      if (!dismissed) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    try { localStorage.setItem("zp_install_dismissed", "1"); } catch { /* noop */ }
    setVisible(false);
  }

  if (!visible) return null;

  const current = STEPS[tab];

  return (
    <div
      className="rounded-xl mb-6 overflow-hidden"
      style={{ border: "1px solid #c7d8ff", backgroundColor: "#f0f5ff" }}
      role="region"
      aria-label="Install Ziproh app"
    >
      {/* ── Collapsed header ── */}
      <div className="flex items-center justify-between px-5 py-4">
        <button
          className="flex items-center gap-3 text-left flex-1"
          onClick={() => setExpanded(v => !v)}
          aria-expanded={expanded}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden"
            style={{ backgroundColor: "#2E6FFF" }}
          >
            <Image src="/ziproh-icon.png" alt="Ziproh" width={36} height={36}
              style={{ objectFit: "cover" }} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-900 leading-tight">
              Save Ziproh to your device
            </p>
            <p className="text-xs text-gray-500 mt-0.5">
              Add the Compliance Centre to your home screen for instant access — works like a native app
            </p>
          </div>
          <span
            className="ml-2 text-gray-400 text-sm flex-shrink-0"
            style={{ transform: expanded ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.2s" }}
          >
            ▾
          </span>
        </button>

        {/* Dismiss */}
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="ml-4 flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 hover:bg-white transition-colors text-lg leading-none"
        >
          ×
        </button>
      </div>

      {/* ── Expanded instructions ── */}
      {expanded && (
        <div style={{ borderTop: "1px solid #dce8ff" }}>

          {/* Device tabs */}
          <div className="flex px-5 pt-4 gap-2">
            {(Object.keys(STEPS) as DeviceTab[]).map(key => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all"
                style={{
                  backgroundColor: tab === key ? "#2E6FFF" : "#ffffff",
                  color:           tab === key ? "#ffffff" : "#6b7280",
                  border:          tab === key ? "1.5px solid #2E6FFF" : "1.5px solid #e5e7eb",
                }}
              >
                <span>{STEPS[key].icon}</span>
                <span>{STEPS[key].label}</span>
              </button>
            ))}
          </div>

          {/* Steps */}
          <ol className="px-5 py-4 space-y-2.5 list-none">
            {current.steps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                  style={{ backgroundColor: "#2E6FFF" }}
                >
                  {i + 1}
                </span>
                <span className="text-sm text-gray-700 leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          {/* Footer note */}
          <div className="px-5 pb-4">
            <p className="text-xs text-gray-400">
              ✓ No app store required &nbsp;·&nbsp; ✓ Always up to date &nbsp;·&nbsp; ✓ Works offline once loaded
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
