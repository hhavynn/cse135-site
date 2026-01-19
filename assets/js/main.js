// main.js — tiny safe starter

(function () {
  "use strict";

  // Example: show page loaded time
  const el = document.querySelector("[data-build-time]");
  if (el) el.textContent = new Date().toISOString();
})();
