/* ==========================================================================
   PAGE: LEARNER NAME SETUP
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.pages = window.MAQ.pages || {};

window.MAQ.pages.nameSetup = {
  render: function (container) {
    var avatars = ["🦊", "🦉", "🐼", "🦁", "🐸", "🦄", "🐢", "🦋"];
    var current = window.MAQ.progress.get();
    var content =
      '<div class="center-screen">' +
      '<div class="card setup-card pop-in">' +
      '<div class="idle-character" aria-hidden="true">' + window.MAQ.icons.mascot("happy") + "</div>" +
      "<h2>Welcome, Explorer!</h2>" +
      "<p>What should we call you on this quest?</p>" +
      '<label class="sr-only" for="maq-name-input">Your name</label>' +
      '<input class="name-input" id="maq-name-input" type="text" maxlength="24" placeholder="Type your name" value="' + window.MAQ.ui.escapeHtml(current.learnerName || "") + '" />' +
      "<p>Choose your explorer avatar:</p>" +
      '<div class="avatar-grid" id="maq-avatar-grid" role="radiogroup" aria-label="Choose an avatar">' +
      avatars.map(function (a) {
        var selected = (current.avatar === a);
        return '<button type="button" class="avatar-choice ' + (selected ? "selected" : "") + '" data-avatar="' + a + '" role="radio" aria-checked="' + selected + '" aria-label="Avatar ' + a + '">' + a + "</button>";
      }).join("") +
      "</div>" +
      '<button class="btn btn-primary btn-block btn-lg" id="maq-setup-continue" style="margin-top:16px;">Begin My Quest →</button>' +
      '<p id="maq-setup-error" role="alert" style="color:var(--color-danger); font-size:var(--fs-200); min-height:1.2em;"></p>' +
      "</div></div>";

    container.innerHTML = window.MAQ.components.shell(content, {});
    window.MAQ.components.attachNavbarEvents();

    var selectedAvatar = current.avatar || "🦊";
    Array.prototype.forEach.call(document.querySelectorAll(".avatar-choice"), function (btn) {
      btn.addEventListener("click", function () {
        selectedAvatar = btn.getAttribute("data-avatar");
        Array.prototype.forEach.call(document.querySelectorAll(".avatar-choice"), function (b) {
          b.classList.toggle("selected", b === btn);
          b.setAttribute("aria-checked", b === btn);
        });
        window.MAQ.audio.click();
      });
    });

    document.getElementById("maq-setup-continue").addEventListener("click", function () {
      var name = document.getElementById("maq-name-input").value.trim();
      var err = document.getElementById("maq-setup-error");
      if (!name) {
        err.textContent = "Please enter a name so we can personalise your quest.";
        return;
      }
      err.textContent = "";
      window.MAQ.progress.setLearner(name, selectedAvatar);
      window.MAQ.audio.unlock();
      window.MAQ.router.navigate("/map");
    });
  }
};
