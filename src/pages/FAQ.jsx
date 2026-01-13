import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "What services does Shopy Courier offer?",
    a: "Shopy Courier offers domestic and international shipping, real-time tracking, express delivery, and logistics solutions.",
  },
  {
    q: "How can I track my shipment?",
    a: "You can track your shipment using the tracking ID provided after booking on our tracking page.",
  },
  {
    q: "What is the estimated delivery time for local and international shipments?",
    a: "Local shipments usually take 1–3 business days, while international shipments take 5–10 business days.",
  },
  {
    q: "How do I schedule a shipment?",
    a: "You can schedule a shipment by logging in and booking directly from our platform.",
  },
  {
    q: "What are your shipping rates?",
    a: "Shipping rates depend on package size, weight, and destination. Use our pricing calculator for estimates.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="bg-white">
      {/* FAQ SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-5">
          {faqs.map((item, i) => (
            <div
              key={i}
              onClick={() => setActive(active === i ? null : i)}
              className="bg-gray-200 rounded-xl px-6 py-5 cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{item.q}</h3>
                <span className="text-2xl font-bold">
                  {active === i ? "−" : "+"}
                </span>
              </div>

              {active === i && (
                <p className="mt-4 text-gray-700">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* LETS CONNECT SECTION */}
      <section className="bg-blue-900 text-white py-20 text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Let’s Connect!</h2>
        <p className="max-w-2xl mx-auto mb-8">
          We are always ready to assist you with your logistics needs.
          Contact us today!
        </p>

        <Link
          to="/contact"
          className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Get in Touch
        </Link>
      </section>
    </div>
  );
};

export default FAQ;
