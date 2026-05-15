const HIGHLIGHTS = [
  { value: "100%", label: "Code ownership" },
  { value: "<24h", label: "First response" },
  { value: "∞", label: "Revisions until happy" },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <p className="text-xs font-medium uppercase tracking-widest text-violet-400 mb-3">
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              I build, you ship.
            </h2>
            <div className="mt-6 space-y-4 text-zinc-400 leading-relaxed">
              <p>
                I work with founders, small teams, and solo operators who need a
                real product — not a prototype, not a slide deck. Something
                you can hand to your customers on day one.
              </p>
              <p>
                Every project comes with{" "}
                <span className="text-white">clean documented code</span>,{" "}
                <span className="text-white">a live deployment</span>, and{" "}
                <span className="text-white">free revisions until you are happy</span>.
                You own the repository. You own the database. You own the domain.
              </p>
              <p>
                No agency layers. No hidden fees. Just direct work, fast
                iteration, and a working product.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-3 gap-3 lg:gap-4 lg:grid-cols-1 self-start">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 lg:p-6"
              >
                <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-br from-white to-violet-300 bg-clip-text text-transparent">
                  {h.value}
                </div>
                <div className="text-xs lg:text-sm text-zinc-500 mt-1">
                  {h.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
