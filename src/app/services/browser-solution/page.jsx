import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



export const metadata = {
  title: "Browser Solution Services | How to Contact",

  description:
    "Get professional browser troubleshooting, setup, and support services from How to Contact.",

  alternates: {
    canonical: "https://howtocontact.live/services/browser-solution",
  },

  openGraph: {
    title: "Browser Solution Services | How to Contact",

    description:
      "Get professional browser troubleshooting, setup, and support services from How to Contact.",

    url: "https://howtocontact.live/services/browser-solution",

    siteName: "How to Contact",

    images: [
      {
        url: "https://howtocontact.live/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Browser Solution Services",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Browser Solution Services | How to Contact",

    description:
      "Get professional browser troubleshooting, setup, and support services from How to Contact.",

    images: ["https://howtocontact.live/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function BrowserSolution() {
  const services = [
    {
      title: "Browser Installation & Configuration",
      icon: '/Printer.png',
      link: "/contact",
    },
    {
      title: "Browser Crash & Freeze Issue Fix",
      icon: '/Printer.png',
      link: "/contact",
    },
    {
      title: "Speed & Performance Optimization",
      icon: '/Printer.png',
      link: "/contact",
    },
    {
      title: "Cache, Cookies & Temporary Data Management",
      icon: '/Printer.png',
      link: "/contact",
    },
    {
      title: "Malware, Adware & Extension Removal",
      icon: '/Printer.png',
      link: "/contact",
    },
    {
      title: "Browser Security & Privacy Configuration",
      icon: '/Printer.png',
      link: "/contact",
    },
    {
      title: "Enterprise Browser Policy Setup",
      icon: '/Printer.png',
      link: "/contact",
    },
    {
      title: "Cross-Browser Compatibility Support",
      icon: '/Printer.png',
      link: "/contact",
    },
    {
      title: "Browser Update & Version Management",
      icon: '/Printer.png',
      link: "/contact",
    },
    {
      title: "Profile Sync & Data Recovery",
      icon: '/Printer.png',
      link: "/contact",
    },
    {
      title: "Default Browser & Settings Customization",
      icon: '/Printer.png',
      link: "/contact",
    },
    {
      title: "Remote Browser Support & Troubleshooting",
      icon: '/Printer.png',
      link: "/contact",
    },
  ];

  return (
    <div>
 

      {/* HERO SECTION */}
      <section className="relative w-full bg-[#193315] overflow-hidden border-b-4 border-[#193315]">
        <div className="flex flex-col md:flex-row items-center min-h-[400px]">

          {/* LEFT IMAGE */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[390px] relative flex items-center justify-center">
            <Image
              src='/Browser.png'
              alt="Professional browser support"
              width={600}
              height={500}
              className="w-auto h-auto max-w-full object-contain"
              priority
            />

            <div
              className="absolute inset-0 bg-[#0078D4]/10"
              style={{
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
              }}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col items-start justify-center bg-[#193315]">
            <h1 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
              Browser Solutions – Professional Browser Support Services
            </h1>

            <div className="w-20 h-1 bg-[#9FF791] mb-6"></div>

            <p className="text-white text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              How to Contact delivers advanced browser solutions designed to
              ensure speed, security, compatibility, and stability across all
              modern browsers.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row items-center gap-10">

            {/* IMAGE */}
            <div className="w-full lg:w-1/2">
              <div className="relative w-full mt-10 flex justify-center">
                <Image
                  src="/Browser1.png"
                  alt="Browser optimization"
                  width={700}
                  height={500}
                  className="rounded-xl shadow-lg object-cover"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="w-full lg:w-1/2">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                <span className="text-[#193315]">Fix</span> Complete Browser
                Solutions
              </h4>

              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Your web browser is your gateway to the internet. Whether you
                use Chrome, Firefox, Safari, Edge, or Opera, we help ensure
                secure and trouble-free browsing.
              </p>

              <div className="w-full mt-6">
                <Image
                  src="/Browser2.png"
                  alt="Browser dashboard"
                  width={700}
                  height={400}
                  className="w-full h-auto rounded-xl shadow-sm object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative bg-[#193315] py-16 lg:py-24 overflow-hidden">

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-10/12 mr-auto text-left">

              <h4 className="text-2xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Our customized plans help you save on browser maintenance costs!
              </h4>

              <Link
                href="/contact"
                className="mt-2 inline-block bg-white text-[#193315] font-bold py-3 px-8 rounded-md shadow-md hover:bg-gray-100 transition-all"
              >
                Book a Technician
              </Link>

            </div>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-white opacity-10 rounded-full"></div>

        <div className="absolute top-1/2 -left-12 w-24 h-24 bg-white opacity-10 rounded-full transform -translate-y-1/2"></div>

        <div className="absolute top-10 right-20 w-16 h-16 bg-white opacity-10 rounded-full"></div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 2xl:px-24">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Our <span className="font-normal">Browser Solutions</span>
            </h2>

            <div className="flex justify-center items-center gap-2 mt-4">
              <span className="w-2 h-2 bg-[#193315]"></span>
              <span className="w-3 h-3 bg-[#193315]"></span>
              <span className="w-2 h-2 bg-[#193315]"></span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {services.map((item, index) => (
              <div
                key={index}
                className="group relative h-[170px] overflow-hidden bg-[#9FF791] flex items-center justify-center text-center font-semibold text-gray-900 px-6"
              >

                <p className="leading-snug z-10 transition-all duration-700 ease-in-out group-hover:opacity-0">
                  {item.title}
                </p>

                {/* ICON */}
                <div className="absolute top-0 left-0 w-[80px] h-[80px] bg-[#457C3C] rounded-br-[70px] flex items-center justify-center z-10 transition-all duration-700 ease-in-out group-hover:opacity-0">

                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={45}
                    height={45}
                    className="object-contain"
                  />

                </div>

                {/* HOVER */}
                <div className="absolute inset-0 bg-[#193315] flex flex-col items-center justify-center text-white opacity-0 transition-all duration-700 ease-in-out group-hover:opacity-100">

                  <p className="mb-4 px-4 text-sm md:text-base">
                    {item.title}
                  </p>

                  <Link
                    href={item.link}
                    className="bg-white text-[#193315] px-5 py-2 text-sm font-semibold rounded hover:bg-gray-100 transition"
                  >
                    Book Technician
                  </Link>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="w-full flex justify-center py-8 overflow-hidden">

        <div className="block w-full max-w-[1400px]">

          <div className="relative w-full h-[220px] md:h-[260px] lg:h-[300px]">

            {/* BG */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#457C3C] to-[#193315]" />

            {/* RIGHT IMAGE */}
            <div className="absolute right-0 top-0 h-full w-[45%] md:w-[40%] flex items-center justify-center">

              <Image
                src='/Contact.jpg'
                alt="Browser support expert"
                width={350}
                height={350}
                className="h-[85%] w-auto object-contain rounded-full"
              />

            </div>

            {/* LEFT CONTENT */}
            <div className="absolute left-0 top-0 h-full w-[85%] md:w-[65%] lg:w-[58%] bg-[#9FF791] rounded-r-[180px] md:rounded-r-[220px] flex items-center shadow-sm z-10">

              <div className="pl-6 sm:pl-10 md:pl-16 pr-6 max-w-xl">

                <p className="text-[#071405] text-xs sm:text-sm md:text-base mb-2">
                  Right from the basic browser issue to advanced troubleshooting,
                  our experts are ready to help.
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

     
    </div>
  );
}