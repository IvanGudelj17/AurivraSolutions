'use client';

import Image from 'next/image';
import herosection from '/public/craft.avif';

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-r from-purple-100 via-pink-100 to-blue-100"
      data-aos="fade-down"
      data-aos-once="true"
    >
      {/* Text Section */}
      <div className="text-center md:text-left max-w-xl space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
          Web Development <br /> Tailored for <span className="text-blue-600">Your Business</span>
        </h1>
        <p className="text-gray-700 text-lg">
          We craft high-performance digital solutions using the latest technologies. Elevate your online presence with our expertise.
        </p>
        <div className="mt-6">
          <a
            href="#contact"
            className="inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg shadow-md hover:scale-105 transform transition"
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center" data-aos="fade-left">
        <div className="relative w-[600px] h-[600px] rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105">
          <Image
            src={herosection}
            alt="Hero illustration"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-transparent to-blue-500 opacity-10"></div>
        </div>
      </div>
    </section>
  );
}
