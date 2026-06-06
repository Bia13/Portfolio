export default function Contact() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-6xl font-bold">
          Vamos construir algo incrível?
        </h2>

        <p className="text-zinc-400 mt-6">
          Aberta para oportunidades em Product Design,
          UX/UI e Front-end.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <a
            href="https://linkedin.com"
            className="
              px-6
              py-3
              rounded-full
              bg-white
              text-black
              font-medium
            "
          >
            LinkedIn
          </a>

          <a
            href="mailto:biafranciscodantas@gmail.com"
            className="
              px-6
              py-3
              rounded-full
              border
              border-zinc-700
            "
          >
            Email
          </a>

           <a
            href="https://github.com/"
            className="
              px-6
              py-3
              rounded-full
              border
              border-zinc-700
            "
          >
            Github
          </a>

        </div>

      </div>
    </section>
  );
}