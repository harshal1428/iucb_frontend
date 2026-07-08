import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ShieldCheck,
  BadgeCheck,
  Globe2,
  Users,
  Building2,
  GraduationCap,
  Search,
  ArrowRight,
  Award,
  Lock,
  Scale,
  Eye,
  CheckCircle2,
  AlertTriangle,
  Briefcase,
  Landmark,
  QrCode,
  Upload,
  Loader2,
  ChevronLeft,
  ChevronRight,
  Download,
  Calendar,
  FileCheck2,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "IUCB — The Global Authority for Accreditation & Certification" },
      {
        name: "description",
        content:
          "IUCB accredits Certification Bodies, Auditors and Training Providers against ISO, Cybersecurity & Privacy standards — recognized in 85+ countries.",
      },
    ],
  }),
  component: Home,
});

/* ----------------------------- DATA ----------------------------- */

const slides = [
  {
    eyebrow: "Headquartered in Tallinn, Estonia · Serving 85+ Countries",
    title: "The Global Authority for Accreditation & Certification",
    accent: "Independent Oversight. Global Recognition.",
    body: "IUCB accredits Certification Bodies, Auditors, and Training Providers against ISO, Cybersecurity, and Privacy standards. We provide the independent oversight that organizations worldwide rely on to prove compliance and build institutional trust.",
    cta: { label: "Get Accredited", to: "/services" },
    stat: { k: "+95%", v: "Audit Pass Rate" },
  },
  {
    eyebrow: "Certification Bodies",
    title: "Achieve International Accreditation",
    accent: "Competence. Consistency. Impartiality.",
    body: "IUCB accredits Certification Bodies to ensure they operate in accordance with internationally recognized standards, providing confidence that audits and certifications are competent, consistent, and impartial.",
    cta: { label: "Explore Accreditation", to: "/services" },
    stat: { k: "85+", v: "Countries Served" },
  },
  {
    eyebrow: "Instant Credential Verification",
    title: "Instant, Cryptographic Verification",
    accent: "Verify Every Credential with Confidence",
    body: "Trust requires transparency. Instantly validate the authenticity and current status of any IUCB-issued credential using our secure verification console. Verify by Credential ID, QR code, or camera scan in real time.",
    cta: { label: "Verify Authenticity", to: "/verify" },
    stat: { k: "100%", v: "Verification Accuracy" },
  },
];

const stats = [
  { value: "500+", label: "Accredited Organizations" },
  { value: "85+", label: "Countries Served" },
  { value: "2,000+", label: "Certified Auditors" },
  { value: "50+", label: "International Standards" },
];

const paths = [
  {
    icon: Building2,
    title: "Certification Bodies",
    desc: "Achieve formal recognition of competence to audit and certify organizations against international standards.",
    to: "/services",
  },
  {
    icon: Users,
    title: "Individual Auditors",
    desc: "Earn globally portable credentials that validate your expertise across technical and management systems.",
    to: "/services",
  },
  {
    icon: GraduationCap,
    title: "Training Providers",
    desc: "Accredit your courses and examination frameworks to ensure they meet rigorous international compliance standards.",
    to: "/services",
  },
  {
    icon: Search,
    title: "Verification Console",
    desc: "Instantly verify the authenticity and current status of any IUCB-issued credential.",
    to: "/verify",
  },
];

const problems = [
  {
    problem:
      "Organizations struggle with fragmented compliance and multiple accreditation requirements.",
    solution:
      "IUCB provides a unified, globally recognized accreditation framework covering ISO, Cybersecurity, and Privacy standards.",
  },
  {
    problem: "Employers and regulators need a trusted way to verify professional credentials.",
    solution:
      "Every IUCB credential can be instantly verified through our secure cryptographic verification system.",
  },
  {
    problem:
      "Training providers and certification bodies need international recognition and credibility.",
    solution:
      "IUCB accreditation demonstrates competence, impartiality, and compliance with internationally recognized standards.",
  },
];

