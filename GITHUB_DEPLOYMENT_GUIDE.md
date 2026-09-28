# 7Rays Astro Vastu — GitHub Deployment & Version Control Guide

> **NOTICE:** SPECIFICATION AND WORKFLOW INSTRUCTIONS ONLY.  
> **ZERO GITHUB ACTIONS EXECUTED:** No accounts created, no tokens used, no commits pushed.

---

## 1. Repository Initialization Workflow

When the owner is ready to push this project to GitHub, execute the following commands in the workspace root:

```bash
# 1. Initialize local Git repository (if not already initialized)
git init

# 2. Check status to verify .gitignore is protecting environment secrets
git status
```

Verify that:

- `.env` does **NOT** appear in untracked files.
- `node_modules/` does **NOT** appear.
- `data/*.db` does **NOT** appear.
- Only tracked source code, assets, configurations, and documentation appear.

---

## 2. `.gitignore` Security Verification

The repository `.gitignore` has been hardened to prevent accidental credential leakage:

```gitignore
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
pnpm-debug.log*

node_modules
dist
dist-ssr

# Environment Variables
.env
.env.*
!.env.example
!.env.production.example

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store

# SQLite Database Files
data/*.db
data/*.db-wal
data/*.db-shm
```

---

## 3. First Commit Procedure

Once verified:

```bash
# Stage all safe tracked files
git add .

# Create the foundational production-hardened commit
git commit -m "chore: initial release - 7Rays Astro Vastu production-hardened build"
```

---

## 4. Remote Repository Setup

1. In GitHub, create a new repository:
   - **Repository name:** `7rays-astro-vastu`
   - **Visibility:** `Private` (recommended for proprietary business assets) or `Public`
   - **Initialize with README:** **No** (leave unchecked)
   - **Add .gitignore:** **No** (already present locally)
   - **Add license:** **No**
2. Copy the remote URL (HTTPS or SSH):
   - Example (SSH): `git@github.com:<owner-username>/7rays-astro-vastu.git`
   - Example (HTTPS): `https://github.com/<owner-username>/7rays-astro-vastu.git`

```bash
# Link local repository to GitHub remote
git remote add origin git@github.com:<owner-username>/7rays-astro-vastu.git

# Set default branch to main
git branch -M main

# Push to GitHub
git push -u origin main
```

---

## 5. Branch Strategy

- **`main`**: Production-ready code. Any commit or merge into `main` triggers an automatic production build and deployment on Cloudflare Pages.
- **`develop`** (Optional): Integration branch for ongoing staging work. Can be connected to a Cloudflare Pages preview environment.
- **`feature/*`**: Feature branches for specific tasks (e.g. `feature/case-studies-expansion`). Pull requests against `main` automatically receive unique preview URLs from Cloudflare Pages without impacting the live domain.

---

## 6. GitHub Secrets & Cloudflare Integration

When connecting Cloudflare Pages directly via the Cloudflare Git integration:

- Cloudflare handles deployments via OAuth webhooks. You **do not** need to store long-lived Cloudflare API keys in GitHub Secrets unless using custom GitHub Actions.
- If using GitHub Actions CI (Optional), store:
  - `CLOUDFLARE_API_TOKEN` (Repository Secret)
  - `CLOUDFLARE_ACCOUNT_ID` (Repository Secret)

For standard Cloudflare Pages deployment, the native Git connection in Cloudflare Dashboard is the simplest, most secure, and recommended approach.
