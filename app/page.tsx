import AboutSection from "./sections/about";
import CastSection from "./sections/cast";
import ShowDatesSection from "./sections/showdates";
import TitleSection from "./sections/title";
import VenueSection from "./sections/venue";

import Footer from "./components/footer";
import VideoSection from "./sections/video";

export default function Home() {
  return (
    <>
      <main>
        <TitleSection />
        <VideoSection />
        <AboutSection />
        <ShowDatesSection />
        <CastSection />
        <VenueSection />
        <Footer />
      </main>
    </>
  );
}
