// components/About.js
import Image from 'next/image';
import herosection from '/public/herosection.jpg';
export default function About() {
  return (
<section
  id="about"
  className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 bg-gradient-to-r from-purple-200 via-pink-100 to-blue-400 py-20"
  data-aos="fade-right"
>
  {/* Image Section */}
  <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0" data-aos="fade-left">
    <div className="relative w-full max-w-[400px] sm:max-w-[500px] md:w-[550px] h-[300px] sm:h-[400px] md:h-[410px] rounded-xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105">
      <Image
        src={herosection}
        alt="Hero illustration"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-transparent to-blue-500 opacity-10"></div>
    </div>
  </div>

  {/* Text Section */}
  <div className="text-center md:text-left max-w-xl space-y-6">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
      About Aurivra
    </h2>
    <p className="text-base sm:text-lg text-gray-700">
      At Aurivra Studio, we don’t just build websites — we engineer high-performance, scalable digital experiences. With a focus on the latest technologies, we deliver results that drive businesses forward.
    </p>
    <p className="text-base sm:text-lg text-gray-700">
      Our mission is simple: Empower brands to lead in the digital age with cutting-edge web development.
    </p>
  </div>
</section>
  );
}
