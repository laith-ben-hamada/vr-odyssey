import { ArrowUpRight, Users } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import riftops from "@/assets/exp-riftops.jpg";
import multiplayer from "@/assets/exp-multiplayer.jpg";
import action from "@/assets/exp-action.jpg";
import adventure from "@/assets/exp-adventure.jpg";
import horror from "@/assets/exp-horror.jpg";
import competitive from "@/assets/exp-competitive.jpg";
import family from "@/assets/exp-family.jpg";

/** Experience content — edit freely. Player counts are placeholders until confirmed. */
const experiences = [
  {
    name: "Multiplayer VR",
    description: "Team up in shared virtual worlds and play side by side, in real time.",
    players: "Players: TBC",
    image: multiplayer,
    alt: "Friends playing VR together",
  },
  {
    name: "Action / FPS",
    description: "Fast-paced shooting and reflex-driven missions built for adrenaline.",
    players: "Players: TBC",
    image: action,
    alt: "VR headset glowing in the dark",
  },
  {
    name: "Adventure",
    description: "Explore worlds you could never reach — at your own pace.",
    players: "Players: TBC",
    image: adventure,
    alt: "Virtual adventure landscape",
  },
  {
    name: "Horror",
    description: "Nothing between you and the dark. Enter only if you dare.",
    players: "Players: TBC",
    image: horror,
    alt: "Dark horror corridor in virtual reality",
  },
  {
    name: "Competitive",
    description: "Score, rank and rematch. Bring your best against your friends.",
    players: "Players: TBC",
    image: competitive,
    alt: "Two players facing off in a VR arena",
  },
  {
    name: "Family friendly",
    description: "Lighter experiences designed for all ages and first-timers.",
    players: "Players: TBC",
    image: family,
    alt: "Family enjoying VR games together",
  },
];

export function Experiences() {
  return (
    <section id="experiences" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-[80%] -translate-x-1/2 bg-[image:var(--gradient-neon)] opacity-40" />
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-display text-[0.62rem] tracking-[0.32em] text-primary">
            Experiences
          </p>
          <h2 className="text-display mt-5 text-4xl font-black leading-[1] sm:text-5xl lg:text-6xl">
            Choose your <span className="text-neon">world</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            A growing line-up of virtual reality experiences, from cooperative
            missions to solo adventures.
          </p>
        </Reveal>

        {/* Featured: RIFT OPS */}
        <Reveal delay={60}>
          <article className="group relative mt-14 overflow-hidden rounded-xl border border-border shadow-[var(--shadow-depth)]">
            <img
              src={riftops}
              alt="Squad of players in VR headsets in a tactical arena"
              loading="lazy"
              width={1536}
              height={1024}
              className="h-[26rem] w-full object-cover transition-transform duration-[900ms] group-hover:scale-105 sm:h-[32rem]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--background)_5%,color-mix(in_oklab,var(--background)_45%,transparent)_55%,transparent_100%)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <span className="text-display inline-flex items-center gap-2 rounded-sm border border-primary/50 bg-background/50 px-3 py-1.5 text-[0.58rem] tracking-[0.24em] text-primary backdrop-blur">
                Featured experience
              </span>
              <h3 className="text-display mt-5 text-3xl font-black sm:text-5xl">
                Rift Ops
              </h3>
              <p className="mt-3 max-w-lg text-sm text-muted-foreground sm:text-base">
                A multiplayer VR FPS experience developed in Tunisia.
              </p>
              <a href="#contact" className="btn-base btn-primary mt-7">
                Explore the experience
                <ArrowUpRight size={16} />
              </a>
            </div>
          </article>
        </Reveal>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((exp, i) => (
            <Reveal key={exp.name} delay={i * 70}>
              <article className="group relative h-full overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-[var(--glow-violet)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.alt}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-full w-full object-cover opacity-85 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,var(--color-card)_2%,transparent_70%)]" />
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                    <h3 className="text-display truncate text-lg font-bold">
                      {exp.name}
                    </h3>
                    <span className="inline-flex shrink-0 items-center gap-1.5 text-[0.68rem] text-muted-foreground">
                      <Users size={13} className="shrink-0" />
                      {exp.players}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>
                  <a
                    href="#contact"
                    className="text-display mt-6 inline-flex items-center gap-2 text-[0.65rem] tracking-[0.22em] text-primary transition-transform duration-300 group-hover:translate-x-1"
                  >
                    Discover
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground/70">
          Player counts and game details are placeholders and will be updated with
          the venue's confirmed line-up.
        </p>
      </div>
    </section>
  );
}
