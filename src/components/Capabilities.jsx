
import React from "react";
import { Globe2, Building2, Ship, Package } from "lucide-react";

const Capabilities = () => {
  const capabilities = [
    {
      icon: Globe2,
      title: "International Shipping",
      description: "Seamless global delivery with real-time tracking.",
    },
    {
      icon: Building2,
      title: "Smart Warehousing",
      description: "Modern, secure, and temperature-controlled storage.",
    },
    {
      icon: Ship,
      title: "Air & Sea Cargo",
      description: "Flexible cargo transport via air and sea.",
    },
    {
      icon: Package,
      title: "Supply Chain Management",
      description: "End-to-end logistics planning and coordination.",
    },
  ];

  return (
    <section className="pt-10 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
          Our Capabilities
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-6 bg-emerald-100 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-emerald-500">
                  <Icon className="w-10 h-10 text-emerald-600 transition-all duration-300 group-hover:text-white group-hover:scale-110" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-slate-900 group-hover:text-emerald-600 transition-colors">
                  {capability.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed">
                  {capability.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
