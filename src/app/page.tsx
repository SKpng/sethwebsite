import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { MediaGallery } from "@/components/sections/media-gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MediaGallery />
    </>
  );
}