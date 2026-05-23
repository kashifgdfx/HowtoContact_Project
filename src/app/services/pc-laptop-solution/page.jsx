

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata = {
  title: "PC & Laptop Repair Services | How to Contact",

  description:
    "Get professional PC and laptop repair, troubleshooting, maintenance, and technical support services worldwide.",

  alternates: {
    canonical: "https://howtocontact.live/services/pc-laptop-solution",
  },

  openGraph: {
    title: "PC & Laptop Repair Services | How to Contact",

    description:
      "Get professional PC and laptop repair, troubleshooting, maintenance, and technical support services worldwide.",

    url: "https://howtocontact.live/services/pc-laptop-solution",

    siteName: "How to Contact",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PC and Laptop Repair Services",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "PC & Laptop Repair Services | How to Contact",

    description:
      "Get professional PC and laptop repair, troubleshooting, maintenance, and technical support services worldwide.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const PcLaptopSolution = () => {
    const services = [
        {
            title: "New PC / Laptop Setup & Deployment",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Operating System Installation & Upgrade",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "System Performance Optimization",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Hardware Diagnostics & Troubleshooting",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "RAM / SSD / HDD Upgrade Support",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Data Backup & Recovery Solutions",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Network & Internet Configuration",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "System Security & Protection Setup",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Software & Driver Management",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Remote Desktop & Global IT Support",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "System Error & Blue Screen Fix",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Preventive Maintenance & Health Monitoring",
            icon: "/Printer.webp",
            link: "/contact",
        },
    ];

    return (
        <div>


            {/* HERO SECTION */}
            <div className="relative w-full bg-white">
                <div className="relative flex flex-col lg:flex-row min-h-[500px] lg:h-[600px] w-full">

                    {/* LEFT IMAGE */}
                    <div className="w-full lg:w-[70%] h-64 lg:h-full relative z-0">
                        <Image
                            src="/pc-hero.webp"
                            alt="Modern laptop and PC workspace"
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-black/20 lg:hidden"></div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div
                        className="
              relative lg:absolute lg:top-0 lg:right-0
              w-full lg:w-[55%] h-full z-10
              bg-[#193315]
              lg:[clip-path:polygon(15%_0,_100%_0,_100%_100%,_0%_100%)]
            "
                    >
                        <div className="flex flex-col justify-center h-full px-8 py-12 lg:pl-32 lg:pr-16 text-white text-center lg:text-left">

                            <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
                                PC / Laptop Solutions – Professional IT Support Services
                            </h1>

                            <p className="text-base lg:text-xl mb-8 leading-relaxed opacity-90">
                                Secure • High-Performance • Global PC & Laptop Support
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* SECTION 2 */}
            <section className="py-16 lg:py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                        {/* LEFT IMAGE */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative w-full text-center lg:text-left">

                                <Image
                                    src="/Green.webp"
                                    alt="Laptop repair illustration"
                                    width={700}
                                    height={700}
                                    className="w-full max-w-lg mx-auto lg:max-w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="w-full lg:w-1/2">

                            <h4 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-snug">
                                Secure • High-Performance • Global PC & Laptop Support
                            </h4>

                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                How to Contact provides complete PC and laptop solutions for
                                individuals, businesses, and enterprises worldwide. From system
                                setup and optimization to security, data recovery, and remote IT
                                support, we ensure your devices run fast, secure, and
                                reliable—anytime, anywhere.
                            </p>

                            {/* BOTTOM IMAGE */}
                            <div className="w-full mt-6">
                                <Image
                                    src="/Browser3.webp"
                                    alt="PC optimization process"
                                    width={800}
                                    height={400}
                                    className="w-full h-auto max-h-60 object-contain lg:object-left rounded-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative w-full py-16 lg:py-24 bg-[#193315] overflow-hidden">

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex justify-center">

                        <div className="w-full lg:w-10/12 text-center">

                            <h4 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight">
                                Our customize plan will help you save on cost involved !
                            </h4>

                            <Link
                                href="/contact"
                                className="inline-block bg-white text-[#193315] font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300"
                            >
                                Book a technician
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Decorative Circles */}
                <div className="absolute -bottom-24 left-[20%] w-80 h-80 bg-white opacity-[0.08] rounded-full pointer-events-none"></div>

                <div className="absolute top-1/2 -left-10 w-32 h-32 bg-white opacity-[0.08] rounded-full -translate-y-1/2 pointer-events-none"></div>

                <div className="absolute -top-10 right-0 w-48 h-48 bg-white opacity-[0.08] rounded-full pointer-events-none"></div>
            </section>

            {/* SERVICES */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 2xl:px-24">

                    {/* HEADING */}
                    <div className="text-center mb-14">

                        <h2 className="text-3xl md:text-4xl font-semibold text-[#193315]">
                            Our <span className="font-normal">PC & Laptop Solutions</span>
                        </h2>

                        <div className="flex justify-center items-center gap-2 mt-4">
                            <span className="w-2 h-2 bg-[#193315]"></span>
                            <span className="w-3 h-3 bg-[#193315]"></span>
                            <span className="w-2 h-2 bg-[#193315]"></span>
                        </div>
                    </div>

                    {/* CARDS */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="group relative h-[170px] overflow-hidden bg-[#9FF791] flex items-center justify-center text-center font-semibold text-gray-900 px-6"
                            >
                                {/* TITLE */}
                                <p className="leading-snug z-10 transition-all duration-700 ease-in-out group-hover:opacity-0">
                                    {item.title}
                                </p>

                                {/* ICON */}
                                <div className="absolute top-0 left-0 w-[80px] h-[80px] bg-[#457C3C] rounded-br-[70px] flex items-center justify-center z-10 transition-all duration-700 ease-in-out group-hover:opacity-0">

                                    <Image
                                        src={item.icon}
                                        alt={`${item.title} icon`}
                                        width={44}
                                        height={44}
                                        className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11"
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

            {/* CONTACT BANNER */}
            <section className="w-full flex justify-center py-8 overflow-hidden">

                <div className="block w-full max-w-[1400px]">

                    <div className="relative w-full h-[220px] md:h-[260px] lg:h-[300px]">

                        {/* BACKGROUND */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#193315] to-[#193315]" />

                        {/* RIGHT IMAGE */}
                        <div className="absolute right-0 top-0 h-full w-[45%] md:w-[40%] flex items-center justify-center">

                            <Image
                                src="/Contact.webp"
                                alt="Technical support expert"
                                width={350}
                                height={350}
                                className="h-[85%] w-auto object-contain rounded-full"
                            />
                        </div>

                        {/* LEFT CONTENT */}
                        <div className="absolute left-0 top-0 h-full w-[85%] md:w-[65%] lg:w-[58%] bg-[#9FF791] rounded-r-[180px] md:rounded-r-[220px] flex items-center shadow-sm z-10">

                            <div className="pl-6 sm:pl-10 md:pl-16 pr-6 max-w-xl">

                                <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-2">
                                    Right from the basic problem to the most advanced issues,
                                    we’ll help and fix them with our expertise.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default PcLaptopSolution;