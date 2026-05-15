const SERVICES = [
  {
    icon: "📊",
    title: "Dashboards & Admin Panels",
    desc: "Real-time data, clean UI, role-based access. Built for the people who actually use them every day.",
    points: ["Charts and KPIs", "User management", "CRUD operations"],
  },
  {
    icon: "🚀",
    title: "SaaS MVPs",
    desc: "From idea to a paying customer. Landing page, signup, payments, dashboard, deployed and ready to share.",
    points: ["Email + password auth", "Stripe-ready billing", "Live within a week"],
  },
  {
    icon: "🔌",
    title: "REST APIs",
    desc: "Secure, well-typed, documented. Scoped per user, hashed credentials, ready for production traffic.",
    points: ["bcrypt + JWT", "Mongo / Postgres", "Auto-generated docs"],
  },
  {
    icon: "🛠️",
    title: "Internal Business Tools",
    desc: "Replace the spreadsheet. Custom invoice trackers, booking systems, CRMs — exactly what your team needs.",
    points: ["Custom workflows", "Data export", "Admin controls"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-violet-400 mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            What I build
          </h2>
          <p className="mt-4 text-zinc-400">
            Four core deliverables — each one comes with clean code, a live
            deployment, and a domain you can hand to your customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-7 hover:bg-white/[0.04] hover:border-white/20 transition-all overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-violet-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative">
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                  {s.desc}
                </p>
                <ul className="space-y-1.5">
                  {s.points.map((p) => (
                    <li
                      key={p}
                      className="text-xs text-zinc-500 flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-violet-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
