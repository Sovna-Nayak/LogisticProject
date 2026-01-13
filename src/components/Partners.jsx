import React from "react";

const partners = [
  {
    name: "DHL",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/DHL_Logo.svg/320px-DHL_Logo.svg.png",
  },
  {
    name: "Blue Dart",
    logo: "https://www.bluedart.com/sites/default/files/BD_Logo_New.png",
  },
  {
    name: "FedEx",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/FedEx_Express.svg/320px-FedEx_Express.svg.png",
  },
  {
    name: "Delhivery",
    logo: "https://www.delhivery.com/static/media/logo.7ca06d1f.svg",
  },
];

const Partners = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-4xl font-bold text-center mb-14 text-slate-900">
          Our Trusted Partners
        </h2>

        {/* Carousel Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div className="flex gap-16 animate-partner-scroll w-max">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex flex-col items-center min-w-[200px]"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="
                    h-14 w-auto object-contain
                    grayscale opacity-70
                    hover:grayscale-0 hover:opacity-100
                    transition-all duration-300
                  "
                />
                <p className="mt-4 text-slate-700 font-semibold text-lg">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Partners;
