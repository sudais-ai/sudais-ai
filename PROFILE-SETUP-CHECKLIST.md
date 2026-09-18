# Profile Setup Checklist

What each layer controls, and the exact manual steps. I did not change anything on GitHub — I have no
authenticated access in this session. Every step below is yours to click through (most take under a minute).

---

## A. What the README controls

Rendered by `sudais-ai/sudais-ai` → `README.md` on `main`: hero name, animated line, self-written positioning,
CTA buttons, about copy, project cards, tech stack, learning list, certificates, analytics widgets, snake, contact block.
**Anything a visitor reads but cannot click into your account settings lives here.**

## B. What GitHub **profile settings** control (not the README)

These appear in the left-hand profile sidebar, above the README. Audit found them half-filled.

| Setting | Current | Action |
| :-- | :-- | :-- |
| Profile photo | your avatar (a portrait, currently used by the README hero too) | keep; if you upload a new one it appears in both places automatically |
| Name | `Muhammad Sudais` | ✅ correct, leave |
| Bio | `🎓 Student \| ⚡ AI & Machine Learning \| 🤖 Bot Developer \| 🐍 Python Enthusiast \| 🚀 Building Future Tech` | **Replace.** "Bot Developer" + "Building Future Tech" read as template filler, and the bot work is forks. Suggested:<br />`BS Artificial Intelligence student building applied-AI systems in Python — retrieval, evidence-cited generation and verification. RAG, LLM apps, ML notebooks. Open to internships and freelance AI work.` |
| Pronouns | empty | optional |
| Company | `Shifa Tameer-e-Millat University` | ✅ correct, leave |
| School | (not shown) | add *Shifa Tameer-e-Millat University · BS Artificial Intelligence, 2024–2028* if the field is empty |
| Location | `Malakand Division, Khyber Pakhtunkhwa, Pakistan` | ✅ correct |
| Website | empty (ORCID + Freelancer are stored under profile "added links") | **Set to `https://msudaisai.netlify.app`**, label `msudaisai.netlify.app` |
| Twitter/X | empty | **Set to `JGaHSzU3U641571`** so the X icon renders |
| Fediverse / other | ORCID + Freelancer link present | keep; consider adding Fiverr/Upwork as extra profile links |
| "Available for hire" | **off** | **Turn it on** (Settings → Profile → Show as "hired" / Available for work) — this is the one GitHub-native signal recruiters filter on |
| Social links row | LinkedIn + two URLs visible | confirm LinkedIn is the `muhammad-sudais-` URL |
| Status | unset | useful: `🔎 Open to AI/ML internships` with "Never show active hours" |
| Profile README | exists, currently `create-next-app`-free but template-ish | replace with the file in this folder |

Steps: `github.com` → top-right avatar → **Profile** → **Edit profile** → fill the fields above → **Save**.
Hire flag: **Settings → Public profile → "Available for hire"** (profile edit form has the same toggle).

## C. What **repository settings** control

For `sudais-ai/sudais-ai` (the profile repo):

1. Repo **Description**: `Profile README — AI / ML and Python portfolio for Muhammad Sudais.` (currently `null`)
2. **Website**: `https://msudaisai.netlify.app` (currently `null`)
3. **Topics**: `profile-readme`, `ai`, `machine-learning`, `python`, `rag`, `llm` (currently `[]` — topics are searchable)
4. Leave *Issues* on (already on); Wiki/Pages not needed.
5. After adding the workflow, confirm **Settings → Actions → General → Workflow permissions = "Read repository contents and packages permissions"** is enough (the workflow grants `contents: write` at job level, so do **not** set "Read and write" globally).

For the featured repos (these are the biggest credibility gains available to you):

| Repo | Description to set | Topics to set | Also |
| :-- | :-- | :-- | :-- |
| `TradeReadyAI` | `Evidence-backed trade-compliance copilot: document ingestion, hybrid retrieval (FTS5 + embeddings) and cited requirement evaluation.` | `rag`, `retrieval-augmented-generation`, `nextjs`, `typescript`, `prisma`, `sqlite`, `llm` | replace the boilerplate README; add the Vercel URL in the Website field (already set) |
| `vind` | `VindicAI — multi-tenant research & case workspace: cases, evidence, claims, citations, audit trail.` | `typescript`, `drizzle`, `mysql`, `multi-tenant`, `audit-log` | add a real README; consider renaming to `vindicai` |
| `Tool-Wear-Detection` | `Supervised learning on CNC milling sensor data: cleaning, feature engineering, model comparison in one notebook.` | `machine-learning`, `scikit-learn`, `pandas`, `jupyter-notebook`, `predictive-maintenance` | commit a 15-line README and split the notebook |
| `UNIVERSITY-MANAGMENT-SYSTEM` | `Python + HTML/CSS university management project (CRUD).` | `python`, `mysql`, `crud` | **rename to `university-management-system`** (typo in the current name) |
| `ai-video-summarizer` | `Prototype: video transcript to structured summary (Python).` | `python`, `summarization` | add README before featuring |
| `jarvis-git` | `JARVIS-X — desktop automation agent: plan, execute, verify, recover, with persistent memory and permission gates.` | `python`, `ai-agents`, `automation`, `desktop-agent` | push code or delete; rename to `JARVIS-X` |

