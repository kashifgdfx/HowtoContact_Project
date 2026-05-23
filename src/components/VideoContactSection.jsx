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

  return (
    <section
      className="relative bg-[#2E5628] py-16 md:py-20 overflow-hidden bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/footerbg3.jpg')",
        backgroundPosition: "center top",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#193315]/70"></div>

      {/* LEFT BLOB */}
      <div className="absolute -left-20 bottom-[-60px] w-44 h-44 md:w-72 md:h-72 bg-[#193315] rounded-full opacity-60"></div>

      {/* RIGHT BLOB */}
      <div className="absolute -right-16 top-[-50px] w-40 h-40 md:w-72 md:h-72 bg-[#193315] rounded-full opacity-60"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-[1300px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 px-5 md:px-8 items-center">
        
        {/* LEFT SIDE */}
        <div className="text-center lg:text-left">
          <h3 className="text-white text-3xl md:text-5xl font-bold leading-snug">
            * Our Free Service Contact *
          </h3>

          <p className="text-gray-200 mt-5 text-sm md:text-lg max-w-xl mx-auto lg:mx-0">
            Connect with our expert team for reliable IT support,
            antivirus solutions, printer setup, and technical assistance.
          </p>
        </div>

        {/* FORM */}
        <div className="w-full">
          <form
            onSubmit={sendEmail}
            className="w-full max-w-2xl mx-auto space-y-5 bg-white p-6 md:p-10 rounded-2xl shadow-2xl"
          >
            {/* NAME */}
            <div className="flex items-center gap-3 border-b py-3">
              <FiUser className="text-gray-400 text-lg" />

              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                className="w-full outline-none text-sm md:text-base"
              />
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3 border-b py-3">
              <FiMail className="text-gray-400 text-lg" />

              <input
                type="email"
                name="email"
                placeholder="Email *"
                required
                className="w-full outline-none text-sm md:text-base"
              />
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3 border-b py-3">
              <FiPhone className="text-gray-400 text-lg" />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number *"
                required
                className="w-full outline-none text-sm md:text-base"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex items-start gap-3 border-b py-3">
              <FiMessageSquare className="text-gray-400 text-lg mt-1" />

              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="w-full outline-none text-sm md:text-base resize-none"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-[#457C3C] text-white py-3 md:py-4 rounded-xl hover:bg-[#193315] transition text-sm md:text-base font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}