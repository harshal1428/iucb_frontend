import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Search,
  ShieldCheck,
  QrCode,
  BadgeCheck,
  AlertCircle,
  Calendar,
  Building2,
  FileCheck2,
  Download,
  Loader2,
  Lock,
} from "lucide-react";
import { PageHero } from "../components/page-hero";
import { downloadCertificatePdf } from "../lib/certificate-pdf";

export const Route = createFileRoute("/verify")({
  head: () => ({
    meta: [
      { title: "Verify Certificate — IUCB" },
      {
        name: "description",
        content:
          "Verify the authenticity of an IUCB accreditation or certification using your certificate ID or QR code.",
      },
    ],
  }),
  component: Verify,
});

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

function Verify() {
  const [id, setId] = useState("");
  const [result, setResult] = useState<Result | null>(null);
  const [searched, setSearched] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearched(true);
    const key = id.trim().toUpperCase();
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

  return (
    <>
      <PageHero
        eyebrow="Certificate Verification"
        title={
          <>
            Verify any <span className="text-gold">IUCB credential</span> in seconds
          </>
        }
        description="Confirm the authenticity, scope, and validity of an IUCB-issued accreditation or certification. Every credential is tamper-evident and traceable."
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="container-x">
          <div className="max-w-3xl mx-auto">
            {/* Search form */}
            <div className="rounded-2xl border border-border bg-white p-6 md:p-8 shadow-[0_4px_24px_-4px_rgba(0,75,122,0.12)]">
              <div className="flex items-center gap-2 mb-5">
                <div className="h-8 w-8 rounded-lg bg-primary/10 grid place-items-center">
                  <Lock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-[13px] font-bold text-navy">Certificate Verification</div>
                  <div className="text-[11px] text-muted-foreground">
                    Enter a Certificate ID to verify authenticity
                  </div>
                </div>
              </div>
              <form onSubmit={onSubmit}>
                <div className="grid sm:grid-cols-[1fr_auto] gap-3">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-muted-foreground" />
                    <input
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      placeholder="e.g. IUCB-ACB-0421"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-border bg-soft-gray font-mono text-navy text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 focus:bg-white transition-all"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-secondary hover:-translate-y-px transition-all duration-200 shadow-[0_4px_12px_-2px_rgba(0,75,122,0.4)] whitespace-nowrap"
                  >
                    Verify Certificate
                  </button>
                </div>
                <div className="mt-4 flex items-center gap-3 text-[11px] text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <QrCode className="h-3.5 w-3.5 text-secondary" />
                    Or scan the QR code on your certificate
                  </div>
                  <span className="text-border">·</span>
                  <span>
                    Try:{" "}
                    <button
                      type="button"
                      onClick={() => setId("IUCB-ACB-0421")}
                      className="font-mono text-secondary hover:text-primary transition-colors"
                    >
                      IUCB-ACB-0421
                    </button>
                  </span>
                </div>
              </form>
            </div>

            {/* Result */}
            {searched && result && (
              <div className="mt-6">
                {result.ok ? (
                  <div className="rounded-2xl overflow-hidden border border-border shadow-[0_12px_32px_-8px_rgba(0,75,122,0.2)]">
                    {/* Header */}
                    <div className="bg-primary text-primary-foreground px-6 py-5 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-gold/20 border border-gold/30 grid place-items-center">
                          <ShieldCheck className="h-5 w-5 text-gold" />
                        </div>
                        <div>
                          <div className="text-[10px] uppercase tracking-widest text-gold font-bold">
                            Verified
                          </div>
                          <div className="font-semibold text-sm">Valid IUCB Credential</div>
                        </div>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold bg-gold text-gold-foreground rounded-full shadow-sm">
                        <BadgeCheck className="h-3.5 w-3.5" /> {result.status}
                      </span>
                    </div>

                    {/* Fields */}
                    <div className="bg-white p-6 grid sm:grid-cols-2 gap-5">
                      <Field icon={Building2} label="Credential Holder" value={result.holder!} />
                      <Field icon={FileCheck2} label="Certificate ID" value={result.id} mono />
                      <Field icon={ShieldCheck} label="Scope" value={result.scope!} />
                      <Field
                        icon={Calendar}
                        label="Validity"
                        value={`${result.issued} → ${result.expires}`}
                      />
                    </div>

                    {/* Footer */}
                    <div className="bg-soft-gray border-t border-border px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div className="text-[11px] text-muted-foreground">
                        Cryptographically signed · Verifiable via QR · Listed in the IUCB public
                        registry.
                      </div>
                      <button
                        onClick={onDownload}
                        disabled={downloading}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gold text-gold-foreground text-[12px] font-bold hover:brightness-110 hover:-translate-y-px transition-all duration-200 shadow-[0_4px_12px_-2px_rgba(212,175,55,0.4)] disabled:opacity-70 disabled:pointer-events-none"
                      >
                        {downloading ? (
                          <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        ) : (
                          <Download className="h-3.5 w-3.5" />
                        )}
                        {downloading ? "Generating PDF…" : "Download Certified Ledger PDF"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-2xl border border-destructive/25 bg-destructive/4 p-6 flex items-start gap-4">
                    <div className="h-9 w-9 rounded-lg bg-destructive/10 grid place-items-center flex-shrink-0">
                      <AlertCircle className="h-4.5 w-4.5 text-destructive" />
                    </div>
                    <div>
                      <div className="font-semibold text-navy text-[14px]">
                        No credential found for "{result.id}"
                      </div>
                      <p className="mt-1 text-[13px] text-muted-foreground">
                        Please re-check the ID or contact verifications@iucb.org. Counterfeit
                        certificates can be reported confidentially.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Feature pills */}
            <div className="mt-10 grid sm:grid-cols-3 gap-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Tamper-Evident",
                  desc: "Cryptographic signatures on every credential.",
                },
                {
                  icon: QrCode,
                  title: "QR Verification",
                  desc: "Instant validation from any device.",
                },
                {
                  icon: BadgeCheck,
                  title: "Public Registry",
                  desc: "All credentials listed in the IUCB Directory.",
                },
              ].map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-border bg-white p-4 text-center hover:border-primary/20 hover:shadow-[0_4px_16px_-4px_rgba(0,75,122,0.1)] transition-all duration-200"
                >
                  <div className="h-9 w-9 rounded-lg bg-light-blue text-primary grid place-items-center mx-auto mb-3">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div className="font-semibold text-navy text-[13px]">{f.title}</div>
                  <p className="mt-1 text-[11px] text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
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
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1.5">
        <Icon className="h-3 w-3" /> {label}
      </div>
      <div className={`text-navy font-semibold ${mono ? "font-mono text-sm" : "text-[14px]"}`}>
        {value}
      </div>
    </div>
  );
}
