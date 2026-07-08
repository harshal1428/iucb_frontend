import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Scale,
  Shield,
  Gavel,
  Users,
  FileText,
  ArrowRight,
  AlertTriangle,
  Handshake,
} from "lucide-react";
import { PageHero } from "../components/page-hero";

export const Route = createFileRoute("/governance")({
  head: () => ({
    meta: [
      { title: "Trust & Governance — IUCB" },
      {
        name: "description",
        content:
          "IUCB governance, oversight committees, impartiality policy, complaints and appeals processes.",
      },
    ],
  }),
  component: Governance,
});

const policies = [
  {
    icon: Scale,
    title: "Impartiality Policy",
    desc: "Independence from commercial, financial, or political pressures.",
    version: "v4.0",
    date: "Jan 2025",
  },
  {
    icon: Shield,
    title: "Confidentiality Policy",
    desc: "Handling and protection of all client information.",
    version: "v3.1",
    date: "Jan 2025",
  },
  {
    icon: Gavel,
    title: "Complaints & Appeals",
    desc: "Formal mechanisms for raising and resolving disputes.",
    version: "v2.5",
    date: "Dec 2024",
  },
  {
    icon: AlertTriangle,
    title: "Conflict of Interest",
    desc: "Identification, declaration, and mitigation procedures.",
    version: "v2.0",
    date: "Nov 2024",
  },
  {
    icon: Handshake,
    title: "Mutual Recognition",
    desc: "Framework governing cross-border recognition arrangements.",
    version: "v1.4",
    date: "Oct 2024",
  },
  {
    icon: FileText,
    title: "Code of Conduct",
    desc: "Ethical and professional obligations for IUCB personnel.",
    version: "v3.0",
    date: "Sep 2024",
  },
];

const bodies = [
  {
    title: "Board of Governors",
    desc: "Strategic oversight, governance, and final accreditation authority.",
    badge: "Oversight",
  },
  {
    title: "Accreditation Committee",
    desc: "Independent decision-making on accreditation outcomes.",
    badge: "Decision",
  },
  {
    title: "Technical Advisory Panel",
    desc: "Subject-matter expertise across ISO, cybersecurity, and privacy schemes.",
    badge: "Advisory",
  },
  {
    title: "Impartiality Committee",
    desc: "Safeguards independence and identifies systemic risks.",
    badge: "Assurance",
  },
];

function Governance() {
  return (
    <>
      <PageHero
        eyebrow="Trust & Governance"
        title={
          <>
            The framework behind every{" "}
            <span className="text-gold">IUCB decision</span>
          </>
        }
        description="Independent oversight, transparent policies, and rigorous governance bodies ensure every accreditation we issue is impartial, traceable, and globally credible."
      />

      {/* Governance Bodies */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-x">
          <div className="max-w-xl mb-10">
            <div className="eyebrow">Governance Bodies</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-navy tracking-tight">
              Independent oversight at every level
            </h2>
            <p className="mt-3 text-[14px] text-muted-foreground">
              Four distinct bodies ensure impartiality, technical rigor, and transparent
              decision-making throughout the accreditation process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {bodies.map((b, i) => (
              <div
                key={b.title}
                className="group rounded-2xl border border-border bg-white p-6 hover:border-primary/25 hover:shadow-[0_8px_24px_-6px_rgba(0,75,122,0.12)] hover:-translate-y-0.5 transition-all duration-250"
              >
                <div className="flex items-start gap-4">
                  <div className="h-11 w-11 rounded-xl bg-light-blue text-primary grid place-items-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    <Users className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-[15px] font-semibold text-navy">{b.title}</h3>
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-secondary/10 text-secondary">
                        {b.badge}
                      </span>
                    </div>
                    <p className="mt-1.5 text-[13px] text-muted-foreground leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policies */}
      <section className="py-14 md:py-20 bg-soft-gray">
        <div className="container-x">
          <div className="max-w-xl mb-10">
            <div className="eyebrow">Policies & Documentation</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-navy tracking-tight">
              Published policies, public commitments
            </h2>
            <p className="mt-3 text-[14px] text-muted-foreground">
              Every IUCB policy is publicly documented, version-controlled, and reviewed annually.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {policies.map((p, i) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-border bg-white p-6 hover:border-secondary/30 hover:shadow-[0_8px_24px_-6px_rgba(0,75,122,0.12)] hover:-translate-y-1 transition-all duration-250"
              >
                <div className="h-11 w-11 rounded-xl bg-light-blue text-primary grid place-items-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <p.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="font-semibold text-navy text-[15px]">{p.title}</h3>
                <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {p.version} · {p.date}
                  </span>
                  <Link
                    to="/documentation"
                    className="text-[11px] font-semibold text-secondary group-hover:text-primary inline-flex items-center gap-1 transition-colors"
                  >
                    Read PDF <ArrowRight className="h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
