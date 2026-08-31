import { Cpu, Glasses, Sparkles, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const benefits = [
  {
    icon: Glasses,
    title: "Full immersion",
    text: "Step inside the game instead of watching it on a screen.",
  },
  {
    icon: Users,
    title: "Multiplayer",
    text: "Share the experience and compete with your friends.",
  },
  {
    icon: Cpu,
    title: "Next-level technology",
    text: "Experience modern VR entertainment in an immersive environment.",
  },
  {
    icon: Sparkles,
    title: "Unforgettable moments",
    text: "Perfect for friends, groups and special occasions.",
  },
];

export function WhyVRLand() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-display text-[0.62rem] tracking-[0.32em] text-primary">
            Why VR Land
          </p>
          <h2 className="text-display mt-5 text-4xl font-black leading-[1] sm:text-5xl lg:text-6xl">
            Built for <span className="text-neon">immersion</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 90} className="h-full">
              <div className="group glass-panel h-full rounded-lg p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--glow-violet)]">
                <span className="grid h-12 w-12 place-items-center rounded-md border border-primary/35 bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:shadow-[var(--glow-cyan)]">
                  <b.icon size={22} />
                </span>
                <h3 className="text-display mt-6 text-base font-bold">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
