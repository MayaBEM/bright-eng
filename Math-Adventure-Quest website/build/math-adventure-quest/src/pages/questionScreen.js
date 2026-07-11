/* ==========================================================================
   PAGE: INTERACTIVE QUESTION SCREEN (the quiz engine)
   Handles all 5 interaction types: mcq, select-all, order, numeric, tree.
   ========================================================================== */
window.MAQ = window.MAQ || {};
window.MAQ.pages = window.MAQ.pages || {};

(function () {
  var CORRECT_MESSAGES = [
    "Amazing! You found the correct answer.",
    "Quest cleared! Great thinking.",
    "Great reasoning — the crystal is getting brighter!",
    "Nicely solved, Explorer!",
    "Sharp work! On to the next challenge."
  ];
  var INCORRECT_INTROS = [
    "Not quite — let's look at this together.",
    "That's a common trap. Here's why it's not correct.",
    "Close, but this one needs a second look.",
    "Good try — here's the reasoning that gets us there."
  ];

  window.MAQ.pages.questionScreen = {
    render: function (container, params) {
      var progress = window.MAQ.progress;
      if (!progress.hasLearner()) { window.MAQ.router.navigate("/setup"); return; }
      var chapterId = parseInt(params.chapterId, 10);
      var stageId = parseInt(params.stageId, 10);
      var chapter = window.MAQ.chapters.find(function (c) { return c.id === chapterId; });
      var stage = window.MAQ.stageNames.find(function (s) { return s.id === stageId; });
      var questions = window.MAQ.getStageQuestions(chapterId, stageId);
      if (!chapter || !stage || questions.length !== 5) { window.MAQ.router.navigate("/map"); return; }

      var idx = 0;
      var stageResults = [];
      var pointsSoFar = 0;
      var hintUsedThisQuestion = false;
      var answered = false;

      function pointsPossibleSoFar() { return idx * 10; }

      function renderShell() {
        container.innerHTML = window.MAQ.components.shell(
          '<div class="quiz-shell" id="maq-quiz-shell"></div>', {}
        );
        window.MAQ.components.attachNavbarEvents();
        document.querySelector(".site-footer").classList.add("no-print");
      }

      function exitQuiz() {
        window.MAQ.ui.confirmModal({
          title: "Leave this quest stage?",
          body: "If you exit now, your answers for this stage won't be saved. You can always come back and try again.",
          confirmText: "Exit Stage",
          cancelText: "Keep Playing",
          danger: true,
          onConfirm: function () { window.MAQ.router.navigate("/chapter/" + chapterId); }
        });
      }

      function renderQuestion() {
        answered = false;
        hintUsedThisQuestion = progress.hintWasUsed(questions[idx].id);
        var q = questions[idx];
        var shell = document.getElementById("maq-quiz-shell");
        var progressPct = (idx / 5) * 100;

        var interactionHtml = renderInteraction(q);

        shell.innerHTML =
          '<div class="quiz-header">' +
          '<div><span class="pill ' + chapter.pillClass + '">' + chapter.title + " · " + stage.name + "</span></div>" +
          '<button class="btn btn-ghost btn-sm no-print" id="maq-exit-btn" aria-label="Exit this quest stage">Exit</button>' +
          "</div>" +
          window.MAQ.ui.progressBar(progressPct) +
          '<div style="display:flex; justify-content:space-between; font-size:var(--fs-200); color:var(--text-secondary); margin:6px 0 16px;">' +
          "<span>Question " + (idx + 1) + " of 5</span><span>" + pointsSoFar + " quest points earned</span>" +
          "</div>" +
          '<div class="question-card fade-in" id="maq-question-card">' +
          '<span class="pill pill-neutral">' + q.topic + "</span> " +
          '<span class="pill ' + (q.difficulty === "challenge" ? "pill-sun" : "pill-neutral") + '">' + q.difficulty + "</span>" +
          "<h3 style=\"margin-top:12px;\">" + window.MAQ.ui.renderMathText(q.text) + "</h3>" +
          (q.hint ? '<div id="maq-hint-area"></div>' : "") +
          '<div id="maq-interaction-area">' + interactionHtml + "</div>" +
          '<div id="maq-feedback-area"></div>' +
          '<div class="quiz-footer">' +
          (q.hint ? '<button class="btn btn-secondary btn-sm" id="maq-hint-btn" ' + (hintUsedThisQuestion ? "disabled" : "") + '>💡 Hint (−2 pts)</button>' : "<span></span>") +
          '<span id="maq-action-slot"></span>' +
          "</div></div>";

        document.getElementById("maq-exit-btn").addEventListener("click", exitQuiz);

        if (q.hint) {
          if (hintUsedThisQuestion) showHint(q);
          document.getElementById("maq-hint-btn").addEventListener("click", function () {
            hintUsedThisQuestion = true;
            progress.recordHintUsed(q.id);
            showHint(q);
            document.getElementById("maq-hint-btn").setAttribute("disabled", "disabled");
            window.MAQ.audio.click();
          });
        }

        attachInteractionHandlers(q);
      }

      function showHint(q) {
        var area = document.getElementById("maq-hint-area");
        if (area) area.innerHTML = '<div class="hint-box">💡 <strong>Hint:</strong> ' + window.MAQ.ui.escapeHtml(q.hint) + "</div>";
      }

      // ---------- Render interaction area per question type ----------
      function renderInteraction(q) {
        if (q.type === "mcq") {
          return q.options.map(function (opt, i) {
            var letter = String.fromCharCode(65 + i);
            return '<button type="button" class="option-btn" data-opt="' + opt.id + '" aria-label="Option ' + letter + ": " + window.MAQ.ui.escapeHtml(opt.text) + '">' +
              '<span class="option-letter">' + letter + "</span><span>" + window.MAQ.ui.renderMathText(opt.text) + "</span></button>";
          }).join("");
        }
        if (q.type === "select") {
          return '<div id="maq-select-chips">' + q.selectOptions.map(function (opt) {
            return '<button type="button" class="chip-select" data-opt="' + opt.id + '" aria-pressed="false">' + window.MAQ.ui.renderMathText(opt.text) + "</button>";
          }).join("") + "</div>" +
            '<p style="font-size:var(--fs-200); color:var(--text-secondary);">Tap every correct factor, then submit.</p>' +
            '<div id="maq-submit-slot"><button class="btn btn-primary" id="maq-submit-btn">Submit Answer</button></div>';
        }
        if (q.type === "order") {
          return '<ol class="order-list" id="maq-order-list">' + q.orderItems.map(function (item, i) {
            return '<li class="order-item" data-id="' + item.id + '">' +
              '<span aria-hidden="true">' + (i + 1) + ".</span>" +
              '<span class="order-value">' + window.MAQ.ui.renderMathText(item.text) + "</span>" +
              '<span class="order-controls">' +
              '<button type="button" class="btn-icon btn-sm" data-move="up" aria-label="Move up">▲</button>' +
              '<button type="button" class="btn-icon btn-sm" data-move="down" aria-label="Move down">▼</button>' +
              "</span></li>";
          }).join("") + "</ol>" +
            '<p style="font-size:var(--fs-200); color:var(--text-secondary);">Use the arrows to arrange the fractions, then submit.</p>' +
            '<div id="maq-submit-slot"><button class="btn btn-primary" id="maq-submit-btn">Submit Order</button></div>';
        }
        if (q.type === "numeric") {
          return '<label class="sr-only" for="maq-numeric-input">Your answer</label>' +
            '<input class="numeric-input" id="maq-numeric-input" type="text" inputmode="numeric" aria-label="Your numeric answer" />' +
            '<div id="maq-submit-slot" style="margin-top:12px;"><button class="btn btn-primary" id="maq-submit-btn">Submit Answer</button></div>';
        }
        if (q.type === "tree") {
          var inputs = "";
          for (var i = 0; i < q.treeSlots; i++) {
            inputs += '<label class="sr-only" for="maq-tree-input-' + i + '">Branch ' + (i + 1) + '</label><input class="numeric-input" id="maq-tree-input-' + i + '" type="text" inputmode="numeric" style="width:90px; margin:0 8px;" aria-label="Branch value ' + (i + 1) + '" />';
          }
          return '<div style="text-align:center; padding:16px 0;">' + inputs + "</div>" +
            '<div id="maq-submit-slot" style="text-align:center;"><button class="btn btn-primary" id="maq-submit-btn">Submit Answer</button></div>';
        }
        return "";
      }

      function attachInteractionHandlers(q) {
        if (q.type === "mcq") {
          Array.prototype.forEach.call(document.querySelectorAll(".option-btn"), function (btn) {
            btn.addEventListener("click", function () {
              if (answered) return;
              var optId = btn.getAttribute("data-opt");
              var opt = q.options.find(function (o) { return o.id === optId; });
              handleResult(q, opt.correct, { selectedOption: opt });
            });
          });
        } else if (q.type === "select") {
          var picked = {};
          Array.prototype.forEach.call(document.querySelectorAll(".chip-select"), function (chip) {
            chip.addEventListener("click", function () {
              if (answered) return;
              var id = chip.getAttribute("data-opt");
              picked[id] = !picked[id];
              chip.classList.toggle("picked", picked[id]);
              chip.setAttribute("aria-pressed", !!picked[id]);
              window.MAQ.audio.click();
            });
          });
          document.getElementById("maq-submit-btn").addEventListener("click", function () {
            if (answered) return;
            var pickedIds = Object.keys(picked).filter(function (k) { return picked[k]; }).sort();
            var correctIds = q.selectOptions.filter(function (o) { return o.correct; }).map(function (o) { return o.id; }).sort();
            var isCorrect = JSON.stringify(pickedIds) === JSON.stringify(correctIds);
            handleResult(q, isCorrect, { picked: picked });
          });
        } else if (q.type === "order") {
          var list = document.getElementById("maq-order-list");
          function currentOrder() { return Array.prototype.map.call(list.querySelectorAll(".order-item"), function (li) { return li.getAttribute("data-id"); }); }
          Array.prototype.forEach.call(list.querySelectorAll("[data-move]"), function (btn) {
            btn.addEventListener("click", function () {
              if (answered) return;
              var li = btn.closest(".order-item");
              var dir = btn.getAttribute("data-move");
              if (dir === "up" && li.previousElementSibling) list.insertBefore(li, li.previousElementSibling);
              if (dir === "down" && li.nextElementSibling) list.insertBefore(li.nextElementSibling, li);
              window.MAQ.audio.click();
            });
          });
          document.getElementById("maq-submit-btn").addEventListener("click", function () {
            if (answered) return;
            var order = currentOrder();
            var isCorrect = JSON.stringify(order) === JSON.stringify(q.correctOrder);
            handleResult(q, isCorrect, {});
          });
        } else if (q.type === "numeric") {
          document.getElementById("maq-submit-btn").addEventListener("click", function () {
            if (answered) return;
            var val = document.getElementById("maq-numeric-input").value.trim();
            var accepted = q.acceptableAnswers || [q.answer];
            var isCorrect = accepted.indexOf(val) !== -1;
            handleResult(q, isCorrect, {});
          });
        } else if (q.type === "tree") {
          document.getElementById("maq-submit-btn").addEventListener("click", function () {
            if (answered) return;
            var vals = [];
            for (var i = 0; i < q.treeSlots; i++) vals.push(document.getElementById("maq-tree-input-" + i).value.trim());
            var isCorrect = JSON.stringify(vals.slice().sort()) === JSON.stringify(q.treeCorrectValues.slice().sort());
            handleResult(q, isCorrect, {});
          });
        }
      }

      function handleResult(q, isCorrect, ctx) {
        answered = true;
        progress.recordFirstAttempt(q.id, isCorrect);
        var earnedPts = window.MAQ.scoring.pointsForAnswer(isCorrect, hintUsedThisQuestion);
        stageResults.push({ questionId: q.id, isCorrect: isCorrect, hintUsed: hintUsedThisQuestion });
        pointsSoFar += earnedPts;

        lockInteraction(q, ctx);

        var feedbackArea = document.getElementById("maq-feedback-area");
        var actionSlot = document.getElementById("maq-action-slot");
        var isLast = idx === 4;

        if (isCorrect) {
          window.MAQ.audio.correct();
          var msg = CORRECT_MESSAGES[Math.floor(Math.random() * CORRECT_MESSAGES.length)];
          feedbackArea.innerHTML =
            '<div class="feedback-panel is-correct pop-in" role="status">' +
            '<div class="feedback-title">🌟 ' + msg + "</div>" +
            "<p>" + window.MAQ.ui.renderMathText(q.correctExplanation) + "</p>" +
            '<p><strong>+' + earnedPts + " quest points" + (hintUsedThisQuestion ? " (hint used, −2)" : "") + "</strong></p>" +
            "</div>";
          window.MAQ.ui.announce("Correct! " + msg);
          spawnStarBurst(document.getElementById("maq-question-card"));
        } else {
          window.MAQ.audio.incorrect();
          var intro = INCORRECT_INTROS[Math.floor(Math.random() * INCORRECT_INTROS.length)];
          var specificFeedback = "";
          if (ctx.selectedOption && ctx.selectedOption.feedback) specificFeedback = "<p>" + window.MAQ.ui.renderMathText(ctx.selectedOption.feedback) + "</p>";
          else if (q.incorrectGenericFeedback) specificFeedback = "<p>" + window.MAQ.ui.renderMathText(q.incorrectGenericFeedback) + "</p>";
          feedbackArea.innerHTML =
            '<div class="feedback-panel is-incorrect shake-once" role="status">' +
            '<div class="feedback-title">💭 ' + intro + "</div>" +
            specificFeedback +
            "<p><strong>Remember:</strong> " + window.MAQ.ui.renderMathText(q.correctExplanation) + "</p>" +
            '<div class="solution-steps"><strong>Step by step:</strong><ol>' +
            q.solutionSteps.map(function (s) { return "<li>" + window.MAQ.ui.renderMathText(s) + "</li>"; }).join("") +
            "</ol></div></div>";
          window.MAQ.ui.announce("Not correct. " + intro);
        }

        actionSlot.innerHTML = '<button class="btn btn-primary" id="maq-next-btn">' + (isLast ? "See Stage Results →" : "Next Question →") + "</button>";
        document.getElementById("maq-next-btn").addEventListener("click", function () {
          window.MAQ.audio.click();
          if (isLast) {
            var stageResultSummary = progress.completeStage(chapterId, stageId, stageResults);
            window.MAQ.router.navigate("/chapter/" + chapterId + "/results/" + stageId);
          } else {
            idx++;
            renderQuestion();
          }
        });
        document.getElementById("maq-next-btn").focus();
      }

      function lockInteraction(q, ctx) {
        if (q.type === "mcq") {
          Array.prototype.forEach.call(document.querySelectorAll(".option-btn"), function (btn) {
            btn.disabled = true;
            var optId = btn.getAttribute("data-opt");
            var opt = q.options.find(function (o) { return o.id === optId; });
            if (opt.correct) btn.classList.add("correct");
            else if (ctx.selectedOption && ctx.selectedOption.id === optId) btn.classList.add("incorrect");
          });
        } else if (q.type === "select") {
          Array.prototype.forEach.call(document.querySelectorAll(".chip-select"), function (chip) {
            chip.disabled = true;
            var id = chip.getAttribute("data-opt");
            var opt = q.selectOptions.find(function (o) { return o.id === id; });
            if (opt.correct) chip.classList.add("correct");
            else if (ctx.picked && ctx.picked[id]) chip.classList.add("incorrect");
          });
          document.getElementById("maq-submit-btn").disabled = true;
        } else if (q.type === "order") {
          Array.prototype.forEach.call(document.querySelectorAll("[data-move]"), function (b) { b.disabled = true; });
          document.getElementById("maq-submit-btn").disabled = true;
        } else if (q.type === "numeric") {
          document.getElementById("maq-numeric-input").disabled = true;
          document.getElementById("maq-submit-btn").disabled = true;
        } else if (q.type === "tree") {
          for (var i = 0; i < q.treeSlots; i++) document.getElementById("maq-tree-input-" + i).disabled = true;
          document.getElementById("maq-submit-btn").disabled = true;
        }
      }

      function spawnStarBurst(anchor) {
        if (progress.get().reducedMotion) return;
        var burst = document.createElement("div");
        burst.style.position = "absolute";
        burst.style.top = "0"; burst.style.left = "0"; burst.style.right = "0"; burst.style.height = "0"; burst.style.overflow = "visible";
        burst.innerHTML = window.MAQ.icons.starburstParticles(6);
        anchor.style.position = "relative";
        anchor.appendChild(burst);
        setTimeout(function () { burst.remove(); }, 800);
      }

      renderShell();
      renderQuestion();
    }
  };
})();
