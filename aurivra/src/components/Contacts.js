// components/Contact.js
export default function Contact() {
  return (
<section id="contact" className="min-h-[50vh] flex flex-col justify-center items-center bg-gradient-to-r from-blue-50 to-purple-50 text-center px-6 md:px-20 py-20" data-aos="fade-up">
  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
    Ready to start your project?
  </h2>
  <p className="text-gray-700 text-lg mb-8">
    Let&apos;s create something amazing together. Contact us today and let&apos;s build your future.
  </p>
  <a
    href="mailto:aurivrasolutions@gmail.com"
    className="px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-lg font-semibold rounded-full shadow-md hover:scale-105 transform transition"
  >
    Contact Us
  </a>
</section>


  );
}
