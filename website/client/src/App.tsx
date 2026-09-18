import { useEffect, useMemo, useState } from "react";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Bell,
  Check,
  ChevronRight,
  CircleHelp,
  Clipboard,
  Clapperboard,
  Code2,
  Copy,
  ExternalLink,
  FileCode2,
  Github,
  Globe2,
  Layers3,
  LayoutDashboard,
  Link2,
  Menu,
  MoreHorizontal,
  Play,
  Plus,
  Rocket,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  Timer,
  WandSparkles,
  X,
  Zap,
} from "lucide-react";

type ViewKey = "overview" | "video-generator" | "profile" | "audit";

type NavItem = {
  key: ViewKey;
  label: string;
  icon: typeof LayoutDashboard;
  badge?: string;
};

const navItems: NavItem[] = [
  { key: "overview", label: "Overview", icon: LayoutDashboard },
  { key: "video-generator", label: "Video generator", icon: Clapperboard, badge: "new" },
  { key: "profile", label: "Profile preview", icon: Github },
  { key: "audit", label: "Verification", icon: ShieldCheck },
];

const stats = [
  { label: "Public repositories", value: "56", delta: "+4 this month", icon: Code2 },
  { label: "Profile strength", value: "92%", delta: "Excellent", icon: BarChart3 },
  { label: "Checks logged", value: "37", delta: "All systems green", icon: ShieldCheck },
  { label: "Featured projects", value: "04", delta: "Recruiter-ready", icon: Rocket },
];

const projects = [
  { name: "TradeReady AI", tag: "Active build", tone: "gold", description: "Evidence-backed trade compliance copilot with retrieval and citations.", stack: ["Next.js", "Prisma", "FTS5"], progress: 78 },
  { name: "VindicAI", tag: "Foundation phase", tone: "violet", description: "Research workspace where every claim stays attached to its evidence.", stack: ["React", "Drizzle", "MySQL"], progress: 56 },
  { name: "Tool-Wear Detection", tag: "Documented", tone: "blue", description: "Supervised learning notebook for CNC machine sensor histories.", stack: ["Python", "pandas", "sklearn"], progress: 88 },
];

const checks = [
  { label: "GitHub profile", note: "56 public repositories · main branch", status: "Verified" },
  { label: "Live links", note: "Portfolio, LinkedIn, X, email", status: "Verified" },
  { label: "Animated widgets", note: "Typing line, streaks, contribution heatmap", status: "Verified" },
  { label: "Project claims", note: "Evidence-backed descriptions only", status: "Verified" },
];

const formats = [
  { label: "Square", value: "1:1", size: "1080 × 1080" },
  { label: "Landscape", value: "16:9", size: "1920 × 1080" },
  { label: "Portrait", value: "9:16", size: "1080 × 1920" },
];

const videoStyles = [
  { label: "Editorial", description: "Crisp type, calm motion", accent: "linear-gradient(135deg,#f9d66a,#6c4d18)" },
  { label: "Product launch", description: "Fast cuts, bold energy", accent: "linear-gradient(135deg,#f4b7a7,#832f2a)" },
  { label: "Minimal tech", description: "Clean grids, quiet depth", accent: "linear-gradient(135deg,#a9c3bb,#274943)" },
];

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function navigateTo(path: string) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function Pill({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "gold" | "green" | "blue" | "violet" }) {
  return <span className={cn("pill", `pill-${tone}`)}>{children}</span>;
}

function SectionHeading({ eyebrow, title, action }: { eyebrow: string; title: string; action?: React.ReactNode }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {action}
    </div>
  );
}

