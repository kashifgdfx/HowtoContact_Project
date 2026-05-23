// app/services/digital-marketing/page.jsx

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Digital Marketing Services | How to Contact",

  description:
    "Professional SEO, branding, and digital marketing solutions for businesses worldwide.",

  alternates: {
    canonical: "https://howtocontact.live/services/digital-marketing",
  },

  openGraph: {
    title: "Digital Marketing Services | How to Contact",

    description:
      "Professional SEO, branding, and digital marketing solutions for businesses worldwide.",

    url: "https://howtocontact.live/services/digital-marketing",

    siteName: "How to Contact",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Digital Marketing Services | How to Contact",

    description:
      "Professional SEO, branding, and digital marketing solutions for businesses worldwide.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const DigitalMarketing = () => {
    const services = [
        {
            title: "Website Design & Development",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Custom Software Development",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Search Engine Optimization (SEO)",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Social Media Optimization (SMO)",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Advertising (Google & Social Ads)",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Content Marketing & Strategy",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Email Marketing Campaigns",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Online Reputation Management",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Analytics, Tracking & Reporting",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Global Brand Growth Strategy",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Manage My Online Reputation",
            icon: "/Printer.webp",
            link: "/contact",
        },
        {
            title: "Create Content Strategy",
            icon: "/Printer.webp",
            link: "/contact",
        },
    ];

    return (
        <div>


            {/* HERO SECTION */}
            <section className="relative w-full bg-[#193315] overflow-hidden border-b-4 border-[#193315]">
                <div className="flex flex-col md:flex-row items-center min-h-[400px]">

                    {/* LEFT IMAGE */}
                    <div className="w-full md:w-1/2 h-[500px] md:h-[560px] relative">
                        <Image
                            src="/DigitalService.webp"
                            alt="Comprehensive digital marketing services for global business growth"
                            fill
                            className="object-cover mt-10"
                        />

                        <div className="absolute inset-0 bg-[#0078D4]/10"></div>
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col items-start justify-center bg-[#193315]">
                        <h1 className="text-3xl md:text-5xl font-black text-white uppercase leading-tight mb-4">
                            Digital Marketing & IT Services – Grow Your Business Globally
                        </h1>

                        <div className="w-20 h-1 bg-[#193315] mb-6"></div>

                        <p className="text-white text-sm md:text-base leading-relaxed mb-8 max-w-lg">
                            Facing complexities while growing your business online? Our
                            technical experts are here to provide instant help and scalable
                            marketing solutions.
                        </p>
                    </div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="py-10 bg-white lg:py-16">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                        {/* LEFT IMAGE */}
                        <div className="w-full lg:w-1/2 flex justify-center">
                            <div className="relative w-full max-w-lg">
                                <Image
                                    src="/Service.webp"
                                    alt="Illustration showing SEO, Social Media, and Web Development strategies"
                                    width={700}
                                    height={700}
                                    className="w-full h-auto object-contain"
                                />
                            </div>
                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="w-full lg:w-1/2">
                            <h2 className="text-3xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                                <span className="text-[#193315]">
                                    Build Your Business
                                </span>{" "}
                                With Our Digital Marketing Services
                            </h2>

                            <div className="space-y-5 text-gray-600 text-[15px] lg:text-[16px] leading-relaxed">
                                <p>
                                    How to Contact delivers end-to-end digital marketing and IT
                                    services designed to help businesses build, grow, and scale
                                    globally.
                                </p>

                                <p>
                                    From website development to SEO, paid ads, and brand strategy,
                                    we create powerful digital systems that generate real results.
                                </p>

                                <p>
                                    Boosting visibility across multiple digital channels helps
                                    businesses generate more leads, traffic, and revenue
                                    organically.
                                </p>
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
                                Our customize plan will help you save on cost involved!
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

                {/* DECORATIVE CIRCLES */}
                <div className="absolute -bottom-24 left-[20%] w-80 h-80 bg-white opacity-[0.08] rounded-full"></div>

                <div className="absolute top-1/2 -left-10 w-32 h-32 bg-white opacity-[0.08] rounded-full -translate-y-1/2"></div>

                <div className="absolute -top-10 right-0 w-48 h-48 bg-white opacity-[0.08] rounded-full"></div>
            </section>

            {/* SERVICES */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 2xl:px-24 flex flex-col gap-10">

                    {/* HEADING */}
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
                            Our{" "}
                            <span className="font-normal">
                                Digital Marketing Solutions
                            </span>
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

                                <p className="leading-snug z-10 transition-all duration-700 ease-in-out group-hover:opacity-0">
                                    {item.title}
                                </p>

                                {/* ICON */}
                                <div className="absolute top-0 left-0 w-[80px] h-[80px] bg-[#457C3C] rounded-br-[70px] flex items-center justify-center z-10 transition-all duration-700 ease-in-out group-hover:opacity-0">
                                    <Image
                                        src={item.icon}
                                        alt={`${item.title} marketing service icon`}
                                        width={44}
                                        height={44}
                                        className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11 object-contain"
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

                        <div className="absolute inset-0 bg-gradient-to-r from-[#193315] to-[#193315]" />

                        {/* RIGHT IMAGE */}
                        <div className="absolute right-0 top-0 h-full w-[45%] md:w-[40%] flex items-center justify-center relative">
                            <Image
                                src="/Contact.jpg"
                                alt="Connect with our digital marketing consultants for a free strategy session"
                                fill
                                className="object-contain rounded-full p-4"
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

export default DigitalMarketing;