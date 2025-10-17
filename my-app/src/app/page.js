import TrekCarousel from "@/components/trektop/page";
import CardSlider from "@/components/cardslider/page";
import TrekInfoSection from "@/components/TrekDetails/page";
import TrekItinerary from "@/components/daywise/page";
import HarKiDunGallery from "@/components/photos/page";
import HarKiDunTrekVideos from "@/components/trekvideos/page";
import EverestBaseCampGuide from "@/components/seasonGuid/page";
import MeetTheExpert from "@/components/experts/page";
export default function Home() {
  return (
    <>
      {/* <TrekCarousel /> */}
      {/* <TrekInfoSection /> */}
      <TrekItinerary />
      <HarKiDunGallery />
      <HarKiDunTrekVideos />
      <EverestBaseCampGuide />
      <MeetTheExpert />
      {/* <CardSlider /> */}
    </>
  );
}
