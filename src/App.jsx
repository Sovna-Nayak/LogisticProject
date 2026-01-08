

// import React from "react";
// import "./App.css";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import HeroCarousel from "./components/HeroCarousel";
// import Capabilities from "./components/Capabilities";
// import MissionVision from "./components/MissionVision";
// import WhyChooseUs from "./components/WhyChooseUs";
// import Statistics from "./components/Statistics";
// import ShippingCalculator from "./components/ShippingCalculator";
// import Newsletter from "./components/Newsletter";
// import Testimonials from "./components/Testimonials";
// import Partners from "./components/Partners";
// import CTA from "./components/CTA";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Tracking from "./pages/Tracking";
// function App() {
//   return (
//     <>
//       <Navbar />
//       <HeroCarousel />
//       <Capabilities />
//       <MissionVision />
//       <WhyChooseUs />
//       <Statistics />
//       <ShippingCalculator />
//       <Newsletter />
//       <Testimonials />
//       <Partners />
//       <CTA />
//       <button />
//       {/* <main className="pt-20 min-h-screen"> */}
//         <Routes>
//           {/* <Route path="/" element={<div>Home Page</div>} /> */}
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/tracking" element={<Tracking />} />
//         </Routes>
//       {/* </main> */}

//       <Footer />
//     </>
//   );
// }

// export default App;





import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Home components
import HeroCarousel from "./components/HeroCarousel";
import Capabilities from "./components/Capabilities";
import MissionVision from "./components/MissionVision";
import WhyChooseUs from "./components/WhyChooseUs";
import Statistics from "./components/Statistics";
import ShippingCalculator from "./components/ShippingCalculator";
import Newsletter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import CTA from "./components/CTA";

// Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Tracking from "./pages/Tracking";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
function Home() {
  return (
    <>
      <HeroCarousel />
      <Capabilities />
      <MissionVision />
      <WhyChooseUs />
      <Statistics />
      <ShippingCalculator />
      <Newsletter />
      <Testimonials />
      <Partners />
      <CTA />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
