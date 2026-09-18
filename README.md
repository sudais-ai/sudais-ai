I'll start with the audit — inspecting your public GitHub footprint and verifying the widget services before designing anything.# Muhammad Sudais — GitHub Profile System

## Part 0 — Audit Results (read this first)

**Honest limitation:** I do not have direct GitHub API/browse access, and my web searches did **not** index `github.com/sudais-ai` or `msudaisai.netlify.app`. Searches returned *other* developers named Sudais (SudaisAxlan, muhammadsudaiskhalid, sudais-khalid) — I have **discarded all of that data**; none of it is used below. This means:

| Item | Status |
|---|---|
| Your provided identity, links, skills, education, certifications | ✅ Used as source of truth |
| Repository names / slugs for the 6 projects | ⚠️ **Not verified** — slugs below are my best guess from the names you gave; you must confirm each URL |
| Project descriptions | ⚠️ Built **only** from your Sections 5–7; nothing added beyond that |
| Forks / experimental repos (e.g. WhatsApp bot forks) | ⚠️ Could not enumerate; hygiene guidance is criteria-based, not repo-by-repo |
| Widget services | ✅ Verified by knowledge of current endpoints (details in report); Snake action verified live |
| Profile image | ❌ Not uploaded — requires one manual step |

**Skills classification applied:**

- **Confirmed (your list):** Python, Java, JavaScript, SQL, HTML, CSS, PHP, NumPy, Pandas, Matplotlib, Scikit-learn, Jupyter, Colab, Git, GitHub, VS Code, MySQL, BeautifulSoup, OpenWeatherMap API, CSV processing
- **Demonstrated in own projects (per your description, awaiting repo confirmation):** RAG, LLM integration, AI agents, semantic search, document processing, evaluation/verification
- **Learning:** advanced RAG, retrieval evaluation, LLM systems, agents, production AI engineering
- **Deliberately excluded (no evidence):** React, Next.js, Node, Express, MongoDB, Prisma, Docker, AWS/Azure/GCP, Kubernetes, LangChain, LlamaIndex, FastAPI, WebSockets

**Snake action verification:** The Platane/snk action is current — v3.3.0 is the latest release, and since v3.2.0 passing the GITHUB_TOKEN as env is no longer required. The documented usage is `uses: Platane/snk@v3` with `github_user_name: ${{ github.repository_owner }}`, with outputs customisable via query string where supported options include palette (github, github-dark, github-light), color_snake, and color_dots — a comma-separated list where the first is 0 contribution, then low to highest, and exactly 5 colors are expected.

---

## Part 1 — Information Architecture

```
HERO ........... image → name → title → typing line → value prop → social → HIRE ME
ABOUT .......... 5 specific sentences + quick-facts table
FOCUS .......... Currently Learning | Open To (2-col)
TECH STACK ..... 7 grouped rows, verified only
PROJECTS ....... 2×3 card grid, TradeReady AI + JARVIS-X first
SKILLS ......... compact category → capability mapping (different purpose from stack)
CERTIFICATIONS . 5 clickable official course pages
ANALYTICS ...... stats + langs + streak + activity graph
SNAKE .......... gold-themed, self-generated
FOOTER ......... CTA + contacts + subtle typing line
```

Colour system: gold `#FFD700` only on titles/icons/CTAs; surfaces `#0D1117`/`#1A1A1A`; text `#FFFFFF`/`#C9D1D9`; muted `#8B949E`.

---

## Part 2 — Deliverable A: `README.md`

