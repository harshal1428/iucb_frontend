import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, BadgeCheck } from "lucide-react";
import { PageHero } from "../components/page-hero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact IUCB" },
      {
        name: "description",
        content:
          "Get in touch with the IUCB accreditation team for applications, partnerships, or verification queries.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Talk to the IUCB <span className="text-gold">Team</span>
          </>
        }
        description="Whether you're applying for accreditation, verifying a credential, or exploring a partnership — our team responds within 2–3 business days."
      />

      <section className="py-14 md:py-20 bg-white">
        <div className="container-x grid lg:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-border bg-white p-7 shadow-[0_4px_20px_-4px_rgba(0,75,122,0.1)]">
              {sent ? (
                <div className="text-center py-14">
                  <div className="h-16 w-16 mx-auto rounded-2xl bg-gold/10 border border-gold/20 grid place-items-center mb-5">
                    <BadgeCheck className="h-8 w-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-navy">Message received</h3>
                  <p className="mt-2 text-[14px] text-muted-foreground max-w-xs mx-auto">
                    An IUCB representative will respond within 2–3 business days.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                  className="grid gap-5"
                >
                  <div className="mb-1">
                    <h2 className="text-lg font-semibold text-navy">Send us a message</h2>
                    <p className="text-[13px] text-muted-foreground mt-1">
                      Fill in your details and we'll get back to you shortly.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Input label="Full Name" name="name" required />
                    <Input label="Email Address" name="email" type="email" required />
                  </div>
                  <Input label="Organization" name="org" />
                  <Input label="Subject" name="subject" required />
                  <div>
                    <label className="block text-[13px] font-semibold text-navy mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-white text-navy text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors resize-none"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-1">
                    <p className="text-[11px] text-muted-foreground">
                      * Required fields
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-secondary hover:-translate-y-px transition-all duration-200 shadow-[0_4px_14px_-4px_rgba(0,75,122,0.4)]"
                    >
                      Send Message <Send className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Contact cards */}
          <aside className="lg:col-span-5 space-y-3">
            <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground mb-4">
              Contact channels
            </p>
            <ContactCard
              icon={Mail}
              title="General Inquiries"
              lines={["info@iucb.org", "Response within 24h"]}
            />
            <ContactCard
              icon={Mail}
              title="Accreditations"
              lines={["accreditations@iucb.org", "Application support & process"]}
            />
            <ContactCard
              icon={Mail}
              title="Partnerships"
              lines={["connect@iucb.org", "Recognition agreements & MRAs"]}
            />
            <ContactCard
              icon={MapPin}
              title="Headquarters"
              lines={["Tornimäe 5, 10145", "Tallinn, Estonia"]}
            />
            <ContactCard
              icon={Phone}
              title="Phone"
              lines={["+372 600 4500", "Mon–Fri · 09:00–18:00 EET"]}
            />
          </aside>
        </div>
      </section>
    </>
  );
}

function Input({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="block text-[13px] font-semibold text-navy mb-1.5">{label}</label>
      <input
        {...props}
        className="w-full px-4 py-2.5 rounded-xl border border-border bg-white text-navy text-sm focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-colors"
      />
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  lines,
}: {
  icon: typeof Mail;
  title: string;
  lines: string[];
}) {
  return (
    <div className="rounded-xl border border-border p-4 flex gap-3.5 bg-white hover:border-primary/20 hover:shadow-[0_4px_16px_-4px_rgba(0,75,122,0.1)] transition-all duration-200 group">
      <div className="h-9 w-9 rounded-lg bg-light-blue text-primary grid place-items-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="text-[13px] font-semibold text-navy">{title}</div>
        {lines.map((l, i) => (
          <div
            key={i}
            className={
              i === 0
                ? "mt-0.5 text-[13px] text-navy/80"
                : "text-[11px] text-muted-foreground"
            }
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
