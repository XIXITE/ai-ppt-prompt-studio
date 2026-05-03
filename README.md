# AI PPT Prompt Studio

## 中文用户快速入口

这是一个给 PPT 用户用的本地 AI 提示词工具。输入幻灯片内容后，它可以生成 3 个版本的 PPT 配图提示词，并可通过浏览器扩展一键发送到 ChatGPT / Gemini。

- 在线体验：[https://xixite.github.io/ai-ppt-prompt-studio/](https://xixite.github.io/ai-ppt-prompt-studio/)
- 下载 ZIP：[main.zip](https://github.com/XIXITE/ai-ppt-prompt-studio/archive/refs/heads/main.zip)
- 中文完整说明：[README.zh-CN.md](README.zh-CN.md)
- 浏览器扩展安装：[docs/extension-setup.md](docs/extension-setup.md)

快速使用：

1. 打开在线体验链接，或下载 ZIP 后双击 `index.html`。
2. 第一次打开时选择 `中文`。
3. 粘贴 PPT 页面内容，点击 `生成提示词`。
4. 复制提示词，或安装扩展后一键发送到 ChatGPT / Gemini。

注意：本工具不需要 API Key，没有后端，也不会自动上传你的文件。图片转 PPTX 模式只生成提示词，不直接生成 PPTX 文件。

---

AI PPT Prompt Studio is a local, single-file prompt tool for PowerPoint workflows. It helps you turn slide notes into clear prompts for ChatGPT, Gemini, or other AI tools.

It does not call any AI API, does not require an API key, and does not upload your files by itself.

Key feature: with the included browser extension, you can send a generated prompt to ChatGPT or Gemini in one click. The extension opens the target page, fills the prompt, and submits it automatically.

## Try It

- Live demo: [https://xixite.github.io/ai-ppt-prompt-studio/](https://xixite.github.io/ai-ppt-prompt-studio/)
- Download ZIP: [main.zip](https://github.com/XIXITE/ai-ppt-prompt-studio/archive/refs/heads/main.zip)
- Extension setup: [docs/extension-setup.md](docs/extension-setup.md)
- Chinese README: [README.zh-CN.md](README.zh-CN.md)

## What It Can Do

- Send prompts to ChatGPT or Gemini in one click with the included browser extension.
- Generate PPT visual prompts from slide content.
- Produce three prompt versions at once: Standard, Structure-focused, and Visual-enhanced.
- Support six built-in visual styles:
  - Report flat diagram
  - Business blue-white diagram
  - Gray-white minimal diagram
  - Tech wireframe diagram
  - Realistic scene photography
  - Realistic information overlay
- Separate app language from label language:
  - App language controls the interface and generated prompt wording.
  - Label language controls visible text inside the generated image.
- Support label languages: Chinese, English, French, German, Spanish, Italian, Portuguese, Japanese, Korean, and Custom language + English.
- Generate prompts for rebuilding screenshots into editable PPTX files.
- Import custom visual styles from a PPT template through JSON.

## What It Does Not Do

- It does not generate images directly.
- It does not generate PPTX files directly.
- It does not upload images or PPT files.
- It does not use OpenAI, Google, or Gemini API keys.
- It does not replace PowerPoint editing. It only helps create better prompts.

## Quick Start

1. Download or clone this repository.
2. Open `index.html` in Chrome or Edge.
3. Choose your language on first launch.
4. Select a mode:
   - `AI Visual Prompt`
   - `Image to PPTX Prompt`
5. Fill in the required content.
6. Click `Generate prompts`.
7. Click `Send to ChatGPT` / `Send to Gemini` if the extension is configured, or copy the prompt manually.

Recommended setup: install the browser extension first. This turns the workflow into `write slide notes -> generate prompt -> send to ChatGPT/Gemini`.

## Highlight: One-Click Send With Browser Extension

The browser extension is one of the main features of this project. It reduces repeated copy-paste work when testing prompt variants.

With the extension configured, each generated prompt card has:

- `Send to ChatGPT`
- `Send to Gemini`

When clicked, the tool will:

1. Copy the prompt to your clipboard as a fallback.
2. Open ChatGPT or Gemini in a new tab.
3. Fill the prompt into the input box.
4. Click send automatically.

This is especially useful when comparing the three prompt versions or testing multiple visual styles.

Setup guide: [docs/extension-setup.md](docs/extension-setup.md)

## Mode 1: AI Visual Prompt

Use this mode when you want an AI-generated visual for a PowerPoint slide.

Steps:

1. Paste the core slide points into `Core slide points`.
2. Add optional direction in `Notes / diagram direction`.
3. Choose a diagram type, placement, complexity, text amount, label language, and style.
4. Click `Generate prompts`.
5. Use one of the three versions:
   - `Standard`: closest to the general prompt.
   - `Structure-focused`: better for flows, hierarchy, relationships, matrices, and comparisons.
   - `Visual-enhanced`: stronger scene, focus, and visual impact.

Recommended workflow:

- Use `Auto choose from content` for most slides.
- Use `Structure-focused` for framework, process, and logic slides.
- Use `Visual-enhanced` for covers, section pages, and key message slides.

## Mode 2: Image to PPTX Prompt

Use this mode when you have an image or screenshot and want an AI tool to rebuild it as an editable PPTX.

Steps:

1. Upload the image to ChatGPT, Gemini, or another AI tool that can create PPTX files.
2. In this tool, switch to `Image to PPTX Prompt`.
3. Choose where the image belongs in the original slide:
   - Full slide
   - Right half
   - Left half
   - Top half
   - Bottom half
   - Center block
4. Add optional requirements, such as keeping tables editable or preserving colors.
5. Click `Generate PPTX prompt`.
6. Copy the prompt and paste it into the AI chat after uploading the image.

Important: this tool only generates the prompt. It does not inspect the image and does not create the PPTX file.

## Language Settings

The first launch asks you to choose a language. If you keep `Use this as my default on this device` checked, the choice is saved in your browser.

Supported interface languages:

- English
- Chinese
- French

Label language is separate. For example, you can use the Chinese interface while setting image labels to German. The generated prompt will explicitly tell the AI to use German labels and avoid Chinese labels.

## Custom Styles

Use custom styles when you want generated visuals to match an existing PPT template.

Steps:

1. Open `Custom style`.
2. Click `Copy analysis prompt`.
3. Upload your PPT template to ChatGPT or Gemini.
4. Paste the copied analysis prompt.
5. The AI should return a JSON object.
6. Paste the JSON into the custom style box.
7. Click `Import style`.
8. Select the imported style from the Style dropdown.

The JSON must include:

```json
{
  "name": "Style name",
  "colors": {
    "primary": "#0b3a75",
    "primaryDark": "#082c59",
    "primaryLight": "#e8f0fb",
    "accent": "#2f80ed",
    "accentLight": "#eaf3ff"
  },
  "styleBase": "Overall style: ..."
}
```

## Browser Extension Setup

The main page works without the extension, but the extension is recommended because it enables the one-click ChatGPT / Gemini workflow.

Basic setup:

1. Open `chrome://extensions` or `edge://extensions`.
2. Enable Developer Mode.
3. Click `Load unpacked`.
4. Select the `extension/` folder.
5. Enable `Allow access to file URLs` in the extension details page.
6. Copy the extension ID.
7. Open `index.html`.
8. Expand `Extension settings`.
9. Paste and save the extension ID.

Detailed guide: [docs/extension-setup.md](docs/extension-setup.md)

## Project Structure

```text
.
├─ index.html
├─ extension/
│  ├─ manifest.json
│  ├─ background.js
│  ├─ content.js
│  ├─ chatgpt-content.js
│  └─ icon.png
├─ docs/
│  └─ extension-setup.md
├─ README.md
├─ README.zh-CN.md
└─ LICENSE
```

## FAQ

### Do I need an API key?

No. This tool uses the ChatGPT / Gemini web interface manually or through the optional extension.

### Can I use it without the extension?

Yes. You can always copy prompts manually.

### Why does one-click sending fail?

Check these points:

- The extension is installed and enabled.
- The extension ID is saved correctly.
- `Allow access to file URLs` is enabled.
- You are logged in to ChatGPT or Gemini.
- The target website has not changed its page structure.

### Can I deploy it to GitHub Pages?

Yes. If you also want the browser extension to communicate with the deployed page, add your GitHub Pages domain to `externally_connectable.matches` in `extension/manifest.json`.

Example:

```json
"externally_connectable": {
  "matches": [
    "file:///*",
    "https://your-name.github.io/*"
  ]
}
```

## License

MIT License
