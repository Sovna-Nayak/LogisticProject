// import React from "react";
// import { Quote } from "lucide-react";

// const Testimonials = () => {
//   const testimonials = [
//     {
//       name: "Amit",
//       image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
//       quote:
//         "First Track Express has been an absolute pleasure to work with. Professional, reliable, and timely!"
//     },
//     {
//       name: "Sneha",
//       image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
//       quote:
//         "Their global shipping services have helped expand my business. Truly world-class."
//     }
//   ];

//   return (
//     <section className="py-20 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-bold text-center mb-16 text-slate-900">
//           What Our Clients Say
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//           {testimonials.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 p-8"
//             >
//               <Quote className="w-12 h-12 text-emerald-500 mb-4" />

//               <p className="text-lg text-slate-700 mb-6 leading-relaxed">
//                 “{item.quote}”
//               </p>

//               <div className="flex items-center gap-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500"
//                 />
//                 <p className="font-bold text-slate-900 text-lg">
//                   – {item.name}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;






import React, { useState } from "react";
import { Quote, Plus, X } from "lucide-react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Amit",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80",
      quote:
        "First Track Express has been an absolute pleasure to work with. Professional, reliable, and timely!"
    },
    {
      name: "Sneha",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
      quote:
        "Their global shipping services have helped expand my business. Truly world-class."
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    quote: "",
    image: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.quote) return;

    setTestimonials([
      ...testimonials,
      {
        name: formData.name,
        quote: formData.quote,
        image:
          formData.image ||
          "https://ui-avatars.com/api/?name=" + formData.name
      }
    ]);

    setFormData({ name: "", quote: "", image: "" });
    setShowModal(false);
  };

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900">
            What Our Clients Say
          </h2>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 rounded-lg transition"
          >
            <Plus size={20} />
            Add Testimonial
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-8"
            >
              <Quote className="w-12 h-12 text-emerald-500 mb-4" />

              <p className="text-lg text-slate-700 mb-6">
                “{item.quote}”
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-emerald-500"
                />
                <p className="font-bold text-slate-900 text-lg">
                  – {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-800"
            >
              <X />
            </button>

            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              Add Testimonial
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-3"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />

              <textarea
                placeholder="Your Feedback"
                className="w-full border rounded-lg px-4 py-3 h-28 resize-none"
                value={formData.quote}
                onChange={(e) =>
                  setFormData({ ...formData, quote: e.target.value })
                }
                required
              />

              <input
                type="url"
                placeholder="Image URL (optional)"
                className="w-full border rounded-lg px-4 py-3"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold"
              >
                Submit Testimonial
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
