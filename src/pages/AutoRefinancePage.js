import React from "react";
import { Link } from "react-router-dom";

export default function AutoRefinancePage() {
  return (
    <div>
      {/* Hero Section */}
     <section className="bg-gradient-to-r from-green-50 to-green-100 py-8 sm:py-10 md:py-12 lg:py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4">
            Auto Refinance
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Lower your monthly car payment and save thousands over the life of
            your loan. Refinancing your auto loan has never been easier.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Left Side - Features */}
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                Save Money on Your Auto Loan
              </h2>

              <ul className="space-y-3 sm:space-y-4 text-gray-700\">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
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
                  <div>
                    <p className="font-semibold">Refinance up to $55,000</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
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
                  <div>
                    <p className="font-semibold">Rates as low as 7.49% APR</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
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
                  <div>
                    <p className="font-semibold">Lower your monthly payment</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
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
                  <div>
                    <p className="font-semibold">Terms from 24 to 84 months</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
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
                  <div>
                    <p className="font-semibold">No prepayment penalties</p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-1">
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
                  <div>
                    <p className="font-semibold">Quick and easy application</p>
                  </div>
                </li>
              </ul>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-8 text-center">
                <div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                    $100+
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Average Monthly Savings
                  </p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                    2-3 days
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Typical Funding Time
                  </p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-1">
                    24-84
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600">
                    Monthly Available
                  </p>
                </div>
              </div>

              <Link
                to="/apply-now"
                className="mt-6 sm:mt-8 bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-blue-700 transition font-semibold text-sm sm:text-base w-full sm:w-auto"
              >
                Get My Rate
              </Link>
            </div>

            {/* Right Side - Benefits */}
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-dollar-sign w-5 h-5 text-white"
                    aria-hidden="true"
                  >
                    <line x1="12" x2="12" y1="2" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Lower Your Monthly Payment
                </h3>
                <p className="text-gray-600 text-sm">
                  Reduce your monthly auto payment by refinancing at a lower
                  rate. Members save an average of $100 or more per month.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-calendar w-5 h-5 text-white"
                    aria-hidden="true"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Flexible Terms
                </h3>
                <p className="text-gray-600 text-sm">
                  Choose a term that works for your budget, from 24 to 84
                  months. Adjust your payment to fit your financial goals.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-car w-5 h-5 text-white"
                    aria-hidden="true"
                  >
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                    <circle cx="7" cy="17" r="2"></circle>
                    <path d="M9 17h6"></path>
                    <circle cx="17" cy="17" r="2"></circle>
                  </svg>
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">
                  Keep Your Car
                </h3>
                <p className="text-gray-600 text-sm">
                  Refinance your existing auto loan without changing your
                  vehicle. Simply lower your rate and save money.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            How Much Could You Save?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8">
            Use our calculator to estimate your new monthly payment and
            potential savings
          </p>
          <button className="bg-white text-blue-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition font-semibold text-sm sm:text-base md:text-lg w-full sm:w-auto">
            <Link to="/apply-now" className="text-blue-600 no-underline">
              Calculate Savings
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
}
