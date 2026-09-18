import { useMemo, useState } from "react";
import { marked } from "marked";
import { cn } from "../utils/cn";
import { Eyebrow, GhostButton } from "./ui";
import { files, type DocKey } from "./FilesPanel";

marked.setOptions({ gfm: true, breaks: false });

/** keeps tables scrollable + links safe without pulling in a sanitiser */
function decorate(html: string) {
  return html
    .replace(/<table>/g, '<div class="tablewrap"><table>')
    .replace(/<\/table>/g, "</table></div>")
    .replace(/<a href="(http[^"]+)"/g, '<a href="$1" target="_blank" rel="noreferrer noopener"');
}

export default function DocsPanel({ initial = "audit" }: { initial?: DocKey }) {
  const [doc, setDoc] = useState<DocKey>(initial);
  const html = useMemo(() => decorate(marked.parse(files[doc].raw) as string), [doc]);

  return (
    <section>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <Eyebrow>readme-adjacent documentation</Eyebrow>
        <div className="ml-auto flex gap-2">
          <GhostButton active={doc === "audit"} onClick={() => setDoc("audit")}>
            audit + verification
          </GhostButton>
          <GhostButton active={doc === "checklist"} onClick={() => setDoc("checklist")}>
            setup checklist
          </GhostButton>
        </div>
      </div>

      <article className={cn("md-body rounded-xl border border-line bg-panel/70 p-5 sm:p-8")}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <p className="mt-4 text-[11.5px] text-muted">
        These two files live in the repository next to the README so the reasoning travels with the profile. Delete
        them if you want a repo that contains only <code className="font-mono text-white/70">README.md</code> — the
        profile renders identically either way.
      </p>
    </section>
  );
}