function Sidebar({ active, onNavigate, mobileOpen, onClose }: { active: ViewKey; onNavigate: (key: ViewKey) => void; mobileOpen: boolean; onClose: () => void }) {
  return (
    <aside className={cn("sidebar", mobileOpen && "sidebar-open")}>
      <div className="sidebar-top">
        <div className="brand-mark"><Sparkles size={17} strokeWidth={2.4} /></div>
        <div className="brand-copy"><strong>sudais<span>/</span>ai</strong><small>profile studio</small></div>
        <button className="icon-button mobile-close" onClick={onClose} aria-label="Close navigation"><X size={18} /></button>
      </div>

      <div className="workspace-card">
        <div className="workspace-avatar">SA</div>
        <div className="workspace-copy"><strong>Muhammad Sudais</strong><span>Personal workspace</span></div>
        <ChevronRight size={15} className="muted-icon" />
      </div>

      <p className="nav-label">WORKSPACE</p>
      <nav className="main-nav" aria-label="Workspace navigation">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.key;
          return (
            <button key={item.key} className={cn("nav-item", isActive && "nav-item-active")} onClick={() => onNavigate(item.key)}>
              <Icon size={17} strokeWidth={isActive ? 2.2 : 1.8} />
              <span>{item.label}</span>
              {item.badge && <span className="nav-badge">{item.badge}</span>}
              {isActive && <span className="active-bar" />}
            </button>
          );
        })}
      </nav>

      <p className="nav-label nav-label-spaced">TOOLS</p>
      <div className="secondary-nav">
        <a href="https://github.com/sudais-ai/sudais-ai" target="_blank" rel="noreferrer"><Github size={16} /> Repository <ExternalLink size={13} className="external-icon" /></a>
        <a href="https://github.com/sudais-ai" target="_blank" rel="noreferrer"><Globe2 size={16} /> Public profile <ExternalLink size={13} className="external-icon" /></a>
        <button onClick={() => alert("Settings are ready for the next studio iteration.")}><Settings2 size={16} /> Settings <span className="coming-soon">soon</span></button>
      </div>

      <div className="sidebar-footer">
        <div className="status-line"><span className="status-dot" /> All systems operational</div>
        <div className="sidebar-footer-row"><span>Last synced</span><strong>2 min ago</strong></div>
        <div className="sidebar-footer-row"><span>Workspace plan</span><strong className="accent-text">Studio</strong></div>
      </div>
    </aside>
  );
}

function Topbar({ title, onMenu, onCommand }: { title: string; onMenu: () => void; onCommand: () => void }) {
  return (
    <header className="topbar">
      <div className="topbar-left"><button className="icon-button menu-button" onClick={onMenu} aria-label="Open navigation"><Menu size={20} /></button><span className="breadcrumb">Workspace <ChevronRight size={13} /> <strong>{title}</strong></span></div>
      <div className="topbar-actions">
        <button className="command-button" onClick={onCommand}><Search size={15} /><span>Quick search</span><kbd>⌘ K</kbd></button>
        <button className="icon-button" onClick={() => alert("You're all caught up.")} aria-label="Notifications"><Bell size={17} /><span className="notification-dot" /></button>
        <div className="top-avatar">MS</div>
      </div>
    </header>
  );
}

function Overview({ onNavigate }: { onNavigate: (key: ViewKey) => void }) {
  return (
    <div className="page-stack page-overview">
      <section className="hero-card">
        <div className="hero-copy">
          <Pill tone="gold"><span className="live-dot" /> Live workspace</Pill>
          <h1>Your profile,<br /><em>made unmistakable.</em></h1>
          <p>A polished home for your engineering work — designed to make the right details impossible to miss.</p>
          <div className="hero-actions"><button className="primary-button" onClick={() => onNavigate("profile")}><Play size={15} fill="currentColor" /> Preview profile <ArrowUpRight size={15} /></button><button className="quiet-button" onClick={() => onNavigate("video-generator")}><Clapperboard size={15} /> Open video studio</button></div>
          <div className="hero-meta"><span><span className="check-circle"><Check size={11} /></span> Synced with GitHub</span><span><Timer size={14} /> Updated 2 min ago</span></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-orbit orbit-three" />
          <div className="art-core"><Sparkles size={30} /></div>
          <span className="art-chip chip-one">retrieval</span><span className="art-chip chip-two">verify()</span><span className="art-chip chip-three">ship →</span>
          <div className="art-code"><span className="code-prompt">$</span> build something useful<span className="blink-caret">_</span></div>
        </div>
      </section>

      <section className="stats-grid">
        {stats.map((stat) => { const Icon = stat.icon; return <div className="stat-card" key={stat.label}><div className="stat-icon"><Icon size={17} /></div><p>{stat.label}</p><div className="stat-value">{stat.value}</div><span className="stat-delta">{stat.delta}</span></div>; })}
      </section>

      <div className="content-grid">
        <section className="surface-card projects-card">
          <SectionHeading eyebrow="Selected work" title="Projects with a point of view" action={<button className="text-button" onClick={() => onNavigate("profile")}>View all <ArrowUpRight size={14} /></button>} />
          <div className="project-list">{projects.map((project) => <ProjectRow project={project} key={project.name} />)}</div>
        </section>
        <section className="surface-card readiness-card">
          <SectionHeading eyebrow="Publish readiness" title="You are nearly there" />
          <div className="readiness-meter"><div className="meter-number">92<span>%</span></div><div className="meter-copy"><strong>Excellent shape</strong><p>Just a few human clicks left before this profile is recruiter-ready.</p></div></div>
          <div className="progress-track"><span style={{ width: "92%" }} /></div>
          <div className="readiness-list">{checks.slice(0, 3).map((check) => <div className="readiness-row" key={check.label}><span className="status-check"><Check size={12} /></span><div><strong>{check.label}</strong><small>{check.note}</small></div><span className="verified-label">{check.status}</span></div>)}</div>
          <button className="outline-button full-button" onClick={() => onNavigate("audit")}>Open verification report <ArrowUpRight size={15} /></button>
        </section>
      </div>

      <section className="quote-strip"><div className="quote-mark">“</div><p>Nothing was invented to fill space. The strongest profile is the one that makes every line earn its place.</p><span className="quote-caption">— profile principle / 01</span></section>
    </div>
  );
}

