type Project = {
  icon: string;
  title: string;
  description: string;
  tags: string[];
  demo: string;
  source: string;
  preview: "donut" | "bars";
};

const PROJECTS: Project[] = [
  {
    icon: "💰",
    title: "Expense Tracker",
    description:
      "A full-stack personal finance app. Sign up, log spending, see where your money goes with a clean monthly breakdown chart.",
    tags: ["Next.js 16", "MongoDB", "NextAuth", "Tailwind", "Recharts"],
    demo: "https://expense-tracker-xi-dun-64.vercel.app",
    source: "https://github.com/louie-nina/expense-tracker",
    preview: "donut",
  },
  {
    icon: "🏃",
    title: "Strava Insights",
    description:
      "Personal Strava analytics dashboard. One-click OAuth, incremental sync, weekly trends, pace and heart-rate charts, 16-week training heatmap.",
    tags: ["Next.js 16", "Strava OAuth", "MongoDB", "Recharts"],
    demo: "https://strava-insights-psi.vercel.app",
    source: "https://github.com/louie-nina/strava-insights",
    preview: "bars",
  },
];

function DonutPreview() {
  return (
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
  );
}

function BarsPreview() {
  const bars = [40, 65, 55, 80, 70, 90, 50, 75];
  return (
    <div className="flex items-end gap-1.5 h-24">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-2.5 rounded-t bg-gradient-to-t from-violet-500 to-blue-400"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent overflow-hidden hover:border-white/20 transition-colors">
      <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500/10 blur-3xl rounded-full pointer-events-none opacity-50 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full pointer-events-none opacity-30" />

      <div className="relative p-7 sm:p-8 flex flex-col h-full">
        <div className="flex items-start justify-between mb-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-xl">
              {project.icon}
            </div>
            <div className="inline-flex items-center gap-2 text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.03] text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Live
            </div>
          </div>
          <div className="text-zinc-700">
            {project.preview === "donut" ? <DonutPreview /> : <BarsPreview />}
          </div>
        </div>

        <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
        <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded-md border border-white/10 bg-white/[0.03] text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2 pt-5 border-t border-white/5">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-lg bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors inline-flex items-center gap-1.5"
          >
            Live demo
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-2 rounded-lg border border-white/15 bg-white/[0.03] text-white font-medium text-sm hover:bg-white/[0.06] transition-colors"
          >
            Source code
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-violet-400 mb-3">
            Featured Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Real projects, real deployments
          </h2>
          <p className="mt-4 text-zinc-400">
            Every project below is a working, deployed app — authentication,
            database, charts, and a live URL you can try right now.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
