import { useCallback, useEffect, useRef, useState } from "react";
import { animate, motion, AnimatePresence, useMotionValue } from "framer-motion";
import { ArrowLeft, ArrowRight, Expand, X } from "lucide-react";
import portfolio from "../data/portfolio";
import { useLanguage } from "./LanguageContext";
import { EASE, Reveal, SectionHeader } from "./ui";

const pad = (n: number) => String(n).padStart(2, "0");

const labels = {
  pt: { hint: "Arraste para explorar, clique para ampliar", open: "Ampliar arte", close: "Fechar" },
  en: { hint: "Drag to explore, click to enlarge", open: "Enlarge artwork", close: "Close" },
  es: { hint: "Arrastra para explorar, haz clic para ampliar", open: "Ampliar arte", close: "Cerrar" },
};

/**
 * Formato de cada peça no bento. A grade tem 2 linhas e cresce para o lado:
 * "tall" ocupa a coluna inteira, "square" divide a coluna com a próxima,
 * "big" ocupa 2 colunas x 2 linhas. A ordem segue a da lista em portfolio.js.
 */
const SPANS = [
  "tall", "square", "square", "tall", "square", "square",
  "tall", "tall", "square", "square", "tall", "big",
] as const;

const spanClass = {
  tall: "row-span-2",
  square: "",
  big: "col-span-2 row-span-2",
};

const arrowClass =
  "flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-line bg-paper-2 text-ink transition-colors duration-200 hover:bg-ink hover:text-paper";

// ── Visualização ampliada ─────────────────────────────────────────────────────

function Lightbox({
  index,
  total,
  onClose,
  onStep,
}: {
  index: number;
  total: number;
  onClose: () => void;
  onStep: (dir: 1 | -1) => void;
}) {
  const { t, locale } = useLanguage();
  const l = labels[locale as keyof typeof labels] || labels.pt;
  const closeRef = useRef<HTMLButtonElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const item = portfolio.graphicDesignGallery[index];

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      root.style.overflow = previousOverflow;
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowRight") onStep(1);
      else if (event.key === "ArrowLeft") onStep(-1);
      else if (event.key === "Tab" && boxRef.current) {
        // mantém o Tab dentro da visualização
        const items = [...boxRef.current.querySelectorAll<HTMLElement>("button")];
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, onStep]);

  const lightArrow =
    "flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-paper text-ink transition-colors duration-200 hover:bg-coral";

  return (
    <motion.div
      ref={boxRef}
      role="dialog"
      aria-modal="true"
      aria-label={`${t.gallery.label} ${index + 1}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={onClose}
      className="fixed inset-0 z-[70] flex flex-col bg-night/90 p-3 backdrop-blur-md sm:p-5"
    >
      <div className="flex items-center justify-between">
        <p className="eyebrow pl-2 tabular-nums text-on-night-2" aria-live="polite">
          <span className="text-on-night">{pad(index + 1)}</span> / {pad(total)}
        </p>
        <button ref={closeRef} type="button" onClick={onClose} aria-label={l.close} className={lightArrow}>
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="flex min-h-0 flex-1 items-center justify-center py-3">
        <AnimatePresence mode="wait">
          <motion.img
            key={item.image}
            src={item.image}
            alt={`${t.gallery.label} ${index + 1}`}
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="max-h-full max-w-full rounded-[20px] object-contain"
          />
        </AnimatePresence>
      </div>

      <div className="flex justify-center gap-2" onClick={(event) => event.stopPropagation()}>
        <button type="button" onClick={() => onStep(-1)} aria-label={t.gallery.previous} className={lightArrow}>
          <ArrowLeft className="h-4 w-4" />
        </button>
        <button type="button" onClick={() => onStep(1)} aria-label={t.gallery.next} className={lightArrow}>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}

// ── Seção ─────────────────────────────────────────────────────────────────────

export default function Gallery() {
  const { t, locale } = useLanguage();
  const l = labels[locale as keyof typeof labels] || labels.pt;
  const items = portfolio.graphicDesignGallery;

  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const dragged = useRef(false);
  const [active, setActive] = useState<number | null>(null);

  // até onde a trilha pode ir para a esquerda (valor negativo)
  const minX = () => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return 0;
    return Math.min(0, viewport.clientWidth - track.scrollWidth);
  };

  const slideTo = (target: number) => {
    const clamped = Math.max(minX(), Math.min(0, target));
    animate(x, clamped, { type: "spring", stiffness: 220, damping: 32 });
  };

  const slideBy = (dir: 1 | -1) => {
    const step = (viewportRef.current?.clientWidth ?? 800) * 0.7;
    slideTo(x.get() - dir * step);
  };

  // navegação por teclado: traz o item focado para dentro da área visível
  const reveal = (element: HTMLElement) => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    viewport.scrollLeft = 0; // o navegador pode rolar o contêiner ao focar
    const v = viewport.getBoundingClientRect();
    const r = element.getBoundingClientRect();
    if (r.left < v.left + 16) slideTo(x.get() + (v.left + 16 - r.left));
    else if (r.right > v.right - 16) slideTo(x.get() - (r.right - (v.right - 16)));
  };

  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setActive((current) =>
        current === null ? current : (current + dir + items.length) % items.length
      ),
    [items.length]
  );

  return (
    <section id="gallery" className="section relative">
      <div className="shell">
        <SectionHeader
          index="03"
          label={t.gallery.label}
          line1={t.gallery.titleLine1}
          line2={t.gallery.titleLine2}
        />
      </div>

      <Reveal className="relative z-10">
        {/* trilha de ponta a ponta da tela, arrastável para os lados */}
        <div ref={viewportRef} className="overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            drag="x"
            dragConstraints={viewportRef}
            dragElastic={0.08}
            onDragStart={() => {
              dragged.current = true;
            }}
            onDragEnd={() => {
              // solta o "arrastou" só depois do clique que o navegador dispara
              setTimeout(() => {
                dragged.current = false;
              }, 0);
            }}
            className="grid w-max cursor-grab grid-flow-col grid-rows-[repeat(2,clamp(150px,24vh,220px))] gap-3 px-[clamp(16px,4vw,48px)] active:cursor-grabbing [grid-auto-columns:clamp(190px,24vw,300px)]"
          >
            {items.map((item, index) => (
              <button
                key={item.image}
                type="button"
                aria-label={`${l.open} ${index + 1}`}
                onFocus={(event) => reveal(event.currentTarget)}
                onClick={() => {
                  if (!dragged.current) setActive(index);
                }}
                className={`group relative cursor-[inherit] overflow-hidden rounded-[22px] bg-frame ${
                  spanClass[SPANS[index % SPANS.length]]
                }`}
              >
                {/* na grade vai a miniatura; a arte inteira só carrega ao ampliar */}
                <img
                  src={item.thumb}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-night/70 to-transparent p-4 pt-12 text-on-night opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <span className="eyebrow tabular-nums">
                    {pad(index + 1)} / {pad(items.length)}
                  </span>
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </span>
              </button>
            ))}
          </motion.div>
        </div>

        <div className="shell mt-6 flex items-center justify-between gap-4">
          <p className="eyebrow text-ink-2">{l.hint}</p>
          <div className="flex shrink-0 gap-2">
            <button type="button" onClick={() => slideBy(-1)} className={arrowClass} aria-label={t.gallery.previous}>
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button type="button" onClick={() => slideBy(1)} className={arrowClass} aria-label={t.gallery.next}>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Reveal>

      <AnimatePresence>
        {active !== null && (
          <Lightbox index={active} total={items.length} onClose={close} onStep={step} />
        )}
      </AnimatePresence>
    </section>
  );
}
