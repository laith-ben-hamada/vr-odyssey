import { Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { mailHref, site, telHref, whatsappHref } from "@/data/site";

export function LocationSection() {
  return (
    <section id="location" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.25fr] lg:items-stretch">
          <Reveal>
            <div className="glass-panel h-full rounded-xl p-8 sm:p-10">
              <p className="text-display text-[0.62rem] tracking-[0.32em] text-primary">
                Find us
              </p>
              <h2 className="text-display mt-5 text-3xl font-black leading-[1.05] sm:text-4xl">
                {site.fullName}
              </h2>

              <div className="mt-7 flex items-start gap-3 text-muted-foreground">
                <MapPin size={18} className="mt-0.5 shrink-0 text-primary" />
                <p className="min-w-0 text-base">{site.address}</p>
              </div>

              <a
                href={site.mapsDirections}
                target="_blank"
                rel="noreferrer"
                className="btn-base btn-primary mt-8 w-full sm:w-auto"
              >
                Get directions
                <Navigation size={16} />
              </a>

              <div className="mt-10 border-t border-border pt-8">
                <p className="text-display text-[0.6rem] tracking-[0.24em] text-muted-foreground">
                  Contact
                </p>
                <ul className="mt-5 space-y-3">
                  <li>
                    <a
                      href={mailHref}
                      className="flex items-center gap-3 text-sm text-foreground/85 transition-colors hover:text-primary"
                    >
                      <Mail size={16} className="shrink-0 text-primary" />
                      <span className="min-w-0 truncate">
                        {site.email || "Email — to be confirmed"}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={telHref}
                      className="flex items-center gap-3 text-sm text-foreground/85 transition-colors hover:text-primary"
                    >
                      <Phone size={16} className="shrink-0 text-primary" />
                      <span className="min-w-0 truncate">
                        {site.phone || "Phone — to be confirmed"}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href={whatsappHref}
                      target={site.whatsapp ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-3 text-sm text-foreground/85 transition-colors hover:text-primary"
                    >
                      <MessageCircle size={16} className="shrink-0 text-primary" />
                      <span className="min-w-0 truncate">
                        {site.whatsapp ? "WhatsApp" : "WhatsApp — to be confirmed"}
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-[22rem] overflow-hidden rounded-xl border border-border shadow-[var(--shadow-depth)] sm:h-full sm:min-h-[28rem]">
              <iframe
                title={`Map showing ${site.fullName} on ${site.address}`}
                src={site.mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0 grayscale-[0.4] contrast-125"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
