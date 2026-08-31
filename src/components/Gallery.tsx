import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import interior from "@/assets/gal-interior.jpg";
import headsets from "@/assets/gal-headsets.jpg";
import playerImg from "@/assets/gal-player.jpg";
import arena from "@/assets/gal-arena.jpg";
import multiplayer from "@/assets/exp-multiplayer.jpg";
import riftops from "@/assets/exp-riftops.jpg";

/** Placeholder imagery — replace with the venue's real photos when available. */
const images = [
  { src: interior, alt: "VR Land venue interior with neon lighting", span: "row-span-2" },
  { src: headsets, alt: "VR headsets on a charging rack", span: "" },
  { src: multiplayer, alt: "Friends playing VR side by side", span: "" },
  { src: playerImg, alt: "Player immersed in a virtual world", span: "row-span-2" },
  { src: arena, alt: "Multiplayer session in the VR arena", span: "" },
  { src: riftops, alt: "Tactical VR squad in action", span: "" },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-display text-[0.62rem] tracking-[0.32em] text-primary">
            Gallery
          </p>
          <h2 className="text-display mt-5 text-4xl font-black leading-[1] sm:text-5xl lg:text-6xl">
            Inside <span className="text-neon">the venue</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[13rem] grid-cols-2 gap-4 sm:auto-rows-[16rem] lg:grid-cols-4">
          {images.map((img, i) => (
            <Reveal key={img.alt} delay={i * 60} className={`h-full ${img.span}`}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Open image: ${img.alt}`}
                className="group relative h-full w-full overflow-hidden rounded-lg border border-border transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--glow-cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
                />
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-muted-foreground/70">
          Placeholder imagery — to be replaced with VR Land's own photos.
        </p>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-background/92 p-4 backdrop-blur-md"
        >
          <button
            type="button"
            onClick={() => setActive(null)}
            aria-label="Close image"
            className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-sm border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <X size={18} />
          </button>
          <img
            src={images[active]!.src}
            alt={images[active]!.alt}
            className="max-h-[85svh] w-auto max-w-full rounded-lg border border-border object-contain shadow-[var(--glow-violet)]"
          />
        </div>
      )}
    </section>
  );
}
