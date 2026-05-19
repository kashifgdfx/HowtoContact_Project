"use client";

import Link from "next/link";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaMapMarkerAlt,
    FaEnvelopeOpen,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white pt-14 pb-6 font-sans text-gray-700 border-t">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20">

                {/* MAIN FOOTER CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">

                    {/* LEFT SECTION */}
                    <div className="lg:col-span-4">

                        {/* Logo */}
                        <div className="flex items-center gap-3 mb-6">
                            <img
                                src="/Logo.jpg"
                                alt="HowToContact Logo"
                                className="h-12 w-auto"
                            />

                            <h2 className="text-3xl font-medium text-gray-900">
                                HowToContact
                            </h2>
                        </div>

                        {/* About */}
                        <p className="text-sm leading-relaxed text-gray-500 mb-8 max-w-md">
                            We are an experienced information technology consulting
                            service provider. We offer uninterrupted IT solutions to
                            all types of businesses. Contact us for further information.
                        </p>

                        {/* Address */}
                        <div className="space-y-5">

                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-[#193315] mt-1 text-lg" />

                                <div>
                                    <h6 className="font-semibold text-gray-800 mb-1">
                                        Address
                                    </h6>

                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        12031 NE 102 St, Kirkland,
                                        <br />
                                        Washington, USA
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-3">
                                <FaEnvelopeOpen className="text-[#193315] mt-1 text-lg" />

                                <div>
                                    <h6 className="font-semibold text-gray-800 mb-1">
                                        Email
                                    </h6>

                                    <a
                                        href="mailto:info@howtocontact.live"
                                        className="text-sm text-gray-500 hover:text-[#193315] transition"
                                    >
                                        info@howtocontact.live
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="mt-8">
                            <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-4">
                                Connect With Us
                            </span>

                            <div className="flex items-center gap-3">
                                {[
                                    {
                                        icon: <FaFacebookF />,
                                        url: "https://www.facebook.com/",
                                    },
                                    {
                                        icon: <FaTwitter />,
                                        url: "https://www.x.com/",
                                    },
                                    {
                                        icon: <FaLinkedinIn />,
                                        url: "https://www.linkedin.com/",
                                    },
                                    {
                                        icon: <FaYoutube />,
                                        url: "https://www.youtube.com/",
                                    },
                                ].map((social, idx) => (
                                    <a
                                        key={idx}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-[#193315] hover:text-white transition-all duration-300"
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT LINKS */}
                    <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:pl-10">

                        {/* Useful Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-[#071405] relative inline-block pb-2 after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[2px] after:bg-[#2E5628]">
                                Useful Links
                            </h4>

                            <ul className="space-y-3 text-sm text-gray-500">
                                {[
                                    "Home",
                                    "Software",
                                    "New System Setup",
                                    "Digital Marketing",
                                    "Google Adwords",
                                    "About Us",
                                    "Contact Us",
                                    "Our Shop",
                                    "FAQ's",
                                ].map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="hover:text-[#2E5628] transition duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Popular Services */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-[#071405] relative inline-block pb-2 after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[2px] after:bg-[#2E5628]">
                                Popular Services
                            </h4>

                            <ul className="space-y-3 text-sm text-gray-500">
                                {[
                                    "Printer Solution",
                                    "Email Solution",
                                    "Browser Solution",
                                    "PC & Laptop Solution",
                                    "Mailbox setting gets changed",
                                    "Troubleshoot Connectivity Issues",
                                    "SEO",
                                    "Email Marketing",
                                ].map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="hover:text-[#2E5628] transition duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Common Problems */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6 text-[#071405] relative inline-block pb-2 after:absolute after:left-0 after:bottom-0 after:w-12 after:h-[2px] after:bg-[#2E5628]">
                                Common Problems
                            </h4>

                            <ul className="space-y-3 text-sm text-gray-500">
                                {[
                                    "Firewall Settings",
                                    "WIFI Connection Issues",
                                    "Hardware Issues",
                                    "Remove Harmful Viruses",
                                    "Updating All Software",
                                    "Cleaning Up Viruses",
                                    "Data Backup",
                                ].map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="hover:text-[#2E5628] transition duration-200"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="mt-14 pt-6 border-t border-gray-200">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                        <p className="text-sm text-gray-400 text-center md:text-left">
                            © 2026 HowToContact. All Rights Reserved.
                        </p>

                        <div className="flex items-center gap-5 text-sm text-gray-400">
                            <a
                                href="#"
                                className="hover:text-[#2E5628] transition"
                            >
                                Privacy
                            </a>

                            <a
                                href="#"
                                className="hover:text-[#2E5628] transition"
                            >
                                Terms
                            </a>

                            <Link
                                href="/contact"
                                className="hover:text-[#2E5628] transition"
                            >
                                Support
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;