function ProjectRow({ project }: { project: typeof projects[number] }) {
  return <div className="project-row"><div className={cn("project-logo", `project-${project.tone}`)}>{project.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</div><div className="project-main"><div className="project-title-row"><strong>{project.name}</strong><Pill tone={project.tone === "gold" ? "gold" : project.tone === "violet" ? "violet" : "blue"}>{project.tag}</Pill></div><p>{project.description}</p><div className="project-footer"><div className="stack-tags">{project.stack.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-progress"><span>{project.progress}%</span><i><b style={{ width: `${project.progress}%` }} /></i></div></div></div><button className="row-action" aria-label={`Open ${project.name}`}><ArrowUpRight size={16} /></button></div>;
}

function ProfilePreview({ onNavigate }: { onNavigate: (key: ViewKey) => void }) {
  const [darkMode, setDarkMode] = useState(true);
  const [copied, setCopied] = useState(false);
  return <div className="page-stack page-preview">
    <div className="page-intro"><div><Pill tone="green"><span className="live-dot" /> Preview mode</Pill><h1>Profile preview</h1><p>See exactly how your GitHub profile reads before you paste the final README.</p></div><div className="intro-actions"><button className={cn("outline-button", darkMode && "active-control")} onClick={() => setDarkMode(true)}>Dark</button><button className={cn("outline-button", !darkMode && "active-control")} onClick={() => setDarkMode(false)}>Light</button><button className="primary-button" onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 1400); }}><Copy size={15} /> {copied ? "Copied" : "Copy README"}</button></div></div>
    <section className={cn("github-preview", darkMode ? "github-dark" : "github-light")}>
      <div className="github-preview-bar"><div className="github-breadcrumb"><Github size={17} /> sudais-ai <span>/</span> <strong>sudais-ai</strong></div><div className="preview-toolbar"><span className="toolbar-dot" /><span>README.md</span><MoreHorizontal size={16} /></div></div>
      <div className="github-body"><div className="profile-header"><img src="https://avatars.githubusercontent.com/u/203084465?s=256&v=4" alt="Muhammad Sudais" className="profile-photo" /><div><div className="profile-name-row"><h2>Muhammad Sudais</h2><Pill tone="gold">available for work</Pill></div><p className="profile-handle">AI / Machine Learning Developer <span>·</span> Pakistan</p><div className="profile-links"><a href="https://github.com/sudais-ai" target="_blank" rel="noreferrer"><Github size={14} /> sudais-ai</a><a href="https://msudaisai.netlify.app" target="_blank" rel="noreferrer"><Globe2 size={14} /> portfolio</a><a href="mailto:sudaisoo72@gmail.com"><Link2 size={14} /> email</a></div></div></div>
        <div className="typing-line"><span className="typing-prefix">//</span><span>AI / Machine Learning Developer</span><span className="typing-cursor" /></div>
        <div className="preview-separator" />
        <div className="profile-copy"><p className="preview-kicker">I build practical AI systems that know when to show their work.</p><p>I care about the layer between a clever model and a trustworthy product: retrieval that can be inspected, evidence that stays attached to the claim, and workflows that fail clearly instead of quietly.</p></div>
        <div className="preview-section-title"><span>01</span><h3>Selected work</h3><i /></div>
        <div className="mini-project-grid"><div className="mini-project"><span className="mini-index">01</span><div><h4>TradeReady AI</h4><p>Evidence-backed trade compliance copilot.</p><span>Next.js · Prisma · FTS5</span></div><ArrowUpRight size={15} /></div><div className="mini-project"><span className="mini-index">02</span><div><h4>VindicAI</h4><p>Research workspace for verifiable claims.</p><span>React · Drizzle · MySQL</span></div><ArrowUpRight size={15} /></div></div>
        <div className="preview-section-title"><span>02</span><h3>Working stack</h3><i /></div><div className="chip-cloud"><span>Python</span><span>RAG systems</span><span>TypeScript</span><span>Retrieval</span><span>SQL</span><span>LLM evaluation</span><span>AI agents</span><span>Evidence grounding</span></div>
        <div className="preview-footer"><span>Thanks for visiting. Let&apos;s build something useful.</span><span className="footer-arrow">↗</span></div>
      </div>
    </section>
    <div className="preview-bottom"><div><span className="eyebrow">Ready to ship</span><strong>One clean README. Zero badge walls.</strong></div><button className="quiet-button" onClick={() => onNavigate("video-generator")}><Clapperboard size={15} /> Make a profile video</button></div>
  </div>;
}

