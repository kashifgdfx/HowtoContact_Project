import FeaturedUSP from "@/components/FeaturedUSP";
import HappyCustomers from "@/components/HappyCustomers";
import Hero from "@/components/Hero";
import OurShop from "@/components/OurShop";
import Services from "@/components/Services";
import VideoContactSection from "@/components/VideoContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedUSP/>
      <OurShop/>
      <Services/>
      <HappyCustomers/>
      <VideoContactSection/>
    </>
  );
}