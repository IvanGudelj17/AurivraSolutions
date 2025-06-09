// components/About.js
import Image from 'next/image';
import herosection from '/public/herosection.jpg';
export default function About() {
  return (
<section id="about" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-r from-purple-200 via-pink-100 to-blue-400 py-20" data-aos="fade-right">
   {/* Optional illustration or image */}
<div className="mt-10 md:mt-0 md:w-1/2 flex justify-center" data-aos="fade-left">
        <div className="relative w-[550px] h-[410px] rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105">
          <Image
            src={herosection}
            alt="Hero illustration"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-transparent to-blue-500 opacity-10"></div>
        </div>
      </div> 
  <div className="text-center md:text-left max-w-xl space-y-6">
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
      About Aurivra
    </h2>
    <p className="text-gray-700 text-lg">
      At Aurivra Studio, we don’t just build websites — we engineer high-performance, scalable digital experiences. With a focus on the latest technologies, we deliver results that drive businesses forward.
    </p>
    <p className="text-gray-700 text-lg">
      Our mission is simple: Empower brands to lead in the digital age with cutting-edge web development.
    </p>
  </div>


</section>


  );
}
