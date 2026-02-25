import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 py-3 md:py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <img
            src="/assets/img/logo.svg"
            alt="LendingClub"
            className="h-6 md:h-8 w-auto"
          />
        </Link>

        {/* Desktop Menu - hidden on mobile, flex on md+ */}
        <ul className="hidden md:flex gap-6 lg:gap-8 items-center">
          <li>
            <Link
              to="/personal-loans"
              className="text-gray-700 hover:text-green-600 transition font-medium text-sm lg:text-base"
            >
              Personal Loans
            </Link>
          </li>
          <li>
            <Link
              to="/auto-refinance"
              className="text-gray-700 hover:text-green-600 transition font-medium text-sm lg:text-base"
            >
              Auto Refinance
            </Link>
          </li>
          <li>
            <Link
              to="/savings"
              className="text-gray-700 hover:text-green-600 transition font-medium text-sm lg:text-base"
            >
              High Yield Savings
            </Link>
          </li>
          <li>
            <Link
              to="/checking"
              className="text-gray-700 hover:text-green-600 transition font-medium text-sm lg:text-base"
            >
              Checking
            </Link>
          </li>
          <li>
            <Link
              to="/credit-cards"
              className="text-gray-700 hover:text-green-600 transition font-medium text-sm lg:text-base"
            >
              Credit Cards
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2 md:gap-4">
          <Link to="/apply-now" className="bg-green-600 text-white px-4 md:px-6 py-2 rounded-lg hover:bg-green-700 transition font-semibold text-sm md:text-base whitespace-nowrap">
            Apply Now
          </Link>

          {/* Mobile Menu Button - block on mobile, hidden on md+ */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-900 transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu - flex flex-col on mobile, hidden on md+ */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col gap-2 md:gap-3 px-4 md:px-8 py-2 md:py-4\">
            <li>
              <Link
                to="/personal-loans"
                className="text-gray-700 hover:text-green-600 transition font-medium block text-xs md:text-sm"
                onClick={() => setIsOpen(false)}
              >
                Personal Loans
              </Link>
            </li>
            <li>
              <Link
                to="/auto-refinance"
                className="text-gray-700 hover:text-green-600 transition font-medium block text-xs md:text-sm"
                onClick={() => setIsOpen(false)}
              >
                Auto Refinance
              </Link>
            </li>
            <li>
              <Link
                to="/savings"
                className="text-gray-700 hover:text-green-600 transition font-medium block text-xs md:text-sm"
                onClick={() => setIsOpen(false)}
              >
                High Yield Savings
              </Link>
            </li>
            <li>
              <Link
                to="/checking"
                className="text-gray-700 hover:text-green-600 transition font-medium block text-xs md:text-sm"
                onClick={() => setIsOpen(false)}
              >
                Checking
              </Link>
            </li>
            <li>
              <Link
                to="/credit-cards"
                className="text-gray-700 hover:text-green-600 transition font-medium block text-xs md:text-sm"
                onClick={() => setIsOpen(false)}
              >
                Credit Cards
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
