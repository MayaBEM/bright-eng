/* ==========================================================================
   PAGE: HELP / HOW TO PLAY
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.pages = window.MAQ.pages || {};

window.MAQ.pages.help = {
  render: function (container) {
    var progress = window.MAQ.progress;
    var reducedMotion = progress.get().reducedMotion;
    var soundOn = progress.get().soundOn;

    var content =
      '<div class="prose-wrap">' +
      "<h1>Help / How to Play</h1>" +
      '<div class="help-step"><span class="help-num">1</span><p>Choose your explorer name and avatar, then head to the Adventure Map.</p></div>' +
      '<div class="help-step"><span class="help-num">2</span><p>Pick a land — Factor Forest, the HCF &amp; LCM Kingdom, or Fraction Island — and open a chapter.</p></div>' +
      '<div class="help-step"><span class="help-num">3</span><p>Each chapter has 5 quest stages of 5 questions each. Complete a stage to see your stars and points.</p></div>' +
      '<div class="help-step"><span class="help-num">4</span><p>Answer using taps, chip selections, up/down ordering, typed numbers, or factor-tree branches — every question tells you what to do.</p></div>' +
      '<div class="help-step"><span class="help-num">5</span><p>Stuck? Tap the 💡 Hint button for a nudge (this costs 2 quest points, but never blocks you from continuing).</p></div>' +
      '<div class="help-step"><span class="help-num">6</span><p>Get it wrong and we will always explain why, show the correct answer, and walk through the solution step by step.</p></div>' +
      '<div class="help-step"><span class="help-num">7</span><p>Finish all 5 stages in a chapter to collect that land\'s crystal. Collect all three crystals to unlock your certificate!</p></div>' +

      "<h3>Scoring, explained</h3>" +
      "<ul>" +
      "<li>Each question is worth 10 quest points.</li>" +
      "<li>Using a hint on a question reduces its points to 8 (minimum 4 points for any correctly answered question).</li>" +
      "<li>Getting a question wrong earns 0 points for that question, but never subtracts from your total.</li>" +
      "<li><strong>Accuracy</strong> and <strong>Quest Points</strong> are two different numbers — accuracy is the percentage you get right on your first try; points are what you've banked overall.</li>" +
      "</ul>" +

      "<h3>Settings</h3>" +
      '<p><label class="toggle"><input type="checkbox" id="maq-help-sound" ' + (soundOn ? "checked" : "") + " /><span class=\"toggle-track\"></span> Sound effects</label></p>" +
      '<p><label class="toggle"><input type="checkbox" id="maq-help-motion" ' + (reducedMotion ? "checked" : "") + " /><span class=\"toggle-track\"></span> Reduce motion (turns off confetti, star-bursts and shake animations)</label></p>" +

      "<h3>Modes</h3>" +
      "<p><strong>Sequential Quest mode</strong> unlocks each land only after you collect the crystal from the previous one. <strong>Free Practice mode</strong> unlocks every land immediately, so you can practise any topic at any time. Switch modes any time from the Adventure Map.</p>" +

      "<h3>Your progress is saved automatically</h3>" +
      "<p>Everything is stored right in this browser, so refreshing the page or closing the tab will not lose your progress. Use \"Reset Progress\" on the Dashboard if you ever want to start over.</p>" +

      '<div style="text-align:center; margin-top:20px;"><a class="btn btn-primary" href="#/map">Back to the Map</a></div>' +
      "</div>";

    container.innerHTML = window.MAQ.components.shell(content, {});
    window.MAQ.components.attachNavbarEvents();

    document.getElementById("maq-help-sound").addEventListener("change", function (e) { progress.setSound(e.target.checked); });
    document.getElementById("maq-help-motion").addEventListener("change", function (e) { progress.setReducedMotion(e.target.checked); });
  }
};
