import { Link } from "@tanstack/react-router";
import { ShieldCheck, Mail, ArrowUp, Linkedin, Twitter, Globe } from "lucide-react";

const cols = [
  {
    title: "Accreditation",
    links: [
      { to: "/services", label: "Certification Bodies" },
      { to: "/services", label: "Auditors" },
      { to: "/services", label: "Training Providers" },
      { to: "/process", label: "Process" },
    ],
  },
  {
    title: "Trust & Governance",
    links: [
      { to: "/governance", label: "Governance" },
      { to: "/governance", label: "Policies" },
      { to: "/documentation", label: "Documentation" },
      { to: "/verify", label: "Verify Certificate" },
    ],
  },
  {
    title: "Organization",
    links: [
      { to: "/about", label: "About IUCB" },
      { to: "/directory", label: "Accredited Directory" },
      { to: "/contact", label: "Contact" },
      { to: "/documentation", label: "Resources" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-10">
      {/* Gold accent line at top */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="container-x py-12 grid gap-8 lg:grid-cols-12">
        {/* Brand column */}
        <div className="lg:col-span-4">
          <Link to="/" className="inline-flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-gold-foreground shadow-[0_2px_8px_-2px_rgba(212,175,55,0.5)] transition-transform duration-200 group-hover:scale-105">
              <ShieldCheck className="h-4.5 w-4.5" />
            </div>
            <div>
              <div className="text-[15px] font-bold leading-none">IUCB</div>
              <div className="text-[9px] uppercase tracking-widest opacity-60 mt-0.5">
                International Union for Certification & Benchmarking
              </div>
            </div>
          </Link>

          <p className="mt-5 text-[13px] text-white/65 max-w-[260px] leading-relaxed">
            The global authority for accreditation of certification bodies, auditors, and training
            providers — recognized in 85+ countries.
          </p>

          <div className="mt-6 flex items-center gap-2">
            {[
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "Twitter" },
              { icon: Globe, label: "Website" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="h-8 w-8 grid place-items-center rounded-lg bg-white/8 hover:bg-white/18 text-white/70 hover:text-white transition-all duration-200 hover:-translate-y-px"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        {cols.map((c) => (
          <div key={c.title} className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.18em] text-gold font-bold mb-4">
              {c.title}
            </div>
            <ul className="space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.to as never}
                    className="text-[13px] text-white/65 hover:text-white transition-colors duration-150 hover:translate-x-[2px] inline-block"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact column */}
        <div className="lg:col-span-2">
          <div className="text-[10px] uppercase tracking-[0.18em] text-gold font-bold mb-4">
            Contact
          </div>
          <ul className="space-y-2.5 text-[13px] text-white/65">
            {[
              "info@iucb.org",
              "accreditations@iucb.org",
              "connect@iucb.org",
            ].map((email) => (
              <li key={email} className="flex items-center gap-2">
                <Mail className="h-3 w-3 flex-shrink-0 text-gold/70" />
                <a href={`mailto:${email}`} className="hover:text-white transition-colors duration-150 truncate">
                  {email}
                </a>
              </li>
            ))}
          </ul>
          <Link
            to="/verify"
            className="inline-flex mt-5 px-4 py-2 text-[11px] font-bold rounded-lg bg-gold text-gold-foreground hover:brightness-110 transition-all duration-200 shadow-[0_2px_8px_-2px_rgba(212,175,55,0.4)]"
          >
            Verify Credentials
          </Link>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="container-x py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-white/45">
          <div>
            © 2026 International Union for Certification & Benchmarking. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white/80 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white/80 transition-colors">
              Terms of Service
            </a>
            <button
              onClick={() =>
                typeof window !== "undefined" && window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="flex items-center gap-1.5 hover:text-white/80 transition-colors group"
            >
              Back to top{" "}
              <ArrowUp className="h-3 w-3 transition-transform duration-200 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
