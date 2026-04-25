import { Apple, Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import appMockup from "@/assets/app-mockup.jpg";

export const AppDownload = () => {
  return (
    <section id="mobile-app" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-soft" />

      <div className="container">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="reveal order-2 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
              Mobile App
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Manage Anywhere with <span className="text-gradient">Our Mobile App</span>
            </h2>
            <p className="mt-5 text-base text-muted-foreground md:text-lg">
              Owners, coaches and students get a dedicated app experience. Mark attendance,
              check schedules, pay fees and stay updated on the go.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                size="lg"
                variant="outline"
                className="hover-lift h-14 justify-start gap-3 border-border bg-white/80 px-5 text-left backdrop-blur"
              >
                <Play className="h-6 w-6 fill-brand-blue text-brand-blue" />
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                    Coming Soon
                  </span>
                  <span className="text-sm font-semibold">Google Play</span>
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover-lift h-14 justify-start gap-3 border-border bg-white/80 px-5 text-left backdrop-blur"
              >
                <Apple className="h-6 w-6" />
                <span className="flex flex-col leading-tight">
                  <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                    Coming Soon
                  </span>
                  <span className="text-sm font-semibold">App Store</span>
                </span>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <Button
                size="lg"
                className="btn-shine group h-12 gap-2 bg-gradient-brand px-6 font-semibold text-white shadow-button hover:opacity-95"
              >
                Contact Sales
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-xs text-muted-foreground">
                Get early access — be first to launch with us.
              </p>
            </div>
          </div>

          <div className="reveal relative order-1 lg:order-2">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
            <div className="relative animate-float-slow rounded-3xl border border-border/80 bg-white p-2 shadow-glow">
              <img
                src={appMockup}
                alt="ProFieldy mobile app for sports academies"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
