import { FaComments, FaFileAlt, FaLaptopCode, FaTools } from 'react-icons/fa';

export default function HowToStart() {
  const steps = [
    {
      icon: <FaComments className="text-blue-600 text-4xl" />,
      title: 'Step 1: Tell us your problem',
      description: 'Reach out and share your vision, goals, and challenges. We listen carefully to understand your needs.',
    },
    {
      icon: <FaFileAlt className="text-blue-600 text-4xl" />,
      title: 'Step 2: Get a tailored proposal',
      description: 'We craft customized proposals and present prototypes to ensure the solution aligns with your vision.',
    },
    {
      icon: <FaLaptopCode className="text-blue-600 text-4xl" />,
      title: 'Step 3: Delivery & Launch',
      description: 'After approval, we develop and deliver your fully functional, ready-to-use product.',
    },
    {
      icon: <FaTools className="text-blue-600 text-4xl" />,
      title: 'Step 4: Ongoing Support',
      description: 'We maintain, adapt, and evolve your product based on your growing needs.',
    },
  ];

  return (
<section id="how-to-start" className="py-20 bg-gradient-to-r from-white to-purple-50 px-4 sm:px-6 md:px-20">
  <div className="max-w-5xl mx-auto text-center mb-20">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
      How to Start With Us
    </h2>
    <p className="text-base sm:text-lg text-gray-700">
      Our streamlined process ensures clarity, efficiency, and success — from the first contact to long-term collaboration.
    </p>
  </div>

  <div className="relative">
    {/* Vertical Line */}
    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-blue-200"></div>

    <div className="flex flex-col space-y-20">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
          } items-center justify-between relative space-y-6 md:space-y-0`}
          data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
        >
          {/* Card */}
          <div className="w-full md:w-5/12 bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105 border border-gray-100">
            <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
              <div className="text-4xl text-blue-600">{step.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{step.title}</h3>
              <p className="text-base sm:text-lg text-gray-700">{step.description}</p>
            </div>
          </div>

          {/* Step Number */}
          <div className="hidden md:flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-bold text-lg absolute left-1/2 transform -translate-x-1/2">
            {index + 1}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

  );
}
