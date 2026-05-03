(async function geminiAutoSender() {
  function waitForElement(finder, timeoutMs = 5000, intervalMs = 300) {
    return new Promise((resolve) => {
      const start = Date.now();
      const check = () => {
        const el = finder();
        if (el) return resolve(el);
        if (Date.now() - start > timeoutMs) return resolve(null);
        setTimeout(check, intervalMs);
      };
      check();
    });
  }

  function click(el) {
    el.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true }));
  }

  function showToast(text, color) {
    const toast = document.createElement("div");
    toast.textContent = text;
    toast.style.cssText =
      `position:fixed;bottom:24px;right:24px;z-index:99999;` +
      `background:${color};color:#fff;padding:12px 20px;border-radius:8px;` +
      `font-size:14px;box-shadow:0 4px 12px rgba(0,0,0,0.3);`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 8000);
  }

  function showError(msg) { showToast(`[AI PPT Prompt Studio] 失败：${msg}`, "#d94f2b"); }
  function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

  // 获取提示词（最多重试 10 次）
  let prompt = null;
  for (let i = 0; i < 10; i++) {
    const res = await chrome.runtime.sendMessage({ action: "getPrompt" });
    if (res && res.prompt) { prompt = res.prompt; break; }
    await sleep(500);
  }
  if (!prompt) return;

  showToast("[AI PPT Prompt Studio] 正在自动操作...", "#1a73e8");

  // Step 1: 等「制作图片」按钮出现（直接点建议栏，无需打开工具抽屉）
  const imageBtn = await waitForElement(
    () => document.querySelector('button[aria-label*="制作图片"]'),
    20000
  );
  if (!imageBtn) return showError("找不到「制作图片」按钮");
  click(imageBtn);

  await sleep(1000);

  // Step 2: 填入提示词
  const editor = await waitForElement(
    () => document.querySelector('div.ql-editor[contenteditable="true"]'),
    8000
  );
  if (!editor) return showError("找不到输入框");

  editor.focus();
  // 全选已有内容，再用新文本替换（避免长文本被截断）
  const range = document.createRange();
  range.selectNodeContents(editor);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
  document.execCommand("insertText", false, prompt);

  await sleep(500);

  // Step 3: 选「思考」模式（已选则跳过）
  const modeBtn = document.querySelector('button[data-test-id="bard-mode-menu-button"]');
  if (modeBtn && !modeBtn.textContent.includes("思考")) {
    click(modeBtn);
    await sleep(500);
    const thinkOption = await waitForElement(
      () => document.querySelector('button[data-test-id="bard-mode-option-思考"]'),
      3000
    );
    if (thinkOption) { click(thinkOption); await sleep(500); }
  }

  // Step 4: 发送
  const sendBtn = await waitForElement(
    () => document.querySelector('button.send-button[aria-label="发送"]'),
    5000
  );
  if (!sendBtn) return showError("找不到发送按钮");
  click(sendBtn);
})();
