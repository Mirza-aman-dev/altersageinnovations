import React, { useEffect, useRef, useState } from "react";

function About() {
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
      id="about"
      ref={sectionRef}
      className={`py-20 px-6 md:px-20 bg-gray-100 transition-opacity duration-1500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* What Drives Us */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 drop-shadow-lg mb-4">
            What Drives Us!
          </h2>
          <div className="text-xl md:text-2xl font-semibold text-gray-700 space-y-2">
            <p>Let's fail fast.</p>
            <p>Learn fast.</p>
            <p>Move fast.</p>
          </div>
          <div className="border-b-2 border-gray-300 w-24 mx-auto mt-6"></div>
        </div>

        {/* Who We Are + Our Vision Side-by-Side */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Who We Are */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 drop-shadow">
              Who We Are?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We are{" "}
              <span className="font-semibold">Altersage Innovations</span>, an
              ambitious agritech startup committed to transforming agriculture
              through cutting-edge robotics and AI technologies. With a passion
              for solving real-world challenges, we push the boundaries of
              innovation to build intelligent, more efficient farming
              solutions. At Altersage, we believe in thinking big and doing big
              that shapes the future of agriculture.
            </p>
          </div>

          {/* Our Vision */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 drop-shadow">
              Our Vision
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We offer the most cutting-edge solutions for agriculture,
              leveraging advanced robotics and AI technologies to enhance
              productivity, sustainability, and efficiency in farming
              operations. Our innovative products and services are designed to
              meet the unique challenges of modern agriculture, ensuring
              advanced performance and enhanced lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
