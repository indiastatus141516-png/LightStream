// import React from "react";

// const Stats = () => {
//   return (
//     <section className="bg-gradient-to-r from-green-600 via-green-500 to-blue-600 py-12 sm:py-16 md:py-20 lg:py-24 text-white">
//       <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 text-center">
//           <div>
//             <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3">
//               4M+
//             </div>
//             <p className="text-sm sm:text-base md:text-lg opacity-90">
//               Members Served
//             </p>
//           </div>
//           <div>
//             <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3">
//               $75B+
//             </div>
//             <p className="text-sm sm:text-base md:text-lg opacity-90">
//               Loans Funded
//             </p>
//           </div>
//           <div>
//             <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3">
//               4.8★
//             </div>
//             <p className="text-sm sm:text-base md:text-lg opacity-90">
//               Customer Rating
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;


import React, { useEffect, useState } from "react";

const statsData = [
  { value: 4000000, label: "Members Served", suffix: "+", format: "M" },
  { value: 75000000000, label: "Loans Funded", prefix: "$", suffix: "+", format: "B" },
  { value: 4.8, label: "Customer Rating", suffix: "★", format: "fixed1" },
];

const formatNumber = (num, format) => {
  if (format === "M") return `${Math.floor(num / 1000000)}M`;
  if (format === "B") return `${Math.floor(num / 1000000000)}B`;
  if (format === "fixed1") return num.toFixed(1);
  return num.toLocaleString();
};

const Stats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, i) => {
      const increment = stat.value / 100; // animate in 100 steps
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev];
          if (newCounts[i] < stat.value) {
            newCounts[i] = Math.min(newCounts[i] + increment, stat.value);
          }
          return newCounts;
        });
      }, 20);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="bg-gradient-to-r from-green-600 via-green-500 to-blue-600 py-16 text-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {statsData.map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-xl flex flex-col items-center justify-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl font-extrabold mb-2 whitespace-nowrap">
                {stat.prefix || ""}
                {formatNumber(counts[i], stat.format)}
                {stat.suffix || ""}
              </div>
              <p className="text-sm sm:text-base md:text-lg opacity-90 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
