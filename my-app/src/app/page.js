import TrekCarousel from "@/components/trektop/page";
import CardSlider from "@/components/cardslider/page";
import TrekInfoSection from "@/components/TrekDetails/page";
export default function Home() {
  return (
    <>
      <TrekCarousel />
      <TrekInfoSection />
      <CardSlider />
    </>
  );
}
