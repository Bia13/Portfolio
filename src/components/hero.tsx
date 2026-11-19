import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { useLanguage } from "./LanguageContext";
import { EASE, RollButton } from "./ui";

const roles = ["Product Designer", "UX Engineer", "AI Product Specialist", "Graphic Designer"];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: EASE, delay },
});

function RoleTag() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative block h-[18px] overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={roles[index]}
          initial={{ y: 18, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -18, opacity: 0 }}
          transition={{ duration: 0.38, ease: "easeInOut" }}
          className="eyebrow block whitespace-nowrap text-ink-2"
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

/**
 * Número do painel: conta de 0 até o valor quando entra na tela.
 * Valores sem número (ex.: "B2B") sobem por trás de uma máscara.
 */
function StatValue({ value, delay = 0 }: { value: string; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : null;
  const suffix = match ? match[2] : "";
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (target === null || !inView || reduce) return;

    const controls = animate(0, target, {
      duration: 1.8,
      delay,
      ease: EASE,
      onUpdate: (v) => setCount(Math.round(v)),
    });
    return () => controls.stop();
  }, [target, inView, reduce, delay]);

  return (
    <span ref={ref} className="block overflow-hidden">
      {/* leitores de tela recebem só o valor final */}
      <span className="sr-only">{value}</span>

      {target === null ? (
        <motion.span
          aria-hidden="true"
          className="block"
          initial={reduce ? false : { y: "105%" }}
          animate={inView || reduce ? { y: 0 } : undefined}
          transition={{ duration: 0.9, delay, ease: EASE }}
        >
          {value}
        </motion.span>
      ) : (
        <span aria-hidden="true" className="block tabular-nums">
          {reduce ? target : count}
          <motion.span
            className="inline-block"
            initial={reduce ? false : { opacity: 0, scale: 0.4 }}
            animate={inView || reduce ? { opacity: 1, scale: 1 } : undefined}
            transition={{ duration: 0.5, delay: delay + 1.5, ease: EASE }}
          >
            {suffix}
          </motion.span>
        </span>
      )}
    </span>
  );
}

// ── Crachá pendurado ──────────────────────────────────────────────────────────

const STRAP = 132; // comprimento do cordão em repouso (px)

/**
 * Crachá preso por um cordão no topo do painel. Cai ao carregar, balança de
 * leve e pode ser puxado com o mouse: ao soltar, volta como um pêndulo.
 * É 2D, feito só com framer-motion (sem three.js nem motor de física).
 */
