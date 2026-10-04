(function () {
  const share = document.querySelector("[data-article-share]");
  if (!share) return;

  const url = share.dataset.shareUrl;
  const title = share.dataset.shareTitle;
  const status = share.querySelector("[data-share-status]");

  async function copyLink() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
        return true;
      }
    } catch (error) {
      // Older browsers may need the selection-based fallback below.
    }

    const input = document.createElement("textarea");
    input.value = url;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();

    let copied = false;
    try {
      copied = document.execCommand("copy");
    } catch (error) {
      copied = false;
    }
    input.remove();
    return copied;
  }

  share.querySelector("[data-share-copy]").addEventListener("click", async function () {
    status.textContent = (await copyLink()) ? "链接已复制。" : "复制失败，请从浏览器地址栏复制链接。";
  });

  share.querySelector("[data-share-wechat]").addEventListener("click", async function () {
    if (navigator.share) {
      try {
        await navigator.share({ title: title, url: url });
        status.textContent = "已打开系统分享菜单，请选择微信。";
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }

    status.textContent = (await copyLink())
      ? "链接已复制，请打开微信粘贴分享。"
      : "请从浏览器地址栏复制链接，再到微信中分享。";
  });
})();
