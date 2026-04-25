import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCta = () => {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container">
        <div className="reveal relative overflow-hidden rounded-[2rem] bg-gradient-brand p-10 text-center shadow-glow md:p-16">
          {/* decorative */}
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-10 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute inset-0 grid-pattern opacity-[0.06]" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
              Get Started Today
            </p>
            <h2 className="mx-auto mt-3 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Ready to Digitize Your Academy?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/85 md:text-lg">
              Join the academies switching to a smarter way of running their operations.
              Setup takes minutes — results last forever.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                size="lg"
                className="btn-shine h-12 gap-2 bg-white px-7 text-base font-semibold text-foreground hover:bg-white/95"
              >
                <Calendar className="h-5 w-5 text-brand-blue" />
                Book Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 gap-2 border-white/40 bg-white/10 px-7 text-base font-semibold text-white backdrop-blur hover:bg-white/20 hover:text-white"
              >
                Start Free Trial
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
