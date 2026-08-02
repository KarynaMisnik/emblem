# 🏗️ Project Structure

## Content

- [🌳 Project Tree](#🌳-project-tree)
- [.vscode/](#.vscode/)
  - [settings.json](#settings.json)
  - [extensions.json](#extensions.json)
- [app/](#app/)
  - [(tabs)](<#(tabs)>)
    - [\_layout.tsx](#_layout.tsx)
    - [index.tsx](#index.tsx)

### 🌳 Project Tree

📁 .vscode/<br>
├── 📄 settings.json<br>
├── 📄 extensions.json<br>
📁 app/(tabs)<br>
├── 📄 \_layout.tsx<br>
├── 📄 index.tsx<br>
📁 components/<br>
├── 📄 NavBar.tsx<br>
├── 📄 RegionCard.tsx<br>
📁 constants/<br>
├── 📄 theme.ts<br>
📁 docs/<br>
├── 📄 architecture.md<br>
├── 📄 decisions.md<br>
├── 📄 progress.md<br>
├── 📄 project-structure.md<br>
├── 📄 setup.md<br>
📁 hooks/<br>
├── 📄 use-color-scheme.ts<br>
├── 📄 use-color-scheme.<br>web.ts
├── 📄 use-theme-color.ts<br>
📁 scripts/<br>
├── 📄 reset-project.ts<br>
📄 .gitignore<br>
📄 AGENTS.md<br>
📄 app.json<br>
📄 CLAUDE.md<br>
📄 eslint.config.js<br>
📄 package-lock.json<br>
📄 package.json<br>
📄 README.md<br>
📄 tsconfig.json<br>
<br>

---

📁 .vscode/<br>
├── 📄 settings.json<br>
├── 📄 extensions.json<br>

### .vscode/

**Purpose:**<br>

Stores Visual Studio Code workspace settings for this project.

Notes:

- Not required for the application to run.
- Can be safely recreated by VS Code.
- Mainly improves the development experience.

### extensions.json

Lists recommended VS Code extensions for developers working on the project.

Examples:

- Expo Tools
- ESLint
- Prettier

Installing these extensions is optional but recommended.

In this project:

`{ "recommendations": ["expo.vscode-expo-tools"] }
`

**Expo-tools** is recommended extension but not mandatory, which means it won't break anything in the project.

`expo.vscode-expo-tools` is a unique extention ID. If the extension isn't installed, VS Code may show a notification like:

> This workspace recommends the Expo Tools extension."

### settings.json

Stores project-specific VS Code settings.

Examples:

- Formatting preferences
- TypeScript settings
- Editor behavior

These settings apply only when this project is opened in VS Code.

In this project:

VS Code settings for automatically organizing and cleaning code on save.

---

### app/

Purpose:

Contains all application routes (screens) managed by Expo Router.

- Every screen in the app lives here.<br>
- The folder structure defines the navigation structure.<br>
- Special files like `\_layout.tsx configure navigation rather than display a screen.<br>

### (tabs)/

Purpose:

A route group used to organize screens that share the same tab navigation.

**Important points:**

It is not part of the route name.<br>
It helps organize related screens.<br>
Its `_layout.tsx` usually defines a <Tabs /> navigator.<br>
