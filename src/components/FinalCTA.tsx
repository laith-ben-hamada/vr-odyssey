import { MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import ctaBg from "@/assets/cta-bg.jpg";
import { mailHref, site, whatsappHref } from "@/data/site";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden">
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover opacity-45 anim-drift"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--background)_0%,color-mix(in_oklab,var(--background)_55%,transparent)_45%,var(--background)_100%)]" />

      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:py-40 lg:px-8">
        <Reveal>
          <h2 className="text-display text-4xl font-black leading-[0.98] sm:text-6xl lg:text-7xl">
            Ready to enter <span className="text-neon">the game?</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">
            Your next reality is waiting.
          </p>
          <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
            <a href={mailHref} className="btn-base btn-primary">
              Contact us
            </a>
            <a
              href={whatsappHref}
              target={site.whatsapp ? "_blank" : undefined}
              rel="noreferrer"
              className="btn-base btn-ghost"
            >
              WhatsApp
              <MessageCircle size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
