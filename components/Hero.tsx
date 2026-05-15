export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-20 pb-32 sm:pt-32 sm:pb-40"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-violet-500/10 via-transparent to-transparent blur-3xl pointer-events-none glow" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="max-w-3xl fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur text-xs text-zinc-400 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Available for freelance work
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.05]">
            <span className="gradient-text">Modern web apps,</span>
            <br />
            <span className="text-zinc-400">built and deployed.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            I&apos;m{" "}
            <span className="text-white font-medium">Louie Nina</span>, a
            full-stack web developer. I build dashboards, SaaS tools, and
            internal apps with{" "}
            <span className="text-white">Next.js, MongoDB, and Vercel</span> —
            from first idea to live deployment.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-zinc-200 transition-colors inline-flex items-center gap-2"
            >
              View my work
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-white/15 bg-white/[0.03] text-white font-medium hover:bg-white/[0.06] hover:border-white/25 transition-colors"
            >
              Start a project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
