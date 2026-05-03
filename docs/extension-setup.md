# Browser Extension Setup

The browser extension enables the one-click ChatGPT / Gemini workflow. It is one of the key features of AI PPT Prompt Studio.

AI PPT Prompt Studio still works without it, but you will need to copy prompts manually.

With the extension configured, clicking `Send to ChatGPT` or `Send to Gemini` will:

1. Copy the prompt to your clipboard as a fallback.
2. Open ChatGPT or Gemini in a new tab.
3. Fill the prompt into the input box.
4. Click send automatically.

## Chrome

1. Open `chrome://extensions`.
2. Turn on `Developer mode`.
3. Click `Load unpacked`.
4. Select the `extension/` folder in this project.
5. Open the extension details page.
6. Enable `Allow access to file URLs`.
7. Copy the extension ID.
8. Open `index.html`.
9. Expand `Extension settings`.
10. Paste the extension ID and save it.

## Edge

1. Open `edge://extensions`.
2. Turn on `Developer mode`.
3. Click `Load unpacked`.
4. Select the `extension/` folder in this project.
5. Open the extension details page.
6. Enable `Allow access to file URLs`.
7. Copy the extension ID.
8. Open `index.html`.
9. Expand `Extension settings`.
10. Paste the extension ID and save it.

## How It Works

When you click `Send to ChatGPT` or `Send to Gemini`, the page sends the prompt text to the extension. The extension opens the target website, fills the prompt box, and clicks send.

The tool also copies the prompt to your clipboard first. If automatic sending fails, you can paste the prompt manually.

## Troubleshooting

### The page says the extension ID is missing

Open `Extension settings` in `index.html`, paste the extension ID, and save it.

### Sending fails

Check:

- The extension is installed.
- The extension is enabled.
- The extension ID was copied correctly.
- `Allow access to file URLs` is enabled.
- You are logged in to ChatGPT or Gemini.

### ChatGPT or Gemini opens but no text is filled

The target website may have changed its page structure. The extension content script may need an update.

### I deployed the page to GitHub Pages

If you want the extension to work with a deployed page, add your domain to `extension/manifest.json`.

Example:

```json
"externally_connectable": {
  "matches": [
    "file:///*",
    "https://your-name.github.io/*"
  ]
}
```

Then reload the extension in `chrome://extensions` or `edge://extensions`.

---

# 浏览器扩展安装说明

浏览器扩展用于启用 ChatGPT / Gemini 一键发送工作流，是 AI PPT Prompt Studio 的重点功能之一。

不安装扩展也能正常使用工具，只是需要手动复制提示词。

配置扩展后，点击 `发送到 ChatGPT` 或 `发送到 Gemini` 会：

1. 先把提示词复制到剪贴板，作为兜底。
2. 打开 ChatGPT 或 Gemini 新标签页。
3. 自动填入提示词。
4. 自动点击发送。

## Chrome

1. 打开 `chrome://extensions`。
2. 开启 `开发者模式`。
3. 点击 `加载已解压的扩展程序`。
4. 选择本项目中的 `extension/` 文件夹。
5. 打开扩展详情页。
6. 启用 `允许访问文件网址`。
7. 复制扩展 ID。
8. 打开 `index.html`。
9. 展开 `扩展设置`。
10. 粘贴扩展 ID 并保存。

## Edge

1. 打开 `edge://extensions`。
2. 开启 `开发人员模式`。
3. 点击 `加载解压缩的扩展`。
4. 选择本项目中的 `extension/` 文件夹。
5. 打开扩展详情页。
6. 启用 `允许访问文件 URL`。
7. 复制扩展 ID。
8. 打开 `index.html`。
9. 展开 `扩展设置`。
10. 粘贴扩展 ID 并保存。

## 工作方式

点击 `发送到 ChatGPT` 或 `发送到 Gemini` 后，页面会把提示词发送给扩展。扩展打开目标网站，填入提示词，并自动点击发送。

页面会先把提示词复制到剪贴板。如果自动发送失败，可以手动粘贴。

## 常见问题

### 页面提示缺少扩展 ID

打开 `index.html` 中的 `扩展设置`，粘贴扩展 ID 并保存。

### 发送失败

检查以下事项：

- 扩展是否已安装。
- 扩展是否已启用。
- 扩展 ID 是否复制正确。
- 是否启用了 `允许访问文件网址`。
- ChatGPT 或 Gemini 是否已登录。

### ChatGPT 或 Gemini 打开了，但没有自动填入

目标网站可能更新了页面结构，需要更新扩展里的 content script。

### 我把页面部署到了 GitHub Pages

如果希望扩展和线上页面通信，需要在 `extension/manifest.json` 中加入你的域名。

示例：

```json
"externally_connectable": {
  "matches": [
    "file:///*",
    "https://your-name.github.io/*"
  ]
}
```

然后到 `chrome://extensions` 或 `edge://extensions` 重新加载扩展。
