import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experiences } from "@/components/Experiences";
import { WhyVRLand } from "@/components/WhyVRLand";
import { Events } from "@/components/Events";
import { Gallery } from "@/components/Gallery";
import { LocationSection } from "@/components/LocationSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const title = "VR Land Tunis — Enter Another Reality";
const description =
  "VR Land is an immersive virtual reality gaming and entertainment venue on Bd Cheikh Zayed, Tunis. Multiplayer VR, action, adventure and group experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experiences />
        <WhyVRLand />
        <Events />
        <Gallery />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
