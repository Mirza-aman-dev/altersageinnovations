import React, { useState, useEffect } from "react";
import logo from "../images/new-logo-ai.webp";
import mainBg from "../images/backgrounds/slider-2-bg-1.jpg";

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [fadeIn, setFadeIn] = useState(false); // New fade state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger fade-in after page loads
    setTimeout(() => {
      setFadeIn(true);
    }, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  const quotes = [
    "Welcome to Altersage",
    "Let's Explore the Future of",
    "Agricultural Robotics",
    "With advanced robotics and AI",
    "We're revolutionizing agriculture for a smarter",
    "Faster and more sustainable future",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % quotes.length);
        setFade(true); // fade in
      }, 1000); // wait for fade out
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className={`relative h-screen text-white bg-cover bg-center bg-no-repeat transition-opacity duration-1500 ease-in-out ${
        fadeIn ? "opacity-100" : "opacity-0"
      }`}
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      {/* Navbar */}
      <header
        className={`w-full top-0 left-0 z-50 fixed transition-colors duration-300 ${
          scrolled ? "bg-black" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Altersage Innovations Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Menu */}
          <nav
            className={`hidden md:flex space-x-8 text-lg transition-colors duration-300 ${
              scrolled ? "text-white" : "text-white"
            }`}
          >
            <a href="#home" className="hover:text-gray-200 transition">
              Home
            </a>
            <a href="#about" className="hover:text-gray-200 transition">
              About Us
            </a>
            <a href="#footer" className="hover:text-gray-200 transition">
              Contact Us
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-opacity-70 z-40 transition-opacity duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setMenuOpen(false)}
        >
          <div
            className={`fixed top-0 left-0 h-full w-3/4 sm:w-2/3 md:w-1/3 bg-black shadow-lg transform transition-transform duration-500 ease-in-out ${
              menuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
            >
              ✕
            </button>

            {/* Nav Links */}
            <nav className="flex flex-col items-start space-y-4 py-10 px-6 text-white">
              <a
                href="#home"
                className="hover:text-gray-300 transition text-base sm:text-lg md:text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-gray-300 transition text-base sm:text-lg md:text-xl"
                onClick={() => setMenuOpen(false)}
              >
                About Us
              </a>
              <a
                href="#footer"
                className="hover:text-gray-300 transition text-base sm:text-lg md:text-xl"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </a>
            </nav>

            {/* Divider */}
            <div className="border-t border-gray-700 my-4"></div>

            {/* Contact Info */}
            <div className="px-6 text-white text-sm sm:text-base space-y-2 pb-6">
              <p>📞 +91 9847429917</p>
              <p>info@altersageinnovations.com</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center h-full text-center px-6">
        <div className="bg-opacity-50 p-8 rounded-2xl">
          <h2 className="text-3d text-4xl md:text-6xl font-bold mb-4 min-h-[4rem] md:min-h-[5rem] flex items-center justify-center">
            <span
              key={currentIndex}
              className={`transition-opacity duration-1000 ease-in-out ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            >
              {quotes[currentIndex]}
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Home;
