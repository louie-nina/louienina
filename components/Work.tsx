export default function Work() {
  return (
    <section id="work" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-violet-400 mb-3">
            Featured Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            A recent project
          </h2>
          <p className="mt-4 text-zinc-400">
            Every screenshot below is from a real, working full-stack app —
            authentication, dashboard, charts, database, deployed live.
          </p>
        </div>

        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-violet-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Live in production
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">
                  Expense Tracker
                </h3>
                <p className="mt-3 text-zinc-400 leading-relaxed">
                  A full-stack personal finance app. Sign up, log spending, see
                  where your money goes with a clean monthly breakdown chart.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Next.js 16",
                    "MongoDB",
                    "NextAuth",
                    "Tailwind",
                    "Recharts",
                  ].map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md border border-white/10 bg-white/[0.03] text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://expense-tracker-xi-dun-64.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors inline-flex items-center gap-2"
                >
                  Live demo
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
                <a
                  href="https://github.com/louie-nina/expense-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-white/15 bg-white/[0.03] text-white font-medium text-sm hover:bg-white/[0.06] transition-colors inline-flex items-center gap-2"
                >
                  Source code
                </a>
              </div>
            </div>

            <div className="relative p-6 sm:p-8 flex items-center justify-center bg-black/30">
              <div className="w-full aspect-[4/3] rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-black p-6 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-zinc-100 text-zinc-900 flex items-center justify-center text-base">
                      💰
                    </div>
                    <div className="text-xs">
                      <div className="font-semibold text-white">
                        Expense Tracker
                      </div>
                      <div className="text-zinc-500">Hi, nina</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { l: "May Total", v: "$544.25" },
                    { l: "All Time", v: "$544.25" },
                    { l: "Top", v: "Bills" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="rounded-lg bg-white/[0.04] border border-white/5 p-2"
                    >
                      <div className="text-[9px] uppercase tracking-wide text-zinc-500">
                        {s.l}
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5">
                        {s.v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex-1 rounded-lg bg-white/[0.04] border border-white/5 p-4 flex items-center justify-center">
                  <div className="relative w-24 h-24">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background:
                          "conic-gradient(#1e293b 0% 50%, #3b82f6 50% 70%, #10b981 70% 82%, #f59e0b 82% 94%, #ef4444 94% 100%)",
                      }}
                    />
                    <div className="absolute inset-3 rounded-full bg-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
