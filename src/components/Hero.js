import React, { useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [loanPurpose, setLoanPurpose] = useState("Debt Consolidation");
  const [loanAmount, setLoanAmount] = useState("10000");
  const [creditScore, setCreditScore] = useState("Excellent (720+)");

  return (
    <section className="bg-gradient-to-b from-green-50 via-gray-50 to-white py-12 sm:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Personal loans <br />
            <span className="text-green-600">designed for you</span>
          </h1>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 max-w-xl">
            Get the financing you need with competitive rates, flexible terms,
            and a fast, simple application process.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
            <Link
              to="/apply-now"
              className="
                inline-flex items-center justify-center
                bg-green-600 hover:bg-green-700 text-white font-semibold
                text-xs sm:text-sm md:text-base
                px-3 sm:px-4 md:px-6
                py-2 sm:py-2.5 md:py-3
                rounded-lg transition shadow-md
              "
            >
              Check Your Rate
            </Link>

            <Link
              to="/services"
              className="
                inline-flex items-center justify-center
                border border-gray-300 hover:border-green-600 hover:text-green-600
                text-gray-900 font-semibold
                text-xs sm:text-sm md:text-base
                px-3 sm:px-4 md:px-6
                py-2 sm:py-2.5 md:py-3
                rounded-lg transition
              "
            >
              Learn More
            </Link>
          </div>

          <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-600">
            <li>✓ No impact to your credit score</li>
            <li>✓ Same-day funding available</li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-4 sm:p-6 md:p-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-6">
            Check Your Rate
          </h2>

          <div className="space-y-4 sm:space-y-6">

            {/* Loan Purpose */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Loan Purpose
              </label>
              <select
                value={loanPurpose}
                onChange={(e) => setLoanPurpose(e.target.value)}
                className="
                  w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 md:py-3
                  focus:ring-2 focus:ring-green-500 focus:outline-none
                  text-sm sm:text-base
                "
              >
                <option>Debt Consolidation</option>
                <option>Home Improvement</option>
                <option>Medical Expenses</option>
                <option>Major Purchase</option>
                <option>Other</option>
              </select>
            </div>

            {/* Loan Amount */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Loan Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">
                  $
                </span>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="
                    w-full rounded-lg border border-gray-300 pl-7 sm:pl-8 pr-3 sm:pr-4
                    py-2 sm:py-2.5 md:py-3
                    focus:ring-2 focus:ring-green-500 focus:outline-none
                    text-sm sm:text-base
                  "
                />
              </div>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">$1,000 – $40,000</p>
            </div>

            {/* Credit Score */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                Credit Score
              </label>
              <select
                value={creditScore}
                onChange={(e) => setCreditScore(e.target.value)}
                className="
                  w-full rounded-lg border border-gray-300 px-3 sm:px-4 py-2 sm:py-2.5 md:py-3
                  focus:ring-2 focus:ring-green-500 focus:outline-none
                  text-sm sm:text-base
                "
              >
                <option>Excellent (720+)</option>
                <option>Good (660–719)</option>
                <option>Fair (580–659)</option>
                <option>Poor (&lt;600)</option>
              </select>
            </div>

            {/* CTA */}
            <Link
              to="/apply-now"
              className="
                inline-flex items-center justify-center w-full
                bg-green-600 hover:bg-green-700 text-white font-semibold
                text-sm sm:text-base
                py-2 sm:py-2.5 md:py-3
                rounded-lg transition shadow-md
              "
            >
              Check My Rate
            </Link>

            <p className="text-xs sm:text-sm text-center text-gray-500">
              Checking your rate won’t affect your credit score
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
