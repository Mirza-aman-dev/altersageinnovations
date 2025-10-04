import React, { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function ProductLaunch() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="product"
      ref={sectionRef}
      className={`py-20 px-6 md:px-20 transition-opacity duration-1500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background: "linear-gradient(135deg, #012a4a, #000000)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center items-start text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold relative">
            CocoBot
            <sup className="text-xs sm:text-sm md:text-base align-top ml-2">TM</sup>
          </h1>

          {/* Animated Longer Arrow — hidden on mobile */}
          <div className="mt-6 hidden sm:flex items-center animate-bounce">
            <div className="w-32 sm:w-40 h-1 bg-white mr-2"></div>
            <FaArrowRight size={30} className="sm:text-white" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col justify-center items-start text-white space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">Our First Product Launch</h2>
          <p className="text-base sm:text-lg md:text-xl">Coming Soon...</p>

          <a
            href="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdftBK2l78y1fK8dw5cF5cWgn1aJp_jgwzt_kgbOBNIWExQ8g/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-lg transition duration-300 hover:from-teal-500 hover:to-blue-500 hover:text-gray-900 text-sm sm:text-base"
          >
            Prebook Now <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProductLaunch;