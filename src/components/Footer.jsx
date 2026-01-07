import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative z-10 bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-900 text-white scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-tr from-emerald-400 via-sky-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SC</span>
              </div>
              <span className="font-bold text-lg">Shopy-Courier</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Shopy-Courier delivers fast, reliable, and seamless logistics
              solutions, ensuring timely and secure shipments worldwide.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-400">Contact Us</h3>
            <div className="space-y-4 text-slate-300">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>
                  Bhadrak ,Dhamanagra, Odisha – 756117
                </span>
              </div>

              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <div>
                  <div>+91-8289045670</div>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span>info@shopy-courier.site</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-400">Our Services</h3>
            <ul className="space-y-3">
              {[
                "Pick & Drop",
                "Packaging",
                "International & Domestic Services",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-slate-300 hover:text-emerald-400 transition-colors hover:scale-105"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-emerald-400">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-slate-300 hover:text-emerald-400 transition-colors hover:scale-105"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#blogs"
                  className="text-slate-300 hover:text-emerald-400 transition-colors hover:scale-105"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors hover:scale-105"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-300 hover:text-emerald-400 transition-colors hover:scale-105"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-gradient-to-tr from-emerald-400 via-sky-500 to-purple-600 flex items-center justify-center hover:scale-110 transition-all"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>

            <p className="text-slate-400 text-sm text-center">
              © 2026 Shopy Courier. All rights reserved.
            </p>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-6 text-center">
          <div className="flex flex-wrap justify-center gap-3 text-sm text-slate-300">
            {[
              ["Home", "#home"],
              ["Contact Us", "#contact"],
              ["About Us", "#about"],
              ["Privacy Policy", "#"],
              ["Terms Of Use", "#"],
            ].map(([label, link], index) => (
              <React.Fragment key={label}>
                <a
                  href={link}
                  className="hover:text-emerald-400 transition-colors"
                >
                  {label}
                </a>
                {index !== 4 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;







