import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo and Name Section */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Hassan Jebri &nbsp;
              <span className="sm:block hidden"> | Software Engineer </span>
            </p>
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Download CV Button */}
        <div className="hidden sm:flex">
        <a
  href="https://github.com/hsanjebri/mycv.git" // Replace with the actual path to your CV
  download
  className="relative inline-block px-6 py-3 font-bold text-white border-2 border-white rounded-full group overflow-hidden"
>
  <span className="absolute inset-0 w-0 h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 ease-in-out group-hover:w-full"></span>
  <span className="relative z-10">Download CV</span>
</a>

        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              {/* Add CV Download Button in Mobile View */}
              <li>
                <a
                  href="https://github.com/hsanjebri/mycv.git" // Replace with the actual path to your CV
                  download
                  className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-6 rounded-full shadow-lg hover:shadow-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                  Download CV
                </a>
                <a
            href="https://www.linkedin.com/in/hassan-jebri-27b232265/" // Replace with your LinkedIn profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-6 py-3 font-bold text-white border-2 border-white rounded-full group overflow-hidden"
          >
            <span className="absolute inset-0 w-0 h-full bg-gradient-to-r from-blue-500 to-blue-700 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            <span className="relative z-10">LinkedIn</span>
          </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
