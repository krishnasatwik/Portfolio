import React, { useState, useEffect, useRef } from "react";
import "./global.css";

const Navbar = ({ aboutMeRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="fixed top-0 left-0 right-0 py-8 bg-black text-white">
      <div className="container flex justify-between items-center">
        <div>
          <h1 className="font-bold text-1xl bg-gradient-to-r from-[#8A2387] to-[#E94057] p-1 rounded-sm hover:bg-gradient-to-l cursor-pointer">
            ポートフォリオ
          </h1>
        </div>
        <div className="md:hidden relative" ref={dropdownRef}>
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <ul className="py-1">
                <li className="font-semibold text-black px-4 py-2 hover:bg-gray-100">
                  <a href="#home">Home</a>
                </li>
                <li className="font-semibold text-black px-4 py-2 hover:bg-gray-100">
                  <a href="#about-me">About me</a>
                </li>
                <li className="font-semibold text-black px-4 py-2 hover:bg-gray-100">
                  <a href="#projects">Projects</a>
                </li>
                <li className="font-semibold text-black px-4 py-2 hover:bg-gray-100">
                  <a href="https://github.com/krishnasatwik" target="_blank">
                    Github
                  </a>
                </li>
                <li className="font-semibold text-black px-4 py-2 hover:bg-gray-100">
                  <a href="https://drive.google.com/file/d/1_AsZTaGXZv56q30BnLFveNLRjHBdyMOO/view?usp=drive_link">
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="hidden md:flex justify-center gap-8 md:items-center">
          <ul className="flex flex-row gap-8">
            <li className="relative text-white font-semibold hover:text-gray-400">
              <a
                href="#home"
                className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#8A2387] after:to-[#E94057] after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                Home
              </a>
            </li>
            <li className="relative text-white font-semibold hover:text-gray-400">
              <a
                href="#about-me"
                className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#8A2387] after:to-[#E94057] after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                About me
              </a>
            </li>
            <li className="relative text-white font-semibold hover:text-gray-400">
              <a
                href="#projects"
                className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#8A2387] after:to-[#E94057] after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                Projects
              </a>
            </li>
            <li className="relative text-white font-semibold hover:text-gray-400">
              <a
                href="https://github.com/krishnasatwik"
                target="_blank"
                className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#8A2387] after:to-[#E94057] after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                Github
              </a>
            </li>
            <li className="hover:text-gray-400">
              <a
                href="https://drive.google.com/file/d/1_AsZTaGXZv56q30BnLFveNLRjHBdyMOO/view?usp=drive_link"
                className="gradient-transition font-semibold relative inline-block after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#8A2387] after:to-[#E94057] after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
                target="_blank"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
