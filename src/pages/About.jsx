import React from "react";

const About = () => {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      {/* HERO */}
      <section className="relative h-[420px]">
        <img
          src="https://images.unsplash.com/photo-1509395176047-4a66953fd231"
          alt="About Us"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            About Us
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
          <strong>Shopy Courier</strong>, a proud venture of{" "}
          <strong>Shopy Courier Pvt Ltd</strong>, is a
          dedicated logistics platform delivering speed, safety, and
          operational excellence across the supply chain. Established in
          Bhadrak, Odisha in <strong>January 7</strong>, we focus on
          next-generation tracking and reliable transport solutions.
        </p>
      </section>

      {/* MISSION / VISION / VALUES */}
      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 pb-20">
        {[
          {
            title: "Our Mission",
            desc: "To deliver the best logistics solutions with unmatched customer service.",
          },
          {
            title: "Our Vision",
            desc: "Connecting the world through fast, reliable, and efficient shipping.",
          },
          {
            title: "Our Values",
            desc: "Integrity, innovation, and customer-first approach in every delivery.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-8 text-center"
          >
            <h3 className="font-semibold text-xl mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* OUR SERVICES */}
        <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-3">
            Our Services
            </h2>
            <p className="text-center text-gray-600 mb-14">
            Offering a wide range of logistics solutions tailored to your needs.
            </p>

            <div className="grid md:grid-cols-4 gap-8">
            {[
                {
                icon: "🌍",
                title: "International Shipping",
                desc: "Time to time work.",
                },
                {
                icon: "🏢",
                title: "Smart Warehousing",
                desc: "Modern, secure, and temperature-controlled storage solutions designed for efficiency and safety.",
                },
                {
                icon: "🚢",
                title: "Air & Sea Cargo",
                desc: "Flexible cargo transport options via air and sea ensuring speed, safety, and cost-effectiveness.",
                },
                {
                icon: "📦",
                title: "Supply Chain Management",
                desc: "End-to-end logistics planning and freight coordination to optimize routes and reduce delivery time.",
                },
            ].map((item, i) => (
                <div
                key={i}
                className="bg-gray-50 p-8 rounded-xl shadow hover:shadow-lg transition text-center"
                >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
            ))}
            </div>
        </div>
        </section>

        {/* MEET OUR TEAM */}
        <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-14">
            Meet Our Team
            </h2>

            <div className="flex justify-center">
            <div className="bg-white p-8 rounded-xl shadow text-center w-72">
                <img
                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt="Tejash Parekh"
                className="w-28 h-28 mx-auto rounded-full mb-4"
                />
                <h3 className="font-semibold text-lg">Tejash Parekh</h3>
                <p className="text-gray-500 text-sm">CEO & Founder</p>
            </div>
            </div>
        </div>
        </section>



      {/* WHY CHOOSE US */}
      <section className="bg-white py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {[
            "Trusted Reliability",
            "Secure Handling",
            "On-Time Every Time",
            "24/7 Assistance",
          ].map((title, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-xl shadow text-center">
              <h4 className="font-semibold">{title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-900 text-white py-20 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let’s Connect!</h2>
        <p className="mb-8">
          We are always ready to assist you with your logistics needs.
        </p>
        <button className="bg-white text-blue-800 px-8 py-3 rounded-full">
          Get in Touch
        </button>
      </section>
    </div>
  );
};

export default About;
