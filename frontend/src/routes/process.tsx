import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileCheck2,
  ClipboardCheck,
  ShieldCheck,
  Award,
  FileSearch,
  RefreshCcw,
  Globe2,
  ArrowRight,
} from "lucide-react";
import { PageHero } from "../components/page-hero";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Accreditation Process — IUCB" },
      {
        name: "description",
        content:
          "End-to-end IUCB accreditation workflow: application, review, technical assessment, evaluation, decision, certification, and public verification.",
      },
    ],
  }),
  component: Process,
});

const steps = [
  {
    icon: FileCheck2,
    title: "Application Submission",
    desc: "Submit your application with required documentation and evidence of compliance.",
    duration: "Week 1",
  },
  {
    icon: FileSearch,
    title: "Document Review",
    desc: "Initial completeness check and documentation assessment by the accreditation team.",
    duration: "Week 1–2",
  },
  {
    icon: ClipboardCheck,
    title: "Technical Assessment",
    desc: "On-site or virtual assessment by qualified IUCB technical assessors.",
    duration: "Week 3–5",
  },
  {
    icon: ShieldCheck,
    title: "Independent Evaluation",
    desc: "Findings reviewed by the IUCB Accreditation Committee for impartiality.",
    duration: "Week 6",
  },
  {
    icon: Award,
    title: "Accreditation Decision",
    desc: "Formal approval and issuance of the IUCB accreditation certificate.",
    duration: "Week 7",
  },
  {
    icon: Globe2,
    title: "Public Verification",
    desc: "Listing in the IUCB Accredited Directory with QR-verifiable credentials.",
    duration: "Week 8",
  },
  {
    icon: RefreshCcw,
    title: "Annual Surveillance",
    desc: "Yearly surveillance audits maintain accreditation throughout the 3-year cycle.",
    duration: "Ongoing",
  },
];

function Process() {
  return (
    <>
      <PageHero
        eyebrow="Workflow"
        title={
          <>
            The IUCB Accreditation <span className="text-gold">Process</span>
          </>
        }
        description="A transparent, internationally aligned workflow — from initial application to global public verification — typically completed in 6 to 8 weeks."
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="container-x">
          {/* Summary strip */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12 pb-10 border-b border-border">
            {[
              { label: "Typical Duration", value: "6–8 Weeks" },
              { label: "Accreditation Cycle", value: "3 Years" },
              { label: "Annual Surveillance", value: "Required" },
            ].map((s) => (
              <div key={s.label} className="border-l-2 border-gold pl-4">
                <div className="text-xl font-semibold text-primary">{s.value}</div>
                <div className="text-[12px] text-muted-foreground uppercase tracking-wider mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical connector line */}
            <div className="hidden md:block absolute left-[1.6rem] top-6 bottom-6 w-px bg-gradient-to-b from-primary/30 via-primary/15 to-transparent" />

            <ol className="space-y-5">
              {steps.map((s, i) => (
                <li
                  key={s.title}
                  className="relative grid md:grid-cols-[4rem_1fr] gap-4 items-start group"
                >
                  {/* Icon + step number */}
                  <div className="relative flex-shrink-0">
                    <div className="h-[3.25rem] w-[3.25rem] rounded-xl bg-primary text-primary-foreground grid place-items-center shadow-[0_4px_12px_-2px_rgba(0,75,122,0.4)] group-hover:bg-secondary transition-colors duration-200">
                      <s.icon className="h-5 w-5" />
                    </div>
                    {/* Step badge */}
                    <div className="absolute -top-1.5 -right-1.5 h-5 w-5 rounded-full bg-gold text-gold-foreground text-[9px] font-bold grid place-items-center shadow-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="rounded-xl border border-border bg-white p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 hover:border-primary/20 hover:shadow-[0_4px_16px_-4px_rgba(0,75,122,0.1)] transition-all duration-200">
                    <div>
                      <h3 className="text-[15px] font-semibold text-navy">{s.title}</h3>
                      <p className="mt-1 text-[13px] text-muted-foreground leading-relaxed max-w-lg">
                        {s.desc}
                      </p>
                    </div>
                    <div className="text-[10px] font-mono tracking-wider uppercase px-3 py-1.5 bg-light-blue/60 text-primary rounded-lg whitespace-nowrap self-start sm:self-auto font-semibold flex-shrink-0">
                      {s.duration}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* CTA block */}
          <div className="mt-14 rounded-2xl bg-gradient-to-br from-primary via-primary to-secondary text-white p-8 md:p-10 text-center relative overflow-hidden shadow-[0_20px_48px_-8px_rgba(0,75,122,0.4)]">
            <div className="absolute inset-0 opacity-[0.05]" style={{
              backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }} />
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold/20 blur-3xl pointer-events-none" />
            <div className="relative">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold/15 border border-gold/25 mb-4">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                  Ready to Begin?
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                Begin your accreditation journey
              </h3>
              <p className="mt-3 text-white/75 text-[14px] max-w-md mx-auto">
                Our accreditation managers respond within 2–3 business days and will guide you
                through every step.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3">
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gold text-gold-foreground text-sm font-bold hover:brightness-110 hover:-translate-y-px transition-all duration-200 shadow-[0_4px_14px_-2px_rgba(212,175,55,0.4)]"
                >
                  Apply for Accreditation <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/25 text-sm font-semibold hover:bg-white/10 hover:-translate-y-px transition-all duration-200"
                >
                  Talk to Our Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