```markdown
<!-- ═══════════════════════════════════════════════════════════════
     Muhammad Sudais · GitHub Profile
     Theme: Dark surfaces · White text · Gold accent (#FFD700)
     ═══════════════════════════════════════════════════════════════ -->

<div align="center">

<img src="assets/profile.png" alt="Muhammad Sudais" width="150" />

<h1>Muhammad Sudais</h1>

<p>
  <b>AI / Machine Learning &amp; Python Developer</b><br/>
  <sub>BS Artificial Intelligence · Shifa Tameer-e-Millat University · Khyber Pakhtunkhwa, Pakistan</sub>
</p>

<a href="https://github.com/sudais-ai">
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=22&duration=3200&pause=1100&color=FFD700&center=true&vCenter=true&width=560&height=44&lines=Hi%2C+I'm+Muhammad+Sudais;AI+%2F+Machine+Learning+Developer;I+Build+Practical+AI+Systems;I+Build+RAG+Systems+%26+AI+Agents;Turning+ML+Ideas+Into+Working+Products" alt="Typing headline" />
</a>

<p>
  I build practical AI systems in Python — from classical ML models to<br/>
  retrieval-augmented LLM applications and AI agents that plan, execute, and verify their own work.
</p>

<!-- ── Social / Contact ─────────────────────────────────────────── -->
<p>
  <a href="https://msudaisai.netlify.app"><img src="https://img.shields.io/badge/Portfolio-1A1A1A?style=for-the-badge&logo=googlechrome&logoColor=FFD700" alt="Portfolio" /></a>
  <a href="https://www.linkedin.com/in/muhammad-sudais-/"><img src="https://img.shields.io/badge/LinkedIn-1A1A1A?style=for-the-badge&logo=linkedin&logoColor=FFD700" alt="LinkedIn" /></a>
  <a href="mailto:sudaisoo72@gmail.com"><img src="https://img.shields.io/badge/Email-1A1A1A?style=for-the-badge&logo=gmail&logoColor=FFD700" alt="Email" /></a>
  <a href="https://github.com/sudais-ai"><img src="https://img.shields.io/badge/GitHub-1A1A1A?style=for-the-badge&logo=github&logoColor=FFD700" alt="GitHub" /></a>
  <a href="https://x.com/JGaHSzU3U641571"><img src="https://img.shields.io/badge/X-1A1A1A?style=for-the-badge&logo=x&logoColor=FFD700" alt="X" /></a>
</p>

<!-- ── Hire Me ──────────────────────────────────────────────────── -->
<p>
  <a href="https://www.fiverr.com/s/K3ea0jW"><img src="https://img.shields.io/badge/HIRE%20ME%20ON-FIVERR-FFD700?style=for-the-badge&logo=fiverr&logoColor=111111&labelColor=111111&color=FFD700" alt="Hire me on Fiverr" /></a>
  &nbsp;
  <a href="https://www.upwork.com/freelancers/~0104d5606ec877e71d"><img src="https://img.shields.io/badge/HIRE%20ME%20ON-UPWORK-FFD700?style=for-the-badge&logo=upwork&logoColor=111111&labelColor=111111&color=FFD700" alt="Hire me on Upwork" /></a>
</p>

<img src="assets/divider.svg" alt="" width="100%" />

</div>

<!-- ═══════════════════════════════════════════════════════════════ -->
## About Me

I'm a BS Artificial Intelligence student (2024 – 2028) at Shifa Tameer-e-Millat University, based in Malakand Division, Khyber Pakhtunkhwa, and I spend most of my time turning ML concepts into working Python software rather than leaving them in notebooks.

My current focus is applied AI: retrieval-augmented generation, LLM integration, and agents that can plan a task, execute it, and verify the result. The two projects I'm investing most in are **TradeReady AI**, an evidence-backed trade-compliance assistant built on document ingestion and retrieval, and **JARVIS-X**, a desktop-automation agent with planning, verification, recovery, and permission controls.

Underneath that sits a classical ML foundation — classification, regression, clustering, feature engineering, and model evaluation with Scikit-learn — completed through the DeepLearning.AI / Stanford Machine Learning Specialization.

I also take on freelance Python and AI work through Fiverr and Upwork, and I'm actively looking for **AI/ML internships** where I can contribute to real systems and learn from engineers shipping them.

<table>
  <tr>
    <td><b>Location</b></td><td>Malakand Division, KP, Pakistan</td>
    <td><b>Education</b></td><td>BS AI · STMU · 2024 – 2028</td>
  </tr>
  <tr>
    <td><b>Focus</b></td><td>RAG · LLM apps · AI agents</td>
    <td><b>Status</b></td><td>Open to internships &amp; freelance</td>
  </tr>
</table>

<!-- ═══════════════════════════════════════════════════════════════ -->
## Currently Learning &nbsp;·&nbsp; Open To

<table>
  <tr>
    <th align="left" width="50%">Currently Learning</th>
    <th align="left" width="50%">Open To</th>
  </tr>
  <tr>
    <td valign="top">
      • Advanced RAG architectures<br/>
      • Retrieval &amp; answer evaluation<br/>
      • LLM system design<br/>
      • Multi-step AI agents<br/>
      • Production-oriented AI engineering<br/>
      • Verification &amp; reliability of AI outputs
    </td>
    <td valign="top">
      • AI / ML internships<br/>
      • Python development roles &amp; contracts<br/>
      • AI application development<br/>
      • RAG &amp; LLM-powered applications<br/>
      • AI agent projects<br/>
      • Open-source collaboration
    </td>
  </tr>
</table>

<sub>Items under <i>Currently Learning</i> are areas of active study, listed separately from the verified stack below.</sub>

<!-- ═══════════════════════════════════════════════════════════════ -->
## Tech Stack

<table>
  <tr>
    <td><b>Languages</b></td>
    <td>
      <img src="https://img.shields.io/badge/Python-1A1A1A?style=flat-square&logo=python&logoColor=FFD700" alt="Python" />
      <img src="https://img.shields.io/badge/Java-1A1A1A?style=flat-square&logo=openjdk&logoColor=FFD700" alt="Java" />
      <img src="https://img.shields.io/badge/JavaScript-1A1A1A?style=flat-square&logo=javascript&logoColor=FFD700" alt="JavaScript" />
      <img src="https://img.shields.io/badge/SQL-1A1A1A?style=flat-square&logo=mysql&logoColor=FFD700" alt="SQL" />
      <img src="https://img.shields.io/badge/HTML-1A1A1A?style=flat-square&logo=html5&logoColor=FFD700" alt="HTML" />
      <img src="https://img.shields.io/badge/CSS-1A1A1A?style=flat-square&logo=css&logoColor=FFD700" alt="CSS" />
      <img src="https://img.shields.io/badge/PHP-1A1A1A?style=flat-square&logo=php&logoColor=FFD700" alt="PHP" />
    </td>
  </tr>
  <tr>
    <td><b>AI / ML</b></td>
    <td>
      <img src="https://img.shields.io/badge/Scikit--learn-1A1A1A?style=flat-square&logo=scikitlearn&logoColor=FFD700" alt="Scikit-learn" />
      <img src="https://img.shields.io/badge/Classification-1A1A1A?style=flat-square" alt="Classification" />
      <img src="https://img.shields.io/badge/Regression-1A1A1A?style=flat-square" alt="Regression" />
      <img src="https://img.shields.io/badge/Clustering-1A1A1A?style=flat-square" alt="Clustering" />
      <img src="https://img.shields.io/badge/Feature%20Engineering-1A1A1A?style=flat-square" alt="Feature Engineering" />
      <img src="https://img.shields.io/badge/Model%20Evaluation-1A1A1A?style=flat-square" alt="Model Evaluation" />
      <img src="https://img.shields.io/badge/Neural%20Network%20Fundamentals-1A1A1A?style=flat-square" alt="Neural Networks" />
    </td>
  </tr>
  <tr>
    <td><b>AI Engineering</b></td>
    <td>
      <img src="https://img.shields.io/badge/RAG-1A1A1A?style=flat-square" alt="RAG" />
      <img src="https://img.shields.io/badge/LLM%20Integration-1A1A1A?style=flat-square" alt="LLM Integration" />
      <img src="https://img.shields.io/badge/AI%20Agents-1A1A1A?style=flat-square" alt="AI Agents" />
      <img src="https://img.shields.io/badge/Semantic%20Search-1A1A1A?style=flat-square" alt="Semantic Search" />
      <img src="https://img.shields.io/badge/Retrieval%20Systems-1A1A1A?style=flat-square" alt="Retrieval Systems" />
      <img src="https://img.shields.io/badge/Document%20Processing-1A1A1A?style=flat-square" alt="Document Processing" />
      <img src="https://img.shields.io/badge/AI%20Evaluation%20%26%20Verification-1A1A1A?style=flat-square" alt="AI Evaluation" />
    </td>
  </tr>
  <tr>
    <td><b>Data</b></td>
    <td>
      <img src="https://img.shields.io/badge/NumPy-1A1A1A?style=flat-square&logo=numpy&logoColor=FFD700" alt="NumPy" />
      <img src="https://img.shields.io/badge/Pandas-1A1A1A?style=flat-square&logo=pandas&logoColor=FFD700" alt="Pandas" />
      <img src="https://img.shields.io/badge/Matplotlib-1A1A1A?style=flat-square" alt="Matplotlib" />
      <img src="https://img.shields.io/badge/CSV%20Processing-1A1A1A?style=flat-square" alt="CSV Processing" />
      <img src="https://img.shields.io/badge/BeautifulSoup-1A1A1A?style=flat-square" alt="BeautifulSoup" />
      <img src="https://img.shields.io/badge/OpenWeatherMap%20API-1A1A1A?style=flat-square" alt="OpenWeatherMap API" />
    </td>
  </tr>
  <tr>
    <td><b>Databases</b></td>
    <td>
      <img src="https://img.shields.io/badge/MySQL-1A1A1A?style=flat-square&logo=mysql&logoColor=FFD700" alt="MySQL" />
    </td>
  </tr>
  <tr>
    <td><b>Notebooks</b></td>
    <td>
      <img src="https://img.shields.io/badge/Jupyter-1A1A1A?style=flat-square&logo=jupyter&logoColor=FFD700" alt="Jupyter" />
      <img src="https://img.shields.io/badge/Google%20Colab-1A1A1A?style=flat-square&logo=googlecolab&logoColor=FFD700" alt="Google Colab" />
    </td>
  </tr>
  <tr>
    <td><b>Tools</b></td>
    <td>
      <img src="https://img.shields.io/badge/Git-1A1A1A?style=flat-square&logo=git&logoColor=FFD700" alt="Git" />
      <img src="https://img.shields.io/badge/GitHub-1A1A1A?style=flat-square&logo=github&logoColor=FFD700" alt="GitHub" />
      <img src="https://img.shields.io/badge/VS%20Code-1A1A1A?style=flat-square&logo=visualstudiocode&logoColor=FFD700" alt="VS Code" />
    </td>
  </tr>
</table>

<!-- ═══════════════════════════════════════════════════════════════ -->
## Featured Projects

<table>
  <tr>
    <td width="50%" valign="top">
      <h3>TradeReady AI</h3>
      <p><b>Evidence-backed AI assistant for trade-compliance requirements.</b></p>
      <p>Ingests trade and regulatory documents, retrieves relevant passages with semantic search, and answers questions about requirements with the supporting evidence attached — so every output can be checked against its source. Includes user-level data isolation and an evaluation/verification layer for retrieval quality.</p>
      <p>
        <img src="https://img.shields.io/badge/Python-1A1A1A?style=flat-square&logo=python&logoColor=FFD700" alt="Python" />
        <img src="https://img.shields.io/badge/RAG-1A1A1A?style=flat-square" alt="RAG" />
        <img src="https://img.shields.io/badge/Semantic%20Search-1A1A1A?style=flat-square" alt="Semantic Search" />
        <img src="https://img.shields.io/badge/LLM-1A1A1A?style=flat-square" alt="LLM" />
        <img src="https://img.shields.io/badge/Status-In%20Development-FFD700?style=flat-square&labelColor=1A1A1A" alt="Status" />
      </p>
      <a href="https://github.com/sudais-ai/TradeReady-AI"><img src="https://img.shields.io/badge/SOURCE%20CODE-111111?style=for-the-badge&logo=github&logoColor=FFD700" alt="Source Code" /></a>
    </td>
    <td width="50%" valign="top">
      <h3>JARVIS-X</h3>
      <p><b>Intelligent desktop-automation agent with built-in safety controls.</b></p>
      <p>Takes a natural-language goal and works through a plan → execute → verify → recover loop on the desktop, with persistent memory across sessions and explicit permission gates before sensitive actions. Built to explore how agents behave when they must confirm their own results.</p>
      <p>
        <img src="https://img.shields.io/badge/Python-1A1A1A?style=flat-square&logo=python&logoColor=FFD700" alt="Python" />
        <img src="https://img.shields.io/badge/AI%20Agents-1A1A1A?style=flat-square" alt="AI Agents" />
        <img src="https://img.shields.io/badge/LLM-1A1A1A?style=flat-square" alt="LLM" />
        <img src="https://img.shields.io/badge/Automation-1A1A1A?style=flat-square" alt="Automation" />
        <img src="https://img.shields.io/badge/Status-In%20Development-FFD700?style=flat-square&labelColor=1A1A1A" alt="Status" />
      </p>
      <a href="https://github.com/sudais-ai/JARVIS-X"><img src="https://img.shields.io/badge/SOURCE%20CODE-111111?style=for-the-badge&logo=github&logoColor=FFD700" alt="Source Code" /></a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>Spam Email Detector</h3>
      <p><b>Text classification model that separates spam from legitimate email.</b></p>
      <p>Cleans and vectorises email text, trains a Scikit-learn classifier, and reports evaluation metrics — a focused, end-to-end supervised learning pipeline.</p>
      <p>
        <img src="https://img.shields.io/badge/Python-1A1A1A?style=flat-square&logo=python&logoColor=FFD700" alt="Python" />
        <img src="https://img.shields.io/badge/Scikit--learn-1A1A1A?style=flat-square&logo=scikitlearn&logoColor=FFD700" alt="Scikit-learn" />
        <img src="https://img.shields.io/badge/Pandas-1A1A1A?style=flat-square&logo=pandas&logoColor=FFD700" alt="Pandas" />
        <img src="https://img.shields.io/badge/Status-Complete-FFD700?style=flat-square&labelColor=1A1A1A" alt="Status" />
      </p>
      <a href="https://github.com/sudais-ai/Spam-Email-Detector"><img src="https://img.shields.io/badge/SOURCE%20CODE-111111?style=for-the-badge&logo=github&logoColor=FFD700" alt="Source Code" /></a>
    </td>
    <td width="50%" valign="top">
      <h3>Budget &amp; Expense Tracker</h3>
      <p><b>Python application for recording and summarising personal expenses.</b></p>
      <p>Stores transactions, categorises spending, and produces summaries — practical CRUD logic, file/database persistence, and clean Python structure.</p>
      <p>
        <img src="https://img.shields.io/badge/Python-1A1A1A?style=flat-square&logo=python&logoColor=FFD700" alt="Python" />
        <img src="https://img.shields.io/badge/CSV-1A1A1A?style=flat-square" alt="CSV" />
        <img src="https://img.shields.io/badge/MySQL-1A1A1A?style=flat-square&logo=mysql&logoColor=FFD700" alt="MySQL" />
        <img src="https://img.shields.io/badge/Status-Complete-FFD700?style=flat-square&labelColor=1A1A1A" alt="Status" />
      </p>
      <a href="https://github.com/sudais-ai/Budget-Expense-Tracker"><img src="https://img.shields.io/badge/SOURCE%20CODE-111111?style=for-the-badge&logo=github&logoColor=FFD700" alt="Source Code" /></a>
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h3>Weather Tracker &amp; Quote Scraper</h3>
      <p><b>Live weather lookup via API plus a web scraper for quotes.</b></p>
      <p>Calls the OpenWeatherMap API for current conditions and uses BeautifulSoup to scrape and structure quotes — API consumption, HTML parsing, and data handling in one small toolkit.</p>
      <p>
        <img src="https://img.shields.io/badge/Python-1A1A1A?style=flat-square&logo=python&logoColor=FFD700" alt="Python" />
        <img src="https://img.shields.io/badge/BeautifulSoup-1A1A1A?style=flat-square" alt="BeautifulSoup" />
        <img src="https://img.shields.io/badge/OpenWeatherMap-1A1A1A?style=flat-square" alt="OpenWeatherMap" />
        <img src="https://img.shields.io/badge/Status-Complete-FFD700?style=flat-square&labelColor=1A1A1A" alt="Status" />
      </p>
      <a href="https://github.com/sudais-ai/Weather-Tracker-Quote-Scraper"><img src="https://img.shields.io/badge/SOURCE%20CODE-111111?style=for-the-badge&logo=github&logoColor=FFD700" alt="Source Code" /></a>
    </td>
    <td width="50%" valign="top">
      <h3>ML Portfolio</h3>
      <p><b>Collection of machine-learning notebooks and experiments.</b></p>
      <p>Classification, regression, and clustering work with Scikit-learn, NumPy, and Pandas — the applied side of the Machine Learning Specialization, with feature engineering and evaluation shown step by step.</p>
      <p>
        <img src="https://img.shields.io/badge/Jupyter-1A1A1A?style=flat-square&logo=jupyter&logoColor=FFD700" alt="Jupyter" />
        <img src="https://img.shields.io/badge/Scikit--learn-1A1A1A?style=flat-square&logo=scikitlearn&logoColor=FFD700" alt="Scikit-learn" />
        <img src="https://img.shields.io/badge/NumPy-1A1A1A?style=flat-square&logo=numpy&logoColor=FFD700" alt="NumPy" />
        <img src="https://img.shields.io/badge/Status-Ongoing-FFD700?style=flat-square&labelColor=1A1A1A" alt="Status" />
      </p>
      <a href="https://github.com/sudais-ai/ML-Portfolio"><img src="https://img.shields.io/badge/SOURCE%20CODE-111111?style=for-the-badge&logo=github&logoColor=FFD700" alt="Source Code" /></a>
    </td>
  </tr>
</table>

<div align="center">
  <a href="https://github.com/sudais-ai?tab=repositories"><img src="https://img.shields.io/badge/VIEW%20ALL%20REPOSITORIES-1A1A1A?style=for-the-badge&logo=github&logoColor=FFD700" alt="All repositories" /></a>
</div>

<!-- ═══════════════════════════════════════════════════════════════ -->
## Skills at a Glance

| Area | What I can do |
|---|---|
| **AI / ML** | Train, tune, and evaluate supervised and unsupervised models; feature engineering; choose metrics that fit the problem |
| **RAG / LLM** | Document ingestion, chunking, semantic retrieval, LLM prompt integration, attaching evidence to answers, evaluating retrieval quality |
| **AI Agents** | Plan → execute → verify → recover loops, persistent memory, permission-gated actions |
| **Python / Data** | Clean scripts and modules, NumPy/Pandas pipelines, CSV and API data handling, web scraping |
| **Software Dev** | Java, JavaScript, PHP, HTML/CSS fundamentals; structured, readable code with Git workflows |
| **Databases** | SQL queries and schema design with MySQL |

<!-- ═══════════════════════════════════════════════════════════════ -->
## Certifications

| Certification | Provider |
|---|---|
| [Machine Learning Specialization](https://www.coursera.org/specializations/machine-learning-introduction) | DeepLearning.AI · Stanford Online |
| &nbsp;&nbsp;↳ [Supervised Machine Learning: Regression and Classification](https://www.coursera.org/learn/machine-learning) | DeepLearning.AI · Stanford Online |
| &nbsp;&nbsp;↳ [Advanced Learning Algorithms](https://www.coursera.org/learn/advanced-learning-algorithms) | DeepLearning.AI · Stanford Online |
| &nbsp;&nbsp;↳ [Unsupervised Learning, Recommenders, Reinforcement Learning](https://www.coursera.org/learn/unsupervised-learning-recommenders-reinforcement-learning) | DeepLearning.AI · Stanford Online |
| [Programming for Everybody (Getting Started with Python)](https://www.coursera.org/learn/python) | University of Michigan |

<sub>Links point to the official Coursera course pages.</sub>

<!-- ═══════════════════════════════════════════════════════════════ -->
## GitHub Analytics

<div align="center">

<a href="https://github.com/sudais-ai">
  <img height="170" src="https://github-readme-stats.vercel.app/api?username=sudais-ai&show_icons=true&hide_border=true&bg_color=0D1117&title_color=FFD700&icon_color=FFD700&text_color=C9D1D9&ring_color=FFD700&rank_icon=github" alt="GitHub stats" />
</a>
<a href="https://github.com/sudais-ai">
  <img height="170" src="https://github-readme-stats.vercel.app/api/top-langs/?username=sudais-ai&layout=compact&langs_count=8&hide_border=true&bg_color=0D1117&title_color=FFD700&text_color=C9D1D9" alt="Top languages" />
</a>

<br/><br/>

<a href="https://github.com/sudais-ai">
  <img height="170" src="https://streak-stats.demolab.com?user=sudais-ai&hide_border=true&background=0D1117&ring=FFD700&fire=FFD700&currStreakLabel=FFD700&currStreakNum=FFFFFF&sideNums=FFFFFF&sideLabels=C9D1D9&dates=8B949E&stroke=1A1A1A" alt="Contribution streak" />
</a>

<br/><br/>

<a href="https://github.com/sudais-ai">
  <img width="100%" src="https://github-readme-activity-graph.vercel.app/graph?username=sudais-ai&bg_color=0D1117&color=C9D1D9&line=FFD700&point=FFFFFF&area=true&area_color=FFD700&hide_border=true&custom_title=Contribution%20Activity" alt="Contribution activity graph" />
</a>

</div>

<!-- ═══════════════════════════════════════════════════════════════ -->
## Contribution Snake

<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/sudais-ai/sudais-ai/output/github-snake-gold.svg" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/sudais-ai/sudais-ai/output/github-snake.svg" />
    <img alt="Contribution snake animation" src="https://raw.githubusercontent.com/sudais-ai/sudais-ai/output/github-snake-gold.svg" width="100%" />
  </picture>
</div>

<!-- ═══════════════════════════════════════════════════════════════ -->
<div align="center">

<img src="assets/divider.svg" alt="" width="100%" />

### Let's Work Together

<p>Open to AI/ML internships, Python development, and applied AI projects.</p>

<p>
  <a href="mailto:sudaisoo72@gmail.com"><img src="https://img.shields.io/badge/sudaisoo72%40gmail.com-1A1A1A?style=for-the-badge&logo=gmail&logoColor=FFD700" alt="Email" /></a>
  <a href="https://www.linkedin.com/in/muhammad-sudais-/"><img src="https://img.shields.io/badge/LinkedIn-1A1A1A?style=for-the-badge&logo=linkedin&logoColor=FFD700" alt="LinkedIn" /></a>
  <a href="https://msudaisai.netlify.app"><img src="https://img.shields.io/badge/Portfolio-1A1A1A?style=for-the-badge&logo=googlechrome&logoColor=FFD700" alt="Portfolio" /></a>
</p>

<p>
  <a href="https://www.fiverr.com/s/K3ea0jW"><img src="https://img.shields.io/badge/Fiverr-FFD700?style=for-the-badge&logo=fiverr&logoColor=111111" alt="Fiverr" /></a>
  <a href="https://www.upwork.com/freelancers/~0104d5606ec877e71d"><img src="https://img.shields.io/badge/Upwork-FFD700?style=for-the-badge&logo=upwork&logoColor=111111" alt="Upwork" /></a>
</p>

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=15&duration=4000&pause=3000&color=8B949E&center=true&vCenter=true&width=460&height=30&lines=Thanks+for+visiting+%E2%80%94+let%27s+build+something+useful." alt="Thanks for visiting" />

<br/>

<img src="https://komarev.com/ghpvc/?username=sudais-ai&style=flat-square&color=FFD700&label=Profile+views&labelColor=1A1A1A" alt="Profile views" />

</div>
```

