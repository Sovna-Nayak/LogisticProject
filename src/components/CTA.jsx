import React from "react";
import { MessageCircle } from "lucide-react";

const CTA = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/9040170727?text=Hello,%20I%20would%20like%20to%20inquire%20about%20your%20services.",
      "_blank"
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let’s Connect!
        </h2>

        <p className="text-xl mb-8 opacity-90">
          We are always ready to assist you with your logistics needs.
          Contact us today!
        </p>

        <button
          onClick={handleClick}
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-lg"
        >
          <MessageCircle className="w-5 h-5" />
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default CTA;
