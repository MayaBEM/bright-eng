/* =====================================================================
   EMC.data helpers — combine the three level files.
   ===================================================================== */
(function () {
  "use strict";
  window.EMC = window.EMC || {};
  EMC.data = EMC.data || {};

  EMC.data.LEVELS = ["easy", "medium", "challenging"];
  EMC.data.SKILLS = ["vocabulary", "grammar", "reading", "listening", "conversation"];

  EMC.data.getLevel = function (level) {
    return (EMC.data[level] || []).slice();
  };

  EMC.data.all = function () {
    return EMC.data.LEVELS.reduce((acc, lv) => acc.concat(EMC.data.getLevel(lv)), []);
  };

  EMC.data.byId = function (id) {
    return EMC.data.all().find(q => q.id === id) || null;
  };
})();
