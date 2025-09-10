document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#about-ilustration-container");
  const animatables = container.querySelectorAll(
    ".span1, .span2, .span3, .bookmark-yellow, .bookmark-purple, .broche, .vector1, .vector2, .vector3"
  );

  let inViewState = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const isInView = entry.isIntersecting;

      if (isInView && !inViewState) {
        animatables.forEach(el => {
          // Forçar reflow para garantir que o estilo inicial seja aplicado
          el.offsetHeight; // Acessa uma propriedade que força o reflow

          el.classList.add("animated");
        });
        inViewState = true;
      } else if (!isInView && inViewState) {
        animatables.forEach(el => {
          el.classList.remove("animated");
        });
        inViewState = false;
      }
    });
  }, { threshold: 0.2 });

  observer.observe(container);
});