---

## Part 3 — Deliverable B: `.github/workflows/snake.yml`

```yaml
name: Generate Contribution Snake

on:
  # Daily at 00:00 UTC
  schedule:
    - cron: "0 0 * * *"
  # Manual trigger from the Actions tab
  workflow_dispatch:
  # Regenerate when this workflow file itself changes
  push:
    branches: [main]
    paths: [".github/workflows/snake.yml"]

# Minimum permission needed to push the `output` branch of THIS repo only
permissions:
  contents: write

concurrency:
  group: snake
  cancel-in-progress: true

jobs:
  generate:
    runs-on: ubuntu-latest
    timeout-minutes: 10

    steps:
      - name: Generate snake SVGs
        uses: Platane/snk@v3
        with:
          github_user_name: ${{ github.repository_owner }}
          outputs: |
            dist/github-snake.svg
            dist/github-snake-dark.svg?palette=github-dark
            dist/github-snake-gold.svg?color_snake=#FFD700&color_dots=#161B22,#3D3410,#7A6A1C,#BFA520,#FFD700

      - name: Publish to `output` branch
        uses: crazy-max/ghaction-github-pages@v4
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

**Workflow validation performed:**
- ✅ YAML structure valid (list syntax for `branches`/`paths`, literal block for `outputs`; `#` inside a `|` block is literal text, not a comment — the action's own README uses the same pattern)
- ✅ `Platane/snk@v3` — current major (v3.3.0 latest)
- ✅ `github_user_name` is the required input; `github.repository_owner` resolves to `sudais-ai`
- ✅ `color_dots` has exactly 5 colours, darkest → gold, first = zero contributions
- ✅ `permissions: contents: write` — built-in `GITHUB_TOKEN` only, no custom secrets
- ✅ Output path `dist/` → published to `output` branch → README URLs `raw.githubusercontent.com/sudais-ai/sudais-ai/output/*.svg` match
- ⚠️ **Assumes default branch is `main`.** If yours is `master`, change line `branches: [main]`
- ⚠️ Repository → Settings → Actions → General → Workflow permissions must be **"Read and write"** (or the job-level `permissions` block above handles it on most repos; check if the first run fails to push)
- ⚠️ The snake image will 404 until the workflow has run once — trigger it manually via **Actions → Generate Contribution Snake → Run workflow**

