# 🏗️ Project Structure

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

### settings.json

Stores project-specific VS Code settings.

Examples:

- Formatting preferences
- TypeScript settings
- Editor behavior

These settings apply only when this project is opened in VS Code.

---
