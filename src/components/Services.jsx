import Link from "next/link";
import Image from "next/image";

const services = [
  {
    title: "Printer Installation & Initial Setup",
    desc: "We provide professional services, including hardware setup, driver configuration, testing, and optimization for immediate use.",
    icon: "/printericon.png",
    alt: "Professional printer hardware and driver setup service",
    link: "/services/printer-solution",
  },
  {
    title: "Network and Wireless Printer Configuration",
    desc: "Expert setup of network printers for offices and multi-user environments with stable and secure connectivity.",
    icon: "/messicon.png",
    alt: "Wireless network printer configuration for office environments",
    link: "/services/printer-solution",
  },
  {
    title: "Browser Solution",
    desc: "Facing browser crashes or errors? Our experts help you fix speed issues, extensions, and security for Chrome, Edge, and more.",
    icon: "/globeicon.png",
    alt: "Web browser troubleshooting and performance optimization",
    link: "/services/browser-solution",
  },
  {
    title: "PC / Laptop Solution",
    desc: "Is your computer running slow? Speed it up with our comprehensive repair, maintenance, and optimization services.",
    icon: "/laptopicon.png",
    alt: "PC and laptop repair and maintenance services",
    link: "/services/pc-laptop-solution",
  },
  {
    title: "Software Support",
    desc: "Having trouble with software installation, licensing, or errors? We provide reliable technical solutions for all apps.",
    icon: "/settigicon.png",
    alt: "Software installation and technical support services",
    link: "/services/software",
  },
  {
    title: "Virus Removal",
    desc: "Complete removal of viruses, malware, and ransomware to keep your data safe and system performance at its peak.",
    icon: "/goggleicon.png",
    alt: "Professional malware and virus removal service",
    link: "/services/software",
  },
];

export default function Services() {
  return (
    <>
      {/* SERVICES SECTION */}
      <section className="py-20 bg-gray-50">

        <h2 className="text-4xl font-semibold text-center mb-10">
          Our Services
        </h2>

        {/* Divider */}
        <div className="flex justify-center mb-14 gap-2">
          <span className="w-8 h-1 bg-[#457C3C]"></span>
          <span className="w-4 h-1 bg-[#457C3C]"></span>
          <span className="w-8 h-1 bg-[#457C3C]"></span>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">

          {services.map((item, index) => (
            <div
              key={index}
              className="
                bg-white rounded-xl overflow-hidden text-center group
                transition-all duration-300
                shadow-[0_12px_32px_rgba(0,0,0,0.14)]
                hover:shadow-[0_24px_50px_rgba(0,0,0,0.22)]
                hover:-translate-y-2
              "
            >

              {/* Top Section */}
              <div className="bg-[#2E5628] h-40 flex items-center justify-center relative">

                <div
                  className="
                    w-16 h-16 flex items-center justify-center
                    bg-[#5DA452]
                    rounded-full border-2 border-transparent
                    transition-all duration-300 ease-in-out
                    group-hover:bg-[#193315]
                    group-hover:border-white
                    group-hover:scale-110
                  "
                >
                  <div className="relative w-10 h-10">
                    <Image
                      src={item.icon}
                      alt={item.alt}
                      fill
                      className="object-contain transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>

                {/* Curve */}
                <div className="absolute -bottom-10 left-0 w-full h-20 bg-white rounded-t-[100%]" />
              </div>

              {/* Content */}
              <div className="pt-14 px-6 pb-8">

                <h3 className="text-xl font-semibold text-[#193315] mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>

                <Link
                  href={item.link}
                  className="
                    inline-block bg-[#457C3C] text-white
                    px-6 py-2 rounded-full
                    transition hover:bg-[#193315]
                  "
                >
                  Know more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="h-[500px] relative bg-[#2E5628] py-24 overflow-hidden">

        {/* Background circles */}
        <div className="absolute left-10 bottom-10 w-80 h-80 bg-[#193315] rounded-full" />

        <div className="absolute right-10 top-10 w-56 h-56 bg-[#193315] rounded-full" />

        <div className="relative max-w-5xl mx-auto text-center px-4">

          <h2 className="text-white text-4xl md:text-5xl font-light leading-snug mb-6">
            Still, searching for information technology consulting
            <br />
            services for your business?
          </h2>

          <p className="text-blue-100 text-lg mb-10">
            Look no more! Contact us for a quote and let us take care of it.
          </p>

          {/* Button */}
          <Link
            href="/contact"
            className="
              group relative inline-flex items-center justify-center
              overflow-hidden rounded-full bg-white
              px-10 py-4 text-lg font-medium
              text-[#071405] shadow-lg outline-none
            "
          >
            <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
              Book a technician
            </span>

            {/* Hover Fill */}
            <span className="absolute inset-x-0 bottom-0 h-0 bg-[#193315] transition-all duration-300 ease-out group-hover:h-full" />
          </Link>
        </div>
      </section>
    </>
  );
}