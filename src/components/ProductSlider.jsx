"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const products = [
    {
        title: "Printer Solution",
        desc: "We provide complete printer support solutions to keep your business running.",
        image: "/Printer3.jpg",
    },
    {
        title: "Complete Printer Solutions",
        desc: "End-to-end printer services including installation, network setup, optimization, and remote troubleshooting.",
        image: "/Printer5.jpg",
    },
    {
        title: "Business-Ready Printer Services",
        desc: "Reliable printer solutions tailored for office and enterprise environments.",
        image: "/Printer4.jpg",
    },
];

export default function ProductSlider() {
    const [index, setIndex] = useState(0);

    const prevSlide = () => {
        setIndex((prev) =>
            prev === 0 ? products.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setIndex((prev) =>
            prev === products.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="shadow-lg relative mx-auto w-full max-w-[320px] md:max-w-[280px]">

            {/* LEFT ARROW */}
            <button
                onClick={prevSlide}
                className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 bg-[#5DA452] p-2 rounded-full hover:bg-[#193315] z-20 transition"
            >
                <ChevronLeft size={16} className="text-white" />
            </button>

            {/* RIGHT ARROW */}
            <button
                onClick={nextSlide}
                className="hidden md:flex absolute -right-10 top-1/2 -translate-y-1/2 bg-[#5DA452] p-2 rounded-full hover:bg-[#193315] z-20 transition"
            >
                <ChevronRight size={16} className="text-white" />
            </button>

            {/* VIEWPORT */}
            <div className="overflow-hidden rounded-lg">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                    }}
                >
                    {products.map((product, i) => (
                        <div
                            key={i}
                            className="w-full flex-shrink-0 bg-white shadow-lg rounded-lg p-5 relative"
                        >
                            {/* Badge */}
                            <span className="absolute top-0 right-0 bg-[#457C3C] text-white text-xs px-3 py-2 rounded-bl-full">
                                Service Available
                            </span>

                            {/* Image */}
                            <div className="relative w-full h-40">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    fill
                                    className="object-contain"
                                />
                            </div>

                            {/* Info */}
                            <h3 className="text-base font-semibold mt-3">
                                {product.title}
                            </h3>

                            <p className="text-gray-500 text-sm mt-1 leading-relaxed">
                                {product.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Mobile Hint */}
            <p className="md:hidden text-center text-xs text-gray-400 mt-3">
                Swipe using arrows on desktop
            </p>
        </div>
    );
}