/* Configure scientific notation before the site's existing MathJax loader. */
(() => {
  const previous = window.MathJax || {};
  const tex = previous.tex || {};
  const loader = previous.loader || {};
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
    }
  };
})();
