
// import React from "react";
// import { Users, Package, ShoppingBag } from "lucide-react";

// const Statistics = () => {
//   const stats = [
//     {
//       icon: Users,
//       value: "5000",
//       label: "Trusted Clients",
//       suffix: "K+",
//     },
//     {
//       icon: Package,
//       value: "10000",
//       label: "Orders Delivered",
//       suffix: "K+",
//     },
//     {
//       icon: ShoppingBag,
//       value: "50000",
//       label: "Sellers",
//       suffix: "+",
//     },
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center mb-20">
//           Shopy Courier Superiority
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//           {stats.map((stat, index) => {
//             const Icon = stat.icon;
//             return (
//               <div
//                 key={index}
//                 className="group relative text-center p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20
//                 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-emerald-900/40"
//               >
//                 {/* Floating Icon */}
//                 <div
//                   className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center
//                   animate-float group-hover:scale-110 transition-transform duration-500"
//                 >
//                   <Icon className="w-10 h-10" />
//                 </div>

//                 {/* Value */}
//                 <div className="text-5xl font-bold mb-2 transition-transform duration-500 group-hover:scale-110">
//                   {stat.value.slice(0, -3)}
//                   {stat.suffix}
//                 </div>

//                 {/* Label */}
//                 <div className="text-lg font-medium opacity-90">
//                   {stat.label}
//                 </div>

//                 {/* Glow Effect */}
//                 <div className="absolute inset-0 rounded-3xl bg-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       {/* Floating animation */}
//       <style>
//         {`
//           @keyframes float {
//             0%, 100% {
//               transform: translateY(0);
//             }
//             50% {
//               transform: translateY(-12px);
//             }
//           }
//           .animate-float {
//             animation: float 4s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </section>
//   );
// };

// export default Statistics;




import React from "react";
import { Users, Package, ShoppingBag } from "lucide-react";

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      value: "5000",
      label: "Trusted Clients",
      suffix: "K+",
    },
    {
      icon: Package,
      value: "10000",
      label: "Orders Delivered",
      suffix: "K+",
    },
    {
      icon: ShoppingBag,
      value: "50000",
      label: "Sellers",
      suffix: "+",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-300 to-emerald-400 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Shopy Courier Superiority
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative text-center p-6 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20
                transition-all duration-500 hover:-translate-y-2 hover:shadow-emerald-700/20"
              >
                {/* Floating Icon */}
                <div
                  className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center
                  animate-float group-hover:scale-105 transition-transform duration-500"
                >
                  <Icon className="w-8 h-8" />
                </div>

                {/* Value */}
                <div className="text-4xl font-bold mb-1 transition-transform duration-500 group-hover:scale-105">
                  {stat.value.slice(0, -3)}
                  {stat.suffix}
                </div>

                {/* Label */}
                <div className="text-lg font-medium opacity-90">{stat.label}</div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-emerald-200/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating animation */}
       <style>
        {`
          @keyframes float {
            0%, 20%, 40%, 60%, 80%, 100% {
              transform: translateY(0) translateX(0);
            }
            10% {
              transform: translateY(-4px) translateX(2px);
            }
            30% {
              transform: translateY(3px) translateX(-2px);
            }
            50% {
              transform: translateY(-3px) translateX(1px);
            }
            70% {
              transform: translateY(2px) translateX(-1px);
            }
            90% {
              transform: translateY(-1px) translateX(2px);
            }
          }
          .animate-float {
            animation: float 2s linear infinite;
          }
        `}
      </style>


      {/* <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style> */}
    </section>
  );
};

export default Statistics;
