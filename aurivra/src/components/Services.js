// components/Services.js
import { FaLaptopCode, FaMobileAlt, FaSearch } from 'react-icons/fa';

export default function Services() {
  return (
<section id="services" className="py-20 bg-white px-4 sm:px-6 md:px-20" data-aos="fade-up">
  <div className="max-w-7xl mx-auto text-center space-y-12">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Our Services</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
      {[
        { title: "Web Development", desc: "Custom web applications designed to elevate your brand.", icon: <FaLaptopCode /> },
        { title: "Mobile Optimization", desc: "Responsive designs for a flawless experience across all devices.", icon: <FaMobileAlt /> },
        { title: "SEO Strategy", desc: "Advanced SEO techniques to boost your visibility.", icon: <FaSearch /> },
      ].map((service, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-6 sm:p-8 bg-gradient-to-br from-pink-100 to-blue-100 rounded-lg shadow-md transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:border-2 hover:border-blue-500"
          data-aos="zoom-in"
          data-aos-delay={index * 100}
        >
          <div className="text-blue-600 text-5xl sm:text-6xl mb-4 sm:mb-6">{service.icon}</div>
          <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">{service.title}</h3>
          <p className="text-base sm:text-lg text-gray-700">{service.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
