import { useEffect, useState } from "react";
import { ClipboardList, Eye, Files as FilesIcon, ShieldCheck, Zap } from "lucide-react";
import { cn } from "./utils/cn";
import { CopyButton, Eyebrow, Reveal, Tag } from "./components/ui";
import ProfilePreview from "./components/ProfilePreview";
import FilesPanel from "./components/FilesPanel";
import DocsPanel from "./components/DocsPanel";
import AuditPanel from "./components/AuditPanel";
import readmeRaw from "../profile-repo/README.md?raw";

const tabs = [
  { key: "preview", label: "profile preview", icon: <Eye size={13} /> },
  { key: "files", label: "files to paste", icon: <FilesIcon size={13} /> },
  { key: "audit", label: "verification", icon: <ShieldCheck size={13} /> },
  { key: "checklist", label: "setup checklist", icon: <ClipboardList size={13} /> },
] as const;

type TabKey = (typeof tabs)[number]["key"];

const score = [
  { k: "repos audited", v: "56", s: "29 original · ~27 forks of other people's bots" },
  { k: "featured", v: "4", s: "TradeReady AI · VindicAI · Tool-Wear · JARVIS-X (caveated)" },
  { k: "checks logged", v: "37", s: "links, widget endpoints, claims, workflow" },
  { k: "widgets rejected", v: "5", s: "dead or zero-value services a template would use" },
];

const blockers = [
  "Open trade-ready-ai.vercel.app — it failed for me twice.",
  "Rewrite msudaisai.netlify.app: “5+ years / 200+ projects / 98%” is unverifiable.",
  "Push README.md + snake.yml, then run the workflow once.",
  "Fill the GitHub sidebar: website, X handle, bio, available-for-hire, pins.",
];

