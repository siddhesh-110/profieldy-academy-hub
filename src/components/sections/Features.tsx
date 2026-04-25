import {
  CheckCircle2,
  Wallet,
  CalendarRange,
  TrendingUp,
  Trophy,
  LayoutDashboard,
  BellRing,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Smart Attendance Tracking",
    desc: "Track students and coaches in real time with live statistics and instant insights.",
  },
  {
    icon: Wallet,
    title: "Fees & Salary Management",
    desc: "Monitor student fees and coach salaries with automated reminders and reports.",
  },
  {
    icon: CalendarRange,
    title: "Batch Scheduling",
    desc: "Create and manage training batches efficiently across multiple sports and venues.",
  },
  {
    icon: TrendingUp,
    title: "Performance Reports",
    desc: "Track athlete growth with deep data insights, charts and progress milestones.",
  },
  {
    icon: Trophy,
    title: "Tournament Management",
    desc: "Organize events, register teams and manage participation seamlessly.",
  },
  {
    icon: LayoutDashboard,
    title: "Multi Dashboard Access",
    desc: "Separate, role-based dashboards for Owner, Coach and Student.",
  },
  {
    icon: BellRing,
    title: "Notifications & Updates",
    desc: "Instant alerts for schedules, fee dues, events and announcements.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Access",
    desc: "Run your academy from anywhere with native iOS and Android apps.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-soft" />

      <div className="container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
            Features
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Everything your academy needs.
            <span className="block text-gradient">In one elegant platform.</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground md:text-lg">
            Replace spreadsheets, WhatsApp groups, and paperwork with a system designed for
            modern sports academies.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="reveal hover-lift group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-soft"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-brand opacity-0 transition-opacity duration-500 group-hover:opacity-[0.04]" />
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue/10 to-brand-indigo/10 text-brand-blue transition-all duration-500 group-hover:bg-gradient-brand group-hover:text-white group-hover:shadow-button">
                <f.icon className="h-6 w-6" strokeWidth={2.2} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
