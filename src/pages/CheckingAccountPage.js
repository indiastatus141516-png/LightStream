import React from "react";
import { Link } from "react-router-dom";

// Icon Components
const CircleCheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const CardIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const SmartphoneIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

const BanknoteIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M6 12h.01M18 12h.01" />
  </svg>
);

const ZapIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
  </svg>
);

// Benefit Item Component
const BenefitItem = ({ text }) => (
  <div className="flex items-start gap-3 hover:scale-105 transition-transform duration-300">
    <CircleCheckIcon />
    <span className="text-lg text-gray-700">{text}</span>
  </div>
);

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl shadow-md border-2 hover:border-orange-600 transition-colors p-6 flex flex-col gap-4">
    <div className="flex items-center gap-3 mb-2">
      <div className="bg-orange-600 rounded-full p-2">{icon}</div>
      <div className="font-semibold">{title}</div>
    </div>
    <p className="text-gray-700">{description}</p>
  </div>
);

// Stat Card
const StatCard = ({ value, title, description }) => (
  <div className="bg-white rounded-xl border shadow-sm p-6 text-center hover:scale-105 transform transition-all duration-300">
    <div className="text-4xl font-bold text-orange-600 mb-2">{value}</div>
    <div className="text-lg font-semibold mb-2">{title}</div>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function CheckingSection() {
  const benefits = [
    "No monthly maintenance fees",
    "No minimum balance required",
    "Free debit card included",
    "Unlimited transactions",
    "Mobile check deposit",
    "Free online bill pay",
    "Access to 37,000+ fee-free ATMs",
    "Overdraft protection available",
  ];

  const features = [
    {
      icon: <CardIcon />,
      title: "Free Debit Card",
      description:
        "Get a free debit card with chip technology and contactless payments for secure, convenient spending.",
    },
    {
      icon: <SmartphoneIcon />,
      title: "Mobile Banking",
      description:
        "Manage your money on the go with our award-winning mobile app. Deposit checks, pay bills, and more.",
    },
    {
      icon: <BanknoteIcon />,
      title: "ATM Network",
      description:
        "Access your cash fee-free at over 37,000 ATMs nationwide through the MoneyPass network.",
    },
    {
      icon: <ZapIcon />,
      title: "Instant Transfers",
      description:
        "Move money instantly between your LendingClub accounts or to external banks with ease.",
    },
  ];

  const stats = [
    {
      value: "$0",
      title: "Monthly Fees",
      description: "No maintenance or minimum balance fees",
    },
    {
      value: "37K+",
      title: "Free ATMs",
      description: "Access your cash fee-free nationwide",
    },
    {
      value: "24/7",
      title: "Mobile Access",
      description: "Bank anytime, anywhere",
    },
  ];

  return (
    <section id="checking" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Checking Account
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A smarter way to manage your everyday spending. No fees, no
            minimums, just simple banking the way it should be.
          </p>
        </div>

        {/* Benefits & Feature Cards */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Everything You Need, Nothing You Don't
            </h2>
            <div className="space-y-4 mb-8">
              {benefits.map((b, i) => (
                <BenefitItem key={i} text={b} />
              ))}
            </div>

            {/* Limited Time Offer */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-xl font-bold mb-3">Limited Time Offer</h3>
              <p className="text-gray-700 mb-4">
                Open a new checking account and make 5 debit card purchases
                within 60 days to earn a{" "}
                <span className="font-bold text-orange-600">$100 bonus</span>!
              </p>
              <p className="text-xs text-gray-500">
                *Terms and conditions apply. New customers only.
              </p>
            </div>

            <Link to="/apply-now">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md shadow-lg font-semibold transition-all w-full lg:w-auto">
                Open Checking Account
              </button>
            </Link>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6">
            {features.map((f, i) => (
              <FeatureCard key={i} {...f} />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} />
          ))}
        </div>

        {/* CTA */}
        <div className="bg-orange-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Switch?</h2>
          <p className="text-xl mb-8">
            Opening an account takes just a few minutes
          </p>
          <Link to="/apply-now">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg hover:bg-gray-100 shadow-lg transition-all font-semibold">
              Open Checking Account
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
