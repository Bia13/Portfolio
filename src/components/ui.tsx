import { motion } from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Cabeçalho de seção: número + rótulo em mono, título em sans
 * e a segunda linha em serifa itálica.
 */
export function SectionHeader({
  index,
  label,
  line1,
  line2,
  tone = "light",
}: {
  index: string;
  label: string;
  line1: string;
  line2: string;
  tone?: "light" | "night";
}) {
  const muted = tone === "night" ? "text-on-night-2" : "text-ink-2";

  return (
    <Reveal className="mb-[clamp(40px,6vw,80px)]">
      <p className={`eyebrow flex items-center gap-3 ${muted}`}>
        <span className="h-px w-8 bg-coral" aria-hidden="true" />
        <span>{index}</span>
        <span>{label}</span>
      </p>

      <h2 className="display mt-6 text-[clamp(2.75rem,8.4vw,7rem)]">
        {line1}
        <br />
        <span className="serif-i text-[1.08em]">{line2}</span>
      </h2>
    </Reveal>
  );
}

/**
 * Botão "texto que sobe": o rótulo aparece duas vezes (as duas linhas que
 * rolam) e a bolinha da seta se expande no hover. Vira <a> quando recebe href.
 */
export function RollButton({
  children,
  icon,
  href,
  onClick,
  variant = "light",
  turn = true,
  follow = false,
  className = "",
}: {
  children: ReactNode;
  icon: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "light" | "dark" | "ghost";
  /** gira o ícone 45° no hover (seta para a direita vira seta diagonal) */
  turn?: boolean;
  /** anima também quando o elemento pai com a classe "group" recebe hover */
  follow?: boolean;
  className?: string;
}) {
  const classes = [
    "btn-roll",
    variant !== "light" ? `btn-roll--${variant}` : "",
    turn ? "btn-roll--turn" : "",
    follow ? "btn-roll--follow" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      <span className="btn-roll__label">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
      <span className="btn-roll__dot" aria-hidden="true">
        {icon}
      </span>
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
