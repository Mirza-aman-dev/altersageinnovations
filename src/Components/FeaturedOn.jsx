import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import featured1 from "../images/media-1.png";
import featured2 from "../images/media-2.png";
import featured3 from "../images/media-3.png";
import featured4 from "../images/media-4.png";

const FeaturedOn = () => {
  const featuredItems = [
    { img: featured1, name: "The New Indian Express" },
    { img: featured2, name: "The Better India" },
    { img: featured3, name: "OnManorama" },
    { img: featured4, name: "Deccan Chronicle" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3); // Default for large screens

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Adjust itemsToShow based on screen width
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);

    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + 1 >= featuredItems.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredItems.length - 1 : prev - 1
    );
  };

  // Auto scroll every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, itemsToShow]);

  // Intersection Observer for fade-in
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
      id="featured"
      ref={sectionRef}
      className={`py-16 px-6 md:px-20 transition-opacity duration-1500 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{
        background: "linear-gradient(to right, rgba(173, 216, 230, 0.34), white)",
      }}
    >
      {/* Titles with navigation */}
      <div className="flex items-center justify-between mb-8 flex-wrap">
        <div>
          <h3 className="text-lg md:text-xl font-medium text-blue-400 ml-4">
            Our media presence
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-black ml-4">
            Featured On
          </h2>
        </div>

        {/* Navigator Buttons */}
        <div className="flex gap-4 mr-4 mt-4 md:mt-0">
          <button
            onClick={prevSlide}
            className="p-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="flex overflow-hidden w-full relative">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsToShow}%)`,
            width: `${(featuredItems.length / itemsToShow) * 100}%`,
          }}
        >
          {featuredItems.map((item, idx) => (
            <div
              key={idx}
              className={`flex-shrink-0 px-2 transition-all duration-500`}
              style={{ width: `${100 / itemsToShow}%` }}
            >
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-auto object-cover"
                />
                <p className="text-center py-2 font-medium text-sm md:text-base">
                  {item.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedOn;