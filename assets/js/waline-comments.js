const panel = document.querySelector('[data-waline-comments]');

if (panel) {
  const mount = panel.querySelector('[data-waline-mount]');
  const status = panel.querySelector('[data-waline-status]');
  const serverURL = panel.dataset.serverUrl.replace(/\/$/, '');
  const path = panel.dataset.pagePath;

  function showFailure() {
    mount.replaceChildren();
    status.hidden = false;
    status.replaceChildren();
    status.append('留言区暂时无法连接。');

    const retry = document.createElement('button');
    retry.type = 'button';
    retry.className = 'waline-comments__retry';
    retry.textContent = '重试';
    retry.addEventListener('click', loadComments);
    status.append(' ', retry);
  }

  async function loadComments() {
    status.hidden = false;
    status.textContent = '正在加载留言区…';
    mount.replaceChildren();

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 8000);

    try {
      const healthURL = new URL(`${serverURL}/api/comment`);
      healthURL.searchParams.set('path', path);
      healthURL.searchParams.set('page', '1');
      healthURL.searchParams.set('pageSize', '1');

      const response = await fetch(healthURL, {
        credentials: 'omit',
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`Waline returned ${response.status}`);
      const result = await response.json();
      if (result.errno !== 0) throw new Error(result.errmsg || 'Waline is unavailable');

      const { init } = await import('https://unpkg.com/@waline/client@v3/dist/waline.js');
      init({
        el: mount,
        serverURL,
        path,
        lang: 'zh-CN',
        dark: 'html[data-theme="dark"]',
        meta: ['nick', 'mail', 'link'],
        requiredMeta: ['nick', 'mail'],
        login: 'disable',
        imageUploader: false,
      });
      status.hidden = true;
    } catch (error) {
      console.error('留言区加载失败', error);
      showFailure();
    } finally {
      window.clearTimeout(timeout);
    }
  }

  loadComments();
}
