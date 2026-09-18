import { useState } from "react";
import {
  ArrowUpRight,
  AtSign,
  BookOpen,
  Code2,
  Globe,
  Mail,
  Monitor,
  Moon,
  Play,
  Smartphone,
  Sun,
} from "lucide-react";
import { cn } from "../utils/cn";
import { CopyButton, Eyebrow, GhostButton, Tag } from "./ui";
import readmeRaw from "../../profile-repo/README.md?raw";

/* ------------------------------------------------------------------ content */

const AVATAR = "https://avatars.githubusercontent.com/u/203084465?s=256&v=4";

const TYPING =
  "https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=21&duration=2600&pause=900&color=FFD700&width=470&height=42&lines=AI+%2F+Machine+Learning+Developer;I+build+practical+RAG+systems;LLM+apps+with+retrieval+%2B+verification;Turning+ML+ideas+into+working+products";

const TYPING_FOOTER =
  "https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=17&duration=3400&pause=1200&color=FFD700&width=430&height=32&lines=Thanks+for+visiting.+Let%27s+build+something+useful.;Open+to+AI%2FML%2C+Python+and+software+engineering+work.";

const STREAK =
  "https://streak-stats.demolab.com/?user=sudais-ai&theme=dark&background=111111&border=FFD700&stroke=FFFFFF&ring=FFD700&fire=FFD700&currStreakNum=FFFFFF&sideNums=FFD700&currStreakLabel=FFD700&sideLabels=FFFFFF&dates=8B8B8B&border_radius=12";

const HEATMAP = "https://ghchart.rshah.org/FFD700/sudais-ai";

const shields = (label: string, msg: string, opts: { color?: string; logo?: string; big?: boolean } = {}) =>
  `https://img.shields.io/badge/${label}-${msg}-${opts.color ?? "1A1A1A"}?style=${
    opts.big ? "for-the-badge" : "flat-square"
  }&labelColor=111111${opts.logo ? `&logo=${opts.logo}&logoColor=${opts.color === "FFD700" ? "111111" : "FFD700"}` : ""}`;

const ctas = [
  { label: "Portfolio", msg: "msudaisai.netlify.app", logo: "netlify", href: "https://msudaisai.netlify.app" },
  { label: "LinkedIn", msg: "Connect", logo: "linkedin", href: "https://www.linkedin.com/in/muhammad-sudais-/" },
  { label: "Email", msg: "sudaisoo72%40gmail.com", logo: "gmail", href: "mailto:sudaisoo72@gmail.com" },
  { label: "GitHub", msg: "sudais--ai", logo: "github", href: "https://github.com/sudais-ai" },
  { label: "X", msg: "Follow", logo: "x", href: "https://x.com/JGaHSzU3U641571" },
];

const hire = [
  { label: "HIRE_ME", msg: "on_Fiverr", logo: "fiverr", href: "https://www.fiverr.com/s/K3ea0jW" },
  { label: "HIRE_ME", msg: "via_Upwork", logo: "upwork", href: "https://www.upwork.com/freelancers/~0104d5606ec877e71d" },
];

