/* Configure scientific notation before the site's existing MathJax loader. */
(() => {
  const previous = window.MathJax || {};
  const tex = previous.tex || {};
  const loader = previous.loader || {};
  const startup = previous.startup || {};
  window.MathJax = {
    ...previous,
    loader: {
      ...loader,
      load: [...new Set([...(loader.load || []), '[tex]/mhchem'])]
    },
    tex: {
      ...tex,
      packages: Array.isArray(tex.packages)
        ? [...new Set([...tex.packages, 'mhchem'])]
        : {
            ...(tex.packages || {}),
            '[+]': [...new Set([...(tex.packages?.['[+]'] || []), 'mhchem'])]
          },
      tags: 'ams'
    },
    startup: {
      ...startup,
      pageReady() {
        const ready = startup.pageReady
          ? startup.pageReady()
          : window.MathJax.startup.defaultPageReady();
        return Promise.resolve(ready).then(() => {
          // Formula rendering changes layout before a chapter link can settle.
          let anchor;
          try {
            anchor = decodeURIComponent(window.location.hash.slice(1));
          } catch {
            return;
          }
          const target = document.getElementById(anchor);
          if (target?.closest('.textbook-content')) {
            target.scrollIntoView({ block: 'start' });
          }
        });
      }
    }
  };
})();
