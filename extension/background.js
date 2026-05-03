const TARGETS = {
  sendToGemini: "https://gemini.google.com/app",
  sendToChatGPT: "https://chatgpt.com/",
};

function openTarget(url, prompt, sendResponse) {
  // 先用临时 key 存好提示词，再开标签页，避免 race condition
  const tempKey = `prompt_temp_${Date.now()}`;
  chrome.storage.session.set({ [tempKey]: prompt }, () => {
    chrome.tabs.create({ url }, (tab) => {
      // 把临时 key 迁移到 tab-specific key
      chrome.storage.session.remove(tempKey);
      chrome.storage.session.set({ [`prompt_${tab.id}`]: prompt }, () => {
        sendResponse({ success: true, tabId: tab.id });
      });
    });
  });
}

// 监听来自生成器页面的外部消息
chrome.runtime.onMessageExternal.addListener((message, sender, sendResponse) => {
  const targetUrl = TARGETS[message.action];
  if (targetUrl && message.prompt) {
    openTarget(targetUrl, message.prompt, sendResponse);
    return true;
  }
  sendResponse({ success: false, error: "unknown-action-or-empty-prompt" });
  return false;
});

// 监听来自 content script 的内部消息
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "getPrompt") {
    const key = `prompt_${sender.tab.id}`;
    chrome.storage.session.get(key, (result) => {
      const prompt = result[key] || null;
      if (prompt) {
        chrome.storage.session.remove(key);
      }
      sendResponse({ prompt });
    });
    return true;
  }
});
