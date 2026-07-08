import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Search,
  MapPin,
  BadgeCheck,
  Building2,
  Users,
  GraduationCap,
  QrCode,
  ShieldCheck,
  AlertCircle,
  Calendar,
  FileCheck2,
  Download,
  Loader2,
  Filter,
} from "lucide-react";
import { PageHero } from "../components/page-hero";
import { downloadCertificatePdf } from "../lib/certificate-pdf";

export const Route = createFileRoute("/directory")({
  head: () => ({
    meta: [
      { title: "Accredited Directory — IUCB" },
      {
        name: "description",
        content:
          "Search the global IUCB directory of accredited certification bodies, auditors, and training providers.",
      },
    ],
  }),
  component: Directory,
});

type Entry = {
  name: string;
  type: "Certification Body" | "Auditor" | "Training Provider";
  country: string;
  standards: string[];
  id: string;
};

const entries: Entry[] = [
  {
    name: "EuroCert International",
    type: "Certification Body",
    country: "Germany",
    standards: ["ISO 27001", "ISO 9001"],
    id: "IUCB-ACB-0421",
  },
  {
    name: "Nordic Assurance Group",
    type: "Certification Body",
    country: "Sweden",
    standards: ["ISO 27701", "ISO 14001"],
    id: "IUCB-ACB-0388",
  },
  {
    name: "AsiaCert Holdings",
    type: "Certification Body",
    country: "Singapore",
    standards: ["ISO 27001", "SOC 2"],
    id: "IUCB-ACB-0501",
  },
  {
    name: "Dr. Aisha Khan",
    type: "Auditor",
    country: "United Arab Emirates",
    standards: ["ISO 27001 LA"],
    id: "IUCB-AAP-1284",
  },
  {
    name: "Marco Bertelli",
    type: "Auditor",
    country: "Italy",
    standards: ["ISO 9001 LA"],
    id: "IUCB-AAP-0921",
  },
  {
    name: "Compliance Academy EU",
    type: "Training Provider",
    country: "Netherlands",
    standards: ["ISO 27001", "ISO 9001"],
    id: "IUCB-ATPP-203",
  },
  {
    name: "Global Audit Institute",
    type: "Training Provider",
    country: "United Kingdom",
    standards: ["ISO 19011"],
    id: "IUCB-ATPP-187",
  },
  {
    name: "Pacific Cert Services",
    type: "Certification Body",
    country: "Australia",
    standards: ["ISO 27001"],
    id: "IUCB-ACB-0445",
  },
];

const typeIcon = {
  "Certification Body": Building2,
  Auditor: Users,
  "Training Provider": GraduationCap,
} as const;

const typeColor = {
  "Certification Body": "bg-primary/8 text-primary",
  Auditor: "bg-secondary/8 text-secondary",
  "Training Provider": "bg-gold/12 text-gold",
} as const;

type Result = {
  ok: boolean;
  id: string;
  holder?: string;
  scope?: string;
  issued?: string;
  expires?: string;
  status?: string;
};

const sample: Record<string, Result> = {
  "IUCB-ACB-0421": {
    ok: true,
    id: "IUCB-ACB-0421",
    holder: "EuroCert International",
    scope: "ISO/IEC 27001:2022",
    issued: "2026-02-14",
    expires: "2029-02-13",
    status: "Active",
  },
  "IUCB-AAP-1284": {
    ok: true,
    id: "IUCB-AAP-1284",
    holder: "Dr. Aisha Khan",
    scope: "ISO 27001 Lead Auditor",
    issued: "2025-09-02",
    expires: "2028-09-01",
    status: "Active",
  },
  "ACC-2026-8942": {
    ok: true,
    id: "ACC-2026-8942",
    holder: "Meridian Compliance Group",
    scope: "ISO/IEC 17021-1:2015 — Management System Certification",
    issued: "2026-01-20",
    expires: "2029-01-19",
    status: "Active",
  },
};

