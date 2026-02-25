import React from "react";
import { Link } from "react-router-dom";

export default function PersonalLoansPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-green-100 py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Personal Loans
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2 leading-relaxed">
            Get the funds you need with competitive rates and flexible terms.
            Whether you're consolidating debt, making a major purchase, or
            covering unexpected expenses, we're here to help.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Side - Features */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                Why Choose Our Personal Loans?
              </h2>

              <ul className="space-y-4 text-gray-700">
                {[
                  "Borrow $1,000 to $40,000",
                  "Fixed rates from 8.98% - 35.99% APR",
                  "No prepayment penalties",
                  "Flexible terms: 24, 36, 48, or 60 months",
                  "Same-day funding available",
                  "Check rate with no impact to credit score",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 hover:translate-x-1 transition-all duration-300"
                  >
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1 shadow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <p className="font-semibold">{item}</p>
                  </li>
                ))}
              </ul>

              {/* ✅ Correct Button Link */}
              <Link
                to="/apply-now"
                className="mt-8 inline-block bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-semibold shadow-lg hover:shadow-xl"
              >
                Check Your Rate
              </Link>
            </div>

            {/* Right Side - Benefits */}
            <div className="space-y-6">
              {[
                {
                  title: "Lower Your Rate",
                  desc: "Save money with competitive interest rates that are often lower than credit cards. Plus, get a 0.25% rate discount with autopay.",
                  iconBg: "bg-green-600",
                  cardBg: "bg-green-50",
                  border: "border-green-200",
                  svgPath: (
                    <>
                      <path d="M16 17h6v-6"></path>
                      <path d="m22 17-8.5-8.5-5 5L2 7"></path>
                    </>
                  ),
                },
                {
                  title: "Fast Funding",
                  desc: "Get your money quickly. Once approved, funds can be deposited as soon as the same business day.",
                  iconBg: "bg-blue-600",
                  cardBg: "bg-blue-50",
                  border: "border-blue-200",
                  svgPath: (
                    <>
                      <path d="M12 6v6l4 2"></path>
                      <circle cx="12" cy="12" r="10"></circle>
                    </>
                  ),
                },
                {
                  title: "No Hidden Fees",
                  desc: "Transparent pricing with no prepayment penalties. Pay off your loan early without any extra charges.",
                  iconBg: "bg-purple-600",
                  cardBg: "bg-purple-50",
                  border: "border-purple-200",
                  svgPath: (
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  ),
                },
              ].map((benefit, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl border ${benefit.border} ${benefit.cardBg} shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div
                    className={`w-12 h-12 ${benefit.iconBg} rounded-full flex items-center justify-center text-white mb-4 shadow-lg`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-6 h-6 text-white"
                    >
                      {benefit.svgPath}
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8">
            Check your rate in minutes with no impact to your credit score
          </p>

          {/* ✅ Correct Button Link */}
          <Link
            to="/apply-now"
            className="bg-white text-gray-900 px-8 sm:px-10 py-3 sm:py-4 rounded-full hover:opacity-90 transition font-semibold text-sm sm:text-base md:text-lg w-full sm:w-auto shadow-lg hover:shadow-xl"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-10">
            What Can You Use It For?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "Debt Consolidation", desc: "Combine multiple debts into one monthly payment" },
              { title: "Home Improvement", desc: "Fund your renovation or repair projects" },
              { title: "Medical Expenses", desc: "Cover unexpected medical bills" },
              { title: "Major Purchase", desc: "Finance large purchases or life events" },
              { title: "Credit Card Refinance", desc: "Pay off high-interest credit cards" },
              { title: "Other Expenses", desc: "Any other personal financial need" },
            ].map((use, i) => (
              <div
                key={i}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 mb-2">
                  {use.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{use.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
