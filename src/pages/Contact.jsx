import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

const Contact = () => {
  return (
    <>
      {/* HERO SECTION */}
          <section
          className="min-h-[60vh] flex items-center justify-center bg-cover bg-center relative"
          style={{
            backgroundImage: "url('/images/contact-bg.jpg')",
      }}
    >
      {/* <div className="absolute inset-0 bg-black/60" /> */}
      <h1 className="relative text-white text-4xl md:text-5xl font-bold z-10">
        Contact Us
      </h1>
    </section>

      {/* <section
        className="h-[60vh] flex items-center justify-center bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('/images/contact-bg.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <h1 className="relative text-white text-4xl md:text-5xl font-bold">
          Contact Us
        </h1>
      </section> */}

      {/* CONTACT FORM */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          {/* FORM */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-6">Get In Touch!!</h2>

            <form className="space-y-4">
              <input className="w-full border p-3 rounded" placeholder="Your Name" />
              <input className="w-full border p-3 rounded" placeholder="Email" />
              <input className="w-full border p-3 rounded" placeholder="Phone" />
              <input className="w-full border p-3 rounded" placeholder="Subject" />
              <textarea
                className="w-full border p-3 rounded h-32"
                placeholder="Your Message"
              />
              <button className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700">
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="bg-blue-50 p-8 rounded-xl shadow">
            <h3 className="text-xl font-semibold mb-4">
              Contact Information
            </h3>

            <div className="space-y-4 text-gray-700">
              <p className="flex gap-2">
                <MapPin />ABC, Odisha
              </p>
              <p className="flex gap-2">
                <Phone /> +91 1234567890
              </p>
            
              <p className="flex gap-2">
                <Mail /> info@shopycourier.site
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <Facebook />
              <Instagram />
              <Twitter />
              <Linkedin />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-3">Let's Connect!</h2>
        <p className="mb-6">
          We are always ready to assist you with your logistics needs.
        </p>
        <button className="bg-white text-blue-700 px-6 py-3 rounded-full font-semibold">
          Get in Touch
        </button>
      </section>
    </>
  );
};

export default Contact;
