import { Reveal } from "@/components/Reveal";
import eventsImg from "@/assets/events.jpg";

const occasions = [
  "Friends",
  "Birthdays",
  "Groups",
  "Corporate activities",
  "Special events",
];

export function Events() {
  return (
    <section id="events" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-xl border border-border shadow-[var(--shadow-depth)]">
          <img
            src={eventsImg}
            alt="Group celebrating with VR headsets in a neon-lit venue"
            loading="lazy"
            width={1536}
            height={1024}
            className="absolute inset-0 h-full w-full object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-[linear-gradient(115deg,var(--background)_18%,color-mix(in_oklab,var(--background)_65%,transparent)_60%,transparent_100%)]" />

          <div className="relative max-w-2xl p-8 sm:p-14 lg:p-20">
            <Reveal>
              <p className="text-display text-[0.62rem] tracking-[0.32em] text-primary">
                Groups & events
              </p>
              <h2 className="text-display mt-5 text-3xl font-black leading-[1.02] sm:text-5xl">
                Make your next event <span className="text-neon">different</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Virtual reality turns any gathering into a shared story. Bring your
                group to VR Land and let everyone play the same world together.
              </p>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {occasions.map((o) => (
                  <li
                    key={o}
                    className="text-display rounded-sm border border-border bg-surface/60 px-3.5 py-2 text-[0.6rem] tracking-[0.18em] text-foreground/85 backdrop-blur"
                  >
                    {o}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn-base btn-primary mt-10">
                Plan your experience
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
