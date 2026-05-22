import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Banner from "@/components/Banner";
import WhatsAppButton from "@/components/WhatsAppButton ";

export const metadata = {
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
        url:  "/og-image.jpg",
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

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Banner/>
        <Navbar />
        {children}
        <WhatsAppButton/>
        <ScrollToTop/>
        <Footer/>
      </body>
    </html>
  );
}