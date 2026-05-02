import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookDemoDialog } from "@/components/BookDemoDialog";
import heroImage from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10 bg-gradient-hero" />
      <div className="absolute inset-0 -z-10 grid-pattern opacity-60" />
      <div className="absolute -top-24 left-1/2 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-brand opacity-[0.08] blur-3xl" />

      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-4 py-1.5 text-xs font-medium text-foreground/70 shadow-soft backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-blue" />
            All-in-one Sports Academy Platform
          </div>

          <h1 className="reveal font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Run Your Sports Academy
            <span className="block text-gradient">Smarter, Faster, Better</span>
          </h1>

          <p className="reveal mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg md:text-xl">
            Manage attendance, fees, salaries, schedules, tournaments, reports and communication
            from one powerful, beautifully designed platform.
          </p>

          <div className="reveal mt-9 flex items-center justify-center">
            <BookDemoDialog>
              <Button
                size="lg"
                className="btn-shine group h-12 gap-2 bg-gradient-brand px-7 text-base font-semibold text-white shadow-button hover:opacity-95"
              >
                Book Free Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </BookDemoDialog>
          </div>
        </div>

        {/* Dashboard visual */}
        <div className="reveal relative mx-auto mt-16 max-w-6xl">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
          <div className="relative animate-float-slow rounded-2xl border border-border/80 bg-white p-2 shadow-glow md:p-3">
            <img
              src={heroImage}
              alt="ProFieldy dashboards for sports academy owners, coaches and students"
              width={1920}
              height={1080}
              className="w-full rounded-xl"
            />
          </div>

          {/* Floating stat cards */}
          <div className="hidden md:block absolute -left-8 top-1/3 animate-float">
            <div className="glass-card rounded-2xl p-4 shadow-card">
              <p className="text-xs font-medium text-muted-foreground">Attendance Today</p>
              <p className="mt-1 font-display text-2xl font-bold text-foreground">96.2%</p>
              <div className="mt-2 h-1.5 w-32 overflow-hidden rounded-full bg-secondary">
                <div className="h-full w-[96%] rounded-full bg-gradient-brand" />
              </div>
            </div>
          </div>

          <div className="hidden md:block absolute -right-6 top-1/2 animate-float [animation-delay:1.5s]">
            <div className="glass-card rounded-2xl p-4 shadow-card">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand text-white">
                  ₹
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground">Fees Collected</p>
                  <p className="font-display text-lg font-bold">₹4.2L</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