function Badge() {
  const [err, setErr] = useState(false);
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  // arrastar só com mouse/caneta: no toque atrapalharia a rolagem da página
  const [canDrag] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: fine)").matches
  );

  // posição do crachá em relação ao ponto de repouso
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // o crachá inclina conforme o ângulo do cordão; a mola dá o balanço do pêndulo
  const angle = useTransform([x, y], ([dx, dy]: number[]) => {
    const deg = (-Math.atan2(dx, STRAP + dy) * 180) / Math.PI;
    return deg * 0.9;
  });
  const swing = useSpring(angle, { stiffness: 110, damping: 7, mass: 1 });
  const sway = useMotionValue(0);
  const rotate = useTransform([swing, sway], ([a, b]: number[]) => a + b);

  // o cordão é uma curva do ponto fixo até o prendedor do crachá
  const strapPath = useTransform([x, y], ([dx, dy]: number[]) => {
    const endY = STRAP + dy;
    return `M 0 0 Q ${dx * 0.12} ${endY * 0.62} ${dx} ${endY}`;
  });

  useEffect(() => {
    if (reduce) return;

    // entrada: cai de cima e quica
    y.set(-460);
    const drop = animate(y, 0, { type: "spring", stiffness: 70, damping: 8, delay: 0.7 });
    // balanço lento em repouso
    const idle = animate(sway, [-2.2, 2.2], {
      duration: 3.6,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    });
    return () => {
      drop.stop();
      idle.stop();
    };
  }, [reduce, y, sway]);

  return (
    <div
      className="relative order-first -mt-[clamp(20px,4vw,48px)] h-[560px] select-none lg:order-none lg:h-auto lg:min-h-[540px]"
    >
      {/* cordão */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-px w-px overflow-visible"
      >
        <motion.path d={strapPath} fill="none" stroke="var(--color-coral)" strokeWidth="16" />
        <motion.path
          d={strapPath}
          fill="none"
          stroke="var(--color-coral-ink)"
          strokeWidth="1"
          strokeDasharray="1 7"
          strokeLinecap="round"
        />
      </svg>

      {/* ponto de giro = prendedor, no fim do cordão */}
      <div className="absolute left-1/2 w-0" style={{ top: STRAP }}>
        <motion.div
          style={{ x, y, rotate, transformOrigin: "0px 0px" }}
          drag={canDrag && !reduce}
          dragConstraints={{ top: -50, bottom: 110, left: -170, right: 170 }}
          dragElastic={0.2}
          dragSnapToOrigin
          dragTransition={{ bounceStiffness: 170, bounceDamping: 9 }}
          whileDrag={{ cursor: "grabbing" }}
          className={`w-0 ${canDrag && !reduce ? "cursor-grab" : ""}`}
        >
          <div className="relative w-[232px] -translate-x-1/2">
            {/* prendedor metálico */}
            <span
              aria-hidden="true"
              className="absolute -top-3 left-1/2 h-7 w-9 -translate-x-1/2 rounded-[8px] border border-on-night-2/60 bg-night-3"
            />

            <div className="relative rounded-[22px] bg-paper p-3 text-ink shadow-[0_40px_70px_-30px_rgba(0,0,0,0.9)]">
              {/* furo do crachá */}
              <span
                aria-hidden="true"
                className="mx-auto mb-3 mt-1 block h-2 w-12 rounded-full bg-night"
              />

              <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] bg-frame">
                {err ? (
                  <div className="flex h-full w-full items-center justify-center p-4 text-center">
                    <span className="eyebrow text-ink-2">{t.hero.imageError}</span>
                  </div>
                ) : (
                  <img
                    src={`${import.meta.env.BASE_URL}projects/hero.webp`}
                    alt="Beatriz Dantas"
                    width={460}
                    height={460}
                    draggable={false}
                    onError={() => setErr(true)}
                    className="pointer-events-none h-full w-full object-cover"
                  />
                )}
              </div>

              <div className="px-1 pb-1 pt-3.5">
                <p className="display text-[22px] leading-none">
                  Beatriz <span className="serif-i text-[1.1em]">Dantas</span>
                </p>
                <p className="eyebrow mt-2.5 flex items-center justify-between gap-2 border-t border-line pt-2.5 text-[10px] text-ink-2">
                  <span>Product Designer</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-live" aria-hidden="true" />
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section id="top" className="relative">
      {/* abertura clara: nome em caixa alta */}
      <div className="shell pt-[clamp(48px,9vw,120px)]">
        <motion.div {...fadeUp(0.05)} className="flex flex-col-reverse items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <RoleTag />
          <span className="eyebrow inline-flex shrink-0 items-center gap-2 rounded-full border border-line bg-paper-2 px-3.5 py-2 text-ink-2">
            <span className="h-1.5 w-1.5 rounded-full bg-live" aria-hidden="true" />
            {t.hero.available}
          </span>
        </motion.div>

        <h1 className="mt-[clamp(28px,5vw,64px)]">
          <motion.span
            {...fadeUp(0.15)}
            className="display -ml-[0.04em] block text-[clamp(4rem,18.5vw,16rem)] uppercase leading-[0.82] tracking-[-0.065em]"
          >
            Beatriz
          </motion.span>
          <span className="sr-only"> Dantas</span>
        </h1>

        <motion.div
          {...fadeUp(0.3)}
          className="mt-[clamp(28px,4vw,48px)] grid gap-6 pb-[clamp(40px,6vw,80px)] lg:grid-cols-[25.5%_1fr]"
        >
          <span className="mt-4 hidden h-[3px] w-16 bg-coral lg:block" aria-hidden="true" />
          <div className="lg:pl-6">
            <p className="max-w-[26ch] text-[clamp(1.4rem,2.7vw,2.125rem)] font-medium leading-[1.15] tracking-[-0.035em] text-ink">
              {t.hero.description}
            </p>
            <button type="button" onClick={() => scrollTo("projects")} className="text-link mt-7">
              {t.hero.ctaProjects}
              <ArrowDown className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* painel escuro: sobrenome em serifa, foto e números */}
      <div className="relative z-10 px-2 sm:px-3">
        <motion.div
          {...fadeUp(0.4)}
          className="panel mx-auto grid max-w-[1400px] gap-8 overflow-hidden p-[clamp(20px,4vw,48px)] lg:grid-cols-[1fr_minmax(280px,360px)] lg:rounded-[36px]"
        >
          <div className="flex min-w-0 flex-col">
            <p className="eyebrow text-on-night-2">Product Designer · UX/UI · Front-end</p>

            <p
              aria-hidden="true"
              className="serif-i mt-2 text-[clamp(5rem,19vw,15rem)] leading-[0.9] text-on-night"
            >
              Dantas
            </p>

            <span className="mt-4 block h-[2px] w-full bg-coral" aria-hidden="true" />

            <dl className="mt-8 grid grid-cols-3 gap-4">
              {t.hero.stats.map(({ value, label }, i) => (
                <div key={label}>
                  <dt className="sr-only">{label}</dt>
                  <dd className="display text-[clamp(1.75rem,4vw,3rem)] text-on-night">
                    <StatValue value={value} delay={0.5 + i * 0.15} />
                  </dd>
                  <dd className="eyebrow mt-2 text-[10px] text-on-night-2 sm:text-[11px]" aria-hidden="true">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 flex flex-wrap gap-3 lg:mt-auto lg:pt-10">
              <RollButton onClick={() => scrollTo("contact")} icon={<ArrowRight />}>
                {t.nav.contact}
              </RollButton>
              <RollButton href="https://www.behance.net/dantasbia" variant="ghost" icon={<ArrowRight />}>
                {t.hero.behance}
              </RollButton>
            </div>
          </div>

          <Badge />
        </motion.div>
      </div>
    </section>
  );
}
