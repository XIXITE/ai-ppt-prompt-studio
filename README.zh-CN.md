# AI PPT Prompt Studio

AI PPT Prompt Studio 是一个本地运行的 PPT 提示词工具。它把幻灯片内容、截图重建需求、PPT 模板风格，整理成更稳定的提示词，方便你复制到 ChatGPT、Gemini 或其他 AI 工具中使用。

它不调用任何 AI API，不需要 API Key，也不会自动上传你的文件。

重点功能：配套浏览器扩展后，可以一键把生成好的提示词发送到 ChatGPT 或 Gemini。扩展会自动打开目标页面、填入提示词并点击发送。

## 立即使用

- 在线体验：[https://xixite.github.io/ai-ppt-prompt-studio/](https://xixite.github.io/ai-ppt-prompt-studio/)
- 下载 ZIP：[main.zip](https://github.com/XIXITE/ai-ppt-prompt-studio/archive/refs/heads/main.zip)
- 扩展安装：[docs/extension-setup.md](docs/extension-setup.md)
- 英文说明：[README.md](README.md)

## 核心功能

- 配套浏览器扩展，一键发送提示词到 ChatGPT 或 Gemini。
- 根据幻灯片内容生成 PPT 配图提示词。
- 一次生成三个版本：
  - 标准版
  - 结构强化版
  - 视觉增强版
- 内置 6 种通用风格：
  - 报告扁平图示
  - 商务蓝白图示
  - 灰白极简图示
  - 科技线框图示
  - 写实场景摄影
  - 写实信息叠加
- 支持界面语言和标签语言分开设置：
  - 界面语言控制软件显示和生成提示词的说明语言。
  - 标签语言控制 AI 图片里的可见文字。
- 标签语言支持中文、英文、法语、德语、西班牙语、意大利语、葡萄牙语、日语、韩语，以及“填写语言 + 英文”。
- 支持图片转 PPTX 提示词，用于让 AI 把截图重建成可编辑 PPTX。
- 支持导入定制风格 JSON，让生成图更接近你的 PPT 模板。

## 不做什么

- 不直接生成图片。
- 不直接生成 PPTX 文件。
- 不解析或上传图片、PPT 文件。
- 不使用 OpenAI、Gemini 或其他模型 API。
- 不替代 PowerPoint 编辑，只负责生成更清楚的提示词。

## 快速开始

1. 下载或克隆本项目。
2. 用 Chrome 或 Edge 打开 `index.html`。
3. 第一次打开时选择界面语言。
4. 选择模式：
   - `AI 配图提示词`
   - `图片转 PPTX 提示词`
5. 填写内容并选择参数。
6. 点击 `生成提示词`。
7. 如果已配置扩展，点击 `发送到 ChatGPT` / `发送到 Gemini`；也可以手动复制提示词。

推荐先安装浏览器扩展。安装后，完整流程会变成：`填写幻灯片内容 -> 生成提示词 -> 一键发送到 ChatGPT/Gemini`。

## 重点功能：浏览器扩展一键发送

浏览器扩展是本项目的重点功能之一。它可以减少反复复制、粘贴、切换网页的操作，尤其适合对比三个提示词版本或测试不同风格。

配置扩展后，每张提示词卡片都会有：

- `发送到 ChatGPT`
- `发送到 Gemini`

点击后，工具会：

1. 先把提示词复制到剪贴板，作为兜底。
2. 打开 ChatGPT 或 Gemini 新标签页。
3. 自动填入当前卡片的提示词。
4. 自动点击发送。

安装说明见：[docs/extension-setup.md](docs/extension-setup.md)

## 模式一：AI 配图提示词

这个模式适合为 PPT 页面生成配图、结构图、场景图、流程图、关系图等。

使用步骤：

1. 在 `核心内容要点` 中粘贴幻灯片内容。
2. 如有明确想法，在 `备注 / 图示方向` 中补充说明。
3. 选择图示类型、图片位置、复杂度、图中文字、标签语言和风格。
4. 点击 `生成提示词`。
5. 根据需要选择三个版本之一：
   - `标准版`：适合大多数普通内容页。
   - `结构强化版`：适合流程、层级、关系、矩阵、对比类页面。
   - `视觉增强版`：适合封面、章节页、重点页或需要更强表现力的页面。

建议：

- 不确定图示类型时，使用 `根据内容自动判断`。
- 逻辑页优先试 `结构强化版`。
- 重点页或章节页优先试 `视觉增强版`。

## 模式二：图片转 PPTX 提示词

这个模式适合把截图交给 AI，让 AI 重建成可编辑 PPTX。

使用步骤：

1. 先把图片上传到 ChatGPT、Gemini 或其他支持生成 PPTX 的 AI 工具。
2. 在本工具中切换到 `图片转 PPTX 提示词`。
3. 选择图片在原始 PPT 页中的位置：
   - 整页
   - 右半页
   - 左半页
   - 上半页
   - 下半页
   - 中部区域
4. 根据需要填写补充要求，例如“重点保证表格可编辑”“不要改动配色”。
5. 点击 `生成 PPTX 提示词`。
6. 复制提示词，粘贴到已上传图片的 AI 对话中。

注意：本工具只生成提示词，不读取图片，也不直接生成 PPTX。

## 语言设置

第一次打开页面时会弹出语言选择。如果勾选 `在本设备上设为默认语言`，浏览器会记住该设置。

当前支持的界面语言：

- English
- 中文
- Français

标签语言是独立设置。例如：你可以使用中文界面，同时把图片里的标签语言设置为德语。此时生成的提示词会明确要求 AI 使用德语标签，并避免使用中文标签。

## 定制风格

如果你希望 AI 生成的图更接近某套 PPT 模板，可以使用定制风格。

使用步骤：

1. 打开 `定制风格`。
2. 点击 `复制分析提示词`。
3. 把你的 PPT 模板上传到 ChatGPT 或 Gemini。
4. 粘贴刚才复制的分析提示词。
5. AI 会返回一个 JSON。
6. 把 JSON 粘贴回本工具。
7. 点击 `导入风格`。
8. 在 `风格` 下拉框中选择导入的风格。

JSON 格式示例：

```json
{
  "name": "蓝色商务报告",
  "colors": {
    "primary": "#0b3a75",
    "primaryDark": "#082c59",
    "primaryLight": "#e8f0fb",
    "accent": "#2f80ed",
    "accentLight": "#eaf3ff"
  },
  "styleBase": "整体风格：..."
}
```

## 浏览器扩展安装

不安装扩展也能正常使用本工具，只是需要手动复制提示词。推荐安装扩展，因为它能启用一键发送到 ChatGPT / Gemini 的完整工作流。

基础安装步骤：

1. 打开 `chrome://extensions` 或 `edge://extensions`。
2. 开启开发者模式。
3. 点击 `加载已解压的扩展程序`。
4. 选择本项目中的 `extension/` 文件夹。
5. 打开扩展详情页，启用 `允许访问文件网址`。
6. 复制扩展 ID。
7. 回到 `index.html`。
8. 展开 `扩展设置`。
9. 粘贴并保存扩展 ID。

详细说明见：[docs/extension-setup.md](docs/extension-setup.md)

## 项目结构

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

## 常见问题

### 需要 API Key 吗？

不需要。本工具不调用 AI API。

### 不安装扩展能用吗？

能用。可以手动复制提示词。

### 一键发送失败怎么办？

检查以下几点：

- 扩展是否已加载并启用。
- 扩展 ID 是否保存正确。
- 是否启用了 `允许访问文件网址`。
- ChatGPT 或 Gemini 是否已登录。
- ChatGPT / Gemini 页面结构是否更新。

### 可以部署到 GitHub Pages 吗？

可以。如果还想让浏览器扩展和线上页面通信，需要把你的 GitHub Pages 域名加入 `extension/manifest.json` 的 `externally_connectable.matches`。

示例：

```json
"externally_connectable": {
  "matches": [
    "file:///*",
    "https://your-name.github.io/*"
  ]
}
```

## 许可证

MIT License