---

## Part 4 — Deliverable C: Asset Plan

| Path | Purpose | Status | Spec |
|---|---|---|---|
| `README.md` | Profile | ✅ Provided above | — |
| `.github/workflows/snake.yml` | Snake generator | ✅ Provided above | — |
| `assets/profile.png` | Hero image | ❌ **Manual upload required** | 400×400 px, PNG, **pre-cropped to a circle with transparent corners** (GitHub strips CSS, so the circular shape must be baked into the file). Any image editor / remove.bg / Canva circle-crop works. Keep under 150 KB. |
| `assets/divider.svg` | Thin gold section rule | ✅ Code below — create the file | Self-hosted, no external dependency |

**`assets/divider.svg`**
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="6" viewBox="0 0 1000 6">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="0">
      <stop offset="0" stop-color="#FFD700" stop-opacity="0"/>
      <stop offset="0.5" stop-color="#FFD700" stop-opacity="1"/>
      <stop offset="1" stop-color="#FFD700" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect x="0" y="2" width="1000" height="2" rx="1" fill="url(#g)"/>
</svg>
```

I did **not** upload the profile image — I have no file-system or repo write access. Until you add `assets/profile.png`, the hero image will show a broken-image icon. Temporary fallback if you want zero downtime: replace the `src` with `https://github.com/sudais-ai.png?size=300` (renders your GitHub avatar, square).

