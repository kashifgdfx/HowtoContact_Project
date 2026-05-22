"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import emailjs from "@emailjs/browser";

// Icons
import { 
  MapPin, 
  Phone, 
  Mail, 
  User, 
  MessageSquare, 
  Send,
  ArrowRight 
} from "lucide-react";

// --- Configuration for EmailJS ---
// In production, move these keys to your .env.local file
const EMAIL_SERVICE_ID = "service_5n72u1i";
const EMAIL_TEMPLATE_ID = "template_102fpjv";
const EMAIL_PUBLIC_KEY = "bfED1bbzcLms9zkik";

export default function ContactPage() {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        e.target,
        EMAIL_PUBLIC_KEY
      );
      
      setStatus({ type: "success", message: "Message sent! We'll get back to you shortly." });
      e.target.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({ type: "error", message: "Failed to send message. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#76CE68] selection:text-[#193315]">
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[500px] md:h-[550px] flex flex-col md:flex-row overflow-hidden">
        
        {/* Left: Image Block */}
        <div className="relative w-full md:w-1/2 h-64 md:h-full">
          <Image
            src="/Contact8.png"
            alt="HowToContact Support Team"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for smoothness */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#193315]/40 to-transparent md:hidden" />
        </div>

        {/* Right: Content Block */}
        <div className="w-full md:w-1/2 h-full bg-[#193315] flex items-center justify-center p-8 md:p-12 lg:p-16 relative">
          {/* Decorative Circles */}
          {/* <div className="absolute top-10 right-10 w-32 h-32 border border-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-20 h-20 bg-[#829b7f] rounded-full blur-3xl opacity-20"></div> */}
          
          <div className="relative z-10 max-w-lg space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              We Are <span className="text-[#76CE68]">Here</span> to Help
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed">
              Expert IT solutions and help desk support tailored for businesses and home users. 
              Reach out today and experience the difference.
            </p>
            
            {/* Quick Metrics */}
            <div className="flex gap-8 pt-4">
               <div>
                 <span className="block text-3xl font-bold text-white">24/7</span>
                 <span className="text-xs text-slate-400 uppercase tracking-widest">Support</span>
               </div>
               <div>
                 <span className="block text-3xl font-bold text-white">99%</span>
                 <span className="text-xs text-slate-400 uppercase tracking-widest">Satisfaction</span>
               </div>
            </div>
          </div>
        </div>
      </section>


      {/* --- CONTACT CONTENT SECTION --- */}
      <section className="w-full py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20">
            
            {/* LEFT: Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#193315] mb-4">
                  Get in Touch
                </h2>
                <div className="w-16 h-1.5 bg-[#457C3C] rounded-full"></div>
              </div>

              <p className="text-slate-600 text-lg leading-relaxed">
                Have a question about our services or need technical support? 
                Fill out the form, and our help desk team will get back to you within 24 hours.
              </p>

              {/* Info Cards */}
              <div className="space-y-6 mt-8">
                
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-[#457C3C]/30 transition-all duration-300 group">
                  <div className="p-3 bg-[#76CE68]/10 rounded-full text-[#193315] group-hover:bg-[#76CE68] group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#193315]">Headquarters</h3>
                    <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                      12031 NE 102 St,<br></br>
                      Kirkland, Washington USA 
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-[#457C3C]/30 transition-all duration-300 group">
                  <div className="p-3 bg-[#76CE68]/10 rounded-full text-[#193315] group-hover:bg-[#76CE68] group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#193315]">Email Support</h3>
                    <p className="text-slate-500 text-sm mt-1">
                     info@howtocontact.live
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-[#457C3C]/30 transition-all duration-300 group">
                  <div className="p-3 bg-[#76CE68]/10 rounded-full text-[#193315] group-hover:bg-[#76CE68] group-hover:text-white transition-colors">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#193315]">Phone</h3>
                    <p className="text-slate-500 text-sm mt-1">
                      +1-307-412-5782
                    </p>
                  </div>
                </div>

              </div>
            </div>


            {/* RIGHT: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                <h3 className="text-2xl font-bold text-[#193315] mb-6">Send us a Message</h3>
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Input: Name */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-slate-600 ml-1">Full Name</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#457C3C] transition-colors">
                        <User className="w-5 h-5" />
                      </div>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        placeholder="John Doe"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#457C3C] focus:ring-4 focus:ring-[#457C3C]/10 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Input: Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-slate-600 ml-1">Email Address</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#457C3C] transition-colors">
                        <Mail className="w-5 h-5" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="john@example.com"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#457C3C] focus:ring-4 focus:ring-[#457C3C]/10 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Input: Phone */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-slate-600 ml-1">Phone Number</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#457C3C] transition-colors">
                        <Phone className="w-5 h-5" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#457C3C] focus:ring-4 focus:ring-[#457C3C]/10 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Input: Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-slate-600 ml-1">Message</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-4 text-slate-400 group-focus-within:text-[#457C3C] transition-colors">
                        <MessageSquare className="w-5 h-5" />
                      </div>
                      <textarea
                        name="message"
                        id="message"
                        rows="4"
                        placeholder="How can we help you today?"
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#457C3C] focus:ring-4 focus:ring-[#457C3C]/10 outline-none transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Status Message */}
                  {status.message && (
                    <div className={`p-4 rounded-lg text-sm font-medium flex items-center gap-2 ${
                      status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                    }`}>
                      {status.type === 'success' ? <Send className="w-4 h-4" /> : <MessageSquare className="w-4 h-4" />}
                      {status.message}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#457C3C] text-white font-bold text-lg py-4 rounded-xl shadow-lg shadow-[#457C3C]/30 hover:bg-[#3a6630] hover:shadow-xl hover:shadow-[#457C3C]/40 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2">
                        Sending...
                        {/* Add a spinner icon here if desired */}
                      </span>
                    ) : (
                      <span className="cursor-pointer flex items-center gap-2">
                        Send Message <ArrowRight className="w-5 h-5" />
                      </span>
                    )}
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- MAP PLACEHOLDER (Optional) --- */}
      {/* <section className="w-full h-64 bg-slate-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-slate-300 text-slate-500">
            [Interactive Map Component Would Go Here]
        </div>
      </section> */}

    </main>
  );
}