const trust = [
  {
    icon: Globe2,
    title: "Global Recognition",
    desc: "Mutual Recognition Arrangements (MLA) across 85+ jurisdictions ensure your credentials are recognized worldwide.",
  },
  {
    icon: Scale,
    title: "Independent Evaluation",
    desc: "Impartial assessments governed by an Independent Oversight Council, completely separated from commercial auditing activities.",
  },
  {
    icon: Lock,
    title: "Tamper-Evident Security",
    desc: "Every credential is cryptographically signed and recorded on an immutable ledger to prevent fraud and ensure verification integrity.",
  },
  {
    icon: BadgeCheck,
    title: "ISO Alignment",
    desc: "Accreditation processes aligned with internationally recognized ISO and compliance standards.",
  },
  {
    icon: Eye,
    title: "Transparent Verification",
    desc: "Anyone can instantly verify the authenticity and current status of an IUCB-issued credential.",
  },
  {
    icon: Award,
    title: "Professional Excellence",
    desc: "Recognizing organizations and professionals who meet the highest international standards of competence and compliance.",
  },
];

const industries = [
  { icon: Building2, label: "Certification Bodies" },
  { icon: Users, label: "Individual Auditors" },
  { icon: GraduationCap, label: "Training Providers" },
  { icon: Landmark, label: "Government & Regulators" },
  { icon: Globe2, label: "International Organizations" },
  { icon: Briefcase, label: "Enterprise Organizations" },
];

/* ----------------------------- COMPONENT ----------------------------- */

function Home() {
  return (
    <>
      <HeroCarousel />
      <KpiStrip />
      <InstitutionalOverview />
      <AudiencePaths />
      <ProblemSolution />
      <TailoredAccreditationSection />
      <TrustPillars />
      <IndustriesRow />
    </>
  );
}

/* ----------------------------- HERO CAROUSEL ----------------------------- */

