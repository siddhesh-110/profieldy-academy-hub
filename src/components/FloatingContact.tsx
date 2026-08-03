import { useState } from "react";
import { MessageCircle, Phone, Mail, Calendar, X, Headphones } from "lucide-react";
import { BookDemoDialog } from "@/components/BookDemoDialog";

const actions = [
  { Icon: MessageCircle, label: "WhatsApp Us", href: "https://wa.me/0000000000", color: "text-green-600 bg-green-50 hover:bg-green-100" },
  { Icon: Phone, label: "Call Now", href: "tel:+0000000000", color: "text-brand-blue bg-blue-50 hover:bg-blue-100" },
  { Icon: Mail, label: "Email Support", href: "mailto:hello@profieldy.com", color: "text-brand-indigo bg-indigo-50 hover:bg-indigo-100" },
  { Icon: Calendar, label: "Book Demo", href: "#book-demo", color: "text-foreground bg-secondary hover:bg-secondary/70", isDialog: true },
];

export const FloatingContact = () => {
  const [open, setOpen] = useState(false);

  const ActionItem = ({ a, i }: { a: typeof actions[0]; i: number }) => {
    const content = (
      <>
        <span className="text-sm font-medium text-foreground">{a.label}</span>
        <span className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${a.color}`}>
          <a.Icon className="h-4 w-4" />
        </span>
      </>
    );

    return (
      <div
        className="group glass-card flex cursor-pointer items-center gap-3 rounded-full px-4 py-2.5 shadow-card transition-all hover:-translate-y-0.5"
        style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
      >
        {a.isDialog ? (
          <BookDemoDialog>
            <div className="flex items-center gap-3">{content}</div>
          </BookDemoDialog>
        ) : (
          <a
            href={a.href}
            target={a.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="flex items-center gap-3"
          >
            {content}
          </a>
        )}
      </div>
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Action menu */}
      <div
        className={`flex flex-col items-end gap-2 transition-all duration-500 ${
          open ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        {actions.map((a, i) => (
          <ActionItem key={a.label} a={a} i={i} />
        ))}
      </div>

      {/* Toggle button */}
      <button
        aria-label="Open contact options"
        onClick={() => setOpen((s) => !s)}
        className="hover-lift relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-white shadow-glow animate-pulse-glow"
      >
        <span className="absolute inset-0 rounded-full bg-gradient-brand opacity-60 blur-md" />
        <span className="relative">
          {open ? <X className="h-6 w-6" /> : <Headphones className="h-6 w-6" />}
        </span>
      </button>
    </div>
  );
};
