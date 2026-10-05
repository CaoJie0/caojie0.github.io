(function () {
  "use strict";

  var support = document.querySelector("[data-blog-support]");
  if (!support) return;

  var button = support.querySelector("[data-support-toggle]");
  var codes = support.querySelector("[data-support-codes]");
  var pinned = false;

  function setOpen(open) {
    codes.hidden = !open;
    button.setAttribute("aria-expanded", String(open));
  }

  button.addEventListener("pointerenter", function (event) {
    if (event.pointerType === "mouse") setOpen(true);
  });

  support.addEventListener("pointerleave", function (event) {
    if (event.pointerType === "mouse" && !pinned) setOpen(false);
  });

  button.addEventListener("click", function () {
    pinned = !pinned;
    setOpen(pinned);
  });

  document.addEventListener("click", function (event) {
    if (!support.contains(event.target)) {
      pinned = false;
      setOpen(false);
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !codes.hidden) {
      pinned = false;
      setOpen(false);
      button.focus();
    }
  });
}());
