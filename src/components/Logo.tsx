import { Trophy } from "lucide-react";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <a href="#top" className={`group flex items-center gap-2 ${className}`}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand shadow-button transition-transform duration-300 group-hover:scale-110">
        <Trophy className="h-5 w-5 text-white" strokeWidth={2.5} />
        <span className="absolute inset-0 rounded-xl bg-gradient-brand opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-70" />
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-foreground">
        Pro<span className="text-gradient">Fieldy</span>
      </span>
    </a>
  );
};