const projects = [
  {
    n: "1",
    name: "TradeReady AI",
    tag: "active",
    tone: "gold" as const,
    pitch: "Evidence-backed trade-compliance copilot. Import shipment documents, build a requirements checklist, and get per-requirement assessments that cite the exact source passage.",
    rows: [
      ["Problem", "Proving a shipment is ready means reading a pile of PDFs against rules — repetitive, easy to miss, hard to audit afterwards."],
      ["Approach", "Per-case ingestion (extract → chunk → embed → FTS5 index), requirement tracking, an LLM assessment that stores confidence + modelProvider + modelName, and evidence rows linking each verdict to a chunk."],
      ["Stack", "Next.js App Router · TypeScript · Prisma · SQLite + FTS5 · per-chunk embedding storage · hand-written CSS"],
      ["Also there", "Session auth with email verification and failed-login lockout, append-only audit log, /api/health, soft deletes, composite dashboard indexes, FTS5 rebuild script."],
      ["Honest limits", "No live users, no regulatory certification, no autonomous filing, no claimed accuracy percentage."],
    ],
    links: [
      { label: "SOURCE", href: "https://github.com/sudais-ai/TradeReadyAI", logo: "github" },
      { label: "LIVE_DEMO", href: "https://trade-ready-ai.vercel.app", logo: "vercel", gold: true },
    ],
  },
  {
    n: "2",
    name: "VindicAI  ·  repo `vind`",
    tag: "foundation phase",
    tone: "default" as const,
    pitch: "Research-and-case workspace where claims stay attached to their sources: organisations, workspaces, roles, cases, evidence, facts, claims, citations, drafts and an audit trail.",
    rows: [
      ["Problem", "AI research tools produce text nobody can verify. This starts at the data model: an assertion is only useful if it points at its evidence, its run and its version."],
      ["Approach", "Case → Evidence → Fact → Claim → Citation chains, provider-neutral embedding metadata, append-only audit helper, six roles across nine domains."],
      ["Stack", "TypeScript · React · Drizzle ORM · managed MySQL/TiDB · OAuth sign-in · S3-compatible metadata references"],
      ["Verified by", "7 test files / 16 tests and a real tenant-isolation test, recorded in committed phase reports that also list what is still mock-only."],
      ["Honest limits", "Email/password screens are explicitly mock preview flows; no real agent execution, email sending or production deployment claimed."],
    ],
    links: [
      { label: "SOURCE", href: "https://github.com/sudais-ai/vind", logo: "github" },
      { label: "ENGINEERING_REPORT", href: "https://github.com/sudais-ai/vind/blob/main/PHASE2_LIVE_TEST_REPORT.md", logo: "readthedocs", gold: true },
    ],
  },
  {
    n: "3",
    name: "Tool-Wear Detection",
    tag: "needs a write-up",
    tone: "default" as const,
    pitch: "Supervised learning on CNC machine sensor data — clean, explore, engineer features, train, compare, then read the errors instead of only the score.",
    rows: [
      ["Problem", "Replacing a worn tool early wastes money; replacing it late ruins a part. Sensor history makes the wear pattern learnable."],
      ["Approach", "One reproducible Jupyter notebook: loading and cleaning, EDA, feature work, train/test split, model comparison, error inspection."],
      ["Stack", "Python · pandas · NumPy · Matplotlib · scikit-learn · Jupyter"],
      ["Honest limits", "No metric quoted, because none could be read from the repository — the notebook still needs a README and a results table."],
    ],
    links: [
      { label: "SOURCE", href: "https://github.com/sudais-ai/Tool-Wear-Detection", logo: "github" },
      { label: "NOTEBOOK", href: "https://github.com/sudais-ai/Tool-Wear-Detection/blob/main/cnc-milling-machine-tool-wear-detection.ipynb", logo: "jupyter", gold: true },
    ],
  },
  {
    n: "4",
    name: "JARVIS-X",
    tag: "in progress · not published",
    tone: "warn" as const,
    pitch: "Desktop automation agent built on a plan → execute → verify → recover loop, with persistent memory and permission gates before anything touches the file system.",
    rows: [
      ["Status", "The public `jarvis-git` repo (plus two sibling `jar*` repos) is currently an empty placeholder, so there is no code to show you yet."],
      ["Why it is still listed", "Hiding it would make the profile look finished and less honest. Keeping it shows what you are working on and what is missing."],
      ["Next step", "Push the working code, add tests for the recovery path, document what actually works."],
    ],
    links: [{ label: "SOURCE", href: "https://github.com/sudais-ai/jarvis-git", logo: "github" }],
  },
];

