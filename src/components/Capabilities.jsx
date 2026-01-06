// import React from 'react';
// import { Globe2, Building2, Ship, Package } from 'lucide-react';
// import { Card, CardContent } from './card';

// const Capabilities = () => {
//   const capabilities = [
//     {
//       icon: Globe2,
//       title: 'International Shipping',
//       description: 'Seamless global delivery with real-time tracking and guaranteed on-time arrivals across continents.'
//     },
//     {
//       icon: Building2,
//       title: 'Smart Warehousing',
//       description: 'Modern, secure, and temperature-controlled storage solutions designed for efficiency and safety.'
//     },
//     {
//       icon: Ship,
//       title: 'Air & Sea Cargo',
//       description: 'Flexible cargo transport options via air and sea, ensuring speed, safety, and cost-effectiveness.'
//     },
//     {
//       icon: Package,
//       title: 'Supply Chain Management',
//       description: 'End-to-end logistics planning and freight coordination that optimizes routes and reduces delivery time.'
//     }
//   ];

//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
//           Our Capabilities
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {capabilities.map((capability, index) => {
//             const Icon = capability.icon;
//             return (
//               <Card
//                 key={index}
//                 className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
//               >
//                 <CardContent className="p-8 text-center">
//                   <div className="w-20 h-20 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
//                     <Icon className="w-10 h-10 text-emerald-600" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-4 text-slate-900">
//                     {capability.title}
//                   </h3>
//                   <p className="text-slate-600 leading-relaxed">
//                     {capability.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Capabilities;





import React from 'react';
import { Globe2, Building2, Ship, Package } from 'lucide-react';
import { Card, CardContent } from './card';

const Capabilities = () => {
  const capabilities = [
    {
      icon: Globe2,
      title: 'International Shipping',
      description: 'Seamless global delivery with real-time tracking.'
    },
    {
      icon: Building2,
      title: 'Smart Warehousing',
      description: 'Modern, secure, and temperature-controlled storage.'
    },
    {
      icon: Ship,
      title: 'Air & Sea Cargo',
      description: 'Flexible cargo transport via air and sea.'
    },
    {
      icon: Package,
      title: 'Supply Chain Management',
      description: 'End-to-end logistics planning and coordination.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">Our Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Icon className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-slate-900">{capability.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{capability.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
