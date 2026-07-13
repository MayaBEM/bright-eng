/* =====================================================================
   EMC.util — shared helpers.
   ===================================================================== */
(function () {
  "use strict";
  window.EMC = window.EMC || {};

  function escapeHtml(str) {
    return String(str == null ? "" : str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function nl2br(str) {
    return escapeHtml(str).replace(/\n/g, "<br>");
  }

  /** Deterministic-ish shuffle (Fisher-Yates) using a simple seeded RNG when a seed is given. */
  function shuffle(arr, seed) {
    const a = arr.slice();
    let rand = Math.random;
    if (typeof seed === "number") {
      let s = seed % 2147483647;
      if (s <= 0) s += 2147483646;
      rand = function () {
        s = (s * 16807) % 2147483647;
        return (s - 1) / 2147483646;
      };
    }
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rand() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function el(html) {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  }

  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function skillLabel(skill) {
    return {
      vocabulary: "Vocabulary",
      grammar: "Grammar",
      reading: "Reading",
      listening: "Listening",
      conversation: "Conversation"
    }[skill] || skill;
  }

  function levelLabel(level) {
    return { easy: "Easy", medium: "Medium", challenging: "Challenging" }[level] || level;
  }

  function levelTitle(level) {
    return {
      easy: "Test Set 1: Easy",
      medium: "Test Set 2: Medium",
      challenging: "Test Set 3: Challenging"
    }[level] || level;
  }

  function estimatedMinutes(level) {
    return { easy: 15, medium: 20, challenging: 25 }[level] || 20;
  }

  function toast(msg, ms) {
    let region = document.getElementById("toast-region");
    if (!region) {
      region = document.createElement("div");
      region.id = "toast-region";
      region.setAttribute("aria-live", "polite");
      document.body.appendChild(region);
    }
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    region.appendChild(t);
    setTimeout(() => t.remove(), ms || 2600);
  }

  function band(pct) {
    if (pct >= 90) return { label: "Strong recall", key: "strong" };
    if (pct >= 75) return { label: "Good understanding", key: "good" };
    if (pct >= 60) return { label: "Some review needed", key: "review" };
    return { label: "More practice recommended", key: "practice" };
  }

  function formatDate(ts) {
    try {
      return new Date(ts).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
    } catch (e) { return ""; }
  }

  EMC.util = { escapeHtml, nl2br, shuffle, el, qs, qsa, skillLabel, levelLabel, levelTitle, estimatedMinutes, toast, band, formatDate };
})();