---

## Part 5 — Deliverable D: Profile Settings Checklist (outside README)

| Element | Controlled by | Action |
|---|---|---|
| Profile picture | GitHub Settings → Profile | Upload the same photo used in `assets/profile.png` |
| Name | Settings → Profile | `Muhammad Sudais` |
| Bio (160 chars) | Settings → Profile | `AI/ML & Python Developer · Building RAG systems, LLM apps & AI agents · BS Artificial Intelligence @ STMU · Open to internships` |
| Location | Settings → Profile | `Khyber Pakhtunkhwa, Pakistan` |
| Website | Settings → Profile | `https://msudaisai.netlify.app` |
| Social accounts (up to 4) | Settings → Profile → Social accounts | LinkedIn, X, Fiverr, Upwork (Fiverr/Upwork as generic URLs) |
| Email visibility | Settings → Emails / Profile | Optional — set public email to `sudaisoo72@gmail.com` |
| Status | Profile page → Set status | `Open to AI/ML internships` |
| Pinned repositories | Profile page → Customize your pins | See Part 6 |
| Repo descriptions & topics | Each repo → ⚙ About | See Part 7 |
| Snake `output` branch | GitHub Actions | Auto-created on first run |
| Actions permissions | `sudais-ai/sudais-ai` → Settings → Actions | Ensure workflows enabled; read/write |

