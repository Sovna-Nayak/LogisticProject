// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const HeroCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const navigate = useNavigate();

//   const slides = [
//     {
//       image:
//         "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80",
//       title: "CONNECTING YOU TO THE WORLD, ONE SHIPMENT AT A TIME",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1606964212858-c215029db704?w=1920&q=80",
//       title: "YOUR TRUSTED LOGISTIC PARTNER IN WORLDWIDE SMART WAY",
//     },
//     {
//       image:
//         "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&q=80",
//       title: "DELIVERING SPEED, RELIABILITY AND EXCELLENCE",
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?w=1920&q=80",
//       title: "FAST AND SECURE GLOBAL SHIPPING SOLUTIONS",
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?w=1920&q=80",
//       title: "OPTIMIZE YOUR BUSINESS WITH OUR LOGISTICS EXPERTISE",
//     },
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);

//     return () => clearInterval(timer);
//   }, [slides.length]);

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div id="home" className="relative h-screen w-full overflow-hidden mt-20">
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentSlide ? "opacity-100" : "opacity-0"
//           }`}
//         >
//           {/* Background Image */}
//           <div
//             className="absolute inset-0 bg-cover bg-center"
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             <div className="absolute inset-0 bg-black/40" />
//           </div>

//           {/* Content */}
//           <div className="relative h-full flex items-center justify-center">
//             <div className="text-center px-4 max-w-5xl">
//               <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
//                 {slide.title}
//               </h1>

//               {/* Buttons */}
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <button
//                   onClick={() => navigate("/blogs")}
//                   className="bg-slate-700 hover:bg-slate-600 text-white px-8 py-6 text-lg rounded-md transition"
//                 >
//                   DISCOVER MORE
//                 </button>

//                 <button
//                   onClick={() => navigate("/login")}
//                   className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg rounded-md transition"
//                 >
//                   LOGIN
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}

//       {/* Dots Navigation */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-3 rounded-full transition-all duration-300 ${
//               index === currentSlide
//                 ? "bg-emerald-500 w-8"
//                 : "bg-white/50 w-3"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroCarousel;




import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=1920&q=80",
      title: "CONNECTING YOU TO THE WORLD, ONE SHIPMENT AT A TIME",
    },
    {
      image:
        "https://images.unsplash.com/photo-1606964212858-c215029db704?w=1920&q=80",
      title: "YOUR TRUSTED LOGISTIC PARTNER IN WORLDWIDE SMART WAY",
    },
    {
      image:
        "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1920&q=80",
      title: "DELIVERING SPEED, RELIABILITY AND EXCELLENCE",
    },
    {
      image:
        "https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?w=1920&q=80",
      title: "FAST AND SECURE GLOBAL SHIPPING SOLUTIONS",
    },
    {
      image:
        "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?w=1920&q=80",
      title: "OPTIMIZE YOUR BUSINESS WITH OUR LOGISTICS EXPERTISE",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div id="home" className="relative h-screen w-full overflow-hidden mt-20">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-4 max-w-5xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-10 leading-tight">
                {slide.title}
              </h1>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                {/* Discover */}
                <button
                  onClick={() => navigate("/blogs")}
                  className="
                    bg-slate-700 text-white px-10 py-6 text-lg rounded-md
                    transition-all duration-300 ease-out
                    hover:bg-slate-600 hover:scale-105 hover:shadow-xl
                    active:scale-95
                  "
                >
                  DISCOVER MORE
                </button>

                {/* Login */}
                <button
                  onClick={() => navigate("/login")}
                  className="
                    bg-emerald-500 text-white px-10 py-6 text-lg rounded-md
                    transition-all duration-300 ease-out
                    hover:bg-emerald-600 hover:scale-105 hover:shadow-emerald-500/40 hover:shadow-xl
                    active:scale-95
                  "
                >
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-emerald-500 w-8"
                : "bg-white/50 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
