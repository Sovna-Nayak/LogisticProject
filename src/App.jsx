// import React from "react";
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Login from "./pages/Login";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//        {/* ADD THIS */}
//       <main className="pt-20">
//         {/* your routes or page content here */}
//       </main>
//       <Footer />
//       {/* <Toaster /> */}
//     </div>
//   );
// }

// export default App;




import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <>
      <Navbar />
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
      <button />
      {/* <main className="pt-20 min-h-screen"> */}
        <Routes>
          {/* <Route path="/" element={<div>Home Page</div>} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      {/* </main> */}

      <Footer />
    </>
  );
}

export default App;