export default function App() {
  const [tab, setTab] = useState<TabKey>("preview");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* ambient layers */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-beacon" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-grid opacity-70" />
      <div className="pointer-events-none fixed inset-0 -z-10 noise mix-blend-soft-light" />

      {/* header */}
      <header
        className={cn(
          "sticky top-0 z-40 border-b transition-all duration-300",
          scrolled ? "border-line bg-ink/85 backdrop-blur-xl" : "border-transparent bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-x-4 gap-y-2 px-4 py-3 sm:px-6">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="relative grid h-7 w-7 place-items-center rounded-md border border-gold/45 bg-gold/10 text-gold transition-transform duration-300 group-hover:rotate-[-8deg]">
              <Zap size={13} />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[14px] font-semibold tracking-tight text-white">
                sudais-ai<span className="text-gold">/</span>sudais-ai
              </span>
              <span className="mt-[3px] block font-mono text-[9.5px] tracking-[0.2em] uppercase text-muted">
                profile build · audited 18 sep 2026
              </span>
            </span>
          </a>

          <nav className="order-3 -mx-1 flex w-full items-center gap-1 overflow-x-auto px-1 md:order-2 md:ml-auto md:w-auto">
            {tabs.map((t) => (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={cn(
                  "flex shrink-0 items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-[11px] tracking-wide transition-all duration-200",
                  tab === t.key
                    ? "border-gold/55 bg-gold/14 text-gold"
                    : "border-line bg-panel/60 text-muted hover:border-gold/30 hover:text-white",
                )}
              >
                {t.icon}
                {t.label}
              </button>
            ))}
          </nav>

          <div className="order-2 ml-auto hidden md:order-3 md:block">
            <CopyButton text={readmeRaw} label="copy README.md" />
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1180px] px-4 pb-20 pt-8 sm:px-6 sm:pt-12">
        {/* opening: the deliverable + its verdict, no generic hero trio */}
        <section className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
          <div>
            <Eyebrow>github profile README · actions workflow · audit trail</Eyebrow>
            <h1 className="mt-3 font-display text-[34px] leading-[1.06] font-bold tracking-[-0.03em] text-white sm:text-[46px]">
              A profile that still holds up
              <br />
              on a recruiter&apos;s{" "}
              <span className="relative inline-block text-gold">
                second click
                <svg
                  viewBox="0 0 240 12"
                  className="absolute -bottom-1 left-0 w-full text-gold/60"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path d="M2 8c40-6 92-7 140-4s70 5 96 1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </span>
              .
            </h1>
            <p className="mt-5 max-w-[62ch] text-[14.5px] leading-relaxed text-muted">
              I read the account before writing a word of it: all 56 repositories, the Prisma schema behind TradeReady
              AI, VindicAI&apos;s phase test reports, the notebook sizes, every link, and every widget endpoint. What
              you are looking at is the result — README, workflow, and the audit that explains each line.
            </p>
            <p className="mt-3 max-w-[62ch] text-[14.5px] leading-relaxed text-muted">
              Nothing was invented to fill space. Five skills and three services I could not verify are left out on
              purpose, and the README says so in one calm line — which reads far better to an engineering manager than
              a badge wall does.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              <Tag tone="gold">no fake metrics</Tag>
              <Tag tone="ok">37 checks logged</Tag>
              <Tag tone="warn">11 need a human click</Tag>
              <Tag tone="muted">GitHub-safe markdown only</Tag>
            </div>
          </div>

          {/* scoreboard */}
          <Reveal>
            <div className="rounded-2xl border border-line bg-panel/70 p-5 shadow-[0_40px_120px_-70px_rgba(255,215,0,0.55)]">
              <div className="flex items-center justify-between">
                <Eyebrow>audit snapshot</Eyebrow>
                <span className="flex items-center gap-1.5 font-mono text-[10px] text-ok">
                  <span className="h-1.5 w-1.5 rounded-full bg-ok" /> live endpoints
                </span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {score.map((s) => (
                  <div key={s.k} className="group">
                    <p className="font-mono text-[9.5px] tracking-[0.2em] uppercase text-muted">{s.k}</p>
                    <p className="mt-1 font-display text-[30px] leading-none font-bold text-white transition-colors duration-300 group-hover:text-gold">
                      {s.v}
                    </p>
                    <p className="mt-1.5 text-[11px] leading-snug text-muted">{s.s}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 border-t border-line pt-4">
                <Eyebrow>before you publish</Eyebrow>
                <ul className="mt-2.5 space-y-2">
                  {blockers.map((b, i) => (
                    <li key={b} className="flex gap-2.5 text-[12.5px] leading-snug text-white/85">
                      <span className="mt-[1px] font-mono text-[10.5px] text-gold">0{i + 1}</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </section>

        {/* the typing line, live from the real endpoint */}
        <Reveal className="mt-9 flex flex-wrap items-center gap-3 rounded-xl border border-line bg-panel/60 px-4 py-3">
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
            hero animation, fetched from the same URL the README uses
          </span>
          <img
            className="ml-auto max-w-full"
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=18&duration=2600&pause=900&color=FFD700&width=330&height=30&lines=AI+%2F+Machine+Learning+Developer;I+build+practical+RAG+systems;Turning+ML+ideas+into+products"
            alt="typing headline preview"
            loading="lazy"
          />
        </Reveal>

        {/* panels */}
        <div className="mt-10">
          {tab === "preview" && <ProfilePreview />}
          {tab === "files" && <FilesPanel />}
          {tab === "audit" && <AuditPanel />}
          {tab === "checklist" && <DocsPanel initial="checklist" />}
        </div>
      </main>

      <footer className="border-t border-line/80 bg-panel/40">
        <div className="mx-auto flex max-w-[1180px] flex-wrap items-center gap-3 px-4 py-6 text-[11.5px] text-muted sm:px-6">
          <span className="font-mono">
            Muhammad Sudais · AI / ML · Python · Malakand Division, KP, Pakistan · GMT+5
          </span>
          <span className="ml-auto flex items-center gap-3">
            <a className="transition-colors hover:text-gold" href="https://github.com/sudais-ai" target="_blank" rel="noreferrer">
              github
            </a>
            <a className="transition-colors hover:text-gold" href="https://www.linkedin.com/in/muhammad-sudais-/" target="_blank" rel="noreferrer">
              linkedin
            </a>
            <a className="transition-colors hover:text-gold" href="mailto:sudaisoo72@gmail.com">
              email
            </a>
            <a
              className="rounded-md border border-gold/40 bg-gold/10 px-2 py-1 font-mono text-[10.5px] text-gold transition-colors hover:bg-gold/20"
              href="https://www.fiverr.com/s/K3ea0jW"
              target="_blank"
              rel="noreferrer"
            >
              hire me
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}
