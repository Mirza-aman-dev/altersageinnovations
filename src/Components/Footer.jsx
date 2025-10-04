import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../images/footer-logo.png"; // replace with your logo path
import footerVideo from "../images/backgrounds/banner.mp4"; // replace with your video path

function Footer() {
  return (
    <footer className="relative w-full min-h-[400px] overflow-hidden" id="footer">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={footerVideo} type="video/mp4" />
      </video>

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10"></div>

      {/* Footer Content */}
      <div className="relative z-20 py-12 px-6 md:px-20 text-white max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Logo & Address */}
          <div className="flex flex-col md:w-1/3">
            <img src={logo} alt="Logo" className="w-32 md:w-40 mb-4" />
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-sm md:text-base">
                Maker Village, Kerala Technology Innovation Zone, HMT Colony,
              </p>
              <p className="text-sm md:text-base">
                North Kalamassery, Kochi, Kerala 683503
              </p>
              <p className="mt-4 text-sm md:text-base">
                Call Us : +91 9847429917
              </p>
              <p className="text-sm md:text-base">
                Email : info@altersageinnovations.com
              </p>
            </div>
          </div>

          {/* Copyright & Social Icons */}
          <div className="flex flex-col justify-between md:w-1/3">
            <p className="text-sm md:text-base">
              &copy; Copyright 2025 Altersage Innovations All Rights Reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="https://www.facebook.com/people/Altersage-Innovations/61575221434011/" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-600 rounded-full hover:bg-blue-700 transition">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.instagram.com/altersageinnovations/?igsh=YmN3dDEyY3Z6a3A1" target="_blank" rel="noopener noreferrer" className="p-3 bg-pink-500 rounded-full hover:bg-pink-600 transition">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/altersage-innovations/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="p-3 bg-blue-700 rounded-full hover:bg-blue-800 transition">
                <FaLinkedin size={20} />
              </a>
              <a href="https://x.com/Altersage_Inno" target="_blank" rel="noopener noreferrer" className="p-3 bg-sky-500 rounded-full hover:bg-sky-600 transition">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 mt-8"></div>
      </div>
    </footer>
  );
}

export default Footer;
