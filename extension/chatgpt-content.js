(async function chatgptAutoSender() {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

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

  function showError(msg) {
    showToast(`[AI PPT Prompt Studio] 失败：${msg}`, "#d94f2b");
  }

  function click(el) {
    el.click();
  }

  function findEditor() {
    return (
      document.querySelector("#prompt-textarea") ||
      document.querySelector('textarea[data-testid="prompt-textarea"]') ||
      document.querySelector('[contenteditable="true"][data-testid="prompt-textarea"]') ||
      document.querySelector('div.ProseMirror[contenteditable="true"]') ||
      document.querySelector('[contenteditable="true"][data-placeholder]') ||
      document.querySelector('div[contenteditable="true"]') ||
      document.querySelector("textarea")
    );
  }

  function setEditorText(editor, text) {
    editor.focus();

    if (editor.tagName === "TEXTAREA" || editor.tagName === "INPUT") {
      const valueSetter = Object.getOwnPropertyDescriptor(editor.constructor.prototype, "value")?.set;
      if (valueSetter) {
        valueSetter.call(editor, text);
      } else {
        editor.value = text;
      }
      editor.dispatchEvent(new Event("input", { bubbles: true }));
      editor.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true, key: " " }));
      return;
    }

    const range = document.createRange();
    range.selectNodeContents(editor);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    try {
      const data = new DataTransfer();
      data.setData("text/plain", text);
      editor.dispatchEvent(new ClipboardEvent("paste", { bubbles: true, cancelable: true, clipboardData: data }));
    } catch (e) {
      // ClipboardEvent/DataTransfer can be unavailable in some browser contexts.
    }

    const inserted = editor.textContent.includes(text.slice(0, 20)) || document.execCommand("insertText", false, text);
    if (!inserted || !editor.textContent.includes(text.slice(0, 20))) {
      editor.textContent = "";
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      editor.appendChild(paragraph);
    }
    editor.dispatchEvent(new InputEvent("input", { bubbles: true, inputType: "insertText", data: text }));
    editor.dispatchEvent(new Event("change", { bubbles: true }));
    editor.dispatchEvent(new KeyboardEvent("keyup", { bubbles: true, key: " " }));
  }

  function isVisible(el) {
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.width > 0 && rect.height > 0;
  }

  function findSendButton() {
    const selectors = [
      'button[data-testid="send-button"]',
      'button[data-testid="composer-submit-button"]',
      'button[aria-label*="Send"]',
      'button[aria-label*="send"]',
      'button[aria-label*="发送"]',
      'button[aria-label*="Submit"]',
      'button[aria-label*="submit"]',
    ];

    for (const selector of selectors) {
      const btn = document.querySelector(selector);
      if (btn && isVisible(btn) && !btn.disabled && btn.getAttribute("aria-disabled") !== "true") {
        return btn;
      }
    }

    const buttons = Array.from(document.querySelectorAll("button"));
    return buttons.find((btn) => {
      const label = `${btn.getAttribute("aria-label") || ""} ${btn.textContent || ""}`;
      return (
        isVisible(btn) &&
        !btn.disabled &&
        btn.getAttribute("aria-disabled") !== "true" &&
        /send|submit|发送/i.test(label)
      );
    });
  }

  let prompt = null;
  for (let i = 0; i < 10; i++) {
    const res = await chrome.runtime.sendMessage({ action: "getPrompt" });
    if (res && res.prompt) {
      prompt = res.prompt;
      break;
    }
    await sleep(500);
  }
  if (!prompt) return;

  showToast("[AI PPT Prompt Studio] 正在自动操作...", "#10a37f");

  const editor = await waitForElement(findEditor, 20000);
  if (!editor) return showError("找不到输入框，可能尚未登录 ChatGPT");

  setEditorText(editor, prompt);
  await sleep(800);

  const sendBtn = await waitForElement(findSendButton, 8000);
  if (!sendBtn) return showError("找不到可点击的发送按钮");

  click(sendBtn);
})();
