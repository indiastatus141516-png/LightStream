
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icon Components
const CircleCheckIcon = ({ className = "w-6 h-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const CardIcon = ({ className = "w-16 h-16" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
    aria-hidden="true"
  >
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
  </svg>
);

const RewardsIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    className={className}
  >
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M12 8v13" />
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
  </svg>
);

const PercentIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    className={className}
  >
    <line x1="19" y1="5" x2="5" y2="19" />
    <circle cx="6.5" cy="6.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
  </svg>
);

const ShieldIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2"
    className={className}
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  </svg>
);

// Reusable Components
const BenefitItem = ({ text }) => (
  <div className="flex items-start gap-3 group">
    <div className="flex-shrink-0 mt-0.5">
      <CircleCheckIcon className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
    </div>
    <span className="text-base text-gray-700 leading-relaxed">{text}</span>
  </div>
);

const FeatureBox = ({ icon: Icon, iconBg, title, description }) => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 group">
    <div
      className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
    >
      <Icon className="w-6 h-6" />
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
  </div>
);

const CreditCardBox = ({
  title,
  tag,
  subtitle,
  apr,
  annualFee,
  bgGradient,
  buttonGradient,
  accentColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col rounded-2xl shadow-lg border-2 border-gray-200 overflow-hidden hover:border-gray-300 hover:shadow-xl transition-all duration-300 ${bgGradient}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Accent Bar */}
      <div className={`h-2 w-full ${accentColor}`} />

      {/* Card Content */}
      <div className="p-8">
        {/* Tag */}
        {tag && (
          <span className="inline-block bg-gray-100 text-gray-800 text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            {tag}
          </span>
        )}

        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>

        {/* Card Details */}
        <div className="space-y-5 mb-8">
          <div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Rewards
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {subtitle}
            </div>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              APR
            </div>
            <div className="text-lg font-semibold text-gray-900">{apr}</div>
          </div>
          <div>
            <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-1">
              Annual Fee
            </div>
            <div className="text-lg font-semibold text-gray-900">
              {annualFee}
            </div>
          </div>
        </div>

        {/* Button */}
        <Link to="/apply-now">
        <button
          className={`w-full py-3.5 rounded-xl text-white font-semibold text-base ${buttonGradient} hover:opacity-90 transition-all duration-300 ${
            isHovered ? "transform scale-105" : ""
          }`}
          aria-label={`Apply for ${title}`}
        >
          Apply Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default function CreditCardsPage() {
  const creditCards = [
    {
      title: "Rewards Card",
      tag: "Best for Cash Back",
      subtitle: "2% cash back on all purchases",
      apr: "13.99% - 23.99% Variable APR",
      annualFee: "$0",
      bgGradient: "bg-gradient-to-br from-white to-green-50",
      buttonGradient: "bg-gradient-to-r from-green-600 to-green-700",
      accentColor: "bg-gradient-to-r from-green-500 to-emerald-500",
    },
    {
      title: "Travel Rewards Card",
      tag: "Best for Travel",
      subtitle: "3X points on travel and dining",
      apr: "14.99% - 24.99% Variable APR",
      annualFee: "$95",
      bgGradient: "bg-gradient-to-br from-white to-purple-50",
      buttonGradient: "bg-gradient-to-r from-purple-600 to-purple-700",
      accentColor: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
  ];

  const benefits = [
    "No annual fee on select cards",
    "Cash back or travel rewards on every purchase",
    "0% intro APR for 12 months on purchases",
    "Free credit score monitoring",
    "Zero fraud liability protection",
    "No foreign transaction fees on international purchases",
  ];

  const features = [
    {
      icon: RewardsIcon,
      iconBg: "bg-gradient-to-br from-blue-600 to-blue-700",
      title: "Earn Rewards",
      description:
        "Get cash back or points on every purchase you make. Redeem for statement credits, travel, gift cards, and more with no expiration.",
    },
    {
      icon: PercentIcon,
      iconBg: "bg-gradient-to-br from-green-600 to-green-700",
      title: "Build Credit",
      description:
        "Responsible credit card use helps you build and improve your credit score over time with regular reporting to all three bureaus.",
    },
    {
      icon: ShieldIcon,
      iconBg: "bg-gradient-to-br from-purple-600 to-purple-700",
      title: "Fraud Protection",
      description:
        "Shop with confidence knowing you're protected against unauthorized purchases with zero liability coverage and 24/7 monitoring.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Credit Cards
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our selection of credit cards designed to fit your
            lifestyle. Earn rewards, build credit, and enjoy peace of mind with
            our fraud protection.
          </p>
        </div>

        {/* Credit Card Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {creditCards.map((card, idx) => (
            <CreditCardBox key={idx} {...card} />
          ))}
        </div>

        {/* Benefits & Features Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Credit Card Benefits
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            {/* Benefits List */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                What You Get
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <BenefitItem key={idx} text={benefit} />
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <FeatureBox key={idx} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white bg-opacity-10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <CardIcon className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Choose the Card That's Right for You
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Apply online and get a decision in minutes. No impact to your credit
            score when checking eligibility.
          </p>
          <Link to="/apply-now" className="bg-white text-gray-900 px-10 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
            aria-label="View all available credit cards">
            View All Cards
          </Link>
        </div>
      </section>
    </div>
  );
}