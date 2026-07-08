import { Link } from "@tanstack/react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

type NavItem = { to: string; label: string; hasMenu?: "programs" | "resources" };
const nav: NavItem[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Accreditation", hasMenu: "programs" },
  { to: "/directory", label: "Directory" },
  { to: "/documentation", label: "Resources", hasMenu: "resources" },
];

type MegaCol = { title: string; links: { to: string; label: string }[] };

const programsMega: MegaCol[] = [
  {
    title: "Accreditation Programs",
    links: [
      { to: "/services", label: "Auditor Accreditation" },
      { to: "/services", label: "Certification Body Accreditation" },
      { to: "/services", label: "Training Provider Accreditation" },
    ],
  },
];

const resourcesMega: MegaCol[] = [
  {
    title: "Governance",
    links: [
      { to: "/governance", label: "Board & Council" },
      { to: "/governance", label: "Technical Committee" },
      { to: "/governance", label: "Impartiality Committee" },
    ],
  },
  {
    title: "Trust Center",
    links: [
      { to: "/governance", label: "International Recognition" },
      { to: "/governance", label: "Standards Followed" },
      { to: "/governance", label: "Quality Assurance" },
    ],
  },
  {
    title: "Documentation",
    links: [
      { to: "/documentation", label: "Manuals & Forms" },
      { to: "/documentation", label: "Templates" },
      { to: "/documentation", label: "Publications" },
    ],
  },
  {
    title: "Transparency",
    links: [
      { to: "/governance", label: "Appeals Process" },
      { to: "/governance", label: "Complaints Handling" },
      { to: "/governance", label: "Code of Ethics" },
    ],
  },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_4px_24px_-4px_rgba(0,75,122,0.18)]" : ""
      }`}
    >
      {/* Branding row */}
      <div className="bg-white border-b border-border">
        <div className="container-x flex h-[64px] items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-12 flex-shrink-0 transition-transform duration-200 group-hover:scale-[1.04]">
              <img
                src="/FINAL_LOGO_DESIGN.jpeg"
                alt="IUCB Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="leading-tight">
              <div className="text-[15px] font-bold tracking-tight text-primary">IUCB</div>
              <div className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                International Union for Certification and Benchmarking
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/documentation"
              className="h-8 px-4 inline-flex items-center text-[11px] font-semibold rounded-full border border-gold/40 text-primary hover:border-gold hover:bg-gold/5 transition-all duration-200"
            >
              Advisory
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-primary rounded-md hover:bg-soft-gray transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-primary text-white relative">
        <div className="container-x">
          <nav className="hidden lg:flex items-center">
            {nav.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasMenu && setMenu(item.label)}
                onMouseLeave={() => setMenu(null)}
              >
                <Link
                  to={item.to as never}
                  className="group relative flex items-center gap-1 px-4 py-3 text-[14px] font-semibold text-white/80 hover:text-white transition-colors duration-200"
                  activeProps={{
                    className:
                      "flex items-center gap-1 px-4 py-3 text-[14px] font-semibold text-white",
                  }}
                >
                  {item.label}
                  {item.hasMenu && (
                    <ChevronDown
                      className={`h-3 w-3 opacity-70 transition-transform duration-200 ${
                        menu === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                  {/* Active / hover underline */}
                  <span className="pointer-events-none absolute left-3 right-3 bottom-0 h-[2px] bg-gold rounded-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-250" />
                </Link>

                {item.hasMenu && menu === item.label && (
                  <div
                    className="fixed left-0 right-0 z-50"
                    style={{ top: "auto" }}
                    onMouseEnter={() => setMenu(item.label)}
                    onMouseLeave={() => setMenu(null)}
                  >
                    <div className="absolute left-0 top-full w-screen">
                      <div className="bg-white border-b-4 border-gold shadow-[0_20px_48px_-8px_rgba(0,75,122,0.18)]">
                        <div
                          className={`container-x py-8 grid gap-8 ${
                            item.hasMenu === "programs" ? "grid-cols-1 max-w-sm" : "grid-cols-4"
                          }`}
                        >
                          {(item.hasMenu === "programs" ? programsMega : resourcesMega).map(
                            (col) => (
                              <div key={col.title}>
                                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-primary mb-3 pb-2 border-b border-light-blue">
                                  {col.title}
                                </div>
                                <ul className="space-y-2">
                                  {col.links.map((l) => (
                                    <li key={l.label}>
                                      <Link
                                        to={l.to as never}
                                        className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-navy hover:text-secondary transition-all duration-150 hover:translate-x-[3px]"
                                      >
                                        {l.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ),
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="ml-auto flex items-center gap-2 py-2">
              <Link
                to="/verify"
                className="h-8 px-4 inline-flex items-center text-[12px] font-semibold text-white/80 hover:text-white border border-white/20 hover:border-white/40 rounded-full transition-all duration-200"
              >
                Verify
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center h-8 px-5 rounded-full bg-gold text-gold-foreground text-[12px] font-bold hover:brightness-110 hover:-translate-y-px transition-all duration-200 shadow-[0_2px_8px_-2px_rgba(212,175,55,0.5)]"
              >
                Get Accredited
              </Link>
            </div>
          </nav>
        </div>
        {/* Gold accent line */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/35 to-transparent" />
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-primary text-white shadow-xl">
          <div className="container-x py-4 flex flex-col gap-0.5">
            {nav.map((n) => (
              <Link
                key={n.label}
                to={n.to as never}
                onClick={() => setOpen(false)}
                className="py-2.5 px-2 text-sm font-medium text-white/85 hover:text-gold hover:bg-white/5 rounded-md transition-colors"
              >
                {n.label}
              </Link>
            ))}
            <div className="flex gap-2 mt-4 pt-4 border-t border-white/10">
              <Link
                to="/verify"
                onClick={() => setOpen(false)}
                className="flex-1 text-center px-4 py-2.5 text-sm font-semibold rounded-xl border border-white/25 hover:bg-white/10 transition-colors"
              >
                Verify
              </Link>
              <Link
                to="/services"
                onClick={() => setOpen(false)}
                className="flex-1 text-center px-4 py-2.5 text-sm font-bold rounded-xl bg-gold text-gold-foreground hover:brightness-110 transition-all"
              >
                Apply
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