## D. What **GitHub Actions** controls

`.github/workflows/snake.yml` in this folder:

- Triggers: daily at **03:15 UTC**, `workflow_dispatch` (manual), and pushes to `main`.
- Generates three SVGs with `Platane/snk/svg-only@v3` (current release line, v3.5.0): default, `github-dark` palette, and a **gold palette** variant tuned to this profile.
- Publishes `dist/` to a new **`output` branch** with `crazy-max/ghaction-github-pages@v5`. The README reads them from `raw.githubusercontent.com`, so Pages does **not** need enabling.
- Secrets used: none beyond the built-in `GITHUB_TOKEN`. No repository outside `sudais-ai/sudais-ai` is touched, and only the `output` branch is written.

**After pushing:** Actions tab → *generate contribution snake* → **Run workflow** → wait ~30 s → the three files appear under the `output` branch and the README snake section starts rendering. If it fails with a permissions error, set the job's `permissions.contents` to `write` (already set) and confirm you are the repo owner.

## E. Pinned repositories — recommended six

Factual recommendation only, based on originality, AI/ML relevance, documentation and completeness. **I did not pin anything.**
Order below = order they will appear. Slot 7 is a spare if you swap something out later.

| Slot | Repository | Why it earns a slot | Caveat to fix first |
| :-- | :-- | :-- | :-- |
| 1 | `sudais-ai/sudais-ai` | *not pinnable/not needed* — the profile README already occupies the top slot | — |
| 1 | `TradeReadyAI` | Deepest AI/ML + engineering evidence in the account; live deployment URL; schema proves the RAG claims | README is `create-next-app` boilerplate |
| 2 | `vind` (VindicAI) | Shows systems judgement: tenancy, authorisation, audit, honest test reports | no README; name says nothing to a recruiter |
| 3 | `Tool-Wear-Detection` | Genuine end-to-end supervised-ML notebook (real dataset, real feature work) | 14.5 MB notebook, no written summary |
| 4 | `jarvis-git` → renamed `JARVIS-X` | Your stated agent project; the slot signals direction | **currently empty** — pin only after code is pushed |
| 5 | `UNIVERSITY-MANAGMENT-SYSTEM` → renamed | Non-AI Python + web fundamentals, shows breadth beyond notebooks | typo'd name, no README |
| 6 | *reserve* | A published **Spam Email Detector / Weather + scraping / expense-tracker** repo once they exist and have READMEs | these have **no public repo today**, so nothing can be pinned now |

How to pin: profile page → **Customize your pins** → select up to 6 → *Save*. Then star the ones you want
sorted higher (GitHub sorts pins by stars, then recency).

## F. Repository hygiene (no destructive action taken)

- **Archive (do not delete):** the ~27 WhatsApp-bot forks and the empty `NIL*`, `Hehe`, `Mmm`, `iiii`, `Op`,
  `HELLO`, `HI`, `OKKA`, `jaaaaaaaaaaaaar`, `jar-1` placeholders. Archiving keeps your history honest while
  removing them from the default profile listing. Archive: repo → Settings → Danger Zone → **Archive this repository**.
- **Unlink forks you keep:** in each fork's Settings, untick *fork* is not possible — instead pin nothing from them and
  let the profile README define what "my work" means. Do **not** describe them as projects anywhere.
- **Delete only if you are sure:** `jaaaaaaaaaaaaar` and `jar-1` (empty, noisy names, no history to lose).
- **Rename:** `UNIVERSITY-MANAGMENT-SYSTEM` → `university-management-system`; `vind` → `vindicai`;
  `jarvis-git` → `jarvis-x`. GitHub redirects old URLs, and pinned/starred links keep working.
- **Description coverage today: 0 of 29 non-fork repos have a professional description.** Fixing the six rows in
  section C costs ten minutes and is worth more than any badge.
- **Language hygiene:** the account's public language mix (TypeScript, JavaScript, Python, Jupyter Notebook, HTML, Dockerfile)
  is dominated by forks. That is why this README states skills in prose/badges rather than trusting an auto-generated
  "top languages" card — a dead-widget problem *and* an accuracy problem.
- **Topics today: `[]` on every repo checked.** Topics are the only free SEO lever you have on GitHub search.

## G. Optional assets (all optional; the README needs zero uploads)

| Path | Purpose | Needed? |
| :-- | :-- | :-- |
| `assets/profile.jpg` | Custom circular-cropped portrait instead of the GitHub avatar | only if you dislike the avatar; then change the hero `<img src>` to `./assets/profile.jpg` |
| `assets/tradeready-cover.png` | 1200×630 screenshot for the flagship project | optional, improves the showcase |
| `assets/vind-cover.png` | same for VindicAI | optional |
| `assets/hero.svg` | a branded dark/gold banner | **not recommended** — GitHub renders repo SVGs inconsistently as `README` banners, and the widget-based hero already works |
| — | Snake SVGs | generated by the workflow into the `output` branch; never commit them to `main` |