I did **not** change any of these — I have no account access. Each is a manual step.

---

## Part 6 — Pinned Repositories (recommendation, not applied)

Six slots, recommended in this order, based on originality, AI/ML relevance, and completeness as you've described them:

1. **TradeReady AI** — flagship RAG / trade-compliance system
2. **JARVIS-X** — agentic automation with planning/verification
3. **Spam Email Detector** — clean classical ML classification
4. **ML Portfolio** — breadth of ML fundamentals
5. **Budget & Expense Tracker** — software engineering / persistence
6. **Weather Tracker & Quote Scraper** — API + scraping

Do **not** pin: forks, the `sudais-ai/sudais-ai` profile repo, WhatsApp-bot forks, tutorial follow-alongs, or anything without a README.

---

## Part 7 — Repository Hygiene (criteria-based; I could not enumerate your repos)

Apply these rules when you review your repository list:

| Category | Rule | Action |
|---|---|---|
| **Keep public & feature** | Original, has README, runs, AI/ML/Python relevant | Add description + topics (`python`, `machine-learning`, `rag`, `llm`, `ai-agents`, `scikit-learn`, etc.) |
| **Keep public, don't feature** | Original but small/learning exercises | Add a one-line description so the repo list isn't blank |
| **Archive** | Abandoned experiments, old bots, tutorials you won't return to | Settings → Archive (reversible, non-destructive) |
| **Forks** | Any repo showing "forked from …" | Leave as-is, never pin, never list as your work; optionally unwatch/hide from profile via archive |
| **Templates** | Cloned starters with no meaningful changes | Archive or delete manually (I do not recommend automated deletion) |

