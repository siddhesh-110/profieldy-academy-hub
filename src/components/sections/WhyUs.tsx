import { Clock, ShieldCheck, MessageSquare, Sparkles, BarChart3, MousePointerClick } from "lucide-react";

const points = [
  { icon: Clock, title: "Saves Management Time", desc: "Cut admin work in half with automation across attendance, fees and scheduling." },
  { icon: ShieldCheck, title: "Improves Discipline", desc: "Standardised processes and live tracking instil professionalism across the academy." },
  { icon: MessageSquare, title: "Better Communication", desc: "Stay in sync with parents, coaches and students through built-in messaging." },
  { icon: Sparkles, title: "Professional Growth Image", desc: "Project a premium, modern brand experience to every parent and athlete." },
  { icon: BarChart3, title: "Accurate Reports", desc: "Beautiful, exportable insights that help you make confident decisions." },
  { icon: MousePointerClick, title: "Easy to Use", desc: "Intuitive interface designed for owners, coaches and students of any age." },
];

export const WhyUs = () => {
  return (
    <section id="solutions" className="relative py-24 md:py-32">
      <div className="container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-indigo">
            Why ProFieldy
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Built for Modern <span className="text-gradient">Sports Academies</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Designed with academy owners and coaches who wanted more than a spreadsheet.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {points.map((p, i) => (
            <div
              key={p.title}
              className="reveal hover-lift group relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-soft"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-20" />
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-button">
                  <p.icon className="h-5 w-5" strokeWidth={2.4} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
