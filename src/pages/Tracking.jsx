import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Tracking = () => {
  const [trackingId, setTrackingId] = useState("");
  const navigate = useNavigate();

  const handleTrack = () => {
    if (!trackingId.trim()) return;
    alert(`Tracking ID: ${trackingId}`);
  };

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* TOP TRACKING AREA */}
      <section className="flex flex-col items-center justify-center py-28">
        <h1 className="text-3xl md:text-4xl font-medium mb-14 text-black">
          Track your Parcel
        </h1>

        <div className="flex items-center bg-gray-100 rounded-xl overflow-hidden border shadow-sm">
          <input
            type="text"
            placeholder="Enter Tracking Id/AWB"
            value={trackingId}
            onChange={(e) => setTrackingId(e.target.value)}
            className="px-6 py-4 w-72 bg-transparent outline-none text-gray-700 placeholder-gray-500"
          />
          <button
            onClick={handleTrack}
            className="px-8 py-4 bg-gray-100 border-l text-black font-medium hover:bg-gray-200 transition"
          >
            Track
          </button>
        </div>
      </section>

      {/* BLUE CONNECT SECTION */}
      <section className="bg-[#1f3c88] text-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Let’s Connect!
        </h2>
        <p className="max-w-2xl mx-auto mb-10 text-base md:text-lg">
          We are always ready to assist you with your logistics needs.
          Contact us today!
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition"
        >
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default Tracking;
