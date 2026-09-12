// Small, dependency-free interaction layer: a typing-effect eyebrow line
// and a fade-up reveal on scroll. Both degrade gracefully with JS off —
// the eyebrow keeps its first phrase as static text, and .reveal elements
// are visible by default until JS adds the animation.

(function () {
  var eyebrow = document.querySelector("[data-typing]");
  if (eyebrow) {
    var phrases = JSON.parse(eyebrow.getAttribute("data-typing"));
    var caret = document.createElement("span");
    caret.className = "caret";
    caret.textContent = " ";

    var phraseIndex = 0, charIndex = 0, deleting = false;
    var label = document.createElement("span");
    eyebrow.textContent = "";
    eyebrow.appendChild(label);
    eyebrow.appendChild(caret);

    function tick() {
      var current = phrases[phraseIndex];
      if (!deleting) {
        charIndex++;
        label.textContent = current.slice(0, charIndex);
        if (charIndex === current.length) {
          deleting = true;
          setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        label.textContent = current.slice(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }
      setTimeout(tick, deleting ? 35 : 55);
    }
    tick();
  }

  var revealEls = document.querySelectorAll(".reveal");
  if (revealEls.length) {
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12 }
      );
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("visible"); });
    }
  }
})();
