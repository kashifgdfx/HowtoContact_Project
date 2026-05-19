import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Printer Support & Repair Services | How to Contact",

  description:
    "Professional printer installation, troubleshooting, repair, and maintenance support services available worldwide.",

  alternates: {
    canonical: "https://howtocontact.live/services/printer-solution",
  },

  openGraph: {
    title: "Printer Support & Repair Services | How to Contact",

    description:
      "Professional printer installation, troubleshooting, repair, and maintenance support services available worldwide.",

    url: "https://howtocontact.live/services/printer-solution",

    siteName: "How to Contact",

    images: [
      {
        url: "https://howtocontact.live/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Printer Support Services",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Printer Support & Repair Services | How to Contact",

    description:
      "Professional printer installation, troubleshooting, repair, and maintenance support services available worldwide.",

    images: ["https://howtocontact.live/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function PrinterSolution() {
  const services = [
    {
      title: "Printer Installation & Initial Setup",
      icon: '/Printer.png',
      link: "/contact",
      desc: "Professional printer setup and installation support.",
    },
    {
      title: "Network and Wireless Printer Configuration",
      icon: '/Printer.png',
      link: "/contact",
      desc: "Secure wireless and network printer setup services.",
    },
    {
      title: "Cloud Printing Integration",
      icon: '/Printer.png',
      link: "/contact",
      desc: "Cloud printing integration for office and home use.",
    },
    {
      title: "Driver Installation & Compatibility Support",
      icon: '/Printer.png',
      link: "/contact",
      desc: "Printer driver installation and compatibility support.",
    },
    {
      title: "Printer Offline & Queue Error Resolution",
      icon: '/Printer.png',
      link: "/contact",
      desc: "Fix printer offline and queue related issues quickly.",
    },
    {
      title: "Firmware Update & Printer Optimization",
      icon: '/Printer.png',
      link: "/contact",
      desc: "Firmware updates and performance optimization services.",
    },
    {
      title: "Multi-user & Enterprise Printer Setup",
      icon: '/Printer.png',
      link: "/contact",
      desc: "Enterprise-level multi-user printer setup support.",
    },
    {
      title: "Print Quality & Performance Optimization",
      icon: '/Printer.png',
      link: "/contact",
      desc: "Improve print quality and printer performance.",
    },
    {
      title: "Secure Printing & Access Control",
      icon: '/Printer.png',
      link: "/contact",
      desc: "Secure printer access and printing solutions.",
    },
    {
      title: "Remote Printer Troubleshooting",
      icon: '/Printer.png',
      link: "/contact",
      desc: "Remote diagnosis and troubleshooting support.",
    },
    {
      title: "Preventive Maintenance & Health Check",
      icon: '/Printer.png',
      link: "/contact",
      desc: "Routine maintenance and health checks for printers.",
    },
    {
      title: "Cross-Platform Printer Support",
      icon: '/Printer.png',
      link: "/contact",
      desc: "Printer support for Windows, Mac, and mobile devices.",
    },
  ];

  const includeServices = [
    {
      title: "Third Party IT Solution Services",
      icon: '/printer2.png',
      link: "/contact",
    },
    {
      title: "Support For Printers",
      icon: '/printer2.png',
      link: "/contact",
    },
    {
      title: "Support For Routers",
      icon: '/printer2.png',
      link: "/contact",
    },
    {
      title: "Support For PC & Laptops",
      icon: '/printer2.png',
      link: "/contact",
    },
  ];

  return (
    <div className="bg-white overflow-hidden">


      {/* HERO SECTION */}
      <section className="relative w-full bg-[#193315] overflow-hidden border-b-4 border-[#193315]">
        <div className="flex flex-col md:flex-row items-center min-h-[400px]">
          {/* LEFT IMAGE */}
          <div className="w-full md:w-1/2 h-[300px] md:h-[400px] relative">
            <Image
              src='/PrinterSolution1.jpg'
              alt="Expert technician providing professional printer support"
              fill
              priority
              className="object-cover"
              style={{
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
              }}
            />

            <div
              className="absolute inset-0 bg-[#0078D4]/10"
              style={{
                clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
              }}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-[#193315]">
            <h1 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
              Professional Printer Support Services
            </h1>

            <p className="text-white text-sm md:text-base leading-relaxed max-w-lg">
              Reliable • Secure • Enterprise-Grade Printer Solutions Worldwide
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* IMAGE */}
            <div className="w-full lg:w-1/2 flex justify-center">


              <div className="relative group">
                <div className="absolute -inset-4 bg-[#f4f7f9] rounded-2xl -z-10 group-hover:bg-[#0078D4]/5 transition-all duration-500" />

                <Image
                  src="/Print2.png"
                  alt="Printer troubleshooting illustration"
                  width={500}
                  height={500}
                  className="w-full max-w-[500px] h-auto object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="w-full lg:w-1/2">
              <div className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase leading-tight">
                  <span className="text-[#071405]">How to</span> resolve printer
                  error
                </h2>

                <div className="w-16 h-1 bg-[#193315] rounded-full" />

                <div className="space-y-4">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
                    We understand the frustration caused by technical printer
                    problems. Our experts diagnose issues quickly and provide
                    fast, secure, and reliable printer support services.
                  </p>

                  <p className="text-gray-600 text-sm md:text-base leading-relaxed text-justify">
                    We are a trusted third-party IT solution provider with
                    proven experience in resolving printer issues efficiently
                    through voice and remote support.
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-block bg-[#193315] text-white px-8 py-3 rounded-md font-bold text-sm uppercase shadow-lg hover:bg-[#071405] transition-all duration-300"
                  >
                    Get Free Diagnosis
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 2xl:px-24">
          {/* HEADING */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-[#193315]">
              Our <span className="font-normal">Printer Solutions</span>
            </h2>

            <div className="flex justify-center items-center gap-2 mt-4">
              <span className="w-2 h-2 bg-[#193315]" />
              <span className="w-3 h-3 bg-[#193315]" />
              <span className="w-2 h-2 bg-[#193315]" />
            </div>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((item, index) => (
              <div
                key={index}
                className="group relative h-[180px] overflow-hidden bg-[#9FF791] flex items-center justify-center text-center font-semibold text-gray-900 px-6 rounded-xl shadow-sm"
              >
                {/* TITLE */}
                <p className="absolute inset-0 flex items-center justify-center px-6 leading-snug z-10 transition-all duration-500 group-hover:opacity-0">
                  {item.title}
                </p>

                {/* ICON */}
                <div className="absolute top-0 left-0 w-[80px] h-[80px] bg-[#457C3C] rounded-br-[70px] flex items-center justify-center z-10 transition-all duration-500 group-hover:opacity-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={42}
                    height={42}
                    className="object-contain"
                  />
                </div>

                {/* HOVER */}
                <div className="absolute inset-0 bg-[#193315] flex flex-col items-center justify-center text-white opacity-0 transition-all duration-500 group-hover:opacity-100 p-4">
                  <p className="mb-4 text-sm leading-relaxed">
                    {item.desc}
                  </p>

                  <Link
                    href={item.link}
                    className="bg-white text-[#071405] px-5 py-2 text-sm font-semibold rounded hover:bg-gray-100 transition"
                  >
                    Book Technician
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED SERVICES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 2xl:px-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Our <span className="font-normal">Services Includes</span>
            </h2>

            <div className="flex justify-center items-center gap-2 mt-4">
              <span className="w-2 h-2 bg-[#193315]" />
              <span className="w-3 h-3 bg-[#193315]" />
              <span className="w-2 h-2 bg-[#193315]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {includeServices.map((item, index) => (
              <div
                key={index}
                className="group relative h-[180px] overflow-hidden bg-[#9FF791] flex items-center justify-center text-center font-semibold text-gray-900 px-6 rounded-xl shadow-sm"
              >
                <p className="leading-snug z-10 transition-all duration-500 group-hover:opacity-0">
                  {item.title}
                </p>

                <div className="absolute top-0 left-0 w-[80px] h-[80px] bg-[#457C3C] rounded-br-[70px] flex items-center justify-center z-10 transition-all duration-500 group-hover:opacity-0">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={42}
                    height={42}
                    className="object-contain"
                  />
                </div>

                <div className="absolute inset-0 bg-[#193315] flex flex-col items-center justify-center text-white opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <p className="mb-4 px-4 text-sm md:text-base">
                    {item.title}
                  </p>

                  <Link
                    href={item.link}
                    className="bg-white text-[#071405] px-5 py-2 text-sm font-semibold rounded hover:bg-gray-100 transition"
                  >
                    Book Technician
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full flex justify-center py-8 overflow-hidden">
        <div className="block w-full max-w-[1400px]">
          <div className="relative w-full h-[220px] md:h-[260px] lg:h-[300px]">
            {/* BACKGROUND */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#e8f4fb] to-[#457C3C]" />

            {/* RIGHT IMAGE */}
            <div className="absolute right-0 top-0 h-full w-[45%] md:w-[40%] flex items-center justify-center">
              <Image
                src="/Contact.jpg"
                alt="Customer support representative"
                width={350}
                height={350}
                className="h-[85%] w-auto object-contain rounded-full"
              />
            </div>

            {/* LEFT CONTENT */}
            <div className="absolute left-0 top-0 h-full w-[85%] md:w-[65%] lg:w-[58%] bg-[#9FF791] rounded-r-[180px] md:rounded-r-[220px] flex items-center shadow-sm z-10">
              <div className="pl-6 sm:pl-10 md:pl-16 pr-6 max-w-xl">
                <p className="text-gray-700 text-xs sm:text-sm md:text-base mb-4 leading-relaxed">
                  Right from the basic problem to the most advanced issues,
                  we’ll help and fix them with our expertise.
                </p>

                <Link
                  href="/contact"
                  className="inline-block bg-[#193315] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#071405] transition"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}