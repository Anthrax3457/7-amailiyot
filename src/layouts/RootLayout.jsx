import React from "react";

// react-router-dom
import { Link, Outlet, useLocation } from "react-router-dom";

// styles
import "./style.css";

// components
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  const location = useLocation();
  return (
    <>
      {/* Header */}
      <Header />
      {/* Menu */}
      <div className="site-menu w-full h-[4.5rem] clear-both px-[6rem]">
        <ul className="site-menu__list flex gap-[0.4rem]">
          <li className="site-menu__item">
            <Link
              to="/"
              className={`site-menu__link pt-[1rem] font-bold text-center outline-none text-[1.4rem] block text-[#666] w-[11rem] h-[4.5rem] hover:text-[#492545] ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li className="site-menu__item">
            <Link
              to="services"
              className={`site-menu__link pt-[1rem] font-bold text-center outline-none text-[1.4rem] block text-[#666] w-[11rem] h-[4.5rem] hover:text-[#492545] ${
                location.pathname === "/services" ? "active" : ""
              }`}
            >
              Services
            </Link>
          </li>
          <li className="site-menu__item">
            <Link
              to="blog"
              className={`site-menu__link pt-[1rem] font-bold text-center outline-none text-[1.4rem] block text-[#666] w-[11rem] h-[4.5rem] hover:text-[#492545] ${
                location.pathname === "/blog" ? "active" : ""
              }`}
            >
              Blog
            </Link>
          </li>
          <li className="site-menu__item">
            <Link
              to="gallery"
              className={`site-menu__link pt-[1rem] font-bold text-center outline-none text-[1.4rem] block text-[#666] w-[11rem] h-[4.5rem] hover:text-[#492545] ${
                location.pathname === "/gallery" ? "active" : ""
              }`}
            >
              Gallery
            </Link>
          </li>
          <li className="site-menu__item">
            <Link
              to="contact"
              className={`site-menu__link pt-[1rem] font-bold text-center outline-none text-[1.4rem] block text-[#666] w-[11rem] h-[4.5rem] hover:text-[#492545] ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {/* Main */}
      <main className="main">
        <div className="main-wrapper pb-[3rem]">
          <div className="main-second-wrapper w-[94rem] mx-[3rem] bg-white pt-[3rem] pb-[3.3rem] px-[2rem]">
            <Outlet />
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default RootLayout;
