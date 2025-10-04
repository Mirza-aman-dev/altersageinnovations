import React, { useEffect, useRef, useState } from "react";

import b1 from "../images/logo-s1.png";
import b2 from "../images/logo-s2.png";
import b3 from "../images/logo-s3.png";
import b4 from "../images/logo-s4.png";
import b5 from "../images/logo-s5.png";
import b6 from "../images/logo-s6.png";

function Trustedby() {
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
      ref={sectionRef}
      className={`py-20 px-6 md:px-20 bg-white transition-opacity duration-1500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl font-bold text-center mb-10">
        Trusted and Supported By
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto items-center">
        {[b1, b2, b3, b4, b5, b6].map((src, index) => (
          <div
            key={index}
            className="flex justify-center items-center p-4 border border-gray-300 rounded-lg hover:shadow-lg transition"
          >
            <img
              src={src}
              alt={`Partner ${index + 1}`}
              className="h-18 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Trustedby;
