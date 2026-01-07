import React from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 bg-white">
      {/* HERO */}
      <section className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7"
          alt="Blogs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Our Blogs</h1>
        </div>
      </section>

      {/* BLOG LIST */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d"
            className="rounded-t-xl"
          />
          <div className="p-6">
            <h3 className="font-s
Shopy Courieremibold text-lg mb-2">
              Good Establish with Shopy Courier
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Learn how to reduce costs and improve delivery times.
            </p>
            <button className="text-blue-600 font-medium">
              Read More →
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow">
          <img
            src="https://images.unsplash.com/photo-1601597111158-2fceff292cdc"
            className="rounded-t-xl"
          />
          <div className="p-6">
            <h3 className="font-semibold text-lg mb-2">
              The Future of Logistics with AI and also 
Shopy Courier
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Discover how AI is changing logistics.
            </p>
            <button className="text-blue-600 font-medium">
              Read More →
            </button>
          </div>
        </div>
      </section>

      {/* CONNECT */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Connect!</h2>
        <p className="mb-8">
          We are always ready to assist you with your logistics needs.
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-blue-700 px-8 py-3 rounded-full"
        >
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default Blogs;
