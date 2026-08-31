import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <img
        src={heroImg}
        alt="Player wearing a VR headset inside a neon-lit virtual arena"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full scale-105 object-cover opacity-70 anim-drift"
      />
      <div className="absolute inset-0 veil-bottom" />
      <div className="absolute inset-0 grid-backdrop opacity-70" />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-accent/25 blur-[120px] anim-pulse-soft" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-primary/20 blur-[120px] anim-pulse-soft" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-primary/40 anim-scan" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-24 pt-32 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--color-primary)]" />
          <p className="text-display text-[0.62rem] tracking-[0.32em] text-primary sm:text-[0.7rem]">
            {site.tagline}
          </p>
        </div>

        <h1 className="text-display mt-6 max-w-4xl text-[2.6rem] font-black leading-[0.95] sm:text-6xl lg:text-8xl">
          Enter another <span className="text-neon">reality</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Live the game. Feel the action. Experience VR like never before.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a href="#experiences" className="btn-base btn-primary">
            Discover our experiences
            <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn-base btn-ghost">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
