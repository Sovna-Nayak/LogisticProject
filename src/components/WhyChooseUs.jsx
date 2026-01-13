import React from "react";
import { Shield, Lock, Clock, Headphones } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Trusted Reliability",
      description: "Count on us for consistent, dependable logistics solutions.",
      image: "https://images.unsplash.com/photo-1684695749267-233af13276d0?w=600&q=80",
    },
    {
      icon: Lock,
      title: "Secure Handling",
      description: "Every shipment is managed with utmost care and advanced safety protocols.",
      image: "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?w=600&q=80",
    },
    {
      icon: Clock,
      title: "On-Time Every Time",
      description: "Our optimized network ensures fast, accurate, and punctual deliveries.",
      image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?w=600&q=80",
    },
    {
      icon: Headphones,
      title: "Round-the-Clock Assistance",
      description: "Our support team is available 24/7 for real-time shipment updates.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <div
                    className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${feature.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="w-12 h-12 mb-4 bg-emerald-500 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;





// import React from "react";
// import { Shield, Lock, Clock, Headphones } from "lucide-react";

// const WhyChooseUs = () => {
//   const features = [
//     {
//       icon: Shield,
//       title: "Trusted Reliability",
//       description: "Count on us for consistent, dependable logistics solutions.",
//       image: "https://images.unsplash.com/photo-1684695749267-233af13276d0?w=600&q=80",
//     },
//     {
//       icon: Lock,
//       title: "Secure Handling",
//       description: "Every shipment is managed with utmost care and advanced safety protocols.",
//       image: "https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?w=600&q=80",
//     },
//     {
//       icon: Clock,
//       title: "On-Time Every Time",
//       description: "Our optimized network ensures fast, accurate, and punctual deliveries.",
//       image: "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?w=600&q=80",
//     },
//     {
//       icon: Headphones,
//       title: "Round-the-Clock Assistance",
//       description: "Our support team is available 24/7 for real-time shipment updates.",
//       image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
//     },
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Why Choose Us</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
//                 <div className="relative overflow-hidden">
//                   <div
//                     className="h-48 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//                     style={{ backgroundImage: `url(${feature.image})` }}
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                 </div>
//                 <CardContent>
//                   <div className="w-12 h-12 mb-4 bg-emerald-500 rounded-lg flex items-center justify-center">
//                     <Icon className="w-6 h-6 text-white" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3 text-slate-900">{feature.title}</h3>
//                   <p className="text-slate-600 leading-relaxed text-sm">{feature.description}</p>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;
