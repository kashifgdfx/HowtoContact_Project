"use client"

import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



import {
    FiMapPin,
    FiPhone,
    FiMail,
    FiUser,
    FiMessageSquare,
} from "react-icons/fi";

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
        .sendForm(
            "service_5n72u1i",
            "template_102fpjv",
            e.target,
            "bfED1bbzcLms9zkik"
        )
        .then(() => {
            alert("Message sent successfully!");
            e.target.reset();
        })
        .catch((error) => {
            alert("Failed to send message");
            console.error(error);
        });
};

export default function ContactWrapper() {
    return (
        <>


            {/* HERO SECTION */}
            <section className="w-full bg-white">
                <div className="relative flex flex-col lg:flex-row h-[420px]">

                    {/* LEFT IMAGE */}
                    <div className="lg:w-1/2 relative min-h-[420px]">
                        <Image
                            src="/Contact8.png"
                            alt="About"
                            fill
                            className="object-cover bg-[#76CE68]"
                            priority
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className="lg:w-1/2 w-full h-full relative bg-[#193315] text-white flex items-center">

                        {/* ANGLED SHAPE */}
                        <div className="absolute left-0 top-0 h-full w-24 bg-[#193315] skew-x-[-10deg] origin-top-left hidden lg:block"></div>

                        {/* CONTENT */}
                        <div className="relative px-8 lg:px-16 max-w-xl">

                            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                                Contact Us
                            </h1>

                            <p className="text-sm leading-relaxed opacity-90">
                                At HowToContact, We specialize in providing expert help desk
                                support and innovative IT solutions tailored to your needs.
                                Serving businesses of all sizes and home users nationwide,
                                we’re committed to fast, reliable assistance. Reach out today
                                and experience personalized, professional support whenever
                                you need it.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* REACH US */}
            <section className="w-full bg-white py-20">

                <div className="max-w-7xl mx-auto px-6">

                    {/* HEADING */}
                    <div className="text-center mb-16">

                        <h2 className="text-3xl font-light">
                            Reach <span className="font-semibold">Us</span>
                        </h2>

                        <div className="flex items-center justify-center gap-2 mt-4">
                            <span className="w-10 h-[2px] bg-[#193315]"></span>
                            <span className="w-3 h-3 bg-[#193315]"></span>
                            <span className="w-3 h-3 bg-[#193315]"></span>
                            <span className="w-3 h-3 bg-[#193315]"></span>
                            <span className="w-10 h-[2px] bg-[#193315]"></span>
                        </div>
                    </div>

                    {/* TOP ICONS */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center mb-10">

                        <div>
                            <FiMapPin className="mx-auto text-[#193315] text-3xl mb-2" />
                            <p className="font-medium">Address</p>
                        </div>

                        <div>
                            <FiMail className="mx-auto text-[#193315] text-3xl mb-2" />
                            <p className="font-medium">Email</p>
                        </div>
                    </div>

                    {/* INFO BOXES */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

                        {/* ADDRESS */}
                        <div className="p-8 text-center">
                            <div className="p-4 text-sm text-[#193315] cursor-pointer -mt-15">

                                <p className="font-medium text-[17px]">
                                    Location
                                </p>

                                12031 NE 102 St,
                                <br />
                                Kirkland, Washington USA
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div className="p-8 text-center space-y-4">
                            <div className="p-3 cursor-pointer -mt-15 text-[#193315]">

                                <p className="font-semibold text-[18px]">
                                    Support
                                </p>

                                <p className="text-sm pt-1">
                                    info@howtocontact.live
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* FORM TITLE */}
                    <p className="text-center text-[16px] text-gray-900 font-medium mb-10">
                        If you have any query please fill this form
                    </p>

                    {/* FORM */}
                    <form
                        onSubmit={sendEmail}
                        className="max-w-3xl mx-auto space-y-6 bg-white p-10 rounded-2xl shadow-xl shadow-black/50"
                    >

                        {/* NAME */}
                        <div className="flex items-center gap-3 border-b py-2">
                            <FiUser className="text-gray-400" />

                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name *"
                                required
                                className="w-full outline-none text-sm"
                            />
                        </div>

                        {/* EMAIL */}
                        <div className="flex items-center gap-3 border-b py-2">
                            <FiMail className="text-gray-400" />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email *"
                                required
                                className="w-full outline-none text-sm"
                            />
                        </div>

                        {/* PHONE */}
                        <div className="flex items-center gap-3 border-b py-2">
                            <FiPhone className="text-gray-400" />

                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number *"
                                required
                                className="w-full outline-none text-sm"
                            />
                        </div>

                        {/* MESSAGE */}
                        <div className="flex items-start gap-3 border-b py-2">
                            <FiMessageSquare className="text-gray-400 mt-1" />

                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="3"
                                className="w-full outline-none text-sm resize-none"
                            ></textarea>
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            className="w-full bg-[#457C3C] text-white py-3 rounded hover:bg-[#193315] transition"
                        >
                            Send
                        </button>
                    </form>
                </div>
            </section>


        </>
    );
}