"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);

    return (
        <div className="w-full bg-white shadow-md sticky top-0 z-[999999]">
            <div className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-20 py-3">

                {/* Logo */}
                <div className="logo">
                    <Link href="/" className="flex items-center gap-2">
                        <img src="/Logo.jpg" alt="logo" className="h-10 w-auto" />

                        <span className="text-2xl sm:text-3xl text-gray-900 font-medium">
                            HowToContact
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-8">

                        <li>
                            <Link
                                href="/"
                                className="font-medium hover:text-[#457C3C] transition"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/about"
                                className="font-medium hover:text-[#457C3C] transition"
                            >
                                About Us
                            </Link>
                        </li>

                        {/* Services Dropdown */}
                        <li className="relative group">
                            <button className="flex items-center gap-1 font-medium hover:text-[#457C3C] transition">
                                Services
                                <FaChevronDown className="text-[14px] mt-[1px]" />
                            </button>

                            <ul className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-xl overflow-hidden w-64 pt-2 pb-2 z-50">
                                {[
                                    ["Printer Solution", "/services/printer-solution"],
                                    ["Browser Solution", "/services/browser-solution"],
                                    ["Pc / Laptop Solution", "/services/pc-laptop-solution"],
                                    ["Software", "/services/software"],
                                    ["Digital Marketing", "/services/digital-marketing"],
                                ].map(([label, link]) => (
                                    <li key={label}>
                                        <Link
                                            href={link}
                                            className="block px-5 py-3 text-sm hover:bg-gray-100 transition"
                                        >
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        <li>
                            <Link
                                href="/blog"
                                className="font-medium hover:text-[#457C3C] transition"
                            >
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/contact"
                                className="font-medium hover:text-[#457C3C] transition"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile Toggle */}
                <div
                    className="lg:hidden flex flex-col gap-1.5 cursor-pointer"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <span className="w-6 h-0.5 bg-black rounded"></span>
                    <span className="w-6 h-0.5 bg-black rounded"></span>
                    <span className="w-6 h-0.5 bg-black rounded"></span>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="lg:hidden bg-white shadow-md px-6 py-5 border-t">
                    <ul className="flex flex-col gap-4">

                        <li>
                            <Link
                                href="/"
                                onClick={() => setMobileOpen(false)}
                                className="font-medium"
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/about"
                                onClick={() => setMobileOpen(false)}
                                className="font-medium"
                            >
                                About Us
                            </Link>
                        </li>

                        {/* Mobile Services */}
                        <li>
                            <button
                                onClick={() => setServiceOpen(!serviceOpen)}
                                className="w-full text-left flex items-center gap-1 font-medium"
                            >
                                Services
                                <FaChevronDown className="text-[14px] mt-[2px]" />
                            </button>

                            {serviceOpen && (
                                <ul className="ml-4 mt-3 flex flex-col gap-3 text-sm text-gray-600">
                                    <li>
                                        <Link href="/services/printer-solution">
                                            Printer Solution
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/services/browser-solution">
                                            Browser Solution
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/services/pc-laptop-solution">
                                            Pc / Laptop Solution
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/services/software">
                                            Software
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/services/digital-marketing">
                                            Digital Marketing
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>

                        <li>
                            <Link
                                href="/blog"
                                onClick={() => setMobileOpen(false)}
                                className="font-medium"
                            >
                                Blog
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/contact"
                                onClick={() => setMobileOpen(false)}
                                className="font-medium"
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;