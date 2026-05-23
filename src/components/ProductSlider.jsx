"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const products = [
  {
    title: "Printer Solution",
    desc: "We provide complete printer support solutions to keep your business running.",
    image: "/Printer3.webp",
  },
  {
    title: "Complete Printer Solutions",
    desc: "End-to-end printer services including installation, network setup, optimization, and remote troubleshooting.",
    image: "/Printer5.webp",
  },
  {
    title: "Business-Ready Printer Services",
    desc: "Reliable printer solutions tailored for office and enterprise environments.",
    image: "/Printer4.webp",
  },
];

export default function ProductSlider() {
  const [index, setIndex] = useState(0);

  // PREV
  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  // NEXT
  const nextSlide = () => {
    setIndex((prev) =>
      prev === products.length - 1 ? 0 : prev + 1
    );
  };

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="relative mx-auto w-full max-w-[320px] md:max-w-[300px]">

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-[#5DA452] p-2 rounded-full hover:bg-[#193315] z-20 hidden md:flex"
      >
        <ChevronLeft size={18} className="text-white" />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-[#5DA452] p-2 rounded-full hover:bg-[#193315] z-20 hidden md:flex"
      >
        <ChevronRight size={18} className="text-white" />
      </button>

      {/* SLIDER */}
      <div className="overflow-hidden rounded-xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            width: `${products.length * 100}%`,
            transform: `translateX(-${index * (100 / products.length)}%)`,
          }}
        >
          {products.map((product, i) => (
            <div
              key={i}
              className="w-full bg-white rounded-xl shadow-lg p-5 relative"
            >
              {/* BADGE */}
              <span className="absolute top-0 right-0 bg-[#457C3C] text-white text-xs px-3 py-2 rounded-bl-full">
                Service Available
              </span>

              {/* IMAGE */}
              <div className="relative w-full h-44">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* CONTENT */}
              <h3 className="text-base font-semibold mt-4">
                {product.title}
              </h3>

              <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                {product.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE TEXT */}
      <p className="md:hidden text-center text-xs text-gray-400 mt-3">
        Auto sliding enabled
      </p>
    </div>
  );
}