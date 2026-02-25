import React from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: "💰",
      title: "Personal Loans",
      description:
        "Flexible personal loans from $1,000 to $40,000 for any purpose with competitive rates.",
    },
    {
      icon: "🏠",
      title: "Mortgage Loans",
      description:
        "Home financing solutions with low rates and flexible terms to help you buy your dream home.",
    },
    {
      icon: "🚗",
      title: "Auto Loans",
      description:
        "Finance your car or used vehicle with competitive rates and terms up to 84 months.",
    },
    {
      icon: "🔑",
      title: "Home Equity Loans",
      description:
        "Borrow against your home equity for major expenses, renovations, or other expenses.",
    },
    {
      icon: "🎓",
      title: "Student Loans",
      description:
        "Affordable education financing to help you pursue your degree without breaking the bank.",
    },
    {
      icon: "💼",
      title: "Business Loans",
      description:
        "Unlock financing options for your small business from $5,000 to $300,000.",
    },
  ];

  // Navigate to /services and scroll to top
  const handleNavigate = () => {
    navigate("/services");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Our Loan Services
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg">
            Comprehensive loan solutions for every need - from personal to
            business financing
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100
                         shadow-md hover:shadow-2xl hover:-translate-y-1
                         transition-transform duration-300 flex flex-col"
            >
              <div className="text-4xl sm:text-5xl mb-4 hover:scale-110 transform transition-all">
                {service.icon}
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 md:mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 text-xs sm:text-sm md:text-base leading-relaxed flex-grow">
                {service.description}
              </p>

              <button
                onClick={handleNavigate}
                className="mt-auto inline-flex items-center text-sm sm:text-base
                           font-semibold text-white bg-gradient-to-r from-green-500 to-green-600
                           hover:from-green-600 hover:to-green-700 py-2.5 px-4 rounded-lg
                           shadow-md hover:shadow-xl transition-all transform hover:scale-105"
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-10 sm:mt-12 md:mt-16">
          <button
            onClick={handleNavigate}
            className="inline-flex items-center text-sm sm:text-base font-semibold
                       text-white bg-gradient-to-r from-green-500 to-green-600
                       hover:from-green-600 hover:to-green-700 py-2.5 px-6 rounded-lg
                       shadow-md hover:shadow-xl transition-all transform hover:scale-105"
          >
            View All Loan Services →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
