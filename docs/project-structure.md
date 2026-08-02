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

Contains all application routes (screens) managed by **Expo Router**.

- Every screen in the app lives here.<br>
- The folder structure defines the navigation structure.<br>

### (tabs)/

Purpose:

A route group used to organize screens that share the same tab navigation.

Unlike a normal folder, its name does not become part of the navigation route. The parentheses tell Expo Router that this folder exists only for organization.

📁 app/(tabs)<br>
├── 📄 \_layout.tsx<br>
├── 📄 index.tsx<br>

creates route `/` (root screen) but NOT `/(tabs)`

├── (tabs)/
│ ├── index.tsx
│ └── profile.tsx

creates the routes:

/

and

/profile

not

/(tabs)
/(tabs)/profile

The parentheses are a special convention recognized by Expo Router.

With parentheses the folder name is ignored when generating routes.

Route groups let developers organize the project without affecting the app's navigation.

For example, screens displayed inside a bottom tab navigator can be placed in one group, while authentication screens can be placed in another:

app/<br>
├── login.tsx<br>
├── register.tsx<br>
├── (tabs)/<br>
└── (admin)/<br>

This keeps the project organized while maintaining clean routes.

> The folder can have any name. The name is chosen by the developer to describe the purpose of the group.

**How it works behind the scenes**

When Expo Router starts, it scans the app/ folder and automatically discovers every screen.

For route groups, Expo Router:

Finds the folder.
Recognizes the parentheses.
Uses the folder only for grouping related screens.
Ignores the folder name when creating routes.

The screens inside the group are still discovered automatically.
