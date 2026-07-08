import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, FileText, Download, BookOpen, FileCheck2, Layers } from "lucide-react";
import { PageHero } from "../components/page-hero";

export const Route = createFileRoute("/documentation")({
  head: () => ({
    meta: [
      { title: "Resources & Documentation — IUCB" },
      {
        name: "description",
        content:
          "Access official IUCB resources, accreditation manuals, policies, procedures, guidance documents, templates, and application forms.",
      },
    ],
  }),
  component: Documentation,
});

const categories = ["All Documents", "Governance", "Standards", "Forms", "Public Reports"];

const docs = [
  {
    title: "IUCB Code of Conduct",
    desc: "Ethical guidelines and professional responsibilities for all accredited organizations, auditors, and training providers.",
    version: "v2.0 · Jan 2026",
    size: "PDF · 1.4 MB",
    cat: "Governance",
  },
  {
    title: "Appeals and Complaints Procedure",
    desc: "Official procedure for submitting appeals, complaints, and dispute resolution requests.",
    version: "v3.1 · Jan 2026",
    size: "PDF · 950 KB",
    cat: "Governance",
  },
  {
    title: "Fee Structure 2026",
    desc: "Complete schedule of accreditation, certification, assessment, surveillance, and renewal fees.",
    version: "2026 Edition",
    size: "PDF · 780 KB",
    cat: "Public Reports",
  },
  {
    title: "ISO/IEC 27001 Transition Guide",
    desc: "Guidance for organizations transitioning to the latest ISO/IEC 27001 requirements.",
    version: "v1.8",
    size: "PDF · 2.2 MB",
    cat: "Standards",
  },
  {
    title: "Accreditation Application Form",
    desc: "Official application form for Certification Bodies, Individual Auditors, and Training Providers.",
    version: "2026 Edition",
    size: "DOCX · 420 KB",
    cat: "Forms",
  },
];

function Documentation() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All Documents");

  const filtered = docs.filter((d) => {
    const matchesCat = cat === "All Documents" || d.cat === cat;
    const matchesQ =
      !q ||
      d.title.toLowerCase().includes(q.toLowerCase()) ||
      d.desc.toLowerCase().includes(q.toLowerCase());
    return matchesCat && matchesQ;
  });

  return (
    <>
      <PageHero
        eyebrow="Resources & Documentation"
        title={
          <>
            Resource Center &<span className="text-gold"> Documentation</span>
          </>
        }
        description="Access official IUCB policies, governance frameworks, accreditation standards, public reports, application forms, and guidance documents."
      />

      {/* Stats strip */}
      <section className="py-8 bg-white border-b border-border">
        <div className="container-x">
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { icon: FileText, v: docs.length, l: "Published Documents" },
              { icon: Layers, v: 6, l: "Document Categories" },
              { icon: BookOpen, v: 4, l: "Languages Supported" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-xl border border-border bg-white p-5 flex items-center gap-4 hover:border-primary/20 hover:shadow-[0_4px_16px_-4px_rgba(0,75,122,0.1)] transition-all duration-200 group"
              >
                <div className="h-11 w-11 rounded-xl bg-light-blue text-primary grid place-items-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                  <s.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary">{s.v}</div>
                  <div className="text-[12px] text-muted-foreground mt-0.5">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search + docs */}
      <section className="py-12 bg-soft-gray">
        <div className="container-x">
          {/* Filter bar */}
          <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between mb-8 bg-white rounded-2xl border border-border p-4 shadow-sm">
            <div className="relative md:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search documents..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border bg-white text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-3.5 py-1.5 rounded-lg text-[12px] font-semibold transition-all duration-150 ${
                    cat === c
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-soft-gray border border-border text-navy hover:border-secondary hover:bg-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Document grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {filtered.length === 0 ? (
              <div className="col-span-full rounded-2xl border border-dashed border-border p-14 text-center text-muted-foreground bg-white">
                <FileText className="h-8 w-8 mx-auto mb-3 text-muted-foreground/50" />
                <p className="text-sm">No documents found. Try adjusting your search or filter.</p>
              </div>
            ) : (
              filtered.map((d, i) => (
                <article
                  key={d.title}
                  className="rounded-2xl border border-border bg-white p-6 hover:border-secondary/30 hover:shadow-[0_8px_24px_-6px_rgba(0,75,122,0.12)] hover:-translate-y-0.5 transition-all duration-250 group"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="h-11 w-11 rounded-xl bg-light-blue text-primary grid place-items-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <FileCheck2 className="h-4.5 w-4.5" />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-secondary bg-secondary/8 px-2.5 py-1 rounded-full">
                      {d.cat}
                    </span>
                  </div>
                  <h3 className="text-[15px] font-semibold text-navy leading-snug">{d.title}</h3>
                  <p className="mt-2 text-[13px] text-muted-foreground leading-relaxed">{d.desc}</p>
                  <div className="mt-5 pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="text-[11px] font-mono text-muted-foreground">
                      {d.version} · {d.size}
                    </div>
                    <button className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-[12px] font-semibold text-secondary bg-light-blue/50 rounded-lg hover:bg-primary hover:text-white transition-all duration-200">
                      <Download className="h-3.5 w-3.5" /> Download
                    </button>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