function Directory() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [searched, setSearched] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [filterType, setFilterType] = useState<string>("All");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const key = certId.trim().toUpperCase();
    setResult(sample[key] ?? { ok: false, id: key });
  };

  const onDownload = async () => {
    if (!result?.ok) return;
    setDownloading(true);
    try {
      await downloadCertificatePdf({
        id: result.id,
        holder: result.holder!,
        scope: result.scope!,
        issued: result.issued!,
        expires: result.expires!,
        status: result.status!,
      });
    } finally {
      setDownloading(false);
    }
  };

  const filtered = filterType === "All"
    ? entries
    : entries.filter((e) => e.type === filterType);

  return (
    <>
      <PageHero
        eyebrow="Public Registry"
        title={
          <>
            Accredited <span className="text-gold">Directory</span>
          </>
        }
        description="Search our global directory of accredited certification bodies, certified auditors, and approved training providers."
      />

      <section className="py-10 bg-soft-gray">
        <div className="container-x">
          {/* Verification widget */}
          <div className="mb-8">
            <div className="rounded-2xl border border-border bg-white p-5 md:p-6 shadow-[0_4px_20px_-4px_rgba(0,75,122,0.1)]">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-[13px] font-semibold text-navy">Quick Certificate Verification</span>
              </div>
              <form onSubmit={onSubmit}>
                <div className="grid sm:grid-cols-[1fr_auto] gap-3">
                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input
                      value={certId}
                      onChange={(e) => setCertId(e.target.value)}
                      placeholder="e.g. IUCB-ACB-0421"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-soft-gray font-mono text-navy text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-5 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-secondary hover:-translate-y-px transition-all duration-200 shadow-[0_4px_12px_-2px_rgba(0,75,122,0.4)] whitespace-nowrap"
                  >
                    Verify Certificate
                  </button>
                </div>
                <div className="mt-3 flex items-center gap-3 text-[11px] text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <QrCode className="h-3.5 w-3.5 text-secondary" />
                    Or scan the QR code on your certificate
                  </div>
                  <span className="text-border">·</span>
                  <span>Try: <span className="font-mono text-secondary">IUCB-ACB-0421</span></span>
                </div>
              </form>

              {searched && result && (
                <div className="mt-5">
                  {result.ok ? (
                    <div className="rounded-xl overflow-hidden border border-border shadow-md">
                      <div className="bg-primary text-primary-foreground px-5 py-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="h-9 w-9 rounded-lg bg-gold/20 border border-gold/30 grid place-items-center">
                            <ShieldCheck className="h-4.5 w-4.5 text-gold" />
                          </div>
                          <div>
                            <div className="text-[9px] uppercase tracking-widest text-gold font-bold">
                              Verified
                            </div>
                            <div className="font-semibold text-sm">Valid IUCB Credential</div>
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold bg-gold text-gold-foreground rounded-full">
                          <BadgeCheck className="h-3 w-3" /> {result.status}
                        </span>
                      </div>
                      <div className="bg-white px-5 py-4 grid sm:grid-cols-2 gap-4">
                        <Field icon={Building2} label="Credential Holder" value={result.holder!} />
                        <Field icon={FileCheck2} label="Certificate ID" value={result.id} mono />
                        <Field icon={ShieldCheck} label="Scope" value={result.scope!} />
                        <Field
                          icon={Calendar}
                          label="Validity"
                          value={`${result.issued} → ${result.expires}`}
                        />
                      </div>
                      <div className="bg-soft-gray border-t border-border px-5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="text-[11px] text-muted-foreground">
                          Cryptographically signed · Verifiable via QR · Listed in the IUCB registry.
                        </div>
                        <button
                          onClick={onDownload}
                          disabled={downloading}
                          className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gold text-gold-foreground text-[11px] font-bold hover:brightness-110 hover:-translate-y-px transition-all duration-200 disabled:opacity-70"
                        >
                          {downloading ? (
                            <Loader2 className="h-3.5 w-3.5 animate-spin" />
                          ) : (
                            <Download className="h-3.5 w-3.5" />
                          )}
                          {downloading ? "Generating…" : "Download PDF"}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-xl border border-destructive/25 bg-destructive/4 p-4 flex items-start gap-3">
                      <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-navy text-[13px]">
                          No credential found for "{result.id}"
                        </div>
                        <p className="mt-0.5 text-[12px] text-muted-foreground">
                          Please re-check the ID or contact verifications@iucb.org.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Filter + directory listing */}
          <div className="flex items-center justify-between gap-4 mb-5 flex-wrap">
            <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
              <Filter className="h-3.5 w-3.5" />
              <span>Showing {filtered.length} of {entries.length} entries</span>
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {["All", "Certification Body", "Auditor", "Training Provider"].map((t) => (
                <button
                  key={t}
                  onClick={() => setFilterType(t)}
                  className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all duration-150 ${
                    filterType === t
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-white border border-border text-navy hover:border-secondary"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((e) => {
              const Icon = typeIcon[e.type];
              return (
                <article
                  key={e.id}
                  className="rounded-xl border border-border bg-white p-5 hover:border-primary/25 hover:shadow-[0_8px_24px_-6px_rgba(0,75,122,0.12)] hover:-translate-y-0.5 transition-all duration-250 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="h-10 w-10 rounded-xl bg-light-blue text-primary grid place-items-center group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon className="h-4.5 w-4.5" />
                    </div>
                    <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-wider font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                      Active
                    </span>
                  </div>

                  <h3 className="font-semibold text-navy text-[14px] leading-snug">{e.name}</h3>
                  <div
                    className={`mt-1.5 inline-flex text-[10px] font-semibold px-2 py-0.5 rounded-full ${typeColor[e.type]}`}
                  >
                    {e.type}
                  </div>

                  <div className="mt-3 flex items-center gap-1.5 text-[12px] text-navy/80">
                    <MapPin className="h-3 w-3 text-secondary flex-shrink-0" />
                    {e.country}
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {e.standards.map((s) => (
                      <span
                        key={s}
                        className="text-[9px] font-mono px-1.5 py-0.5 bg-soft-gray border border-border rounded text-primary"
                      >
                        {s}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-border flex items-center justify-between">
                    <span className="text-[9px] font-mono text-muted-foreground truncate">
                      {e.id}
                    </span>
                    <button className="text-[11px] font-semibold text-secondary hover:text-primary transition-colors">
                      View →
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  icon: Icon,
  label,
  value,
  mono,
}: {
  icon: typeof ShieldCheck;
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div>
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
        <Icon className="h-3 w-3" /> {label}
      </div>
      <div className={`text-navy font-semibold ${mono ? "font-mono text-[13px]" : "text-[13px]"}`}>
        {value}
      </div>
    </div>
  );
}
