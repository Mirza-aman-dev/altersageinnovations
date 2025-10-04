import React, { useEffect, useRef, useState } from "react";
import { FaLinkedin } from "react-icons/fa";

import team1 from "../images/team-1.png";
import team2 from "../images/team-2.png";
import team3 from "../images/team-3.png";
import team4 from "../images/team-4.png";

function Team() {
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
    <>
      {/* Team Section */}
      <section
        id="team"
        ref={sectionRef}
        className={`py-20 px-6 md:px-20 transition-opacity duration-1500 ease-in-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{
          background: "linear-gradient(to right, white, rgba(173, 216, 230, 0.39))",
        }}
      >
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Smaller Title Above */}
          <h3 className="text-xl md:text-2xl font-medium text-blue-300 text-center">
            Our Leadership Team
          </h3>

          {/* Bigger Bold Title Below */}
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center">
            The minds behind our mission
          </h2>

          {/* Team Members */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
            {/* Founder & CEO */}
            <div className="flex flex-col">
              <div className="bg-gray-100 p-1 w-full flex justify-center">
                <img
                  src={team1}
                  alt="Founder & CEO"
                  className="w-40 sm:w-48 md:w-48 h-auto object-cover"
                />
              </div>
              <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800">
                    Ashin P Krishna
                  </h3>
                  <p className="text-gray-600">Founder & CEO</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/ashinpkrishna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 sm:mt-0 text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>

            {/* CTO */}
            <div className="flex flex-col">
              <div className="bg-gray-100 p-1 w-full flex justify-center">
                <img
                  src={team2}
                  alt="CTO"
                  className="w-40 sm:w-48 md:w-48 h-auto object-cover"
                />
              </div>
              <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800">
                    Gokul Krishnan
                  </h3>
                  <p className="text-gray-600">CTO</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/gokul-krishnan-a21a4f/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 sm:mt-0 text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>

            {/* Head of AI & ML */}
            <div className="flex flex-col">
              <div className="bg-gray-100 p-1 w-full flex justify-center">
                <img
                  src={team3}
                  alt="Head of AI & ML"
                  className="w-40 sm:w-48 md:w-48 h-auto object-cover"
                />
              </div>
              <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800">
                    Alosh Denny
                  </h3>
                  <p className="text-gray-600">Head of AI & ML</p>
                </div>
                <a
                  href="https://www.linkedin.com/in/aloshdenny/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 sm:mt-0 text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>

            {/* Design Engineer */}
            <div className="flex flex-col">
              <div className="bg-gray-100 p-1 w-full flex justify-center">
                <img
                  src={team4}
                  alt="Design Engineer"
                  className="w-40 sm:w-48 md:w-48 h-auto object-cover"
                />
              </div>
              <div className="mt-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-gray-800">
                    Gokulkrishna AK
                  </h3>
                  <p className="text-gray-600">Design Engineer</p>
                </div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 sm:mt-0 text-blue-600 hover:text-blue-800"
                >
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
