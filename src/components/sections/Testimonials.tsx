import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohan Mehta",
    role: "Owner, Apex Cricket Academy",
    quote:
      "ProFieldy replaced 5 different tools we used. Attendance, fees and reports are now effortless. Our parents love the transparency.",
  },
  {
    name: "Aisha Khan",
    role: "Head Coach, EliteFit",
    quote:
      "I save at least 10 hours every week. The coach dashboard is brilliantly designed — exactly what we needed.",
  },
  {
    name: "Sameer Patel",
    role: "Director, Champion Sports",
    quote:
      "Our academy looks 10x more professional. Onboarding new students and tracking growth is now a delight.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="relative py-24 md:py-32">
      <div className="container">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-indigo">
            Loved by Academies
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Trusted by the people who run them
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="reveal hover-lift glass-card relative flex flex-col rounded-3xl p-7 shadow-soft"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="mb-4 flex gap-1 text-brand-blue">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="flex-1 text-base leading-relaxed text-foreground/85">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand font-semibold text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
