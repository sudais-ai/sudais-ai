import { createElement, useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------ reveal */
export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "tr";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return createElement(
    Tag,
    {
      ref,
      className: cn("reveal", shown && "reveal-in", className),
      style: { animationDelay: `${delay}ms` },
    } as Record<string, unknown>,
    children,
  );
}

/* --------------------------------------------------------------- primitives */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("font-mono text-[10px] tracking-[0.34em] uppercase text-gold/80", className)}>{children}</p>
  );
}

export function Panel({
  children,
  className,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-xl border border-line bg-panel/80 backdrop-blur-[2px]",
        hover &&
          "transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-[3px] hover:border-gold/45 hover:shadow-[0_18px_50px_-28px_rgba(255,215,0,0.55)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function Tag({
  children,
  tone = "default",
  className,
}: {
  children: ReactNode;
  tone?: "default" | "gold" | "ok" | "warn" | "bad" | "muted";
  className?: string;
}) {
  const tones: Record<string, string> = {
    default: "border-line bg-panel3 text-white/80",
    gold: "border-gold/45 bg-gold/12 text-gold",
    ok: "border-ok/40 bg-ok/10 text-ok",
    warn: "border-warn/40 bg-warn/10 text-warn",
    bad: "border-bad/40 bg-bad/10 text-bad",
    muted: "border-line bg-transparent text-muted",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-[3px] font-mono text-[10.5px] tracking-wide whitespace-nowrap",
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}

export function GhostButton({
  children,
  onClick,
  active,
  className,
  title,
}: {
  children: ReactNode;
  onClick?: () => void;
  active?: boolean;
  className?: string;
  title?: string;
}) {
  return (
    <button
      type="button"
      title={title}
      onClick={onClick}
      className={cn(
        "relative overflow-hidden rounded-lg border px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase transition-colors duration-200",
        active
          ? "border-gold/60 bg-gold/15 text-gold"
          : "border-line bg-panel2 text-muted hover:border-gold/35 hover:text-white",
        className,
      )}
    >
      {children}
    </button>
  );
}

export function CopyButton({ text, label = "copy" }: { text: string; label?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
        }
        setDone(true);
        window.setTimeout(() => setDone(false), 1600);
      }}
      className={cn(
        "sweep relative overflow-hidden rounded-lg border px-3.5 py-2 font-mono text-[11px] tracking-widest uppercase transition-colors duration-200",
        done
          ? "border-ok/60 bg-ok/12 text-ok"
          : "border-gold/45 bg-gold/10 text-gold hover:border-gold hover:bg-gold/18",
      )}
    >
      {done ? "copied ✓" : label}
    </button>
  );
}

export function StatBlock({ k, v, sub }: { k: string; v: string; sub?: string }) {
  return (
    <div className="group">
      <p className="font-mono text-[10px] tracking-[0.24em] uppercase text-muted">{k}</p>
      <p className="mt-1 font-display text-2xl font-semibold text-white transition-colors duration-300 group-hover:text-gold sm:text-[28px]">
        {v}
      </p>
      {sub && <p className="mt-0.5 text-[12px] leading-snug text-muted">{sub}</p>}
    </div>
  );
}
