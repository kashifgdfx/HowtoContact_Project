import FeaturedUSP from "@/components/FeaturedUSP";
import HappyCustomers from "@/components/HappyCustomers";
import Hero from "@/components/Hero";
import OurShop from "@/components/OurShop";
import Services from "@/components/Services";
import VideoContactSection from "@/components/VideoContactSection";


export const metadata={

   

   title: "Global IT Consulting & Technical Support | How to Contact",

  description:
    "Global IT consulting, printer support, antivirus, PC repair, and 24/7 technical services worldwide.",

  alternates: {
    canonical: "https://howtocontact.live",
  },

   openGraph: {
    title: "Global IT Consulting & Technical Support | How to Contact",

    description:
      "Global IT consulting, printer support, antivirus, PC repair, and 24/7 technical services worldwide.",

    url: "https://howtocontact.live",

    siteName: "How to Contact",

    images: [
      {
        url:  "https://howtocontact.live/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "How to Contact Technical Support",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Global IT Consulting & Technical Support | How to Contact",

    description:
      "Global IT consulting, printer support, antivirus, PC repair, and 24/7 technical services worldwide.",

    images: ["https://howtocontact.live/og-image.jpg"],
  },
}

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