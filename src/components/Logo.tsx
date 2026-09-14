import logoImg from "@/assets/logo_01_enhanced.jpg";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = "" }: LogoProps) => {
  return (
    <a href="#top" className={`group flex items-center gap-2 ${className}`}>
      <img
        src={logoImg}
        alt="PROFIELDY"
        className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
      />
      <span className="font-display text-xl font-bold tracking-tight text-foreground">
        Pro<span className="text-gradient">Fieldy</span>
      </span>
    </a>
  );
};