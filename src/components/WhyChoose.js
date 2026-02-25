import React from "react";

const WhyChoose = () => {
  const features = [
    {
      icon: "💵",
      title: "Competitive Rates",
      description:
        "Rates starting at 5.99% APR with discounts for autopay and savings members.",
    },
    {
      icon: "⚡",
      title: "Fast Funding",
      description:
        "Receive your funds as soon as the next day after loan is closed.",
    },
    {
      icon: "🔒",
      title: "No Hidden Fees",
      description:
        "No prepayment penalties. Pay off your loan early without penalties.",
    },
    {
      icon: "📋",
      title: "Flexible Terms",
      description:
        "Choose from 24, 36, 48, or 60-month terms to fit your budget.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
            Why Choose LendingClub?
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
            We've helped millions of people take control of their finances with
            smarter, flexible solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
            >
              <div className="text-4xl sm:text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 md:mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
