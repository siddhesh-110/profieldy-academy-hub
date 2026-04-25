const brands = [
  "Champion Sports",
  "EliteFit Academy",
  "Apex Athletics",
  "ProForm Academy",
  "Velocity Sports",
  "Summit Coaching",
  "Vanguard Athletics",
];

export const Trust = () => {
  return (
    <section className="border-y border-border/60 bg-white/50 py-12">
      <div className="container">
        <p className="reveal text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by growing academies, coaches and athletes
        </p>

        <div className="reveal mt-8 overflow-hidden">
          <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
            {[...brands, ...brands].map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-lg font-display font-bold tracking-tight text-foreground/40 transition-colors hover:text-foreground/80"
              >
                <span className="h-2 w-2 rounded-full bg-gradient-brand" />
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
