"use client";

import React, { useState } from "react";
import logo from "../../../public/glogo.avif";
import Image from "next/image";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <main>
      <nav className="bg-white border-gray-200 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 container">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image src={logo} className="logo" alt="Flowbite Logo" />
          </a>
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-expanded={isDropdownOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            id="mega-menu-full"
            className={`items-center justify-between w-full md:flex flex-col md:w-auto md:order-1 ${
              isDropdownOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col mt-4 headcolor font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse items-center">
              <li>
                <a
                  href="https://www.gyanarthimedia.com/about-us"
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   "
                  aria-current="page"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="https://www.gyanarthimedia.com/admissions"
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Admissions
                </a>
              </li>

              <li>
                <a
                  href="https://www.gyanarthimedia.com/placements"
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Placement
                </a>
              </li>
              <li className="group">
                <a
                  href="#"
                  className="flex items-center py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                >
                  Courses
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <ul className="absolute bg-white shadow-md py-4 px-4 sm:px-8 lg:px-32 rounded-md opacity-0 invisible transition-all duration-300 transform scale-95 group-hover:opacity-100 group-hover:visible group-hover:scale-100 flex flex-wrap justify-center w-full max-w-screen-xl mx-auto left-0 top-20">
                  <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2">
                    <a
                      href="https://www.gyanarthimedia.com/coursepage/bsc-fashion-designing"
                      className="text-sm text-gray-700 hover:bg-gray-100 block p-2 rounded"
                    >
                      BSc Fashion Designing (3 years)
                    </a>
                  </li>

                  <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2">
                    <a
                      href="https://www.gyanarthimedia.com/coursepage/ba-animation-and-design"
                      className="text-sm text-gray-700 hover:bg-gray-100 block p-2 rounded"
                    >
                      BA Animation & Design (3 years)
                    </a>
                  </li>

                  <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2">
                    <a
                      href="https://www.gyanarthimedia.com/coursepage/bachelor-of-fine-arts-bfa"
                      className="text-sm text-gray-700 hover:bg-gray-100 block p-2 rounded"
                    >
                      BFA (4 years)
                    </a>
                  </li>

                  <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2">
                    <a
                      href="https://www.gyanarthimedia.com/coursepage/bcom"
                      className="text-sm text-gray-700 hover:bg-gray-100 block p-2 rounded"
                    >
                      B.Com (3 years)
                    </a>
                  </li>

                  <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2">
                    <a
                      href="https://www.gyanarthimedia.com/coursepage/bcom-financial-accounting"
                      className="text-sm text-gray-700 hover:bg-gray-100 block p-2 rounded"
                    >
                      B.Com Financial Accounting (3 years)
                    </a>
                  </li>
                  <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2">
                    <a
                      href="https://www.gyanarthimedia.com/coursepage/bcom-banking-and-finance"
                      className="text-sm text-gray-700 hover:bg-gray-100 block p-2 rounded"
                    >
                      B.Com Banking & Financial (3 years)
                    </a>
                  </li>

                  <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2">
                    <a
                      href="https://www.gyanarthimedia.com/coursepage/ba-journalism-and-mass-communication"
                      className="text-sm text-gray-700 hover:bg-gray-100 block p-2 rounded"
                    >
                      BJMC (3 years)
                    </a>
                  </li>
                  <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2">
                    <a
                      href="https://www.gyanarthimedia.com/coursepage/msc-fashion-designing"
                      className="text-sm text-gray-700 hover:bg-gray-100 block p-2 rounded"
                    >
                      MSc Fashion Designing (2 years)
                    </a>
                  </li>
                  <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2">
                    <a
                      href="https://www.gyanarthimedia.com/coursepage/ma-animation-and-design"
                      className="text-sm text-gray-700 hover:bg-gray-100 block p-2 rounded"
                    >
                      MA Animation & Design (2 years)
                    </a>
                  </li>
                  <li className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 py-2">
                    <a
                      href="https://www.gyanarthimedia.com/coursepage/ma-journalism-and-mass-communication"
                      className="text-sm text-gray-700 hover:bg-gray-100 block p-2 rounded"
                    >
                      MJMC (2 years){" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a
                  href="https://www.gyanarthimedia.com/gallery"
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Campus Life
                </a>
              </li>
              <li>
                <a
                  href="https://www.gyanarthimedia.com/blogs"
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="https://kuntl.net/kumaunLinks/Result/2021?page=1"
                  className="block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Results
                </a>
              </li>
              <li>
                <a
                  href="https://www.gyanarthimedia.com/contact"
                  className="block py-2 px-3 applybutton text-white bg-yellow-600 border-b border-gray-100 hover:bg-yellow-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Header;
