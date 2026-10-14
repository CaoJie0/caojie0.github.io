(() => {
  const article = document.querySelector('.textbook-content');
  const navigation = document.querySelector('.textbook-navigation');
  if (!article || !navigation) return;

  const headings = [...article.querySelectorAll('h2, h3')];
  if (!headings.length) return;

  const list = navigation.querySelector('ol');
  headings.forEach((heading, index) => {
    if (!heading.id) heading.id = `textbook-section-${index + 1}`;
    const item = document.createElement('li');
    if (heading.tagName === 'H3') item.classList.add('textbook-toc__subsection');
    const link = document.createElement('a');
    link.href = `#${encodeURIComponent(heading.id)}`;
    link.textContent = heading.textContent.trim();
    item.append(link);
    list.append(item);
  });
  navigation.hidden = false;

  const details = navigation.querySelector('details');
  const compact = window.matchMedia('(max-width: 900px)');
  details.open = !compact.matches;
  compact.addEventListener('change', event => { details.open = !event.matches; });
  list.addEventListener('click', event => {
    if (compact.matches && event.target.closest('a')) details.open = false;
  });

  if ('IntersectionObserver' in window) {
    const links = [...list.querySelectorAll('a')];
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (!visible.length) return;
      const active = `#${encodeURIComponent(visible[0].target.id)}`;
      links.forEach(link => {
        if (link.getAttribute('href') === active) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-10% 0px -60% 0px', threshold: 0 });
    headings.forEach(heading => observer.observe(heading));
  }
})();
