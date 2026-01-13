// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "HOME", href: "#home" },
//     { name: "TRACKING", href: "#tracking" },
//     { name: "BLOGS", href: "#blogs" },
//     { name: "PRICING", href: "#pricing" },
//     { name: "ABOUT", href: "#about" },
//     { name: "CONTACT", href: "#contact" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
//         ${isScrolled 
//           ? "bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-600 shadow-lg backdrop-blur-md bg-opacity-90" 
//           : "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900"} 
//       `}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex h-20 items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center space-x-3">
//             <div className="w-12 h-12 bg-gradient-to-tr from-emerald-400 to-sky-500 rounded-lg flex items-center justify-center">
//               <span className="text-white font-bold text-xl">SC</span>
//             </div>
//             <span className="text-white font-bold text-lg tracking-wide">
//               Shopy Courier
//             </span>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 className="text-white text-sm font-medium hover:text-emerald-300 hover:scale-105 transition-all"
//               >
//                 {link.name}
//               </a>
//             ))}

//             {/* LOGIN BUTTON */}
//             <Link
//               to="/login"
//               className="bg-gradient-to-r from-emerald-400 to-sky-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:from-emerald-500 hover:to-sky-600 transform hover:scale-105 transition-all"
//             >
//               LOGIN
//             </Link>
//           </div>
            
//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             className="md:hidden text-white p-2"
//             aria-label="Toggle Menu"
//           >
//             {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700">
//           <div className="px-4 py-4 space-y-3">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="block text-white text-sm font-medium py-2 hover:text-emerald-300 transition-colors"
//               >
//                 {link.name}
//               </a>
//             ))}

//             {/* MOBILE LOGIN */}
//             <Link
//               to="/login"
//               onClick={() => setIsMobileMenuOpen(false)}
//               className="block bg-gradient-to-r from-emerald-400 to-sky-500 text-center py-2 rounded-md font-semibold text-white hover:from-emerald-500 hover:to-sky-600 transition-all"
//             >
//               LOGIN
//             </Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;






import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "TRACKING", path: "/tracking" },
    { name: "BLOGS", path: "/blogs" },
    { name: "PRICING", path: "/pricing" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-gradient-to-r from-emerald-500 via-sky-500 to-purple-600 shadow-lg backdrop-blur-md bg-opacity-90"
            : "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-900"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center space-x-3">
            <img src="/Logo.png" alt="Logo" className="w-12 h-12 rounded-lg" />
            {/* <div className="w-12 h-12 bg-gradient-to-tr from-emerald-400 to-sky-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">SC</span>
            </div> */}
            <span className="text-white font-bold text-lg tracking-wide">
              Shopy Courier
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white text-sm font-medium hover:text-emerald-300 hover:scale-105 transition-all"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/login"
              className="bg-gradient-to-r from-emerald-400 to-sky-500 text-white px-4 py-2 rounded-md text-sm font-semibold hover:from-emerald-500 hover:to-sky-600 transform hover:scale-105 transition-all"
            >
              LOGIN
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-t border-slate-700">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-white text-sm font-medium py-2 hover:text-emerald-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/login"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block bg-gradient-to-r from-emerald-400 to-sky-500 text-center py-2 rounded-md font-semibold text-white hover:from-emerald-500 hover:to-sky-600 transition-all"
            >
              LOGIN
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
