import React from "react";
import { Link } from "react-router-dom";

// Icon Components
const CheckIcon = ({ className = "w-5 h-5" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    className={className}
    aria-hidden="true"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const CircleCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const CardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
    <line x1="1" y1="10" x2="23" y2="10" />
  </svg>
);

const ClockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const DollarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <line x1="12" y1="1" x2="12" y2="23" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

// Reusable Components
const BenefitItem = ({ text }) => (
  <div className="flex items-center gap-3">
    <div className="text-green-600">
      <CheckIcon />
    </div>
    <span className="text-sm sm:text-base text-gray-700">{text}</span>
  </div>
);

const FeatureBox = ({ icon: Icon, iconBg, title, description }) => (
  <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
    <div
      className={`w-12 h-12 ${iconBg} rounded-full flex items-center justify-center text-white mb-3`}
    >
      <Icon />
    </div>
    <h3 className="font-semibold text-gray-900 mb-1 text-base sm:text-lg">
      {title}
    </h3>
    <p className="text-xs sm:text-sm text-gray-600">{description}</p>
  </div>
);

export default function HighYieldSavingsPage() {
  const apy = "4.50%";

  const benefits = [
    "4.50% APY - Earn significantly more than traditional savings",
    "No minimum balance required to open or maintain",
    "No monthly fees, ever",
    "FDIC insured up to $250,000",
    "Easy online access 24/7",
    "Easy online and mobile banking",
  ];

  const features = [
    {
      icon: CircleCheckIcon,
      iconBg: "bg-purple-600",
      title: "Easy Access",
      description:
        "Access your funds anytime through online transfers with no withdrawal penalties or restrictions.",
    },
    {
      icon: CardIcon,
      iconBg: "bg-blue-600",
      title: "Instant Transfers",
      description:
        "Move money between your accounts instantly with our seamless transfer system.",
    },
    {
      icon: ClockIcon,
      iconBg: "bg-green-600",
      title: "24/7 Support",
      description:
        "Get help whenever you need it with our round-the-clock customer service team.",
    },
    {
      icon: DollarIcon,
      iconBg: "bg-orange-600",
      title: "High Interest Rate",
      description:
        "Earn significantly more than traditional savings accounts with our competitive 4.50% APY.",
    },
  ];

  const earningsExamples = [
    { balance: "$10,000 balance:", earnings: "~$450/year" },
    { balance: "$25,000 balance:", earnings: "~$1,125/year" },
    { balance: "$50,000 balance:", earnings: "~$2,250/year" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            High Yield Savings
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Grow your savings faster with one of the highest interest rates
            available. No fees, no minimums, just more money in your pocket.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* APY Box and Benefits */}
          <div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-8 rounded-2xl mb-6 shadow-lg">
              <p className="text-purple-100 mb-2 text-sm sm:text-base">
                Current Annual Percentage Yield (APY)
              </p>
              <div className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
                {apy}
              </div>
              <p className="text-purple-100 text-sm sm:text-base">
                No minimum balance required
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              Account Benefits
            </h2>
            <div className="space-y-3 mb-6">
              {benefits.map((benefit, index) => (
                <BenefitItem key={index} text={benefit} />
              ))}
            </div>
            <Link to="/apply-now">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition font-semibold text-sm sm:text-base w-full md:w-auto">
                Open Account
              </button>
            </Link>
          </div>

          {/* Features */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <FeatureBox key={index} {...feature} />
            ))}
          </div>
        </div>

        {/* Example Earnings */}
        <div className="mt-12 bg-gray-50 rounded-2xl p-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center">
            Example Earnings
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {earningsExamples.map((example, index) => (
              <div key={index} className="text-center">
                <p className="text-gray-700 mb-1 text-sm sm:text-base">
                  {example.balance}
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900">
                  {example.earnings}
                </p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm sm:text-base text-gray-500 mt-4 italic">
            *Assumes {apy} APY. Actual earnings may vary.
          </p>
        </div>
      </section>

      {/* Start Earning More CTA */}
      <section className="bg-purple-600 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Start Earning More Today
          </h2>
          <p className="text-purple-100 mb-6 text-sm sm:text-base">
            Open your savings account in minutes
          </p>
          <Link to="/apply-now">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition font-semibold text-sm sm:text-base">
              Open Account Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
