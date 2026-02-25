import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  // Handle top-of-page navigation
  const handleTopNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 text-gray-300 py-8 sm:py-10 md:py-12 pb-4 sm:pb-6" style={{ fontFamily: "'Georgia', serif" }}>
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <button
              onClick={() => handleTopNavigate("/")}
              className="flex items-center gap-2 mb-4 bg-none border-none cursor-pointer p-0"
            >
              <img src="/assets/img/logo.svg" alt="LendingClub" className="h-8 w-auto" />
            </button>
            <p className="text-xs sm:text-sm text-gray-300 mb-3 leading-relaxed">
              LendingClub is America's largest lending marketplace, connecting borrowers with investors since 2007.
            </p>
            <div className="flex gap-3 text-base">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300 text-sm">f</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">𝕏</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">in</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-300">ig</a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Products</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: "Personal Loans", path: "/personal-loans" },
                { name: "Auto Refinance", path: "/auto-refinance" },
                { name: "High Yield Savings", path: "/savings" },
                { name: "Checking", path: "/checking" },
                { name: "Credit Cards", path: "/credit-cards" },
              ].map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleTopNavigate(item.path)}
                    className="text-gray-300 hover:text-white transition duration-300 bg-none border-none cursor-pointer p-0"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Company</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {["About Us", "Careers", "Press", "Investors", "Contact"].map((item) => (
                <li key={item}>
                  <button className="text-gray-300 hover:text-white transition duration-300 bg-none border-none cursor-pointer p-0">{item}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">Services</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              {[
                { name: "Personal Loans", hash: "personal-loans" },
                { name: "Mortgage Loans", hash: "mortgage-loans" },
                { name: "Auto Loans", hash: "auto-loans" },
                { name: "Home Equity Loans", hash: "home-equity-loans" },
                { name: "Student Loans", hash: "student-loans" },
                { name: "Business Loans", hash: "business-loans" },
              ].map((service) => (
                <li key={service.hash}>
                  <button
                    onClick={() => {
                      navigate(`/services#${service.hash}`);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="text-gray-300 hover:text-white transition duration-300 bg-none border-none cursor-pointer p-0"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
          <div className="flex gap-8 text-xs text-gray-400 mb-4 md:mb-0">
            {[
              { name: "Privacy Policy", path: "/" },
              { name: "Terms of Service", path: "/" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => handleTopNavigate(item.path)}
                className="hover:text-white transition duration-300 bg-none border-none cursor-pointer p-0"
              >
                {item.name}
              </button>
            ))}
            <button className="hover:text-white transition duration-300 bg-none border-none cursor-pointer p-0">Licenses</button>
            <button className="hover:text-white transition duration-300 bg-none border-none cursor-pointer p-0">Accessibility</button>
          </div>
          <div className="text-xs text-gray-500 text-center md:text-right">
            <p>© 2026 LendingClub. All rights reserved.</p>
            <p className="text-xs text-gray-600 mt-1">LendingClub Bank, N.A., NMLS ID 167439. LendingClub Bank is FDIC insured.</p>
            <p className="text-xs text-gray-600 mt-0.5">All loans are subject to credit approval. Your actual rate depends on credit score, loan amount, loan term, and credit usage & history.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
