const LINKS = [
  {
    label: "GitHub",
    handle: "@louie-nina",
    href: "https://github.com/louie-nina",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "X (Twitter)",
    handle: "@LouieNinaweb",
    href: "https://x.com/LouieNinaweb",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Fiverr",
    handle: "coming soon",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.004 15.588a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-6.937 5.838h2.812V12.4h-4.974v-.275c0-.687.55-1.238 1.238-1.238h1.512V8.075h-1.95c-2.063 0-3.713 1.65-3.713 3.713V12.4H9.107v-.275c0-.687.55-1.238 1.238-1.238h.6V8.075h-1.05c-2.062 0-3.712 1.65-3.712 3.713V12.4H4.808V15.1h1.375v6.325h2.813V15.1h2.887v6.325h2.813V15.1h2.137v3.55c0 1.55 1.225 2.776 2.776 2.776h.45zM7.583 5.913a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-violet-500/[0.08] via-blue-500/[0.04] to-transparent p-8 sm:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/15 blur-3xl rounded-full pointer-events-none" />

          <div className="relative">
            <p className="text-xs font-medium uppercase tracking-widest text-violet-400 mb-3">
              Contact
            </p>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight max-w-2xl">
              <span className="gradient-text">
                Have a project in mind?
              </span>
            </h2>
            <p className="mt-4 text-zinc-400 max-w-xl text-lg">
              Message me on any of the channels below. I always reply within a
              few hours and I&apos;ll tell you honestly if your project is the
              right fit.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {LINKS.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/25 p-4 transition-all"
                >
                  <div className="w-10 h-10 rounded-lg bg-white/[0.05] flex items-center justify-center text-white group-hover:bg-white/10 transition-colors">
                    {l.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-white">
                      {l.label}
                    </div>
                    <div className="text-xs text-zinc-500 truncate">
                      {l.handle}
                    </div>
                  </div>
                  <svg
                    className="ml-auto text-zinc-600 group-hover:text-white transition-colors"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
