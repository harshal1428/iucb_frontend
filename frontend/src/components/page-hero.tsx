import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Ambient glow */}
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-secondary/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-gold/15 blur-3xl pointer-events-none" />

      <div className="container-x relative py-14 md:py-20">
        {eyebrow && (
          <div className="inline-flex items-center gap-2 mb-5">
            <span className="h-1 w-5 rounded-full bg-gold" />
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold/90">
              {eyebrow}
            </span>
          </div>
        )}
        <h1 className="text-3xl md:text-[2.6rem] lg:text-5xl font-semibold leading-[1.08] tracking-tight max-w-3xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-xl text-base md:text-[17px] text-white/75 leading-relaxed">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>

      {/* Bottom fade into page */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
