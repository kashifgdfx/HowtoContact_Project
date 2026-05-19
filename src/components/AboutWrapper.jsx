import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



import {
    FiPhone,
    FiHome,
    FiCheckCircle,
} from "react-icons/fi";

export const metadata = {
    title: "About How to Contact",
    description: "Global IT consulting and tech support services",
};

export default function AboutWrapper() {
    return (
        <>


            {/* HERO SECTION */}
            <section className="w-full bg-white">
                <div className="relative flex flex-col lg:flex-row h-[420px]">

                    {/* IMAGE */}
                    <div className="lg:w-1/2 relative min-h-[420px]">
                        <Image
                            src="/AboutImg.png"
                            alt="About"
                            fill
                            className="object-cover bg-[#76CE68]"
                            priority
                        />
                    </div>

                    {/* CONTENT */}
                    <div className="lg:w-1/2 w-full h-full relative bg-[#193315] text-white flex items-center">

                        <div className="absolute left-0 top-0 h-full w-24 bg-[#193315] skew-x-[-10deg] origin-top-left hidden lg:block"></div>

                        <div className="relative px-8 lg:px-16 max-w-xl">
                            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                                About US
                            </h1>

                            <p className="text-sm leading-relaxed opacity-90">
                                HowToContact is a trusted help desk service provider offering
                                reliable IT solutions for small, medium, and large businesses,
                                as well as home users, across the nation.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* HOW WE WORK */}
            <section className="w-full bg-white py-20">

                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-medium mb-8">
                        <span className="text-[#071405] font-semibold">
                            How the Technical
                        </span>{" "}
                        Support Team Operates
                    </h2>

                    <p className="text-gray-600 max-w-4xl mx-auto text-md leading-relaxed mb-6">
                        Understand Your Requirement Analyze & Plan the Best Solution
                        Execute with Expert Team Provide Ongoing Support & Optimization
                    </p>
                </div>

                <div className="w-full border-t my-16"></div>

                {/* HEADING */}
                <div className="text-center mb-14 px-6">
                    <h2 className="text-4xl font-medium">
                        How <span className="font-semibold text-[#071405]"></span> We Work
                    </h2>

                    <div className="flex items-center justify-center gap-2 mt-4">
                        <span className="w-10 h-[2px] bg-[#193315]"></span>
                        <span className="w-3 h-3 bg-[#193315]"></span>
                        <span className="w-3 h-3 bg-[#193315]"></span>
                        <span className="w-3 h-3 bg-[#193315]"></span>
                        <span className="w-10 h-[2px] bg-[#193315]"></span>
                    </div>

                    <p className="text-gray-600 mt-4 text-md">
                        More than 95% of the common PC problems can be fixed online as long
                        as you have a phone & internet access.
                    </p>
                </div>

                {/* STEPS */}
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

                    {/* STEP 1 */}
                    <div>
                        <div className="relative inline-flex items-center justify-center mb-6">

                            <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#193315] flex items-center justify-center">

                                <div className="w-16 h-16 rounded-full bg-[#2E5628] flex items-center justify-center text-white text-2xl">
                                    <FiPhone />
                                </div>
                            </div>
                        </div>

                        <h3 className="text-[#071405] font-semibold text-lg mb-2">
                            Call Toll Free
                        </h3>

                        <p className="text-[#071405] text-sm leading-relaxed">
                            Call Toll Free at +1877-894-9715 to talk to HowToContact
                            Diagnostic Expert. The expert will understand the problem you are
                            facing and if required would ask for the remote access of your
                            computer.
                        </p>
                    </div>

                    {/* STEP 2 */}
                    <div>
                        <div className="relative inline-flex items-center justify-center mb-6">

                            <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#193315] flex items-center justify-center">

                                <div className="w-16 h-16 rounded-full bg-[#2E5628] flex items-center justify-center text-white text-2xl">
                                    <FiHome />
                                </div>
                            </div>
                        </div>

                        <h3 className="text-[#071405] font-semibold text-lg mb-2">
                            Remote Access
                        </h3>

                        <p className="text-[#071405] text-sm leading-relaxed">
                            The expert will provide you a 6 digit code that you need to enter
                            on URL: When you click start download a remote access tool will be
                            downloaded on your computer.
                        </p>
                    </div>

                    {/* STEP 3 */}
                    <div>
                        <div className="relative inline-flex items-center justify-center mb-6">

                            <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#193315] flex items-center justify-center">

                                <div className="w-16 h-16 rounded-full bg-[#2E5628] flex items-center justify-center text-white text-2xl">
                                    <FiCheckCircle />
                                </div>
                            </div>
                        </div>

                        <h3 className="text-[#071405] font-semibold text-lg mb-2">
                            Complete
                        </h3>

                        <p className="text-[#071405] text-sm leading-relaxed">
                            You will then click on run and allow access to initiate the remote
                            session. Once you share the screen, our technician will go ahead
                            and diagnose the issue and will create a diagnostic report and
                            provide you with the fix and inform you about the charges (if
                            applicable).
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#193315] to-[#2E5628] py-24 px-6 text-white">

                {/* DECORATIVE CIRCLES */}
                <div className="absolute -left-32 bottom-0 w-96 h-96 bg-white/10 rounded-full"></div>

                <div className="absolute left-32 bottom-24 w-48 h-48 bg-white/10 rounded-full"></div>

                <div className="absolute -right-24 top-0 w-56 h-56 bg-white/10 rounded-full"></div>

                {/* CONTENT */}
                <div className="relative max-w-4xl mx-auto text-center">

                    <h2 className="text-4xl md:text-5xl font-semibold mb-6">
                        Please See
                    </h2>

                    <p className="text-sm md:text-base leading-relaxed text-white/90 mb-10">
                        &quot;You have full control during the remote support session. If at any
                        point you wish to end the session, simply click the red X or close
                        button on the session window. You can also take back control by
                        using your own keyboard and mouse, which will automatically return
                        control of your PC to you. Our tech support agent will ensure the
                        transfer happens seamlessly. For your safety, the HOWTOCONTACT LIVE
                        TECHNICAL SUPPORT TEAM ensures that if at any stage you feel
                        uncomfortable, you can stop the remote session at any time.&quot;
                    </p>

                    <Link href="/contact">
                        <button className="bg-white text-[#071405] px-8 py-3 rounded-full group hover:bg-[#193315] hover:text-white font-medium shadow-lg hover:scale-105 transition">
                            Explore Our Services
                        </button>
                    </Link>
                </div>
            </section>


        </>
    );
}