const stackGroups = [
  {
    title: "LANGUAGES",
    kind: "skillicons" as const,
    src: "https://skillicons.dev/icons?i=python,java,js,html,css,php&theme=dark",
  },
  {
    title: "AI / MACHINE LEARNING",
    kind: "chips" as const,
    chips: [
      ["scikit--learn", "core", "scikitlearn"],
      ["NumPy", "core", "numpy"],
      ["Pandas", "core", "pandas"],
      ["Matplotlib", "core", "matplotlib"],
      ["Jupyter", "core", "jupyter"],
      ["Google_Colab", "core", "googlecolab"],
      ["classification_%26_regression", "core", ""],
      ["clustering", "core", ""],
      ["feature_engineering", "core", ""],
      ["model_evaluation", "core", ""],
      ["neural_network_foundations", "core", ""],
    ],
  },
  {
    title: "AI ENGINEERING — MAIN FOCUS",
    kind: "chips" as const,
    gold: true,
    chips: [
      ["RAG", "hybrid_retrieval", ""],
      ["LLM_integration", "confidence_%26_model_tracking", ""],
      ["AI_agents", "plan_%E2%86%92_execute_%E2%86%92_verify", ""],
      ["semantic_search", "embedding_+-_keyword", ""],
      ["document_processing", "extract_%E2%86%92_chunk_%E2%86%92_index", ""],
      ["retrieval", "FTS5_%2B_vectors", ""],
      ["evidence_grounding", "cited_chunks", ""],
      ["AI_evaluation", "output_verification", ""],
    ],
  },
  {
    title: "DATA & DATABASES",
    kind: "chips" as const,
    chips: [
      ["SQL", "core", "mysql"],
      ["MySQL", "applied", "mysql"],
      ["SQLite_%2B_FTS5", "applied", "sqlite"],
      ["CSV_%26_JSON_pipelines", "core", ""],
      ["schema_%26_index_design", "applied", ""],
    ],
  },
  {
    title: "WEB / APP ENGINEERING — EVIDENCED IN MY REPOS",
    kind: "mixed" as const,
    src: "https://skillicons.dev/icons?i=ts,react,nextjs,prisma,nodejs,npm&theme=dark",
    chips: [
      ["Drizzle_ORM", "applied", ""],
      ["BeautifulSoup", "scraping", ""],
      ["OpenWeatherMap_API", "applied", ""],
    ],
  },
  {
    title: "TOOLING & PLATFORMS",
    kind: "mixed" as const,
    src: "https://skillicons.dev/icons?i=git,github,vscode,npm&theme=dark",
    chips: [
      ["GitHub_Actions", "this_snake_workflow", "githubactions"],
      ["Prettier", "applied", "prettier"],
      ["pnpm", "applied", "pnpm"],
      ["Vercel", "deployment", "vercel"],
      ["Netlify", "portfolio_host", "netlify"],
      ["Windows", "dev_environment", "windows"],
    ],
  },
];

const skillsByCategory = [
  ["AI / ML", "Tabular modelling end to end: cleaning, feature engineering, train/test discipline, comparing models, reading errors instead of only the score. Notebook → documented script."],
  ["Python / data", "pandas and NumPy pipelines, CSV/JSON ingestion, scraping with BeautifulSoup, third-party REST APIs, small CLI utilities."],
  ["RAG / LLM systems", "Chunking strategies, embedding storage, hybrid retrieval, evidence-cited generation, storing model and confidence metadata so outputs can be audited."],
  ["Software development", "Git workflow, typed TypeScript in application code, schema and index design, soft deletes, ownership-scoped queries, health endpoints, migration scripts."],
  ["Databases", "MySQL and SQLite: relational modelling, joins and aggregation, query shapes that avoid redundant sort steps."],
  ["Verification habits", "Written phase test reports that separate “tested”, “partially tested” and “not claimed yet”. You can read them in vind."],
];

const learning = [
  ["Advanced RAG", "chunk overlap and windowing, hybrid ranking, knowing when a reranker earns its latency"],
  ["Retrieval evaluation", "measuring whether the right passage was found, not whether the answer looked plausible"],
  ["LLM output verification", "structured verdicts, confidence reporting, citation checking, prompt regression tests"],
  ["AI agent reliability", "retry and recovery semantics, tool-permission gates, memory you can inspect"],
  ["Applied ML depth", "gradient boosting, calibration, class imbalance, leakage hunting"],
  ["Production habits", "logging, migrations under real constraints, deployment configuration on Vercel"],
];

/* ------------------------------------------------------------------ helpers */

function Img({ src, alt, w, full }: { src: string; alt: string; w?: number; full?: boolean }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={cn("inline-block h-auto align-middle", full ? "w-full" : "")}
      style={full ? undefined : w ? { width: `${w}px`, maxWidth: "100%" } : { maxWidth: "100%" }}
    />
  );
}

function H2({ children, dark }: { children: string; dark: boolean }) {
  return (
    <h2
      className={cn(
        "mt-9 mb-3 font-display text-[19px] font-semibold tracking-tight",
        dark ? "text-white" : "text-[#1f2328]",
      )}
    >
      {children}
    </h2>
  );
}

/* ------------------------------------------------------------------- widget */

