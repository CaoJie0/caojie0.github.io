(function () {
  const index = document.querySelector("[data-blog-index]");
  if (!index) return;

  const buttons = Array.from(index.querySelectorAll("[data-blog-filter]"));
  const years = Array.from(index.querySelectorAll("[data-blog-year]"));
  const empty = index.querySelector("[data-blog-empty]");

  function applyFilter(category, updateUrl) {
    const selected = buttons.some((button) => button.dataset.blogFilter === category) ? category : "all";
    let visibleCount = 0;

    buttons.forEach((button) => {
      const active = button.dataset.blogFilter === selected;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    years.forEach((year) => {
      let visibleInYear = 0;
      year.querySelectorAll("[data-blog-category]").forEach((post) => {
        const visible = selected === "all" || post.dataset.blogCategory === selected;
        post.hidden = !visible;
        if (visible) visibleInYear += 1;
      });
      year.hidden = visibleInYear === 0;
      visibleCount += visibleInYear;
    });

    empty.hidden = visibleCount > 0;
    if (updateUrl) {
      const current = new URL(window.location.href);
      if (selected === "all") current.searchParams.delete("category");
      else current.searchParams.set("category", selected);
      window.history.replaceState(null, "", current);
    }
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => applyFilter(button.dataset.blogFilter, true));
  });

  applyFilter(new URLSearchParams(window.location.search).get("category") || "all", false);
})();