function AuditView() {
  return <div className="page-stack"><div className="page-intro"><div><Pill tone="green"><Check size={12} /> Verified</Pill><h1>Verification report</h1><p>An honest audit trail for the links, widgets, and claims in your profile build.</p></div><button className="outline-button"><Clipboard size={15} /> Export report</button></div><div className="audit-summary"><div className="audit-score"><div className="score-ring"><strong>92</strong><span>/100</span></div><div><p className="eyebrow">Overall confidence</p><h3>Strong foundation</h3><p>Every headline claim is either verified, caveated, or deliberately excluded.</p></div></div><div className="audit-breakdown"><div><span className="breakdown-number green-text">37</span><small>verified checks</small></div><div><span className="breakdown-number gold-text">11</span><small>human clicks</small></div><div><span className="breakdown-number muted-text">05</span><small>excluded widgets</small></div></div></div><section className="surface-card audit-table"><SectionHeading eyebrow="Check ledger" title="Nothing slips through quietly" action={<button className="text-button">Filter <ChevronRight size={14} /></button>} /><div className="audit-rows">{checks.map((check, index) => <div className="audit-row" key={check.label}><span className="audit-index">0{index + 1}</span><div className="audit-icon"><Check size={15} /></div><div className="audit-content"><strong>{check.label}</strong><span>{check.note}</span></div><Pill tone="green">{check.status}</Pill><ArrowUpRight size={15} className="row-arrow" /></div>)}</div></section></div>;
}

