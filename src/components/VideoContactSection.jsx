"use client";



import {
    FiPhone,
    FiMail,
    FiUser,
    FiMessageSquare,
} from "react-icons/fi";

import emailjs from "@emailjs/browser";

export default function VideoContactSection() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_5n72u1i", // EmailJS Service ID
                "template_102fpjv", // EmailJS Template ID
                e.target,
                "bfED1bbzcLms9zkik" // EmailJS Public Key
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

    return (
        <section
            className="relative bg-[#2E5628] py-12 overflow-hidden bg-cover h-[550px]"
            style={{
                backgroundImage: `url('/footerbg3.jpg')`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#193315]/30"></div>

            {/* Background Circles */}
            <div className="absolute right-0 top-0 w-72 h-72 bg-[#193315] rounded-full" />
            <div className="absolute left-0 bottom-0 w-72 h-72 bg-[#193315] rounded-full" />

            <div className="relative max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 px-6">

                {/* LEFT SIDE */}
                <div>
                    <h3 className="text-[#062301] text-3xl mb-6 font-bold">
                        {"*"} Our Free Service Contact {"*"}
                    </h3>
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="mt-14">

                    <form
                        onSubmit={sendEmail}
                        className="max-w-3xl mx-auto space-y-5 bg-white p-10 rounded-2xl"
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
            </div>
        </section>
    );
}