import { motion } from "framer-motion";
import { FaLinkedin, FaArrowUp } from "react-icons/fa";
import { SiGmail, SiGithub, SiBehance } from "react-icons/si";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-8">
      <div className="max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-4 mb-5">
            <div className="h-px w-12 bg-white/30" />
            <div className="h-px w-3 bg-white/10" />
          </div>

          <span
            style={{ fontFamily: "'DM Sans', sans-serif" }}
            className="text-[11px] font-medium tracking-[0.18em] uppercase text-zinc-500"
          >
            Contato
          </span>
          <h2
            style={{ fontFamily: "'Cormorant Garamond', serif", lineHeight: 1.0 }}
            className="mt-3 text-5xl md:text-6xl font-semibold text-white"
          >
            Vamos construir
            <br />
            <span className="italic font-light text-zinc-400">algo incrível.</span>
          </h2>
        </motion.div>

        <div className="rounded-3xl border border-white/8 bg-zinc-900 p-7 md:p-9">
          <p className="text-zinc-400 max-w-2xl">
            Aberta para oportunidades em Product Design, UX/UI e Front-end. Me mande uma mensagem
            ou confira meus perfis profissionais abaixo.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <a
              href="https://linkedin.com/in/dantasbia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-zinc-800 hover:border-white/12 transition"
            >
              <FaLinkedin size={22} className="text-cyan-400" />
              <div>
                <div className="font-semibold text-white">LinkedIn</div>
                <div className="text-sm text-zinc-500">linkedin.com/in/dantasbia</div>
              </div>
            </a>

            <a
              href="mailto:biafranciscodantas@gmail.com"
              className="flex items-center gap-4 p-4 rounded-lg border border-zinc-800 hover:border-white/12 transition"
            >
              <SiGmail size={20} className="text-rose-400" />
              <div>
                <div className="font-semibold text-white">Email</div>
                <div className="text-sm text-zinc-500">biafranciscodantas@gmail.com</div>
              </div>
            </a>

            <a
              href="https://github.com/bia13"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-zinc-800 hover:border-white/12 transition"
            >
              <SiGithub size={20} className="text-zinc-300" />
              <div>
                <div className="font-semibold text-white">Github</div>
                <div className="text-sm text-zinc-500">github.com/bia13</div>
              </div>
            </a>

            <a
              href="https://behance.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 rounded-lg border border-zinc-800 hover:border-white/12 transition"
            >
              <SiBehance size={20} className="text-indigo-400" />
              <div>
                <div className="font-semibold text-white">Behance</div>
                <div className="text-sm text-zinc-500">behance.com/dantasbia</div>
              </div>
            </a>
          </div>

          
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 text-center">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center justify-center rounded-full border border-zinc-700 bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:border-white/20 hover:bg-white/5"
            >
              Voltar ao topo
              <FaArrowUp className="ml-2" />
            </button>
          </div>
      </div>
    </section>
  );
}