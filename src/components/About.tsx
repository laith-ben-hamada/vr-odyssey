import { Reveal } from "@/components/Reveal";
import arena from "@/assets/gal-arena.jpg";
import player from "@/assets/gal-player.jpg";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
          <Reveal>
            <p className="text-display text-[0.62rem] tracking-[0.32em] text-primary">
              About VR Land
            </p>
            <h2 className="text-display mt-5 text-4xl font-black leading-[1] sm:text-5xl lg:text-6xl">
              More than <span className="text-neon">a game</span>
            </h2>
            <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
              VR Land lets you step beyond the screen and become part of the
              experience.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Whether you're looking for intense multiplayer action, immersive
              adventures or an unforgettable experience with friends, VR Land brings
              virtual reality into the real world.
            </p>
            <a href="#experiences" className="btn-base btn-ghost mt-9">
              See what's inside
            </a>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <Reveal delay={80} className="group">
              <figure className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border shadow-[var(--shadow-depth)]">
                <img
                  src={player}
                  alt="Player reaching out inside a virtual world"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 veil-bottom p-4 text-display text-[0.6rem] tracking-[0.24em] text-foreground/90">
                  Step inside
                </figcaption>
              </figure>
            </Reveal>
            <Reveal delay={180} className="group mt-10">
              <figure className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border shadow-[var(--shadow-depth)]">
                <img
                  src={arena}
                  alt="Group of players in a neon-lit VR arena"
                  loading="lazy"
                  width={1280}
                  height={960}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 veil-bottom p-4 text-display text-[0.6rem] tracking-[0.24em] text-foreground/90">
                  Play together
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
