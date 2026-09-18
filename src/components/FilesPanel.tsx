import { useMemo, useState } from "react";
import { Check, FileCode2, Folder, FolderOpen, Terminal } from "lucide-react";
import { cn } from "../utils/cn";
import { CopyButton, Eyebrow, Tag } from "./ui";

import readmeRaw from "../../profile-repo/README.md?raw";
import snakeRaw from "../../profile-repo/.github/workflows/snake.yml?raw";
import auditRaw from "../../profile-repo/AUDIT-AND-VERIFICATION.md?raw";
import checklistRaw from "../../profile-repo/PROFILE-SETUP-CHECKLIST.md?raw";

export type DocKey = "readme" | "snake" | "audit" | "checklist";

export const files: Record<
  DocKey,
  { path: string; label: string; raw: string; note: string; lang: string }
> = {
  readme: {
    path: "README.md",
    label: "README.md",
    raw: readmeRaw,
    note: "The whole profile. Drop it at the root of sudais-ai/sudais-ai on branch main.",
    lang: "markdown",
  },
  snake: {
    path: ".github/workflows/snake.yml",
    label: "snake.yml",
    raw: snakeRaw,
    note: "Nightly snake build. Creates the output branch by itself; no secrets, no Pages setup.",
    lang: "yaml",
  },
  audit: {
    path: "AUDIT-AND-VERIFICATION.md",
    label: "AUDIT-AND-VERIFICATION.md",
    raw: auditRaw,
    note: "Repo inventory, claim table, link report, widget report, mobile review. Keep it in the repo or delete it — your call.",
    lang: "markdown",
  },
  checklist: {
    path: "PROFILE-SETUP-CHECKLIST.md",
    label: "PROFILE-SETUP-CHECKLIST.md",
    raw: checklistRaw,
    note: "Sidebar settings, repo descriptions/topics, six pinned-repo slots, hygiene list, optional assets.",
    lang: "markdown",
  },
};

const tree = [
  { depth: 0, name: "sudais-ai/sudais-ai", kind: "root" as const },
  { depth: 1, name: ".github/", kind: "dir" as const },
  { depth: 2, name: "workflows/", kind: "dir" as const },
  { depth: 3, name: "snake.yml", kind: "file" as const, key: "snake" as DocKey },
  { depth: 1, name: "README.md", kind: "file" as const, key: "readme" as DocKey },
  { depth: 1, name: "AUDIT-AND-VERIFICATION.md", kind: "file" as const, key: "audit" as DocKey },
  { depth: 1, name: "PROFILE-SETUP-CHECKLIST.md", kind: "file" as const, key: "checklist" as DocKey },
  { depth: 1, name: "assets/  (optional)", kind: "dir" as const },
];

export default function FilesPanel() {
  const [active, setActive] = useState<DocKey>("readme");
  const f = files[active];
  const lines = useMemo(() => f.raw.split("\n"), [f.raw]);

  return (
    <section>
      <div className="grid gap-5 lg:grid-cols-[260px_1fr]">
        {/* tree */}
        <div>
          <Eyebrow>repository layout</Eyebrow>
          <div className="mt-3 rounded-xl border border-line bg-panel/70 p-2">
            {tree.map((t) => (
              <button
                key={t.name + t.depth}
                type="button"
                onClick={t.key ? () => setActive(t.key!) : undefined}
                className={cn(
                  "flex w-full items-center gap-2 rounded-lg px-2.5 py-1.5 text-left font-mono text-[11.5px] transition-colors",
                  t.key && "hover:bg-panel3 hover:text-white",
                  t.key && active === t.key && "bg-gold/12 text-gold",
                  !t.key && "cursor-default text-muted",
                  t.kind === "root" && "text-white",
                )}
                style={{ paddingLeft: `${10 + t.depth * 14}px` }}
              >
                {t.kind === "file" ? (
                  <FileCode2 size={12} />
                ) : t.kind === "root" ? (
                  <FolderOpen size={12} className="text-gold" />
                ) : (
                  <Folder size={12} />
                )}
                <span className="truncate">{t.name}</span>
              </button>
            ))}
          </div>

          <div className="mt-3 space-y-2">
            {(Object.keys(files) as DocKey[]).map((k) => (
              <button
                key={k}
                type="button"
                onClick={() => setActive(k)}
                className={cn(
                  "block w-full rounded-lg border px-3 py-2 text-left transition-colors",
                  active === k
                    ? "border-gold/50 bg-gold/10"
                    : "border-line bg-panel/60 hover:border-gold/30 hover:bg-panel2",
                )}
              >
                <p className="font-mono text-[11px] text-white/90">{files[k].label}</p>
                <p className="mt-1 text-[11.5px] leading-snug text-muted">{files[k].note}</p>
              </button>
            ))}
          </div>

          <p className="mt-3 flex items-start gap-2 rounded-lg border border-line bg-panel/60 p-3 text-[11.5px] leading-relaxed text-muted">
            <Check size={13} className="mt-[2px] shrink-0 text-ok" />
            <span>
              Two files to create; <code className="font-mono text-white/80">assets/</code> stays optional. Nothing in
              this delivery touches your other repositories.
            </span>
          </p>
        </div>

        {/* viewer */}
        <div className="overflow-hidden rounded-xl border border-line bg-panel/80">
          <div className="flex flex-wrap items-center gap-2 border-b border-line bg-panel2/80 px-3.5 py-2.5">
            <Terminal size={13} className="text-gold" />
            <span className="font-mono text-[12px] text-white">{f.path}</span>
            <Tag tone="muted">{f.lang}</Tag>
            <Tag tone="muted">{lines.length} lines</Tag>
            <Tag tone="muted">{(f.raw.length / 1024).toFixed(1)} KB</Tag>
            <div className="ml-auto flex items-center gap-2">
              {active === "snake" && <Tag tone="gold">GitHub Actions</Tag>}
              <CopyButton text={f.raw} label={`copy ${f.label}`} />
            </div>
          </div>
          <pre className="max-h-[70vh] overflow-auto bg-ink/60 px-3 py-3 text-[11.5px] leading-[1.62]">
            <code className="font-mono">
              {lines.map((l, i) => (
                <span key={i} className="grid grid-cols-[36px_1fr] hover:bg-panel2/60">
                  <span className="select-none pr-2 text-right text-muted/50">{i + 1}</span>
                  <span
                    className={cn(
                      "whitespace-pre-wrap break-words",
                      l.trimStart().startsWith("#") && active === "snake" && "text-gold/85",
                      l.trimStart().startsWith("<") && active === "readme" && "text-white/60",
                    )}
                  >
                    {l || " "}
                  </span>
                </span>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}
