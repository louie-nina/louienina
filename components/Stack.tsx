const STACK = [
  { name: "Next.js", desc: "App Router, RSC" },
  { name: "React", desc: "Components, hooks" },
  { name: "TypeScript", desc: "End-to-end types" },
  { name: "Node.js", desc: "API routes, scripts" },
  { name: "MongoDB", desc: "Atlas, Mongoose" },
  { name: "NextAuth", desc: "JWT, bcrypt" },
  { name: "Tailwind CSS", desc: "v4, utility-first" },
  { name: "Vercel", desc: "Deploy + edge" },
];

export default function Stack() {
  return (
    <section id="stack" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-violet-400 mb-3">
            Stack
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            The tools I use every day
          </h2>
          <p className="mt-4 text-zinc-400">
            A curated stack chosen for speed of delivery, scalability, and
            long-term maintainability.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {STACK.map((s) => (
            <div
              key={s.name}
              className="group relative rounded-xl border border-white/10 bg-white/[0.02] p-5 hover:bg-white/[0.04] hover:border-white/20 transition-all"
            >
              <div className="font-semibold text-white">{s.name}</div>
              <div className="text-xs text-zinc-500 mt-1">{s.desc}</div>
              <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
