# Maintenance Guide

This file keeps the project easy to update after release.

## Release Checklist

Before publishing a new version:

1. Open `index.html` locally.
2. Test `AI Visual Prompt` mode.
3. Test `Image to PPTX Prompt` mode.
4. Test app language switching.
5. Test label language switching.
6. Test custom bilingual labels.
7. Test custom style JSON import.
8. Test manual copy.
9. Test one-click send with the extension if possible.
10. Update `README.md` and `README.zh-CN.md` if user-facing behavior changed.
11. Update this file if the workflow changed.

## Versioning

Use simple semantic versions:

- `v1.0.0`: first public release
- `v1.1.0`: new user-facing feature
- `v1.0.1`: bug fix or documentation update

Update these places when releasing:

- `extension/manifest.json`
- README release notes if needed
- GitHub Release title and notes

## Common Update Types

### Add a Built-In Style

Edit `index.html`:

1. Add a new entry to `STYLE_PRESETS`.
2. Add a display label to `STYLE_LABEL_KEYS`.
3. Add localized UI labels in `UI_TEXT`.
4. Test prompt generation.

### Add an Interface Language

Edit `index.html`:

1. Add the language to `LANGUAGE_OPTIONS`.
2. Add a full language pack to `UI_TEXT`.
3. Add an entry to `OUTPUT_LANGUAGES`.
4. Test first-launch selection.
5. Test reload with saved language.

Do not add a language to `LANGUAGE_OPTIONS` unless the UI is actually translated.

### Update ChatGPT or Gemini Automation

Edit:

- `extension/chatgpt-content.js`
- `extension/content.js`

Test:

1. Extension loads without errors.
2. Page opens correctly.
3. Prompt is inserted.
4. Send button is clicked.
5. Failure messages show when selectors are missing.

### Update GitHub Pages Support

If the repository URL changes, update:

- `README.md`
- `README.zh-CN.md`
- `extension/manifest.json`

Then reload the browser extension.

## Git Commands

Local workflow:

```bash
git status
git add .
git commit -m "Describe the change"
git push
```

Create a tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

## Public Communication Rules

Keep descriptions accurate:

- The tool generates prompts, not images.
- The tool generates Image-to-PPTX prompts, not PPTX files directly.
- The extension automates the web UI and may need updates if ChatGPT or Gemini changes.
- No API key is required.
- No backend is used.
- Files are not uploaded by the tool itself.

## Backlog Ideas

Useful next improvements:

- Add screenshots or GIFs to the README.
- Add a short sample gallery.
- Add German and Spanish interface language packs.
- Add a Chrome Web Store packaged extension later.
- Add import/export for custom style presets.
- Add a small examples folder with real prompt outputs.
- Add a release ZIP that contains only runtime files.
