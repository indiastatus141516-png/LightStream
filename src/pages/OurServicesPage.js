import React from "react";
import { useNavigate } from "react-router-dom";

export default function OurServicesPage() {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    navigate("/apply-now");
  };

  return (
    <div>
      {/* Advanced Hero Section with Animation */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-6 sm:py-8 md:py-10 lg:py-12 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 sm:w-96 sm:h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 sm:w-96 sm:h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 text-center relative z-10">
          <div className="mb-2 sm:mb-3 inline-block">
            <span className="text-xs font-semibold text-green-400 bg-green-400/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-green-400/20">
              💼 Comprehensive Financial Solutions
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-3 leading-tight">
            Our Services
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed">
            Explore our complete suite of lending solutions tailored to help you
            achieve your financial goals with confidence and transparency.
          </p>
        </div>
      </section>

      {/* Personal Loans - Advanced Card Design */}
      <section
        id="personal-loans"
        className="py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
            {/* Advanced Left Content */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-2xl">
                    💰
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Personal Loans
                  </h2>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4"></div>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">
                  Flexible lending solutions designed for your personal needs.
                </span>{" "}
                Whether you're consolidating debt, making a major purchase, or
                managing unexpected expenses, our personal loans deliver
                competitive rates and terms that work for you.
              </p>

              {/* Advanced Feature List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-green-100 hover:border-green-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Borrow $1,000 to $40,000
                    </p>
                    <p className="text-sm text-gray-600">
                      Access funds that match your specific needs and budget
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-green-100 hover:border-green-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Rates as low as 5.99% APR
                    </p>
                    <p className="text-sm text-gray-600">
                      With autopay discount - transparent pricing, no hidden
                      fees
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-green-100 hover:border-green-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      No Prepayment Penalties
                    </p>
                    <p className="text-sm text-gray-600">
                      Pay off early without extra charges - full control over
                      repayment
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-green-100 hover:border-green-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-green-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Funding as soon as next day
                    </p>
                    <p className="text-sm text-gray-600">
                      Quick approval process - get funds when you need them
                    </p>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleApplyNow}
                className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg transition transform hover:scale-105 shadow-lg text-xs sm:text-sm"
              >
                Apply Now →
              </button>
            </div>

            {/* Advanced Right - Premium Rate Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-green-500 via-green-600 to-green-700 text-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-green-400/30">
                {/* Top Badge */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-bold text-sm">
                  Best Rate
                </div>

                <p className="text-green-100 text-sm font-semibold uppercase tracking-wider mb-2">
                  Starting Rate
                </p>
                <h3 className="text-5xl sm:text-6xl font-black mb-2 text-white">
                  5.99%
                </h3>
                <p className="text-green-100 mb-6 text-base font-semibold">
                  APR with autopay discount
                </p>

                <div className="space-y-4 border-t-2 border-green-400/40 pt-6">
                  <div className="space-y-2">
                    <p className="text-green-100 text-sm font-semibold uppercase">
                      Loan Amount
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      $1,000 - $40,000
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-green-100 text-sm font-semibold uppercase">
                      Loan Terms
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      24 to 84 months
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-green-100 text-sm font-semibold uppercase">
                      Funding Speed
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      As soon as next day
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="mt-6 pt-4 border-t-2 border-green-400/40">
                  <p className="text-green-100 text-xs font-semibold">
                    ✓ Fully Funded Personal Loans
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mortgage Loans - Advanced Card Design */}
      <section
        id="mortgage-loans"
        className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white"
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
            {/* Advanced Left - Premium Rate Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white p-6 sm:p-8 rounded-2xl shadow-2xl border border-blue-400/30">
                {/* Top Badge */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-bold text-sm">
                  Popular
                </div>

                <p className="text-blue-100 text-sm font-semibold uppercase tracking-wider mb-2">
                  Starting Rate
                </p>
                <h3 className="text-5xl sm:text-6xl font-black mb-2 text-white">
                  3.45%
                </h3>
                <p className="text-blue-100 mb-10 text-lg font-semibold">
                  30-year fixed rate mortgage
                </p>

                <div className="space-y-4 border-t-2 border-blue-400/40 pt-6">
                  <div className="space-y-2">
                    <p className="text-blue-100 text-sm font-semibold uppercase">
                      Loan Amount
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      Up to $766,550
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-blue-100 text-sm font-semibold uppercase">
                      Loan Terms
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      15 to 30 years
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-blue-100 text-sm font-semibold uppercase">
                      Funding Speed
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      30-45 days
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="mt-6 pt-4 border-t-2 border-blue-400/40">
                  <p className="text-blue-100 text-xs font-semibold">
                    ✓ Home Financing Solutions
                  </p>
                </div>
              </div>
            </div>

            {/* Advanced Right Content */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-2xl">
                    🏠
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Mortgage Loans
                  </h2>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full mb-4"></div>
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                <span className="font-semibold">
                  Achieve the dream of homeownership with confidence.
                </span>{" "}
                Our mortgage solutions feature flexible terms, competitive
                rates, and a streamlined application process designed to make
                purchasing or refinancing your home simple and transparent.
              </p>

              {/* Advanced Feature List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-blue-100 hover:border-blue-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Fixed and adjustable rate options
                    </p>
                    <p className="text-sm text-gray-600">
                      Choose the mortgage structure that works best for you
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-blue-100 hover:border-blue-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Low down payment options starting at 3%
                    </p>
                    <p className="text-sm text-gray-600">
                      Flexible down payment plans to fit your financial
                      situation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-blue-100 hover:border-blue-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Same-day pre-approval available
                    </p>
                    <p className="text-sm text-gray-600">
                      Get pre-approved quickly to start your home search with
                      confidence
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-blue-100 hover:border-blue-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Expert guidance throughout process
                    </p>
                    <p className="text-sm text-gray-600">
                      Dedicated mortgage specialists guide you at every step
                    </p>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleApplyNow}
                className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold px-8 sm:px-10 py-4 rounded-xl transition transform hover:scale-105 shadow-lg text-base sm:text-lg"
              >
                Get Pre-Approved →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Auto Loans - Advanced Card Design */}
      <section
        id="auto-loans"
        className="py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
            {/* Advanced Left Content */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-2xl">
                    🚗
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Auto Loans
                  </h2>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-6"></div>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">
                  Drive home in your dream car with competitive rates.
                </span>{" "}
                Whether you're buying new or used, financing a vehicle
                privately, or refinancing an existing auto loan, we offer
                flexible financing options tailored to fit your budget and
                needs.
              </p>

              {/* Advanced Feature List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-orange-100 hover:border-orange-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-orange-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Finance up to $100,000
                    </p>
                    <p className="text-sm text-gray-600">
                      Borrow the amount you need for any vehicle type
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-orange-100 hover:border-orange-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-orange-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Rates as low as 4.99% APR
                    </p>
                    <p className="text-sm text-gray-600">
                      Competitive rates with transparent pricing - no hidden
                      fees
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-orange-100 hover:border-orange-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-orange-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Used and new vehicle financing
                    </p>
                    <p className="text-sm text-gray-600">
                      Finance any vehicle - private party, dealer, or refinance
                      existing loans
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-orange-100 hover:border-orange-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-orange-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Quick approval in minutes
                    </p>
                    <p className="text-sm text-gray-600">
                      Get approved quickly so you can hit the road with
                      confidence
                    </p>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleApplyNow}
                className="w-full sm:w-auto bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white font-bold px-8 sm:px-10 py-4 rounded-xl transition transform hover:scale-105 shadow-lg text-base sm:text-lg"
              >
                Apply Now →
              </button>
            </div>

            {/* Advanced Right - Premium Rate Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 text-white p-10 sm:p-12 rounded-3xl shadow-2xl border border-orange-400/30">
                {/* Top Badge */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-bold text-sm">
                  Hot Deal
                </div>

                <p className="text-orange-100 text-sm font-semibold uppercase tracking-wider mb-2">
                  Starting Rate
                </p>
                <h3 className="text-5xl sm:text-6xl font-black mb-2 text-white">
                  4.99%
                </h3>
                <p className="text-orange-100 mb-6 text-base font-semibold">
                  APR on auto loans
                </p>

                <div className="space-y-4 border-t-2 border-orange-400/40 pt-6">
                  <div className="space-y-2">
                    <p className="text-orange-100 text-sm font-semibold uppercase">
                      Loan Amount
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      Up to $100,000
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-orange-100 text-sm font-semibold uppercase">
                      Loan Terms
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      36 to 84 months
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-orange-100 text-sm font-semibold uppercase">
                      Funding Speed
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      Same day approval
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="mt-6 pt-4 border-t-2 border-orange-400/40">
                  <p className="text-orange-100 text-xs font-semibold">
                    ✓ Premium Auto Financing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Home Equity Loans - Advanced Card Design */}
      <section
        id="home-equity-loans"
        className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white"
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
            {/* Advanced Left - Premium Rate Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700 text-white p-10 sm:p-12 rounded-3xl shadow-2xl border border-purple-400/30">
                {/* Top Badge */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-bold text-sm">
                  Top Choice
                </div>

                <p className="text-purple-100 text-sm font-semibold uppercase tracking-wider mb-2">
                  Starting Rate
                </p>
                <h3 className="text-5xl sm:text-6xl font-black mb-2 text-white">
                  7.49%
                </h3>
                <p className="text-purple-100 mb-6 text-base font-semibold">
                  APR on home equity loans
                </p>

                <div className="space-y-4 border-t-2 border-purple-400/40 pt-6">
                  <div className="space-y-2">
                    <p className="text-purple-100 text-sm font-semibold uppercase">
                      Max Amount
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      Up to $500,000
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-purple-100 text-sm font-semibold uppercase">
                      Loan Terms
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      5 to 30 years
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-purple-100 text-sm font-semibold uppercase">
                      Funding Speed
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      Quick approval
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="mt-6 pt-4 border-t-2 border-purple-400/40">
                  <p className="text-purple-100 text-xs font-semibold">
                    ✓ Leverage Your Home Equity
                  </p>
                </div>
              </div>
            </div>

            {/* Advanced Right Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-2xl">
                    🔑
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Home Equity Loans
                  </h2>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full mb-6"></div>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">
                  Access funds quickly with home equity loans.
                </span>{" "}
                Tap into your home's equity for major expenses, home
                improvements, debt consolidation, or any financial need. Enjoy
                fixed rates and predictable monthly payments with flexible
                terms.
              </p>

              {/* Advanced Feature List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-purple-100 hover:border-purple-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Borrow up to 85% of home value
                    </p>
                    <p className="text-sm text-gray-600">
                      Access a significant portion of your home's equity
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-purple-100 hover:border-purple-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Fixed rates lock in your payment
                    </p>
                    <p className="text-sm text-gray-600">
                      Predictable monthly payments throughout the loan term
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-purple-100 hover:border-purple-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Use funds for any purpose
                    </p>
                    <p className="text-sm text-gray-600">
                      Home improvements, debt consolidation, education, or more
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-purple-100 hover:border-purple-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-purple-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Fast and simple approval
                    </p>
                    <p className="text-sm text-gray-600">
                      Quick processing with minimal documentation required
                    </p>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleApplyNow}
                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold px-8 sm:px-10 py-4 rounded-xl transition transform hover:scale-105 shadow-lg text-base sm:text-lg"
              >
                Apply Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Student Loans - Advanced Card Design */}
      <section
        id="student-loans"
        className="py-6 sm:py-8 md:py-10 lg:py-12 bg-gradient-to-b from-white to-slate-50"
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
            {/* Advanced Left Content */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-2xl">
                    🎓
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Student Loans
                  </h2>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-full mb-6"></div>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">
                  Achieve your educational goals affordably.
                </span>{" "}
                Our private student loans provide affordable ways to finance
                your education with competitive rates, flexible repayment
                options, and support from education experts who understand your
                journey.
              </p>

              {/* Advanced Feature List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-indigo-100 hover:border-indigo-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Rates as low as 5.49% APR
                    </p>
                    <p className="text-sm text-gray-600">
                      Competitive rates for students with various credit
                      profiles
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-indigo-100 hover:border-indigo-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Borrow up to cost of attendance
                    </p>
                    <p className="text-sm text-gray-600">
                      Finance tuition, books, room and board, and more
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-indigo-100 hover:border-indigo-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Flexible repayment options
                    </p>
                    <p className="text-sm text-gray-600">
                      Interest-only, fixed, or variable repayment plans
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-indigo-100 hover:border-indigo-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-indigo-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Fast approval process
                    </p>
                    <p className="text-sm text-gray-600">
                      Quick decisions so you can focus on your studies
                    </p>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleApplyNow}
                className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white font-bold px-8 sm:px-10 py-4 rounded-xl transition transform hover:scale-105 shadow-lg text-base sm:text-lg"
              >
                Apply Now →
              </button>
            </div>

            {/* Advanced Right - Premium Rate Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-700 text-white p-10 sm:p-12 rounded-3xl shadow-2xl border border-indigo-400/30">
                {/* Top Badge */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-bold text-sm">
                  Smart Choice
                </div>

                <p className="text-indigo-100 text-sm font-semibold uppercase tracking-wider mb-2">
                  Starting Rate
                </p>
                <h3 className="text-5xl sm:text-6xl font-black mb-2 text-white">
                  5.49%
                </h3>
                <p className="text-indigo-100 mb-6 text-base font-semibold">
                  APR on student loans
                </p>

                <div className="space-y-4 border-t-2 border-indigo-400/40 pt-6">
                  <div className="space-y-2">
                    <p className="text-indigo-100 text-sm font-semibold uppercase">
                      Maximum Amount
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      Up to $120,000/year
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-indigo-100 text-sm font-semibold uppercase">
                      Repayment Terms
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      15 to 30 years
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-indigo-100 text-sm font-semibold uppercase">
                      Approval Speed
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      3-5 business days
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="mt-6 pt-4 border-t-2 border-indigo-400/40">
                  <p className="text-indigo-100 text-xs font-semibold">
                    ✓ Invest in Your Future
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Loans - Advanced Card Design */}
      <section
        id="business-loans"
        className="py-6 sm:py-8 md:py-10 lg:py-12 bg-white"
      >
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 items-center">
            {/* Advanced Left - Premium Rate Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl blur-2xl opacity-30"></div>
              <div className="relative bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 text-white p-10 sm:p-12 rounded-3xl shadow-2xl border border-teal-400/30">
                {/* Top Badge */}
                <div className="absolute -top-4 -right-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full font-bold text-sm">
                  Growth Ready
                </div>

                <p className="text-teal-100 text-sm font-semibold uppercase tracking-wider mb-2">
                  Starting Rate
                </p>
                <h3 className="text-5xl sm:text-6xl font-black mb-2 text-white">
                  6.59%
                </h3>
                <p className="text-teal-100 mb-6 text-base font-semibold">
                  APR on business financing
                </p>

                <div className="space-y-4 border-t-2 border-teal-400/40 pt-6">
                  <div className="space-y-2">
                    <p className="text-teal-100 text-sm font-semibold uppercase">
                      Loan Amount
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      Up to $2,000,000
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-teal-100 text-sm font-semibold uppercase">
                      Business Types
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      Startup to Established
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-teal-100 text-sm font-semibold uppercase">
                      Funding Speed
                    </p>
                    <p className="text-2xl sm:text-3xl font-bold text-white">
                      Same week
                    </p>
                  </div>
                </div>

                {/* Bottom Accent */}
                <div className="mt-6 pt-4 border-t-2 border-teal-400/40">
                  <p className="text-teal-100 text-xs font-semibold">
                    ✓ Empower Your Business
                  </p>
                </div>
              </div>
            </div>

            {/* Advanced Right Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center text-2xl">
                    📈
                  </div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Business Loans
                  </h2>
                </div>
                <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mb-6"></div>
              </div>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">
                  Fuel your business growth with flexible financing.
                </span>{" "}
                Whether you're expanding operations, purchasing equipment,
                managing cash flow, or launching a new venture, we provide
                customized business loans designed to support your success at
                every stage.
              </p>

              {/* Advanced Feature List */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-teal-100 hover:border-teal-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Borrow up to $2,000,000
                    </p>
                    <p className="text-sm text-gray-600">
                      Significant capital for expansion, equipment, and
                      operations
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-teal-100 hover:border-teal-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Rates as low as 6.59% APR
                    </p>
                    <p className="text-sm text-gray-600">
                      Competitive rates based on your business profile and
                      creditworthiness
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-teal-100 hover:border-teal-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Flexible terms for business needs
                    </p>
                    <p className="text-sm text-gray-600">
                      Terms tailored to your cash flow and business cycle
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-teal-100 hover:border-teal-300 transition group">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-500 text-white">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Fast approval and funding
                    </p>
                    <p className="text-sm text-gray-600">
                      Quick decisions so you can seize growth opportunities
                    </p>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleApplyNow}
                className="w-full sm:w-auto bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold px-8 sm:px-10 py-4 rounded-xl transition transform hover:scale-105 shadow-lg text-base sm:text-lg"
              >
                Apply Now →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Advanced Design */}
      <section className="py-8 sm:py-10 md:py-12 lg:py-16 relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-auto">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-16 -left-16 w-48 h-48 sm:w-56 sm:h-56 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

        {/* Main Content */}
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 relative z-10 h-full">
          <div className="flex flex-col justify-center items-center text-center py-2 sm:py-4 md:py-6 lg:py-8">
            <div className="w-full max-w-2xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2 leading-tight">
                Ready to Get Started?
              </h2>

              <p className="text-xs sm:text-sm md:text-base text-gray-200 mb-4 sm:mb-6 leading-relaxed">
                Choose the service that fits your needs and apply today. Our
                lending experts are ready to help you achieve your goals.
              </p>

              {/* Dual CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-1.5 sm:gap-2 justify-center w-full mb-6 sm:mb-8">
                <button 
                  onClick={handleApplyNow}
                  className="w-full sm:w-auto bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl transition transform hover:scale-105 shadow-2xl text-xs sm:text-sm whitespace-nowrap"
                >
                  Apply Now →
                </button>
                <button 
                  onClick={handleApplyNow}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border-2 border-white/30 transition transform hover:scale-105 backdrop-blur-sm text-xs sm:text-sm whitespace-nowrap"
                >
                  Contact Us →
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="border-t border-white/10 pt-4 sm:pt-6">
                <p className="text-gray-300 text-xs sm:text-sm mb-2 sm:mb-3 font-medium">
                  Trusted by thousands of customers
                </p>
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4">
                  <div className="text-center p-1 sm:p-2 rounded-lg hover:bg-white/5 transition">
                    <p className="text-sm sm:text-base md:text-lg font-bold text-white">
                      50K+
                    </p>
                    <p className="text-xs text-gray-300 mt-0.5">
                      Happy Customers
                    </p>
                  </div>
                  <div className="text-center p-1 sm:p-2 rounded-lg hover:bg-white/5 transition">
                    <p className="text-sm sm:text-base md:text-lg font-bold text-white">
                      $5B+
                    </p>
                    <p className="text-xs text-gray-300 mt-0.5">Funded</p>
                  </div>
                  <div className="text-center p-1 sm:p-2 rounded-lg hover:bg-white/5 transition">
                    <p className="text-sm sm:text-base md:text-lg font-bold text-white">
                      4.8★
                    </p>
                    <p className="text-xs text-gray-300 mt-0.5">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}