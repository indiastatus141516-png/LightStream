import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import PersonalLoansPage from "./pages/PersonalLoansPage";
import AutoRefinancePage from "./pages/AutoRefinancePage";
import HighYieldSavingsPage from "./pages/HighYieldSavingsPage";
import CheckingAccountPage from "./pages/CheckingAccountPage";
import CreditCardsPage from "./pages/CreditCardsPage";
import OurServicesPage from "./pages/OurServicesPage";
import ApplyNowPage from "./pages/ApplyNowPage";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/personal-loans" element={<PersonalLoansPage />} />
          <Route path="/auto-refinance" element={<AutoRefinancePage />} />
          <Route path="/savings" element={<HighYieldSavingsPage />} />
          <Route path="/checking" element={<CheckingAccountPage />} />
          <Route path="/credit-cards" element={<CreditCardsPage />} />
          <Route path="/services" element={<OurServicesPage />} />
          <Route path="/apply-now" element={<ApplyNowPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