export default function ProfilePreview() {
  const [dark, setDark] = useState(true);
  const [mobile, setMobile] = useState(false);
  const [raw, setRaw] = useState(false);
  const [openHeat, setOpenHeat] = useState(false);
  const [openSnake, setOpenSnake] = useState(false);

  const frame = dark
    ? "bg-[#0d1117] text-[#e6edf3] border-[#30363d]"
    : "bg-[#ffffff] text-[#1f2328] border-[#d0d7de]";

  const soft = dark ? "text-[#9198a1]" : "text-[#59636e]";
  const card = dark ? "bg-[#11151b] border-[#262c36]" : "bg-[#f6f8fa] border-[#d0d7de]";
  const link = dark ? "text-[#ffd700]" : "text-[#0969da]";

  return (
    <section>
      {/* toolbar */}
      <div className="sticky top-[57px] z-30 -mx-1 mb-5 flex flex-wrap items-center gap-2 bg-ink/85 px-1 py-3 backdrop-blur-md">
        <Eyebrow>live render · same URLs as GitHub</Eyebrow>
        <div className="ml-auto flex flex-wrap items-center gap-2">
          <GhostButton onClick={() => setDark((v) => !v)} title="Toggle GitHub theme">
            {dark ? <Sun size={12} /> : <Moon size={12} />} {dark ? "light" : "dark"}
          </GhostButton>
          <GhostButton onClick={() => setMobile((v) => !v)} title="Toggle viewport width">
            {mobile ? <Monitor size={12} /> : <Smartphone size={12} />} {mobile ? "desktop" : "375px"}
          </GhostButton>
          <GhostButton onClick={() => setRaw((v) => !v)} active={raw} title="Show README.md source">
            <BookOpen size={12} /> {raw ? "rendered" : "source"}
          </GhostButton>
          <CopyButton text={readmeRaw} label="copy README.md" />
        </div>
      </div>

      <div className={cn("mx-auto transition-[max-width] duration-500", mobile ? "max-w-[375px]" : "max-w-none")}>
        {/* github chrome */}
        <div className={cn("overflow-hidden rounded-xl border shadow-[0_40px_120px_-60px_rgba(0,0,0,0.9)]", frame)}>
          <div
            className={cn(
              "flex items-center gap-2 border-b px-4 py-2.5 font-mono text-[11.5px]",
              dark ? "border-[#21262d] bg-[#010409]/60" : "border-[#d0d7de] bg-[#f6f8fa]",
            )}
          >
            <Code2 size={13} className={dark ? "text-[#e6edf3]" : "text-[#1f2328]"} />
            <span className={link}>sudais-ai</span>
            <span className={soft}>/</span>
            <span className={link}>sudais-ai</span>
            <Tag tone="muted" className="ml-2 !border-current/25">
              Public
            </Tag>
            <span className={cn("ml-auto hidden sm:inline", soft)}>README.md</span>
          </div>

          {raw ? (
            <pre
              className={cn(
                "max-h-[72vh] overflow-auto p-4 text-left font-mono text-[11px] leading-[1.65] whitespace-pre-wrap",
                dark ? "bg-[#010409] text-[#c9d1d9]" : "bg-[#f6f8fa] text-[#1f2328]",
              )}
            >
              {readmeRaw}
            </pre>
          ) : (
            <article className="markdown-body px-5 py-6 text-left sm:px-8 sm:py-9">
              {/* ---------------------------------------------------- hero */}
              <div className="text-center">
                <a href="https://github.com/sudais-ai" className="inline-block">
                  <span className="pulsering inline-block rounded-full ring-2 ring-[#FFD700]/70 p-[3px]">
                    <img
                      src={AVATAR}
                      alt="Muhammad Sudais"
                      className="h-[104px] w-[104px] rounded-full object-cover sm:h-[118px] sm:w-[118px]"
                    />
                  </span>
                </a>

                <h1 className="mt-4 font-display text-[30px] leading-tight font-bold tracking-tight sm:text-[38px]">
                  Muhammad Sudais
                </h1>

                <p className="mx-auto mt-2 max-w-[52ch] text-[13.5px] leading-relaxed">
                  <strong>AI / Machine Learning · Python Developer</strong>
                  <br />
                  <span className={soft}>
                    BS Artificial Intelligence · Shifa Tameer-e-Millat University (Sept 2024 – June 2028)
                    <br />
                    Malakand Division, Khyber Pakhtunkhwa, Pakistan
                  </span>
                </p>

                <div className="mt-4 flex justify-center">
                  <Img src={TYPING} alt="animated headline" w={470} />
                </div>

                <p className="mx-auto mt-3 max-w-[54ch] text-[14px] leading-relaxed">
                  I build applied-AI systems where the answer ships with its evidence.
                  <br className="hidden sm:block" /> Retrieval, document pipelines and output verification — mostly
                  in Python.
                </p>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
                  <Img src={shields("status", "open_to_AI%2FML_internships", { color: "FFD700" })} alt="status" />
                  <Img src={shields("timezone", "PK%20GMT%2B5")} alt="timezone" />
                  <Img src={shields("focus", "RAG%20%C2%B7%20LLM%20apps%20%C2%B7%20ML")} alt="focus" />
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
                  {ctas.map((c) => (
                    <a key={c.label} href={c.href} target="_blank" rel="noreferrer">
                      <Img src={shields(c.label, c.msg, { logo: c.logo, big: true })} alt={c.label} />
                    </a>
                  ))}
                </div>

                <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5">
                  {hire.map((c) => (
                    <a key={c.msg} href={c.href} target="_blank" rel="noreferrer">
                      <Img src={shields(c.label, c.msg, { logo: c.logo, color: "FFD700", big: true })} alt="hire me" />
                    </a>
                  ))}
                </div>

                <nav
                  className={cn(
                    "mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 font-mono text-[11px]",
                    soft,
                  )}
                >
                  {["About", "Selected work", "Tech stack", "Skills", "Learning", "Certificates", "Analytics", "Contact"].map(
                    (x) => (
                      <a key={x} href={`#${x.toLowerCase().replace(/ /g, "-")}`} className={cn("hover:underline", link)}>
                        {x}
                      </a>
                    ),
                  )}
                </nav>
              </div>

              <hr className={cn("my-8 border-0 border-t", dark ? "border-[#21262d]" : "border-[#d0d7de]")} />

              {/* ---------------------------------------------------- about */}
              <div id="about">
                <H2 dark={dark}>About</H2>
                <p className="text-[14px] leading-[1.75]">
                  I am a BS Artificial Intelligence student who spends most of his time building, not collecting course
                  links. My work centres on retrieval-augmented systems: documents go in, get parsed, chunked, embedded
                  and indexed, and every generated answer keeps a pointer back to the passage it came from.
                </p>
                <ul className="mt-3 space-y-2 text-[14px] leading-[1.7]">
                  {[
                    ["Grounding beats fluency.", "An AI verdict on a requirement is stored with the document chunk it used, a relevance score and a content snapshot — so a user reads the source instead of trusting the model."],
                    ["Pipelines must admit failure.", "Processing runs as durable jobs with a state machine and stale-lock recovery on restart, so a crashed worker never leaves a case stuck on “processing”."],
                    ["Retrieval is more than embeddings.", "A SQLite FTS5 index sits next to stored chunk embeddings (provider, model, dimensions, vector) so keyword and vector recall can be compared."],
                    ["Ownership is enforced server-side.", "Every read path filters on the owner id, soft deletes keep history recoverable, security-relevant actions land in an append-only audit log. No admin backdoor role."],
                    ["Written proof over screenshots.", "Phase test reports in the repos state what passed, what is broken, and what is deliberately not claimed yet."],
                  ].map(([b, t]) => (
                    <li key={b} className="flex gap-2.5">
                      <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#FFD700]" />
                      <span>
                        <strong>{b}</strong> {t}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className={cn("mt-3 text-[13.5px] leading-relaxed", soft)}>
                  I am early in my career and I would rather say so plainly: no production employment, no client-count
                  or revenue claims, no enterprise deployments. What you can inspect here is code, schemas, evaluation
                  structures and engineering notes.
                </p>
              </div>

              {/* ---------------------------------------------------- projects */}
              <div id="selected-work">
                <H2 dark={dark}>Selected work</H2>
                <div className="space-y-4">
                  {projects.map((p) => (
                    <div key={p.n} className={cn("rounded-lg border p-4 sm:p-5", card)}>
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-[11px] text-[#FFD700]">0{p.n}</span>
                        <h3 className="font-display text-[16px] font-semibold tracking-tight">{p.name.replace(/ · repo `vind`/, " — repo vind")}</h3>
                        <Tag tone={p.tone === "warn" ? "warn" : p.tone === "gold" ? "gold" : "muted"} className="ml-auto">
                          {p.tag}
                        </Tag>
                      </div>
                      <p className="mt-2 text-[13.5px] leading-relaxed">{p.pitch}</p>
                      <dl className="mt-3 space-y-1.5">
                        {p.rows.map(([k, v]) => (
                          <div key={k} className="grid gap-x-2 sm:grid-cols-[112px_1fr]">
                            <dt className={cn("font-mono text-[10.5px] tracking-wider uppercase", soft)}>{k}</dt>
                            <dd className="text-[13px] leading-[1.65]">{v}</dd>
                          </div>
                        ))}
                      </dl>
                      <div className="mt-3.5 flex flex-wrap gap-1.5">
                        {p.links.map((l) => {
                          const link2 = l as { label: string; href: string; logo: string; gold?: boolean; msg?: string };
                          const tail = link2.msg
                            ?? (link2.href.includes("github.com")
                              ? decodeURIComponent(link2.href.split("github.com/")[1] ?? "repo").replace("sudais-ai/", "")
                              : link2.href.replace(/^https?:\/\//, "").replace(/\/$/, ""));
                          const msg = encodeURIComponent(tail).replace(/-/g, "--").replace(/%2F/g, "%2F");
                          return (
                            <a key={link2.label} href={link2.href} target="_blank" rel="noreferrer">
                              <Img
                                src={shields(link2.label, msg, {
                                  color: link2.gold ? "FFD700" : undefined,
                                  logo: link2.logo,
                                })}
                                alt={link2.label}
                              />
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>

                <div className={cn("mt-4 overflow-x-auto rounded-lg border", card)}>
                  <table className="w-full text-left text-[12.5px]">
                    <thead>
                      <tr className={cn("font-mono text-[10px] tracking-widest uppercase", soft)}>
                        <th className="px-3 py-2 font-normal">also in the workshop</th>
                        <th className="px-3 py-2 font-normal">what it is</th>
                        <th className="px-3 py-2 font-normal">state</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["University Management System", "Python application with HTML/CSS screens; CRUD-style academic project", "needs a README + rename (typo)"],
                        ["AI Video Summarizer", "Python prototype: transcript → summary", "early, undocumented"],
                        ["ML practice builds", "classification, regression, clustering, scraping and CSV pipelines (spam classifier, expense tracker, weather API + quote scraper)", "no public repo yet — nothing linked"],
                      ].map((r) => (
                        <tr key={r[0]} className={cn("border-t align-top", dark ? "border-[#21262d]" : "border-[#d0d7de]")}>
                          <td className="px-3 py-2 font-semibold">{r[0]}</td>
                          <td className={cn("px-3 py-2", soft)}>{r[1]}</td>
                          <td className="px-3 py-2">{r[2]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* ---------------------------------------------------- stack */}
              <div id="tech-stack">
                <H2 dark={dark}>Tech stack</H2>
                <p className={cn("text-[13px]", soft)}>
                  <code>core</code> = used in work of mine you can inspect · <code>applied</code> = used inside a
                  specific project of mine · <code>learning</code> = current study, not professional expertise
                </p>
                <div className="mt-4 space-y-4">
                  {stackGroups.map((g) => {
                    const chips = "chips" in g && g.chips ? g.chips : [];
                    const gold = "gold" in g && g.gold;
                    return (
                      <div key={g.title} className={cn("rounded-lg border p-3.5 sm:p-4", card)}>
                        <p className="font-mono text-[10.5px] tracking-[0.2em] uppercase" style={{ color: gold ? "#FFD700" : undefined }}>
                          <span className={gold ? "" : soft}>{g.title}</span>
                        </p>
                        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
                          {"src" in g && g.src && <Img src={g.src} alt={g.title} />}
                          {chips.map(([l, m, logo]) => (
                            <Img
                              key={l}
                              src={shields(l, m, { logo: logo || undefined, color: gold ? "FFD700" : undefined })}
                              alt={l}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <p className={cn("mt-3 text-center text-[12.5px] italic", soft)}>
                  Not on this list on purpose: Docker, Kubernetes, AWS/Azure/GCP, LangChain, LlamaIndex, FastAPI,
                  Express, MongoDB, WebSockets, TensorFlow/PyTorch at production level. No inspectable shipped work
                  with them yet.
                </p>
              </div>

              {/* ---------------------------------------------------- skills */}
              <div id="skills">
                <H2 dark={dark}>Skills by category</H2>
                <p className={cn("text-[13px]", soft)}>
                  Not <em>what is installed</em> — <em>what I can be trusted to deliver</em>.
                </p>
                <div className={cn("mt-3 grid gap-2 sm:grid-cols-2")}>
                  {skillsByCategory.map(([k, v]) => (
                    <div key={k} className={cn("rounded-lg border p-3.5", card)}>
                      <p className="font-display text-[13.5px] font-semibold text-[#FFD700]">{k}</p>
                      <p className="mt-1 text-[12.5px] leading-[1.6]">{v}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ---------------------------------------------------- learning */}
              <div id="learning">
                <H2 dark={dark}>Currently learning</H2>
                <ul className="mt-1 space-y-2">
                  {learning.map(([k, v], i) => (
                    <li key={k} className="flex gap-3">
                      <span className="mt-[2px] font-mono text-[10.5px] text-[#FFD700]">0{i + 1}</span>
                      <span className="text-[13.5px] leading-[1.6]">
                        <strong>{k}</strong> <span className={soft}>— {v}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <p className={cn("mt-3 text-[12.5px]", soft)}>
                  Deliberately not claimed: cloud certifications, container orchestration, “AI research” work.
                </p>
              </div>

              {/* ---------------------------------------------------- open to */}
              <div id="open-to">
                <H2 dark={dark}>Open to</H2>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "AI / ML internships",
                    "Python development",
                    "RAG system builds",
                    "LLM-powered apps",
                    "AI agent tooling",
                    "notebook → maintained project",
                    "open-source collaboration",
                    "freelance AI briefs",
                  ].map((x) => (
                    <span
                      key={x}
                      className={cn(
                        "rounded-md border px-2.5 py-1 text-[12px] font-mono",
                        dark ? "border-[#30363d] bg-[#11151b]" : "border-[#d0d7de] bg-[#f6f8fa]",
                      )}
                    >
                      {x}
                    </span>
                  ))}
                </div>
              </div>

              {/* ---------------------------------------------------- certs */}
              <div id="certificates">
                <H2 dark={dark}>Coursework &amp; certificates</H2>
                <ul className="space-y-2 text-[13.5px]">
                  <li>
                    <a
                      className={cn("font-semibold hover:underline", link)}
                      href="https://www.coursera.org/specializations/machine-learning-introduction"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Machine Learning Specialization
                    </a>{" "}
                    — DeepLearning.AI × Stanford Online · Supervised Learning (Regression &amp; Classification),
                    Advanced Learning Algorithms, Unsupervised Learning / Recommenders / RL
                  </li>
                  <li>
                    <a
                      className={cn("font-semibold hover:underline", link)}
                      href="https://www.coursera.org/specializations/python"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Programming for Everybody (Getting Started with Python)
                    </a>{" "}
                    — University of Michigan, Python for Everybody Specialization
                  </li>
                  <li>
                    <span className="font-semibold">BS Artificial Intelligence</span> — Shifa Tameer-e-Millat
                    University, Sept 2024 → June 2028
                  </li>
                </ul>
              </div>

              {/* ---------------------------------------------------- analytics */}
              <div id="analytics">
                <H2 dark={dark}>GitHub analytics</H2>
                <p className={cn("text-[13px]", soft)}>
                  Live widgets, not hand-typed numbers. Dead public instances (readme-stats, trophies, activity-graph)
                  were tested and excluded.
                </p>
                <div className="mt-3 flex justify-center">
                  <Img src={STREAK} alt="contribution stats" w={430} full />
                </div>
                <p className={cn("mt-3 text-center text-[12.5px]", soft)}>
                  A large share of my public history is old bot experimentation and forks. Honest history, not a
                  portfolio — the professional claims come only from the repos above.
                </p>

                {[
                  {
                    k: "Contribution heatmap",
                    open: openHeat,
                    set: setOpenHeat,
                    body: <Img src={HEATMAP} alt="contribution heatmap" full />,
                  },
                  {
                    k: "Snake — nightly GitHub Actions build",
                    open: openSnake,
                    set: setOpenSnake,
                    body: (
                      <div className="text-left">
                        <div className={cn("rounded-md border p-3 text-[12px]", dark ? "border-[#30363d]" : "border-[#d0d7de]")}>
                          <p className={soft}>
                            <code>Platane/snk/svg-only@v3</code> renders the grid → published to the{" "}
                            <code>output</code> branch by <code>crazy-max/ghaction-github-pages@v5</code>. Light, dark
                            and a gold-palette variant are produced.
                          </p>
                          <p className="mt-2 flex items-center gap-1.5 font-mono text-[11px]">
                            <Play size={11} className="text-[#FFD700]" />
                            <span className={soft}>
                              image appears after the first run — see the setup checklist
                            </span>
                          </p>
                        </div>
                      </div>
                    ),
                  },
                ].map((d) => (
                  <div key={d.k} className={cn("mt-3 rounded-lg border", card)}>
                    <button
                      type="button"
                      onClick={() => d.set(!d.open)}
                      className="flex w-full items-center gap-2 px-3.5 py-2.5 text-left font-mono text-[11.5px] tracking-wide"
                    >
                      <span className={cn("transition-transform duration-200", d.open && "rotate-90")}>▸</span>
                      <strong className="text-[12.5px] font-sans">{d.k}</strong>
                    </button>
                    {d.open && <div className="px-3.5 pb-3.5">{d.body}</div>}
                  </div>
                ))}
              </div>

              {/* ---------------------------------------------------- contact */}
              <div id="contact" className="pt-2 text-center">
                <H2 dark={dark}>Contact</H2>
                <div className="flex flex-wrap items-center justify-center gap-1.5">
                  {ctas.slice(0, 4).map((c) => (
                    <a key={`c-${c.label}`} href={c.href} target="_blank" rel="noreferrer">
                      <Img src={shields(c.label, c.msg, { logo: c.logo, big: true })} alt={c.label} />
                    </a>
                  ))}
                </div>
                <div className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5">
                  {hire.map((c) => (
                    <a key={`h-${c.msg}`} href={c.href} target="_blank" rel="noreferrer">
                      <Img src={shields(c.label, c.msg, { logo: c.logo, color: "FFD700", big: true })} alt="hire me" />
                    </a>
                  ))}
                </div>
                <p className={cn("mx-auto mt-4 max-w-[46ch] text-[12.5px]", soft)}>
                  Best first message: one paragraph on the problem, the data you have, and what “verified” should mean
                  for the output.
                </p>
                <div className="mt-5 flex justify-center">
                  <Img src={TYPING_FOOTER} alt="closing line" w={430} />
                </div>
                <p className={cn("mt-4 font-mono text-[10.5px] tracking-wide", soft)}>
                  Muhammad Sudais · AI / ML · Python · Malakand Division, KP, Pakistan · GMT+5
                  <br />
                  links and claims last audited 18 Sep 2026
                </p>
              </div>
            </article>
          )}
        </div>
      </div>

      <p className={cn("mx-auto mt-4 max-w-[70ch] text-center text-[12px] leading-relaxed", "text-muted")}>
        GitHub strips custom CSS from READMEs, so this dark canvas is <em className="text-white/80 not-italic">your viewer's
        theme</em>, not something the file controls. That is exactly why every badge, chip and widget here carries its own
        dark background — flip to <button className="text-gold underline decoration-dotted" onClick={() => setDark(false)}>light</button> and the layout keeps its
        identity. One honest difference: this frame rounds the portrait and tints the page; GitHub cannot. The README
        therefore relies on the square avatar plus dark widgets, and a circular crop only appears if you upload a
        pre-cropped <code className="font-mono text-white/70">assets/profile.png</code> with transparent padding.{" "}
        <a className="inline-flex items-center gap-1 text-gold hover:underline" href="#files">
          Files tab →
        </a>
      </p>

      <div className="mt-3 flex flex-wrap items-center justify-center gap-2">
        <a
          href="https://github.com/sudais-ai/sudais-ai"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-gold/40 hover:text-white"
        >
          <Code2 size={12} /> target repository <ArrowUpRight size={12} />
        </a>
        <a
          href="mailto:sudaisoo72@gmail.com"
          className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-gold/40 hover:text-white"
        >
          <Mail size={12} /> sudaisoo72@gmail.com <Globe size={12} className="text-gold/70" />
        </a>
        <a
          href="https://www.linkedin.com/in/muhammad-sudais-/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-panel2 px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-gold/40 hover:text-white"
        >
          <AtSign size={12} /> muhammad-sudais- <ArrowUpRight size={12} />
        </a>
      </div>
    </section>
  );
}
