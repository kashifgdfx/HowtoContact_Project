// app/services/software/page.jsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Software Support & Troubleshooting | How to Contact",

  description:
    "Expert software support for installation errors, update failures, crashes, and compatibility issues.",

  alternates: {
    canonical: "https://howtocontact.live/services/software",
  },

  openGraph: {
    title: "Software Support & Troubleshooting | How to Contact",

    description:
      "Expert software support for installation errors, update failures, crashes, and compatibility issues.",

    url: "https://howtocontact.live/services/software",

    siteName: "How to Contact",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "software Support Services",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Software Support & Troubleshooting | How to Contact",

    description:
      "Expert software support for installation errors, update failures, crashes, and compatibility issues.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};


const Software = () => {
    const services = [
        {
            title: "Software Installation & Configuration",
            icon: '/Printer.png',
            link: "/contact",
        },
        {
            title: "Licensed Software Activation & Support",
            icon: '/Printer.png',
            link: "/contact",
        },
        {
            title: "Antivirus & Endpoint Protection Setup",
            icon: '/Printer.png',
            link: "/contact",
        },
        {
            title: "Malware, Virus & Threat Remova",
            icon: '/Printer.png',
            link: "/contact",
        },
        {
            title: "Software Crash & Error Resolution",
            icon: '/Printer.png',
            link: "/contact",
        },
        {
            title: "Software Update & Patch Management",
            icon: '/Printer.png',
            link: "/contact",
        },
        {
            title: "Compatibility & Integration Support",
            icon: '/Printer.png',
            link: "/contact",
        },
        {
            title: "Software Uninstallation & Cleanup",
            icon: '/Printer.png',
            link: "/contact",
        },
        {
            title: " System Resource Optimization",
            icon: '/Printer.png',
            link: "/contact",
        },
        {
            title: "Data Protection & Software Backup",
            icon: '/Printer.png',
            link: "/contact",
        },
        {
            title: "Remote Software Troubleshooting",
            icon: '/Printer.png',
            link: "/contact",
        },
        {
            title: "Enterprise Software Suppor",
            icon: '/Printer.png',
            link: "/contact",
        },
    ];

    return (
        <div>


            <div className="relative w-full bg-white">
                <div className="relative flex flex-col lg:flex-row min-h-[500px] lg:h-[600px] w-full">
                    <div className="w-full lg:w-[60%] h-64 lg:h-full relative z-0">
                        <Image
                            src="/Laptop3.jpg"
                            alt="Expert software programming and application troubleshooting support"
                            fill
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-black/20 lg:hidden"></div>
                    </div>

                    <div
                        className="relative lg:absolute lg:top-0 lg:right-0 w-full lg:w-[55%] h-full z-10 
            bg-[#193315] 
            lg:[clip-path:polygon(15%_0,_100%_0,_100%_100%,_0%_100%)]"
                    >
                        <div className="flex flex-col justify-center h-full px-8 py-12 lg:pl-32 lg:pr-16 text-white text-center lg:text-left">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                Software Solutions – Professional Software Support Services
                            </h1>

                            <p className="text-base lg:text-xl mb-10 leading-relaxed opacity-90 font-light">
                                How to Contact provides complete software solutions for
                                individuals, businesses, and enterprises across the globe. From
                                software installation and licensing to security,
                                troubleshooting, and remote support, we ensure your applications
                                run smoothly, securely, and without interruption
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ----------- */}
            <section className="py-16 lg:py-24 bg-white overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                        <div className="w-full lg:w-1/2">
                            <div className="relative w-full text-center lg:text-left">
                                <Image
                                    src="/security.png"
                                    alt="Cybersecurity and licensed software protection management"
                                    width={700}
                                    height={700}
                                    className="w-full max-w-lg mx-auto lg:max-w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2">
                            <h4 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6 leading-snug">
                                <span className="text-[#193315]">Our</span> Software services
                            </h4>

                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Is your computer sluggish and unresponsive? Running more slowly
                                than it used to? Want to avoid costly and complicated memory and
                                CPU upgrades? Technicion will get it performing at its best!
                            </p>

                            <div className="relative w-full text-center lg:text-left">
                                <Image
                                    src="/Browser2.png"
                                    alt="Cybersecurity and licensed software protection management"
                                    width={700}
                                    height={700}
                                    className="w-full max-w-lg mx-auto lg:max-w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------- */}
            <section className="relative w-full py-16 lg:py-24 bg-gradient-to-r from-[#193315] to-[#193315] overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex justify-center">
                        <div className="w-full lg:w-10/12 text-center">
                            <h4 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight">
                                Our customize plan will help you save on cost involved !
                            </h4>

                            <Link
                                href="/contact"
                                className="inline-block bg-white text-[#193315] font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                Book a technician
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="absolute -bottom-24 left-[20%] w-80 h-80 bg-white opacity-[0.08] rounded-full pointer-events-none"></div>

                <div className="absolute top-1/2 -left-10 w-32 h-32 bg-white opacity-[0.08] rounded-full transform -translate-y-1/2 pointer-events-none"></div>

                <div className="absolute -top-10 right-0 w-48 h-48 bg-white opacity-[0.08] rounded-full pointer-events-none"></div>
            </section>

            {/* ------- */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 2xl:px-24 flex flex-col gap-10">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-semibold text-[#193315]">
                            Our <span className="font-normal">Software Solutions</span>
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

                                <div className="absolute top-0 left-0 w-[80px] h-[80px] bg-[#457C3C] rounded-br-[70px] flex items-center justify-center z-10 transition-all duration-700 ease-in-out group-hover:opacity-0">
                                    <Image
                                        src={item.icon}
                                        alt={`Icon for ${item.title}`}
                                        width={44}
                                        height={44}
                                        className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 object-contain"
                                    />
                                </div>

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

            {/* ------ */}
            <section className="w-full flex justify-center py-8 overflow-hidden">
                <div className="block w-full max-w-[1400px]">
                    <div className="relative w-full h-[220px] md:h-[260px] lg:h-[300px]">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#193315] to-[#193315]" />

                        <div className="absolute right-0 top-0 h-full w-[45%] md:w-[40%] flex items-center justify-center">
                            <Image
                                src="/Contact.jpg"
                                alt="Get 24/7 remote software support from certified technicians"
                                width={350}
                                height={350}
                                className="h-[85%] w-auto object-contain rounded-full"
                            />
                        </div>

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

export default Software;