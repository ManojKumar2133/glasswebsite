"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const carouselImages = [
  "/image.jpg",
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
];

const galleryImages = [
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
  "/image7.jpg",
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-white">
      <div className="absolute inset-0 w-full h-1/3 bg-gradient-to-b from-[#a31515] to-transparent z-0" />
      <div className="container mx-auto py-20 px-4 flex flex-col items-center text-center gap-10 relative z-10">
        {/* Carousel */}
        <div className="w-full max-w-xl mx-auto mb-8">
          <div className="relative w-full h-56 rounded-lg overflow-hidden shadow">
            {carouselImages.map((src, idx) => (
              <Image
                key={src}
                src={src}
                alt={`carousel-img-${idx}`}
                fill
                className={`object-cover transition-opacity duration-700 ${current === idx ? "opacity-100" : "opacity-0"}`}
                style={{ zIndex: current === idx ? 1 : 0 }}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image src="/window.svg" alt="GlassPro logo" width={80} height={80} />
          <h1 className="text-5xl font-extrabold text-[#a31515] mb-2 drop-shadow">
            GlassPro
          </h1>
          <p className="text-xl text-gray-900 max-w-2xl">
            Professional glass contracting services for residential and commercial
            clients. Quality, safety, and customer satisfaction are our top
            priorities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-8">
          <div className="bg-white border-t-4 border-[#a31515] rounded-lg shadow p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#a31515] mb-2">
              Custom Glass
            </h2>
            <p className="text-gray-700">
              Windows, doors, partitions, and more—tailored to your needs.
            </p>
          </div>
          <div className="bg-white border-t-4 border-[#a31515] rounded-lg shadow p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#a31515] mb-2">
              Expert Workforce
            </h2>
            <p className="text-gray-700">
              Skilled professionals with years of experience in glass installation
              and repair.
            </p>
          </div>
          <div className="bg-white border-t-4 border-[#a31515] rounded-lg shadow p-6 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-[#a31515] mb-2">
              Contact & Support
            </h2>
            <p className="text-gray-700">
              Get a free quote or ask about our services—fast response guaranteed.
            </p>
          </div>
        </div>
        {/* Gallery Section */}
        <div className="w-full max-w-5xl mt-16">
          <h2 className="text-3xl font-bold text-[#a31515] mb-6 text-left">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, idx) => (
              <div key={src + idx} className="aspect-square bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                <Image src={src} alt={`gallery-img-${idx}`} width={300} height={300} className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
