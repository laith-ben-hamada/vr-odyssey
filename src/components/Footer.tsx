import { Facebook, Instagram, Music2 } from "lucide-react";
import { mailHref, navLinks, site, telHref } from "@/data/site";

const socials = [
  { name: "Instagram", icon: Instagram, href: site.social.instagram },
  { name: "Facebook", icon: Facebook, href: site.social.facebook },
  { name: "TikTok", icon: Music2, href: site.social.tiktok },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-[image:var(--gradient-neon)] text-primary-foreground">
                <span className="text-display text-[0.65rem] font-bold">VR</span>
              </span>
              <span className="text-display text-lg font-bold tracking-[0.18em]">
                {site.name}
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              An immersive virtual reality entertainment destination in Tunis.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="text-display text-[0.6rem] tracking-[0.24em] text-primary">
              Navigation
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-display text-[0.6rem] tracking-[0.24em] text-primary">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>
                <a href={mailHref} className="transition-colors hover:text-primary">
                  {site.email || "Email — to be confirmed"}
                </a>
              </li>
              <li>
                <a href={telHref} className="transition-colors hover:text-primary">
                  {site.phone || "Phone — to be confirmed"}
                </a>
              </li>
              <li>{site.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-display text-[0.6rem] tracking-[0.24em] text-primary">
              Follow
            </h3>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href || "#top"}
                  target={s.href ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.href ? s.name : `${s.name} — link to be confirmed`}
                  className="grid h-11 w-11 place-items-center rounded-sm border border-border text-muted-foreground transition-all hover:border-primary hover:text-primary hover:shadow-[var(--glow-cyan)]"
                >
                  <s.icon size={17} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground/70">
              Social links to be confirmed.
            </p>
          </div>
        </div>

        <div className="mt-14 border-t border-border pt-7">
          <p className="text-xs text-muted-foreground/70">
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
