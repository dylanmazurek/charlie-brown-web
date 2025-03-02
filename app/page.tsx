import TitleSection from "./sections/title";
import AboutSection from "./sections/about";
import ShowDatesSection from "./sections/showdates";
import CastSection from "./sections/cast";
import VenueSection from "./sections/venue";

export default function Home() {
  return (
    <main>
      <TitleSection />
      <AboutSection />
      <ShowDatesSection />
      <CastSection />
      <VenueSection />
    </main>
  );
}
