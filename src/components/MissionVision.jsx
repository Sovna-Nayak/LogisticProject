// import React from 'react';
// // import { Card, CardContent } from './ui/card';

// const MissionVision = () => {
//   const items = [
//     {
//       title: 'Our Mission',
//       content: 'To redefine logistics through innovation, speed, and service excellence — empowering businesses and individuals to move goods across the globe with confidence and reliability.',
//       image: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80'
//     },
//     {
//       title: 'Our Vision',
//       content: 'To become the most trusted global logistics partner by integrating technology, sustainability, and customer-centric practices in every step of our operations.',
//       image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80'
//     },
//     {
//       title: 'Our Values',
//       content: 'We believe in integrity, transparency, and continuous improvement. Every shipment is handled with accountability and care, ensuring lasting trust with every client we serve.',
//       image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80'
//     }
//   ];

//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {items.map((item, index) => (
//             <Card
//               key={index}
//               className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
//             >
//               <div
//                 className="h-48 bg-cover bg-center"
//                 style={{ backgroundImage: `url(${item.image})` }}
//               />
//               <CardContent className="p-8">
//                 <h3 className="text-2xl font-bold mb-4 text-slate-900">
//                   {item.title}
//                 </h3>
//                 <p className="text-slate-600 leading-relaxed">{item.content}</p>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MissionVision;



import React from "react";
import { Card, CardContent } from "./card"; // <-- important import

const MissionVision = () => {
  const items = [
    {
      title: "Our Mission",
      content: "To redefine logistics through innovation, speed, and service excellence.",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
    },
    {
      title: "Our Vision",
      content: "To become the most trusted global logistics partner by integrating technology.",
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80",
    },
    {
      title: "Our Values",
      content: "We believe in integrity, transparency, and continuous improvement.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }} />
              <CardContent>
                <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
