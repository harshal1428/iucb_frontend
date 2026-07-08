import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Users, Calendar, MapPin, Award, Globe2 } from "lucide-react";
import { PageHero } from "../components/page-hero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About IUCB — Global Authority for Accreditation" },
      {
        name: "description",
        content:
          "Founded in 2019 and headquartered in Tallinn, IUCB sets the global standard for trust and excellence in accreditation and certification.",
      },
    ],
  }),
  component: About,
});

const milestones = [
  {
    year: "2019",
    title: "IUCB Established",
    desc: "Founded in Tallinn, Estonia as an independent international accreditation body.",
  },
  {
    year: "2021",
    title: "International Expansion",
    desc: "Expanded accreditation activities across multiple global regions.",
  },
  {
    year: "2024",
    title: "Global Recognition",
    desc: "Supporting certification bodies, auditors, and training providers worldwide.",
  },
  {
    year: "2026",
    title: "Digital Trust Platform",
    desc: "Introduced secure QR-enabled and cryptographic credential verification.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About IUCB"
        title={
          <>
            Building <span className="text-gold">Global Trust</span> Through{" "}
            <span className="text-gold">Accreditation</span>
          </>
        }
        description="The International Union for Certification & Benchmarking (IUCB) is an independent international accreditation body dedicated to strengthening confidence in certification, professional competence, and organizational compliance through globally recognized accreditation frameworks."
      />

      {/* Stats strip */}
      <section className="py-10 bg-white border-b border-border">
        <div className="container-x">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { v: "500+", l: "Accredited Organizations" },
              { v: "85+", l: "Countries Served" },
              { v: "50+", l: "International Standards" },
              { v: "2,000+", l: "Certified Auditors" },
            ].map((s, idx) => (
              <div
                key={s.l}
                className="border-l-2 border-gold pl-4"
                style={{ animationDelay: `${idx * 80}ms` }}
              >
                <div className="text-3xl md:text-4xl font-semibold text-primary tracking-tight leading-none">
                  {s.v}
                </div>
                <div className="mt-1.5 text-xs text-muted-foreground uppercase tracking-wider">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values — two-column premium layout */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── LEFT: copy + mini-cards ── */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="h-px w-5 bg-gold" />
              <span className="eyebrow">Mission &amp; Vision</span>
            </div>

            {/* Heading — matches screenshot: large, bold, dark navy */}
            <h2 className="text-3xl md:text-[2.4rem] font-bold text-navy leading-[1.12] tracking-tight max-w-lg">
              Advancing Global Trust Through Rigorous Standards.
            </h2>

            {/* Body paragraphs */}
            <p className="mt-5 text-[14px] text-muted-foreground leading-relaxed max-w-md">
              Our mission is to establish a unified, globally recognized ecosystem for compliance
              and certification. We empower organizations and professionals to demonstrate their
              competence through transparent, impartial, and technologically secure accreditation.
            </p>
            <p className="mt-4 text-[14px] text-muted-foreground leading-relaxed max-w-md">
              Our vision is a world where compliance is not a barrier to entry, but a verifiable
              asset that drives cross-border commerce, secures data privacy, and elevates industry
              standards globally.
            </p>

            {/* Mission + Vision mini-cards */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {/* Mission card */}
              <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_1px_4px_0_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_-6px_rgba(0,75,122,0.12)] hover:-translate-y-0.5 transition-all duration-200">
                <div
                  className={`h-11 w-11 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-border grid place-items-center mb-4`}
                >
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Mission
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  A unified accreditation ecosystem with impartial verification, designed to
                  strengthen global trust and professional competence.
                </p>
              </div>

              {/* Vision card */}
              <div className="rounded-2xl border border-border bg-white p-5 shadow-[0_1px_4px_0_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_-6px_rgba(0,75,122,0.12)] hover:-translate-y-0.5 transition-all duration-200">
                <div
                  className={`h-11 w-11 rounded-xl bg-gradient-to-br from-secondary/10 to-secondary/5 border border-border grid place-items-center mb-4`}
                >
                  <Eye className="h-5 w-5 text-secondary" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Vision
                </div>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  A compliance landscape where verified certification unlocks global opportunity
                  and protects every stakeholder.
                </p>
              </div>
            </div>
          </div>

              {/* ── RIGHT: IUCB symbol in premium dark card ── */}
          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-white/5 blur-xl pointer-events-none" />

            <div
              className="relative rounded-2xl border border-white/12 overflow-hidden shadow-[0_28px_64px_-12px_rgba(0,0,0,0.65)]"
              style={{ background: "linear-gradient(160deg, #101f38 0%, #091524 100%)" }}
            >
              {/* Subtle grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              {/* Ambient top glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-[#4a7db5]/20 blur-3xl pointer-events-none" />

              <div className="relative p-8 flex flex-col items-center text-center">
                {/* IUCB Emblem — displayed as a round seal on white circle background */}
                <div className="relative mb-8">
                  {/* Outer glow ring */}
                  <div className="absolute inset-0 rounded-full bg-white/10 blur-xl pointer-events-none scale-110" />
                  {/* White circular background — exactly like screenshot 1 */}
                  <div className="relative h-52 w-52 rounded-full bg-white shadow-[0_0_40px_rgba(255,255,255,0.15),0_0_80px_rgba(74,125,181,0.2)] overflow-hidden border border-white/20">
                    <img
                      src="/FINAL_LOGO_DESIGN.jpeg"
                      alt="IUCB Official Emblem"
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                </div>

                {/* Caption badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/8 border border-gold/30 mb-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-gold">
                    Corporate Architecture
                  </span>
                </div>

                {/* Description */}
                <p className="text-[14px] text-white/65 leading-relaxed max-w-[300px] text-center">
                  A bold, modern visual that reflects IUCB's commitment to standards, governance,
                  and international recognition.
                </p>

                {/* Values row */}
                <div className="mt-6 flex items-center gap-5 flex-wrap justify-center">
                  {["Integrity", "Unity", "Competence", "Benchmarking"].map((v) => (
                    <span
                      key={v}
                      className="text-[10px] font-semibold uppercase tracking-widest text-white/35"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Journey / Timeline */}
      <section className="py-14 md:py-20 bg-soft-gray">
        <div className="container-x">
          <div className="max-w-xl mb-10">
            <div className="eyebrow">Our Journey</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-navy tracking-tight">
              Building global confidence since 2019
            </h2>
            <p className="mt-3 text-[14px] text-muted-foreground leading-relaxed max-w-lg">
              IUCB has continuously expanded its international presence by strengthening
              accreditation frameworks, supporting certification bodies, and introducing trusted
              digital verification technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {milestones.map((m, i) => (
              <div
                key={m.year}
                className="relative rounded-2xl bg-white border border-border p-6 hover:border-gold/40 hover:shadow-[0_8px_24px_-6px_rgba(0,75,122,0.1)] transition-all duration-250 group"
              >
                {/* Year badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gold/10 border border-gold/25 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="text-[11px] font-mono font-bold text-gold tracking-wider">
                    {m.year}
                  </span>
                </div>
                <div className="font-semibold text-navy text-[15px]">{m.title}</div>
                <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{m.desc}</p>

                {/* Connector line for desktop */}
                {i < milestones.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership / Guided by Industry Experts */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-x">
          {/* Centered header */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-[2.5rem] font-bold text-navy leading-[1.1] tracking-tight">
              Guided by Industry{" "}
              <span className="text-primary">Experts.</span>
            </h2>
            <p className="mt-4 text-[14px] text-muted-foreground leading-relaxed">
              IUCB's strategic direction is managed by our executive team, while our accreditation
              decisions are strictly governed by an Independent Oversight Council to ensure complete
              impartiality.
            </p>
          </div>

          {/* Team cards grid */}
          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              {
                initials: "ER",
                name: "Dr. Elena Rostova",
                role: "Executive Director",
                desc: "Leads IUCB's strategic direction with a focus on regulatory alignment and international trust frameworks.",
              },
              {
                initials: "MC",
                name: "Marcus Chen",
                role: "Head of Digital Integrity",
                desc: "Architect of IUCB's credential security, ensuring every certificate is tamper-evident and globally verifiable.",
              },
              {
                initials: "SJ",
                name: "Sarah Jenkins",
                role: "Chair of the Oversight Council",
                desc: "Acting independently of the executive team, Sarah brings 15 years of regulatory auditing experience to ensure all accreditation decisions remain objective and free from influence.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-border bg-white p-6 hover:border-primary/20 hover:shadow-[0_8px_24px_-6px_rgba(0,75,122,0.1)] hover:-translate-y-0.5 transition-all duration-200 last:md:col-span-1"
              >
                {/* Avatar circle */}
                <div className="h-14 w-14 rounded-full bg-[#F5E6C8] border border-[#E8D5A8] grid place-items-center mb-5">
                  <span className="text-[15px] font-bold text-[#8B6914] tracking-wide">
                    {member.initials}
                  </span>
                </div>

                {/* Name */}
                <div className="text-[16px] font-semibold text-navy">{member.name}</div>

                {/* Role */}
                <div className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold">
                  {member.role}
                </div>

                {/* Description */}
                <p className="mt-3 text-[13px] text-muted-foreground leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HQ Section */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="eyebrow">Global Headquarters</div>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-navy tracking-tight">
              Tallinn, Estonia
            </h2>
            <p className="mt-4 text-[14px] text-muted-foreground leading-relaxed max-w-md">
              Headquartered in Tallinn, Estonia, IUCB coordinates international accreditation
              activities through a global network of certification bodies, auditors, training
              providers, regulatory authorities, and strategic partners.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 max-w-sm">
              <Stat icon={Users} label="Accredited Organizations" value="500+" />
              <Stat icon={Calendar} label="Founded" value="2019" />
              <Stat icon={Globe2} label="Countries Served" value="85+" />
              <Stat icon={Award} label="Certified Auditors" value="2,000+" />
            </div>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-secondary hover:-translate-y-px transition-all duration-200 shadow-[0_4px_14px_-4px_rgba(0,75,122,0.4)]"
            >
              Contact Our Team
            </Link>
          </div>

          {/* HQ Card */}
          <div className="rounded-2xl bg-primary text-primary-foreground p-8 relative overflow-hidden shadow-[0_20px_48px_-8px_rgba(0,75,122,0.35)]">
            <div className="absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
            <div className="absolute -top-8 right-1/3 h-32 w-32 rounded-full bg-secondary/30 blur-2xl pointer-events-none" />

            <div className="relative">
              <div className="h-11 w-11 rounded-xl bg-gold/15 border border-gold/25 grid place-items-center mb-5">
                <MapPin className="h-5 w-5 text-gold" />
              </div>

              <div className="text-xl font-semibold leading-snug">IUCB Global Headquarters</div>
              <p className="mt-2 text-[13px] text-white/70">
                Tornimäe 5, 10145 Tallinn, Estonia
              </p>

              <div className="mt-7 pt-6 border-t border-white/12 grid grid-cols-2 gap-5 text-[13px]">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gold/80 font-semibold">
                    Email
                  </div>
                  <div className="mt-1 text-white/85">info@iucb.org</div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-gold/80 font-semibold">
                    Operating Hours
                  </div>
                  <div className="mt-1 text-white/85">Mon–Fri · 09:00–18:00 EET</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ icon: Icon, label, value }: { icon: typeof Users; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border p-4 bg-soft-gray hover:border-primary/20 hover:bg-white transition-all duration-200">
      <Icon className="h-3.5 w-3.5 text-secondary" />
      <div className="mt-2 text-xl font-semibold text-navy">{value}</div>
      <div className="text-[11px] text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}
