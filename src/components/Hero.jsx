import { FiArrowRight, FiCheckCircle, FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
const trustPoints = [
    "24/7 expert support",
    "Secure IT maintenance",
    "Software and digital growth",
];

const stats = [
    { value: "100%", label: "Satisfaction" },
    { value: "24/7", label: "Support" },
    { value: "Global", label: "Coverage" },
];

const Hero = () => {
    return (
        <section className="relative isolate overflow-hidden bg-[#F4F8F2]">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(118,206,104,0.25),_transparent_34%),linear-gradient(135deg,_#F8FCF6_0%,_#FFFFFF_46%,_#EAF5E6_100%)]" />

            <div className=" mx-auto grid min-h-[720px] w-full max-w-7xl items-center gap-24 px-5 py-12 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-10 lg:py-16">
                <div className="relative order-2 lg:order-1">
                    <div className=" absolute -left-6 top-10 hidden h-40 w-40 rounded-full bg-[#76CE68]/20 blur-2xl lg:block" />

                    <div className=" relative overflow-hidden rounded-[32px] bg-[#193315] shadow-[0_28px_80px_rgba(7,20,5,0.24)]">
                        <img
                            src="/Banner1.jpg"
                            alt="Global IT Consulting and Tech Support Services"
                            className="h-[420px] w-full object-cover sm:h-[540px] lg:h-[620px] "
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#071405]/90 via-[#071405]/35 to-transparent" />
                        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                            <div className="max-w-xl">
                                <p className="mb-3 inline-flex rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white backdrop-blur">
                                    Free consultation
                                </p>

                                <h2 className="text-2xl font-black uppercase leading-tight text-white sm:text-4xl lg:text-3xl">
                                    Information Technology Consulting Services
                                </h2>

                                <p className="mt-4 max-w-lg text-sm leading-6 text-white/82 sm:text-base">
                                    User-centric IT maintenance, protection, and high-end support
                                    services for computers, networks, software, and growth.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="absolute -right-3 top-2 rounded-2xl border border-white/70 bg-white/95 p-4 shadow-2xl sm:-right-6 sm:p-5">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAF8E7] text-[#2E5628]">
                                <FiCheckCircle className="text-2xl" />
                            </div>
                            <div>
                                <p className="text-xl font-black leading-none text-[#193315]">
                                    100%
                                </p>
                                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                                    Satisfaction
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" order-1 lg:order-2">
                    <div className="mx-auto max-w-xl lg:ml-auto">
                        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#76CE68]/40 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#2E5628] shadow-sm">
                            <span className="h-2 w-2 rounded-full bg-[#76CE68]" />
                            Global IT & Digital Solutions
                        </p>

                        <h1 className="text-4xl font-black leading-[1.05] text-[#071405] sm:text-5xl lg:text-5xl">
                            How to Contact for reliable tech support that scales.
                        </h1>

                        <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                            One partner for IT support, software, printing, and digital
                            growth. We deliver secure, responsive, and scalable solutions for
                            individuals, startups, and enterprises worldwide.
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-3">
                            {trustPoints.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#193315] shadow-sm ring-1 ring-[#DDEED8]"
                                >
                                    <FiCheckCircle className="shrink-0 text-[#5DA452]" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                            <a
                                href="tel:+18778949715"
                                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#193315] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#193315]/20 transition hover:bg-[#2E5628]"
                            >
                                <FiPhoneCall className="text-lg" />
                                +X-XXX-XXX-XXXX
                            </a>

                            <Link
                                href="/services/printer-solution"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#B9DDB2] bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#193315] transition hover:border-[#76CE68] hover:text-[#2E5628]"
                            >
                                Explore services
                                <FiArrowRight className="text-lg" />
                            </Link>
                        </div>

                        <div className="mt-10 grid grid-cols-3 divide-x divide-[#CFE5C9] rounded-2xl border border-[#DDEED8] bg-white/80 p-5 shadow-sm backdrop-blur">
                            {stats.map((stat) => (
                                <div key={stat.label} className="px-3 text-center">
                                    <p className="text-2xl font-black text-[#193315]">
                                        {stat.value}
                                    </p>
                                    <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-gray-500">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
