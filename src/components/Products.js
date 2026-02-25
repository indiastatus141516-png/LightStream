import React from "react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 4V2" />
          <path d="M8 4V2" />
          <path d="M2 11h20" />
        </svg>
      ),
      bgColor: "bg-green-600",
      title: "Personal Loans",
      description:
        "Consolidate debt, finance a major purchase, or cover unexpected expenses.",
      rateAPY: "8.98% – 35.99% APR",
      amount: "$1,000 – $40,000",
      link: "/personal-loans",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 8h1a4 4 0 0 1 4 4v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8a4 4 0 0 1 4-4h1" />
          <path d="M7 8V6a5 5 0 0 1 10 0v2" />
        </svg>
      ),
      bgColor: "bg-blue-600",
      title: "Auto Refinance",
      description:
        "Lower your monthly payment and save money over the life of your auto loan.",
      rateAPY: "7.49% – 24.99% APR",
      amount: "Up to $55,000",
      link: "/auto-refinance",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 12a9 9 0 0 1 15-6" />
          <path d="M21 3v6h-6" />
          <path d="M21 12a9 9 0 0 1-15 6" />
          <path d="M3 21v-6h6" />
        </svg>
      ),
      bgColor: "bg-purple-600",
      title: "High Yield Savings",
      description:
        "Earn more on your savings with competitive interest rates and no monthly fees.",
      rateAPY: "4.50% APY",
      amount: "No minimum balance",
      link: "/savings",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="1" y="4" width="22" height="16" rx="2" />
          <path d="M1 10h22" />
        </svg>
      ),
      bgColor: "bg-orange-600",
      title: "Credit Cards",
      description:
        "Enjoy rewards, cashback, and 0% intro APR on balance transfers.",
      rateAPY: "0% intro APR",
      amount: "Up to $50,000 limit",
      link: "/credit-cards",
    },
  ];

  // Function to handle navigation + scroll to top
  const handleNavigate = (link) => {
    navigate(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-14 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Explore Our Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
            From personal loans to savings accounts, we have the financial
            products to help you reach your goals.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="h-full bg-white rounded-2xl border border-gray-200
              shadow-md hover:shadow-2xl transform hover:-translate-y-1
              transition-all duration-300 flex flex-col p-5 sm:p-6"
            >
              {/* Icon */}
              <div
                className={`${product.bgColor} w-14 h-14 rounded-xl
                  flex items-center justify-center text-white mb-5 shadow-lg hover:shadow-xl transition`}
              >
                {React.cloneElement(product.icon, {
                  className: "w-7 h-7",
                })}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-6 leading-relaxed flex-grow">
                {product.description}
              </p>

              {/* Info */}
              <div className="bg-gray-50 rounded-xl p-4 space-y-2 mb-6 text-sm shadow-inner">
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Rate / APY</span>
                  <span className="font-semibold text-gray-900">{product.rateAPY}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Amount</span>
                  <span className="font-semibold text-gray-900">{product.amount}</span>
                </div>
              </div>

              {/* Button */}
              <button
                onClick={() => handleNavigate(product.link)}
                className={`mt-auto bg-gradient-to-r from-green-500 to-green-600
                  hover:from-green-600 hover:to-green-700
                  text-white text-sm sm:text-base font-semibold
                  py-2.5 sm:py-3 rounded-lg text-center
                  transition-transform transform hover:scale-105 shadow-md hover:shadow-xl`}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
