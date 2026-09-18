import { useMemo, useState } from "react";
import { AlertTriangle, ArrowUpRight, Filter, ShieldCheck } from "lucide-react";
import { cn } from "../utils/cn";
import { Eyebrow, GhostButton, Panel, Reveal, Tag } from "./ui";
import { checks, statusMeta, type Check, type Status } from "../data/verification";

const kinds = [
  { key: "all", label: "everything" },
  { key: "link", label: "links" },
  { key: "widget", label: "widgets" },
  { key: "claim", label: "claims" },
  { key: "workflow", label: "actions" },
  { key: "repo", label: "repos" },
] as const;

const statuses: Status[] = ["ok", "warn", "bad", "unused"];

function Dot({ s }: { s: Status }) {
  const m = statusMeta[s];
  return (
    <span
      className={cn(
        "inline-flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border font-mono text-[10px]",
        m.ring,
        m.color,
      )}
    >
      {m.glyph}
    </span>
  );
}

export default function AuditPanel() {
  const [kind, setKind] = useState<(typeof kinds)[number]["key"]>("all");
  const [status, setStatus] = useState<Status | "all">("all");

  const rows = useMemo(
    () =>
      checks.filter(
        (c: Check) => (kind === "all" || c.kind === kind) && (status === "all" || c.status === status),
      ),
    [kind, status],
  );

  const counts = useMemo(() => {
    const base: Record<Status, number> = { ok: 0, warn: 0, bad: 0, unused: 0 };
    checks.forEach((c) => (base[c.status] += 1));
    return base;
  }, []);

  return (
    <section>
      {/* summary */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {statuses.map((s, i) => (
          <Reveal key={s} delay={i * 70}>
            <button
              type="button"
              onClick={() => setStatus(status === s ? "all" : s)}
              className={cn(
                "w-full rounded-xl border p-4 text-left transition-all duration-300",
                status === s
                  ? "border-gold/55 bg-gold/10"
                  : "border-line bg-panel/70 hover:-translate-y-[2px] hover:border-gold/35",
              )}
            >
              <div className="flex items-center gap-2">
                <Dot s={s} />
                <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-muted">
                  {statusMeta[s].label}
                </span>
              </div>
              <p className="mt-2 font-display text-3xl font-semibold text-white">{counts[s]}</p>
              <p className="mt-1 text-[11.5px] leading-snug text-muted">
                {s === "ok" && "fetched or read from a primary source right now"}
                {s === "warn" && "correctly formed, but only your browser can settle it"}
                {s === "bad" && "failed for me, or absent — fix before you publish"}
                {s === "unused" && "tested and rejected: dead service, zero value, or unverified skill"}
              </p>
            </button>
          </Reveal>
        ))}
      </div>

      {/* filters */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="flex items-center gap-1.5 font-mono text-[10px] tracking-[0.22em] uppercase text-muted">
          <Filter size={12} className="text-gold" /> filter
        </span>
        {kinds.map((k) => (
          <GhostButton key={k.key} active={kind === k.key} onClick={() => setKind(k.key)}>
            {k.label}
          </GhostButton>
        ))}
        {status !== "all" && (
          <GhostButton active onClick={() => setStatus("all")}>
            clear status ✕
          </GhostButton>
        )}
        <span className="ml-auto font-mono text-[11px] text-muted">
          {rows.length} / {checks.length} entries
        </span>
      </div>

      {/* table */}
      <Panel className="mt-3 overflow-hidden">
        <div className="hidden grid-cols-[minmax(210px,1.4fr)_minmax(150px,1fr)_minmax(160px,1fr)_92px] gap-3 border-b border-line bg-panel2/70 px-4 py-2.5 font-mono text-[10px] tracking-[0.18em] uppercase text-muted lg:grid">
          <span>target</span>
          <span>how it was checked</span>
          <span>result</span>
          <span className="text-right">state</span>
        </div>
        <ul>
          {rows.map((c, i) => (
            <li
              key={c.target}
              className={cn(
                "grid gap-2 px-4 py-3.5 transition-colors duration-200 hover:bg-panel2/60 lg:grid-cols-[minmax(210px,1.4fr)_minmax(150px,1fr)_minmax(160px,1fr)_92px] lg:gap-3",
                i > 0 && "border-t border-line/70",
              )}
            >
              <div className="flex items-start gap-2">
                <Dot s={c.status} />
                <span className="text-[13px] leading-snug font-medium text-white/95">{c.target}</span>
              </div>
              <span className="font-mono text-[11px] leading-relaxed text-muted lg:pt-[2px]">{c.method}</span>
              <span className="text-[12px] leading-relaxed text-muted lg:pt-[1px]">{c.note}</span>
              <div className="flex items-center gap-2 lg:justify-end">
                <Tag tone="muted" className="uppercase">
                  {c.kind}
                </Tag>
                {c.url && (
                  <a
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                    title="open what was checked"
                    className="text-muted transition-colors hover:text-gold"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </Panel>

      {/* blockers */}
      <div className="mt-5 grid gap-3 lg:grid-cols-3">
        {[
          {
            icon: <AlertTriangle size={14} className="text-warn" />,
            title: "1 · Live demo unreachable",
            body: "trade-ready-ai.vercel.app (and /api/health) failed for me twice. It is the homepage saved on your repo, so the link is yours — but a Vercel project can be paused or deleted. Open it; if it 404s, redeploy or delete the LIVE_DEMO badge line.",
          },
          {
            icon: <ShieldCheck size={14} className="text-bad" />,
            title: "2 · Portfolio contradicts the profile",
            body: "msudaisai.netlify.app publishes “5+ years”, “200+ projects”, “98% accuracy” and “$50k earned”. None is verifiable and several are impossible for a 2024-entry student. None of it was imported here. Rewriting that page is the single biggest credibility win available.",
          },
          {
            icon: <Filter size={14} className="text-gold" />,
            title: "3 · Empty repos and empty metadata",
            body: "JARVIS-X has three empty placeholder repos; four of the five projects you listed have no public repo at all; every featured repo has description: null, topics: [] and a boilerplate README. Ten minutes of metadata beats any badge wall.",
          },
        ].map((b) => (
          <Reveal key={b.title}>
            <Panel hover className="h-full p-4">
              <p className="flex items-center gap-2 font-display text-[13.5px] font-semibold text-white">{b.icon}{b.title}</p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-muted">{b.body}</p>
            </Panel>
          </Reveal>
        ))}
      </div>

      <Eyebrow className="mt-6">what I did not pretend to do</Eyebrow>
      <p className="mt-2 max-w-[80ch] text-[13px] leading-relaxed text-muted">
        I have no authenticated GitHub access in this session, so nothing was pushed, pinned, archived, renamed or
        toggled. The snake workflow is written but not run; the output branch does not exist yet; the profile sidebar
        still shows the old bio. Every one of those is listed as an exact manual step in the checklist.
      </p>
    </section>
  );
}