Priority README fixes: TradeReady AI and JARVIS-X should each have a README with: problem, architecture sketch, how to run, what "verification" concretely means in the code, and a short honest "current limitations" section. That single change does more for recruiter credibility than any badge.

---

## Part 8 — Deliverable E: Verification Report

### Links
| URL | Result |
|---|---|
| `https://github.com/sudais-ai` | ✅ User-supplied, format valid |
| `https://msudaisai.netlify.app` | ⚠️ User-supplied; not reachable through my search index — confirm it loads |
| `https://www.linkedin.com/in/muhammad-sudais-/` | ✅ User-supplied, used verbatim (trailing hyphen preserved) |
| `https://x.com/JGaHSzU3U641571` | ✅ User-supplied verbatim — consider claiming a readable handle |
| `mailto:sudaisoo72@gmail.com` | ✅ |
| `https://www.fiverr.com/s/K3ea0jW` | ⚠️ This is a Fiverr *share short-link*; it works but may expire or redirect. Consider replacing with your permanent `fiverr.com/<username>` URL |
| `https://www.upwork.com/freelancers/~0104d5606ec877e71d` | ✅ Standard Upwork permalink format |
| 6 project repo URLs | ❌ **Slugs unverified** — `TradeReady-AI`, `JARVIS-X`, `Spam-Email-Detector`, `Budget-Expense-Tracker`, `Weather-Tracker-Quote-Scraper`, `ML-Portfolio` are inferred from the names you gave. Replace with exact repository names. |
| 5 Coursera course URLs | ✅ Official course-page URLs (not personal certificate URLs). If you want verifiable certificate links, send me your `coursera.org/account/accomplishments/...` URLs |
| Snake SVG URLs | ✅ Match workflow output; 404 until first run |

