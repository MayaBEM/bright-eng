/* ==========================================================================
   SHARED UI HELPERS
   ========================================================================== */
window.MAQ = window.MAQ || {};

window.MAQ.ui = {
  escapeHtml: function (str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  },

  /** Render "3/4" style text as a visually stacked fraction; leaves other text untouched. */
  renderMathText: function (text) {
    var escaped = window.MAQ.ui.escapeHtml(text);
    return escaped.replace(/\b(\d+)\/(\d+)\b/g, function (m, n, d) {
      return '<span class="fraction"><span class="num">' + n + '</span><span class="den">' + d + "</span></span>";
    }).replace(/(\d)\^(\d)/g, "$1<sup>$2</sup>")
      .replace(/²/g, "<sup>2</sup>").replace(/³/g, "<sup>3</sup>");
  },

  stars: function (count, max) {
    max = max || 3;
    var out = '<span class="star-row" role="img" aria-label="' + count + " out of " + max + ' stars">';
    for (var i = 0; i < max; i++) {
      out += '<span class="star ' + (i < count ? "filled" : "") + '" aria-hidden="true">★</span>';
    }
    return out + "</span>";
  },

  progressBar: function (percent, id) {
    percent = Math.max(0, Math.min(100, percent));
    return '<div class="progress-track" role="progressbar" aria-valuenow="' + percent + '" aria-valuemin="0" aria-valuemax="100" ' + (id ? 'id="' + id + '"' : "") + '>' +
      '<div class="progress-fill progress-fill-anim" style="--to:1; width:' + percent + '%;"></div>' +
      "</div>";
  },

  announce: function (msg) {
    var region = document.getElementById("live-region");
    if (region) { region.textContent = ""; setTimeout(function () { region.textContent = msg; }, 50); }
  },

  /**
   * Show a confirmation modal.
   * @param {{title:string, body:string, confirmText:string, cancelText:string, onConfirm:Function, danger?:boolean}} opts
   */
  confirmModal: function (opts) {
    var root = document.getElementById("modal-root");
    root.innerHTML =
      '<div class="modal-overlay" id="maq-modal-overlay">' +
      '<div class="modal-panel pop-in" role="dialog" aria-modal="true" aria-labelledby="maq-modal-title">' +
      '<h3 id="maq-modal-title">' + window.MAQ.ui.escapeHtml(opts.title) + "</h3>" +
      "<p>" + window.MAQ.ui.escapeHtml(opts.body) + "</p>" +
      '<div style="display:flex; gap:12px; margin-top:20px; justify-content:flex-end;">' +
      '<button class="btn btn-secondary" id="maq-modal-cancel">' + window.MAQ.ui.escapeHtml(opts.cancelText || "Cancel") + "</button>" +
      '<button class="btn ' + (opts.danger ? "btn-danger" : "btn-primary") + '" id="maq-modal-confirm">' + window.MAQ.ui.escapeHtml(opts.confirmText || "Confirm") + "</button>" +
      "</div></div></div>";
    var overlay = document.getElementById("maq-modal-overlay");
    function close() { root.innerHTML = ""; }
    document.getElementById("maq-modal-cancel").addEventListener("click", close);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) close(); });
    document.getElementById("maq-modal-confirm").addEventListener("click", function () {
      close();
      opts.onConfirm && opts.onConfirm();
    });
    document.getElementById("maq-modal-confirm").focus();
    document.addEventListener("keydown", function escHandler(e) {
      if (e.key === "Escape") { close(); document.removeEventListener("keydown", escHandler); }
    });
  },

  closeModal: function () { document.getElementById("modal-root").innerHTML = ""; }
};