function VideoGenerator() {
  const [format, setFormat] = useState("16:9");
  const [style, setStyle] = useState("Editorial");
  const [prompt, setPrompt] = useState("A focused, editorial introduction to Muhammad Sudais — an AI/ML developer building practical retrieval systems, evidence-grounded LLM apps, and useful products.");
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [generated, setGenerated] = useState(false);

  const generate = () => {
    setIsGenerating(true); setGenerated(false); setProgress(8);
    const timer = window.setInterval(() => setProgress((value) => { if (value >= 96) { window.clearInterval(timer); setIsGenerating(false); setGenerated(true); return 100; } return value + 11; }), 180);
  };

  return <div className="page-stack page-video"><div className="page-intro"><div><Pill tone="gold"><Sparkles size={12} /> Studio beta</Pill><h1>Video generator</h1><p>Turn the story behind your work into a polished, shareable introduction.</p></div><div className="intro-meta"><span><span className="live-dot" /> Render engine ready</span><span>~ 45 sec render</span></div></div>
    <div className="video-layout"><section className="video-editor surface-card"><div className="editor-header"><div><p className="eyebrow">01 / Creative brief</p><h2>Describe the story</h2></div><span className="autosave"><Check size={12} /> Autosaved</span></div><label className="field-label" htmlFor="video-prompt">Prompt</label><textarea id="video-prompt" value={prompt} onChange={(event) => setPrompt(event.target.value)} rows={6} /><div className="field-hint"><span>{prompt.length} / 600 characters</span><button onClick={() => setPrompt("A cinematic, minimal showcase of an AI engineer turning messy questions into clear, evidence-backed software.")}><WandSparkles size={13} /> Refine with AI</button></div><div className="editor-divider" /><div className="editor-header compact"><div><p className="eyebrow">02 / Format</p><h2>Choose your canvas</h2></div></div><div className="format-grid">{formats.map((item) => <button key={item.value} className={cn("format-card", format === item.value && "format-active")} onClick={() => setFormat(item.value)}><div className={cn("format-icon", `ratio-${item.value.replace(":", "-")}`)} /><strong>{item.label}</strong><span>{item.value} · {item.size}</span>{format === item.value && <Check size={14} className="format-check" />}</button>)}</div><div className="editor-divider" /><div className="editor-header compact"><div><p className="eyebrow">03 / Visual direction</p><h2>Pick a feeling</h2></div></div><div className="style-grid">{videoStyles.map((item) => <button key={item.label} className={cn("style-card", style === item.label && "style-active")} onClick={() => setStyle(item.label)}><span className="style-swatch" style={{ background: item.accent }} /><strong>{item.label}</strong><small>{item.description}</small>{style === item.label && <span className="style-selected"><Check size={11} /></span>}</button>)}</div><button className={cn("generate-button", isGenerating && "generating")} onClick={generate} disabled={isGenerating}>{isGenerating ? <><Activity size={16} className="spin" /> Building your storyboard… {progress}%</> : generated ? <><Check size={16} /> Storyboard ready — generate again</> : <><Sparkles size={16} /> Generate storyboard</>}</button>{isGenerating && <div className="generation-progress"><span style={{ width: `${progress}%` }} /></div>}</section>
      <section className="video-preview-panel"><div className="preview-panel-top"><div><p className="eyebrow">Live preview</p><span className="preview-panel-title">{generated ? "Storyboard ready" : "Your story, in motion"}</span></div><span className="preview-status"><span className="status-dot" /> {generated ? "Ready" : "Draft"}</span></div><div className={cn("video-canvas", `canvas-${format.replace(":", "-")}`)}><div className="canvas-grid" /><div className="canvas-glow" /><div className="canvas-content"><div className="canvas-avatar">SA</div><span className="canvas-eyebrow">S U D A I S · A I</span><h3>Build useful.<br /><em>Verify everything.</em></h3><div className="canvas-line" /><span className="canvas-caption">AI / MACHINE LEARNING DEVELOPER</span></div><div className="canvas-time">00:00 <span>/</span> 00:12</div><button className="canvas-play" aria-label="Play preview"><Play size={18} fill="currentColor" /></button></div><div className="timeline"><div className="timeline-head"><span>Storyboard timeline</span><span>3 scenes · {format}</span></div><div className="timeline-track"><div className="timeline-playhead" /><div className="timeline-segment segment-one"><span>01</span><small>opening</small></div><div className="timeline-segment segment-two"><span>02</span><small>projects</small></div><div className="timeline-segment segment-three"><span>03</span><small>close</small></div></div></div><div className="render-note"><div className="render-note-icon"><Zap size={15} /></div><div><strong>Smart pacing enabled</strong><p>We&apos;ll match transitions to your story and keep the typography readable.</p></div><ChevronRight size={15} /></div></section></div>
  </div>;
}

function App() {
  const [path, setPath] = useState(window.location.pathname);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const active: ViewKey = path.includes("video-generator") ? "video-generator" : path.includes("profile") ? "profile" : path.includes("audit") ? "audit" : "overview";
  const title = navItems.find((item) => item.key === active)?.label ?? "Overview";
  const go = (key: ViewKey) => { navigateTo(key === "overview" ? "/" : `/${key}`); setMobileOpen(false); };

  useEffect(() => { const update = () => setPath(window.location.pathname); window.addEventListener("popstate", update); return () => window.removeEventListener("popstate", update); }, []);
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setCommandOpen(true); } if (event.key === "Escape") setCommandOpen(false); }; window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey); }, []);

  return <div className="app-shell"><Sidebar active={active} onNavigate={go} mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} /><div className="main-shell"><Topbar title={title} onMenu={() => setMobileOpen(true)} onCommand={() => setCommandOpen(true)} /><main className="main-content">{active === "overview" && <Overview onNavigate={go} />}{active === "profile" && <ProfilePreview onNavigate={go} />}{active === "audit" && <AuditView />}{active === "video-generator" && <VideoGenerator />}</main><footer className="main-footer"><span>© 2026 sudais-ai / profile studio</span><div><a href="https://github.com/sudais-ai/sudais-ai" target="_blank" rel="noreferrer">Open repository <ExternalLink size={12} /></a><span className="footer-divider" /><span>Built with intent.</span></div></footer></div>
    {commandOpen && <div className="command-overlay" onClick={() => setCommandOpen(false)}><div className="command-modal" onClick={(event) => event.stopPropagation()}><div className="command-search"><Search size={17} /><input autoFocus placeholder="Jump to a workspace view…" /><kbd>esc</kbd></div><div className="command-options">{navItems.map((item) => { const Icon = item.icon; return <button key={item.key} onClick={() => { go(item.key); setCommandOpen(false); }}><Icon size={16} /><span>{item.label}</span><ChevronRight size={14} /></button>; })}</div></div></div>}
  </div>;
}

export default App;
