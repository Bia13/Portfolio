import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import portfolio from "../data/portfolio";
import { useLanguage } from "./LanguageContext";
import { EASE, RollButton } from "./ui";

const pad = (n) => String(n).padStart(2, "0");

const closeLabels = { pt: "Fechar projeto", en: "Close project", es: "Cerrar proyecto" };

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function Section({ title, children }) {
  if (!children) return null;

  return (
    <div className="border-t border-line py-6">
      <h3 className="eyebrow text-ink-2">{title}</h3>
      <p className="mt-3 text-[16px] leading-[1.6] text-ink">{children}</p>
    </div>
  );
}

function ScreensCarousel({ images, projectTitle, screenAlt, previousLabel, nextLabel }) {
  const [index, setIndex] = useState(0);

  if (!images?.length) return null;

  const goPrevious = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const goNext = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  const arrowClass =
    "flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line bg-paper text-ink transition-colors duration-200 hover:bg-ink hover:text-paper";

  return (
    <div className="overflow-hidden rounded-[24px] border border-line bg-paper-2 p-3">
      <div className="flex h-[min(56vh,440px)] items-center justify-center overflow-hidden rounded-[16px] bg-frame">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            alt={`${projectTitle} - ${screenAlt} ${index + 1}`}
            className="max-h-full max-w-full object-contain"
          />
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex items-center justify-between gap-4">
          <p className="eyebrow pl-2 tabular-nums text-ink-2" aria-live="polite">
            <span className="text-ink">{pad(index + 1)}</span> / {pad(images.length)}
          </p>
          <div className="flex gap-2">
            <button type="button" onClick={goPrevious} className={arrowClass} aria-label={previousLabel}>
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button type="button" onClick={goNext} className={arrowClass} aria-label={nextLabel}>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function DrawerContent({ project }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, locale } = useLanguage();
  const panelRef = useRef(null);
  const closeRef = useRef(null);

  // se a drawer foi aberta por um clique na home, "fechar" é voltar no histórico
  const openedFromHome = Boolean(location.state?.fromHome);
  const close = () => {
    if (openedFromHome) navigate(-1);
    else navigate("/", { replace: true });
  };
  const closeFn = useRef(close);
  useEffect(() => {
    closeFn.current = close;
  });

  const localeProject = project.translations?.[locale] || project;
  const title = localeProject.title || project.title;
  const category = localeProject.category || project.category;
  const description = localeProject.description || project.description;
  const highlights = localeProject.highlights || project.highlights;
  const link = localeProject.details?.link || project.details?.link;
  const details = {
    overview: localeProject.details?.overview || project.details?.overview,
    problem: localeProject.details?.problem || project.details?.problem,
    solution: localeProject.details?.solution || project.details?.solution,
    role: localeProject.details?.role || project.details?.role,
    workReduction: localeProject.details?.workReduction || project.details?.workReduction,
    metrics:
      project.details?.metrics?.map((metric, index) => ({
        value: metric.value,
        label: localeProject.details?.metrics?.[index]?.label || metric.label,
        description: localeProject.details?.metrics?.[index]?.description || metric.description,
      })) || [],
    images: localeProject.details?.images?.length
      ? localeProject.details.images
      : project.details?.images,
  };

  const images = details.images?.length ? details.images : [project.image];
  const hasImpact = details.workReduction || details.metrics.length > 0;

  // título da aba
  useEffect(() => {
    const previous = document.title;
    document.title = `${title} | Beatriz Dantas`;
    return () => {
      document.title = previous;
    };
  }, [title]);

  // trava a rolagem da página, leva o foco para a drawer e devolve ao fechar
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeFn.current();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;

      // mantém o Tab dentro da drawer
      const items = [...panelRef.current.querySelectorAll(FOCUSABLE)];
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      root.style.overflow = previousOverflow;
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[60]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={close}
        aria-hidden="true"
        className="absolute inset-0 bg-ink/55 backdrop-blur-[2px]"
      />

      <motion.aside
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-drawer-title"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.55, ease: EASE }}
        className="absolute inset-y-0 right-0 flex w-full max-w-[760px] flex-col bg-paper shadow-[-40px_0_80px_-40px_rgba(0,0,0,0.45)] sm:inset-y-2 sm:right-2 sm:w-[calc(100%-1rem)] sm:rounded-[28px]"
      >
        {/* barra fixa do topo */}
        <div className="flex shrink-0 items-center justify-between gap-4 border-b border-line py-3 pl-[clamp(20px,4vw,40px)] pr-3">
          <p className="eyebrow flex min-w-0 items-center gap-3 text-ink-2">
            <span className="h-px w-8 shrink-0 bg-coral" aria-hidden="true" />
            <span className="truncate">{category}</span>
          </p>
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label={closeLabels[locale] || closeLabels.pt}
            className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full bg-ink text-paper transition-colors duration-200 hover:bg-coral hover:text-ink"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* conteúdo rolável */}
        <div className="flex-1 overflow-y-auto overscroll-contain [scrollbar-width:thin] px-[clamp(20px,4vw,40px)] pb-10 pt-8">
          <h2 id="project-drawer-title" className="display text-[clamp(2.5rem,7vw,4.5rem)]">
            {title}
          </h2>
          <p className="mt-5 max-w-[32ch] text-[clamp(1.15rem,2.2vw,1.5rem)] font-medium leading-[1.25] tracking-[-0.03em] text-ink-2">
            {description}
          </p>

          {link && (
            <div className="mt-7">
              <RollButton href={link} variant="dark" icon={<ArrowUpRight />} turn={false}>
                {t.projects.liveSite}
              </RollButton>
            </div>
          )}

          <div className="panel mt-8 overflow-hidden">
            <img src={project.image} alt="" className="h-[220px] w-full object-cover sm:h-[320px]" />
          </div>

          {hasImpact && (
            <div className="panel mt-3 p-6">
              <p className="eyebrow text-on-night-2">{t.projectModal.impact}</p>

              {details.metrics.length > 0 && (
                <dl className="mt-5 grid gap-6 border-t border-line-night pt-5 sm:grid-cols-2">
                  {details.metrics.map((metric) => (
                    <div key={metric.label}>
                      <dd className="display text-5xl text-on-night">{metric.value}</dd>
                      <dt className="eyebrow mt-3 text-on-night">{metric.label}</dt>
                      <dd className="mt-1 text-sm leading-[1.5] text-on-night-2">{metric.description}</dd>
                    </div>
                  ))}
                </dl>
              )}

              {details.workReduction && (
                <div className="mt-5 border-t border-line-night pt-5">
                  <p className="eyebrow flex items-center gap-2 text-on-night-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-live" aria-hidden="true" />
                    {t.projectModal.reduction}
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.5] text-on-night">{details.workReduction}</p>
                </div>
              )}
            </div>
          )}

          <div className="mt-8 border-b border-line">
            <Section title={t.projectModal.overview}>{details.overview}</Section>
            <Section title={t.projectModal.problem}>{details.problem}</Section>
            <Section title={t.projectModal.solution}>{details.solution}</Section>
            <Section title={t.projectModal.role}>{details.role}</Section>
          </div>

          {highlights?.length > 0 && (
            <div className="mt-8">
              <p className="eyebrow text-ink-2">{t.projectModal.technologies}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <li key={item} className="eyebrow rounded-full border border-line px-3 py-1.5 text-ink">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10">
            <p className="eyebrow mb-4 flex items-center gap-3 text-ink-2">
              <span className="h-px w-8 bg-coral" aria-hidden="true" />
              {t.projectModal.screens}
            </p>
            <ScreensCarousel
              images={images}
              projectTitle={title}
              screenAlt={t.projectModal.screenAlt}
              previousLabel={t.projectModal.previousScreen}
              nextLabel={t.projectModal.nextScreen}
            />
          </div>

          {link && (
            <div className="mt-8">
              <RollButton href={link} variant="dark" icon={<ArrowUpRight />} turn={false}>
                {t.projects.liveSite}
              </RollButton>
            </div>
          )}
        </div>
      </motion.aside>
    </div>
  );
}

/** Drawer lateral com os detalhes do projeto. Abre quando a URL é /projects/:slug. */
export default function ProjectDrawer() {
  const match = useMatch("/projects/:slug");
  const slug = match?.params.slug;
  const project = slug ? portfolio.projects.find((item) => item.slug === slug) : null;

  return (
    <AnimatePresence>
      {project && <DrawerContent key={project.slug} project={project} />}
    </AnimatePresence>
  );
}