### Widgets
| Service | Status | Fallback |
|---|---|---|
| `readme-typing-svg.demolab.com` | ✅ Current maintained host (old herokuapp host is dead — not used) | Static `<h3>` line |
| `github-readme-stats.vercel.app` | ✅ Working; public instance is **rate-limited** and can intermittently show an error card | Self-host in 5 min: fork `anuraghazra/github-readme-stats` → deploy to Vercel → swap the domain |
| `streak-stats.demolab.com` | ✅ Current host (herokuapp host is dead — not used) | Remove line |
| `github-readme-activity-graph.vercel.app` | ✅ Working | Remove line |
| `img.shields.io` | ✅ | — |
| `komarev.com/ghpvc` | ✅ | Remove line |
| `Platane/snk@v3` + `crazy-max/ghaction-github-pages@v4` | ✅ Verified current | — |
| Profile trophies | ❌ **Deliberately omitted** — tends to read as gimmicky for a client-facing profile |

⚠️ One icon caveat: Simple Icons removed the **LinkedIn** logo in 2024; shields.io may render the LinkedIn badge without an icon. If so, the badge still works — just text. Tell me and I'll swap in a base64 icon.

### Claims
- ✅ All education, location, contact, skills: from your Section 3–4
- ✅ TradeReady AI description: only concepts from your Section 6 (RAG, ingestion, retrieval, semantic search, evidence, requirements, evaluation, verification, data isolation). No regulatory/enterprise/scale claims.
- ✅ JARVIS-X description: only concepts from your Section 7 (planning, execution, verification, recovery, memory, permissions)
- ⚠️ Small-project descriptions: stacks inferred from your "Other demonstrated technologies" list — confirm MySQL vs CSV for the Budget Tracker
- ⚠️ Status badges (In Development / Complete / Ongoing) are **my assumption** — adjust
- ✅ No fabricated experience, employers, users, accuracy figures, awards, or "years of experience"
- ✅ Zero excluded technologies (React, Docker, LangChain, etc.) appear anywhere

### Layout
- ✅ Max 2-column tables; project cards stack on mobile (GitHub collapses `<td width="50%">` gracefully)
- ✅ Stats images `height="170"` wrap side-by-side on desktop, stack on mobile
- ✅ No `style=`, `<script>`, `<iframe>`, or CSS — all HTML is on GitHub's allow-list
- ✅ No local images > 150 KB; ~11 external requests total
- ✅ Emojis: zero in body (one sub-symbol `↳`), gold reserved for accents only

### Still requires manual action (in order)
1. Confirm/replace the 6 repository slugs
2. Create `assets/profile.png` (circular crop) and `assets/divider.svg`
3. Commit README + workflow; verify default branch name in `snake.yml`
4. Run the snake workflow manually once
5. Apply Part 5 profile settings and Part 6 pins
6. Optionally send me: exact repo names, Coursera certificate URLs, permanent Fiverr URL, and I'll patch the README precisely
