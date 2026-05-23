import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import Banner from "@/components/Banner";
import WhatsAppButton from "@/components/WhatsAppButton ";



export const metadata = {

  robots: {
    index: true,
    follow: true,
  },

   icons: {
    icon: "/Logo.jpg",
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