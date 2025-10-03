import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { MediaGallery } from "@/components/sections/media-gallery";
import { Resume } from "@/components/sections/resume";
import { News } from "@/components/sections/news";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/common/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MediaGallery />
      <Resume />
      <News />
      <Contact />
      <Footer />
    </>
  );
}