function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: "#F8FAFC" }}>
      <div
        className="absolute inset-0 opacity-[0.45]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #E2E8F0 1px, transparent 1px), linear-gradient(to bottom, #E2E8F0 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />
      <div className="absolute -top-32 -right-32 h-[36rem] w-[36rem] rounded-full bg-secondary/10 blur-3xl" />
      <div className="absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="container-x relative pt-10 pb-14 md:pt-14 md:pb-20 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center min-h-[480px]">
        {/* LEFT: cross-fade text */}
        <div className="lg:col-span-7 relative min-h-[380px]">
          {slides.map((s, idx) => (
            <div
              key={s.title}
              className={`transition-all duration-700 ${idx === i ? "opacity-100 translate-y-0 relative" : "opacity-0 translate-y-3 absolute inset-0 pointer-events-none"}`}
            >
              <div
                className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] uppercase text-primary bg-white border border-gold/50 rounded-full px-3 py-1.5 shadow-sm"
                style={{ color: "#004B7A" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                {s.eyebrow}
              </div>
              <h1
                className="mt-6 text-4xl md:text-5xl lg:text-[3.6rem] font-semibold leading-[1.05] tracking-tight"
                style={{ color: "#0F172A" }}
              >
                {s.title}
              </h1>
              <div className="mt-3 text-lg md:text-xl font-semibold" style={{ color: "#D4AF37" }}>
                {s.accent}
              </div>
              <p
                className="mt-6 max-w-2xl text-base md:text-[17px] leading-relaxed"
                style={{ color: "#475569" }}
              >
                {s.body}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to={s.cta.to as never}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gold text-gold-foreground text-sm font-semibold hover:brightness-105 transition shadow-lg shadow-gold/30"
                >
                  {s.cta.label} <ArrowRight className="h-4 w-4" />
                </Link>
                <div className="flex items-center gap-3 pl-2">
                  <div className="text-2xl font-semibold" style={{ color: "#D4AF37" }}>
                    {s.stat.k}
                  </div>
                  <div className="text-xs leading-tight max-w-[120px]" style={{ color: "#64748B" }}>
                    {s.stat.v}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* tracking controls */}
          <div className="mt-12 flex items-center gap-4">
            <div className="flex items-center gap-2">
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2.5 border border-primary/30 bg-transparent hover:bg-primary/10"}`}
                />
              ))}
            </div>
            <div className="h-5 w-px bg-primary/20" />
            <div className="flex items-center gap-1">
              <button
                onClick={() => setI((p) => (p - 1 + slides.length) % slides.length)}
                className="h-8 w-8 grid place-items-center rounded-full border border-primary/25 text-primary hover:bg-primary/5 transition"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => setI((p) => (p + 1) % slides.length)}
                className="h-8 w-8 grid place-items-center rounded-full border border-primary/25 text-primary hover:bg-primary/5 transition"
                aria-label="Next"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: visual composition */}
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md aspect-[4/5]">
            {/* masked geometry */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-secondary/15 via-secondary/5 to-transparent blur-2xl" />
            <div className="absolute -top-4 -right-4 h-40 w-40 rounded-3xl border-2 border-gold/50 rotate-6" />
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-2xl bg-gold/20 -rotate-6" />

            {/* Main panel — dark navy card to anchor the gray scene */}
            <div
              className="relative h-full rounded-2xl overflow-hidden border border-white/10 text-white p-7 shadow-2xl shadow-primary/20"
              style={{ background: "linear-gradient(135deg, #0F172A 0%, #004B7A 100%)" }}
            >
              {i === 0 && <BusinessVisual />}
              {i === 1 && <AuditorVisual />}
              {i === 2 && <CryptoVisual />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BusinessVisual() {
  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <div className="text-[10px] tracking-[0.25em] uppercase text-white/70">
          Global Impact Index
        </div>
        <div className="text-[10px] tracking-[0.25em] uppercase text-gold">Q2 / 2026</div>
      </div>
      <div className="grid grid-cols-3 gap-3 mt-6">
        {[
          { k: "+95%", v: "Audit pass rate" },
          { k: "−30%", v: "Compliance cost" },
          { k: "85+", v: "Countries Served" },
        ].map((s) => (
          <div key={s.v} className="rounded-lg bg-white/5 border border-white/10 p-3">
            <div className="text-xl font-semibold text-gold">{s.k}</div>
            <div className="text-[10px] text-white/65 mt-1 leading-tight">{s.v}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-2.5">
        {[72, 88, 64, 91].map((w, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <div className="text-[10px] w-16 text-white/60 uppercase tracking-wider">
              Sector {idx + 1}
            </div>
            <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-secondary to-gold rounded-full"
                style={{ width: `${w}%` }}
              />
            </div>
            <div className="text-[10px] w-8 text-white/70 text-right">{w}%</div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-lg bg-gold/10 border border-gold/30 p-3 text-[11px] text-white/80">
        Independent research shows organizations with IUCB-recognized credentials win 2.4× more
        enterprise tenders.
      </div>
    </div>
  );
}

function AuditorVisual() {
  const tiers = [
    { t: "Lead Auditor", c: 412, tone: "gold" },
    { t: "Senior Auditor", c: 780, tone: "secondary" },
    { t: "Associate", c: 808, tone: "muted" },
  ];
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div className="text-[10px] tracking-[0.25em] uppercase text-white/70">
          Competency Registry
        </div>
        <div className="text-[10px] tracking-[0.25em] uppercase text-gold">Active</div>
      </div>
      <div className="mt-6 space-y-3">
        {tiers.map((tier) => (
          <div key={tier.t} className="rounded-lg bg-white/5 border border-white/10 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={`h-9 w-9 rounded-full grid place-items-center ${tier.tone === "gold" ? "bg-gold/20 border border-gold/40 text-gold" : tier.tone === "secondary" ? "bg-secondary/30 border border-secondary/50 text-white" : "bg-white/10 border border-white/15 text-white/80"}`}
                >
                  <Users className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{tier.t}</div>
                  <div className="text-[10px] text-white/60 uppercase tracking-wider">
                    ISO 27001 / 27701
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-lg font-semibold text-gold">{tier.c}</div>
                <div className="text-[9px] text-white/60 uppercase">Active</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-auto pt-5 flex items-center gap-2 text-[11px] text-white/70">
        <CheckCircle2 className="h-3.5 w-3.5 text-gold" />
        Validated against ISO/IEC 17024 personnel scheme.
      </div>
    </div>
  );
}

function CryptoVisual() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center justify-between">
        <div className="text-[10px] tracking-[0.25em] uppercase text-white/70">Ledger Snapshot</div>
        <div className="inline-flex items-center gap-1 text-[10px] tracking-[0.25em] uppercase text-gold">
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" /> Live
        </div>
      </div>
      <div className="mt-5 rounded-lg bg-white/5 border border-white/10 p-4">
        <div className="flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-wider text-white/60">Block #482,914</div>
          <Lock className="h-3.5 w-3.5 text-gold" />
        </div>
        <div className="mt-2 font-mono text-[10px] text-gold/90 break-all leading-relaxed">
          0x3F9A...8B21·E4D0·9C7F·A1B2·6D4E·8F50·1928·77AA
        </div>
      </div>
      <div className="mt-3 space-y-2">
        {["ACC-2026-8942 issued", "AUD-2026-1284 renewed", "TRN-2026-0421 verified"].map(
          (row, idx) => (
            <div
              key={row}
              className="flex items-center justify-between rounded-md bg-white/[0.04] border border-white/10 px-3 py-2 text-[11px]"
            >
              <div className="flex items-center gap-2 text-white/80">
                <span
                  className={`h-1.5 w-1.5 rounded-full ${idx === 0 ? "bg-gold" : "bg-secondary"}`}
                />
                {row}
              </div>
              <span className="font-mono text-[10px] text-white/50">2s ago</span>
            </div>
          ),
        )}
      </div>
      <div className="mt-auto pt-5 grid grid-cols-2 gap-3">
        <div className="rounded-md bg-gold/10 border border-gold/30 p-3 text-center">
          <ShieldCheck className="h-5 w-5 mx-auto text-gold" />
          <div className="mt-1 text-[10px] uppercase tracking-wider text-white/80">Signed</div>
        </div>
        <div className="rounded-md bg-secondary/15 border border-secondary/40 p-3 text-center">
          <QrCode className="h-5 w-5 mx-auto text-white" />
          <div className="mt-1 text-[10px] uppercase tracking-wider text-white/80">QR-ready</div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- KPI STRIP ----------------------------- */

function KpiStrip() {
  return (
    <section className="bg-white border-b border-border">
      <div className="container-x py-7 grid grid-cols-2 md:grid-cols-4 gap-5">
        {stats.map((s) => (
          <div
            key={s.label}
            className="text-center md:text-left border-l-2 border-gold pl-4 md:pl-5"
          >
            <div className="text-3xl md:text-[2.25rem] font-semibold text-gold tracking-tight leading-none">
              {s.value}
            </div>
            <div className="mt-2 text-[12px] text-muted-foreground uppercase tracking-wider">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ----------------------------- INSTITUTIONAL OVERVIEW ----------------------------- */

function InstitutionalOverview() {
  return (
    <section className="py-12 md:py-16 bg-soft-gray">
      <div className="container-x grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6">
          <div className="eyebrow">The Trust Framework</div>
          <h2 className="mt-3 text-3xl md:text-[2.6rem] font-semibold leading-[1.1] text-primary tracking-tight">
            Building institutional trust — one verified credential at a time.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
            IUCB sits at the intersection of regulation, standards bodies, and industry, providing
            the rigorous, independent assessment that governments and enterprises require to make
            confident decisions.
          </p>
          <div className="mt-7 grid sm:grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, t: "Global Recognition" },
              { icon: Globe2, t: "Independent Evaluation" },
              { icon: Scale, t: "Tamper-Evident Security" },
              { icon: BadgeCheck, t: "ISO Alignment" },
            ].map((x) => (
              <div
                key={x.t}
                className="flex items-center gap-3 rounded-lg bg-white border border-border p-3.5"
              >
                <div className="h-9 w-9 rounded-md bg-light-blue text-primary grid place-items-center">
                  <x.icon className="h-4.5 w-4.5" />
                </div>
                <div className="text-sm font-medium text-navy">{x.t}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Image montage */}
        <div className="lg:col-span-6">
          <div className="relative h-[460px]">
            <MontagePanel
              className="absolute top-0 left-0 w-[60%] h-[58%]"
              tone="primary"
              Icon={Landmark}
              caption="HQ · Tallinn"
            />
            <MontagePanel
              className="absolute top-[8%] right-0 w-[44%] h-[40%]"
              tone="secondary"
              Icon={Globe2}
              caption="85+ Countries"
            />
            <MontagePanel
              className="absolute bottom-0 right-[8%] w-[58%] h-[52%]"
              tone="gold"
              Icon={ShieldCheck}
              caption="Global Recognition"
            />
            <MontagePanel
              className="absolute bottom-[12%] left-[6%] w-[34%] h-[34%]"
              tone="light"
              Icon={Users}
              caption="Verified Credentials"
            />
          </div>
        </div>
      </div>

      {/* underlay performance banner */}
      <div className="container-x mt-10">
        <div className="rounded-2xl bg-primary text-white p-6 md:p-8 grid md:grid-cols-3 gap-6 md:gap-10 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold/15 blur-3xl" />
          {[
            { k: "500+", v: "Accredited Organizations" },
            { k: "85+", v: "Countries Served" },
            { k: "2,000+", v: "Certified Auditors" },
          ].map((m) => (
            <div
              key={m.v}
              className="relative flex items-baseline gap-4 border-l-2 border-gold pl-4"
            >
              <div className="text-4xl md:text-5xl font-semibold text-gold tracking-tight">
                {m.k}
              </div>
              <div className="text-sm text-white/80">{m.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MontagePanel({
  className,
  tone,
  Icon,
  caption,
}: {
  className: string;
  tone: "primary" | "secondary" | "gold" | "light";
  Icon: typeof ShieldCheck;
  caption: string;
}) {
  const tones: Record<string, string> = {
    primary: "from-primary to-[#003a60] text-white",
    secondary: "from-secondary to-primary text-white",
    gold: "from-gold/90 to-[#a88828] text-gold-foreground",
    light: "from-light-blue to-white text-primary",
  };
  return (
    <div className={`${className} group`}>
      <div
        className={`relative h-full rounded-2xl overflow-hidden border-2 border-gold/60 shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-1 group-hover:scale-[1.04] group-hover:ring-2 group-hover:ring-gold/60`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${tones[tone]}`} />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle at 30% 20%, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative h-full flex flex-col justify-between p-5">
          <Icon className="h-8 w-8 opacity-90" />
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] opacity-80">IUCB</div>
            <div className="text-base font-semibold mt-0.5">{caption}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- AUDIENCE PATHS ----------------------------- */

function AudiencePaths() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="eyebrow">How Can We Help You?</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-navy tracking-tight">
            Choose your path to get started
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tailored journeys for every stakeholder in the accreditation ecosystem.
          </p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {paths.map((p) => (
            <Link
              key={p.title}
              to={p.to as never}
              className="group relative rounded-2xl border border-border bg-white p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30 text-gold-foreground grid place-items-center">
                <p.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="mt-5 font-semibold text-navy text-[15px]">{p.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
                Get started <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- PROBLEM / SOLUTION ----------------------------- */

function ProblemSolution() {
  return (
    <section className="py-12 md:py-16 bg-soft-gray">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="eyebrow">The Solution Matrix</div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-navy tracking-tight">
            The Problem We <span className="text-secondary">Solve</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Mapping common industry compliance failures against our platform capabilities.
          </p>
        </div>
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          {problems.map((p, i) => (
            <article
              key={i}
              className="rounded-2xl overflow-hidden border border-border bg-white shadow-sm hover:shadow-lg transition"
            >
              <div className="bg-[#FFF7E6] border-b border-gold/20 p-5">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-[#8a6a00]">
                  <AlertTriangle className="h-3.5 w-3.5" /> Problem 0{i + 1}
                </div>
                <p className="mt-3 text-sm font-medium text-navy leading-snug">{p.problem}</p>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-secondary mb-3">
                  <span className="h-5 w-5 rounded-full bg-gold/20 border border-gold/50 grid place-items-center">
                    <CheckCircle2 className="h-3 w-3 text-gold-foreground" />
                  </span>
                  IUCB Solution
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.solution}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- WHAT WE OFFER ----------------------------- */

function TailoredAccreditationSection() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState<{
    ok: boolean; id: string; holder?: string;
    scope?: string; issued?: string; status?: string;
  } | null>(null);
  const [searched, setSearched] = useState(false);

  const sampleData: Record<string, { ok: boolean; id: string; holder: string; scope: string; issued: string; status: string }> = {
    "IUCB-ACB-0421": { ok: true, id: "IUCB-ACB-0421", holder: "EuroCert International", scope: "ISO/IEC 27001:2022", issued: "12 March 2026", status: "Active" },
    "IUCB-AAP-1284": { ok: true, id: "IUCB-AAP-1284", holder: "Dr. Aisha Khan", scope: "ISO 27001 Lead Auditor", issued: "02 Sep 2025", status: "Active" },
    "ACC-2026-8942": { ok: true, id: "ACC-2026-8942", holder: "Meridian Compliance Group", scope: "ISO/IEC 17021-1:2015", issued: "20 Jan 2026", status: "Active" },
  };

  const onVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const key = certId.trim().toUpperCase();
    setResult(sampleData[key] ?? { ok: false, id: key });
  };

  const displayResult = searched && result ? result : {
    ok: true, id: "IUCB-ACB-0421", holder: "EuroCert International",
    scope: "ISO/IEC 27001:2022", issued: "12 March 2026", status: "Active",
  };

  return (
    <section
      className="py-12 md:py-16 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2240 55%, #0f2d50 100%)" }}
    >
      {/* Subtle grid — same as hero section */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Ambient glows */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-secondary/25 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl pointer-events-none" />

      <div className="container-x relative grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── LEFT: copy ── */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/35 bg-gold/10 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
              Secure Credential Verification
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-[2.8rem] font-semibold leading-[1.06] tracking-tight text-white">
            Instant,{" "}
            <span
              className="font-bold"
              style={{ color: "#D4AF37" }}
            >
              Cryptographic
            </span>
            <br />
            Verification
          </h2>

          <p className="mt-5 text-[15px] text-white/65 leading-relaxed max-w-[440px]">
            Trust requires transparency. The open verification console allows anyone — regulators,
            employers, or partners — to instantly validate the authenticity and current status of
            any IUCB issued credential.
          </p>

          {/* Trust feature pills */}
          <div className="mt-8 flex flex-col gap-3">
            {[
              { icon: ShieldCheck, label: "Tamper-Proof Credentials" },
              { icon: QrCode,      label: "QR Code Verification" },
              { icon: CheckCircle2, label: "Real-Time Validation" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2.5 text-[13px] text-white/70">
                <b.icon className="h-4 w-4 text-gold flex-shrink-0" />
                {b.label}
              </div>
            ))}
          </div>

          <Link
            to="/verify"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gold text-gold-foreground text-sm font-bold hover:brightness-110 hover:-translate-y-px transition-all duration-200 shadow-[0_4px_16px_-2px_rgba(212,175,55,0.45)]"
          >
            Verify a Credential <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* ── RIGHT: console widget ── */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-white/5 blur-xl pointer-events-none" />

          <div
            className="relative rounded-2xl border border-white/12 overflow-hidden shadow-[0_28px_64px_-12px_rgba(0,0,0,0.65)]"
            style={{ background: "linear-gradient(160deg, #101f38 0%, #091524 100%)" }}
          >
            {/* Console header bar */}
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/8 bg-white/[0.03]">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/55">
                  Online
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/35">
                Secure Layer
              </span>
            </div>

            <div className="p-5">
              {/* Title */}
              <div className="mb-4">
                <div className="text-[16px] font-semibold text-white">Verification Console</div>
                <div className="text-[12px] text-white/45 mt-0.5">
                  Verify any IUCB issued credential directly.
                </div>
              </div>

              {/* Input */}
              <form onSubmit={onVerify}>
                <div className="text-[10px] font-bold uppercase tracking-wider text-white/45 mb-1.5">
                  Credential ID
                </div>
                <input
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                  placeholder="IUCB-ACB-0421 · ISO-27001-9842"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/8 border border-white/15 text-white text-[13px] font-mono placeholder:text-white/30 focus:outline-none focus:border-gold/50 focus:bg-white/12 transition-all mb-2.5"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-secondary text-white text-[13px] font-semibold hover:bg-secondary/80 transition-colors flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Verify Authenticity
                </button>

                <div className="mt-2 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    className="py-2 rounded-lg border border-white/12 bg-white/4 text-white/55 text-[11px] font-semibold hover:bg-white/8 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Upload className="h-3.5 w-3.5" /> Upload PDF
                  </button>
                  <button
                    type="button"
                    className="py-2 rounded-lg border border-white/12 bg-white/4 text-white/55 text-[11px] font-semibold hover:bg-white/8 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <QrCode className="h-3.5 w-3.5" /> Use Camera
                  </button>
                </div>
              </form>

              {/* Result panel — always shows a demo state until user searches */}
              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className={`h-5 w-5 rounded-full border grid place-items-center ${displayResult.ok ? "bg-green-400/15 border-green-400/35" : "bg-red-400/15 border-red-400/35"}`}>
                    {displayResult.ok
                      ? <CheckCircle2 className="h-3 w-3 text-green-400" />
                      : <ShieldCheck className="h-3 w-3 text-red-400" />
                    }
                  </div>
                  <span className="text-[10px] text-white/45 uppercase tracking-wider font-semibold">
                    Credential Status
                  </span>
                </div>

                {displayResult.ok ? (
                  <>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[20px] font-bold text-white">Verified</span>
                      <span className="text-[10px] font-semibold text-green-400 bg-green-400/12 border border-green-400/22 px-2 py-0.5 rounded-full">
                        Active
                      </span>
                    </div>
                    <div className="space-y-1.5 text-[12px]">
                      <div className="flex justify-between">
                        <span className="text-white/40">Issuer</span>
                        <span className="text-white/80 font-medium">IUCB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/40">Issue Date</span>
                        <span className="text-white/80 font-medium">{displayResult.issued}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/40">Status</span>
                        <span className="text-green-400 font-semibold">{displayResult.status}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-white/40">Verification</span>
                        <span className="text-white/80 font-medium">Cryptographically Signed</span>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-1">
                    <div className="text-[13px] text-red-400 font-semibold">Not Found</div>
                    <div className="text-[11px] text-white/35 mt-1">Try: IUCB-ACB-0421</div>
                  </div>
                )}
              </div>

              {/* Footer note */}
              <div className="mt-3 flex items-start gap-2 text-[11px] text-white/30">
                <Lock className="h-3.5 w-3.5 flex-shrink-0 mt-0.5" />
                Powered by cryptographic signatures and an immutable registry on ledger.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
/* ----------------------------- TRUST PILLARS ----------------------------- */

function TrustPillars() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="eyebrow">Trust Framework</div>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-navy tracking-tight">
            Why Choose IUCB
          </h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Trust is earned through independence, transparency, international recognition, and
            secure credential verification. IUCB provides a globally recognized framework that
            strengthens confidence in accredited organizations and certified professionals.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trust.map((t) => (
            <div
              key={t.title}
              className="rounded-xl border border-border p-6 hover:border-primary hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <div className="h-10 w-10 rounded-md bg-light-blue text-primary grid place-items-center">
                <t.icon className="h-5 w-5" />
              </div>

              <h3 className="mt-4 font-semibold text-navy">{t.title}</h3>

              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- INDUSTRIES ----------------------------- */

function IndustriesRow() {
  return (
    <section className="py-12 md:py-16 bg-soft-gray">
      <div className="container-x">
        <div className="max-w-2xl">
          <div className="eyebrow">Global Recognition</div>

          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-navy tracking-tight">
            Supporting Every Stakeholder in the Accreditation Ecosystem
          </h2>

          <p className="mt-4 text-muted-foreground">
            IUCB works with Certification Bodies, Individual Auditors, Training Providers,
            Governments, Regulators, and Enterprises to strengthen confidence in accredited
            organizations and certified professionals around the world.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((i) => (
            <div
              key={i.label}
              className="rounded-xl bg-white border border-border p-6 text-center hover:border-secondary hover:shadow-md transition"
            >
              <i.icon className="h-7 w-7 mx-auto text-secondary" />

              <div className="mt-3 text-sm font-medium text-navy">{i.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
