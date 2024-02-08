import React from "react";

// styles
import "./style.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="h-[7.4rem] px-[3rem] py-[1rem] text-white text-center w-[94rem] mx-auto"
    >
      <ul className="footer__list flex justify-center gap-[0.4rem]">
        <li className="footer__item">
          <Link className="footer__link underline hover:no-underline">
            Home
          </Link>{" "}
          |
        </li>
        <li className="footer__item">
          <Link className="footer__link underline hover:no-underline">
            Services
          </Link>{" "}
          |
        </li>
        <li className="footer__item">
          <Link className="footer__link underline hover:no-underline">
            Blog
          </Link>{" "}
          |
        </li>
        <li className="footer__item">
          <Link className="footer__link underline hover:no-underline">
            Gallery
          </Link>{" "}
          |
        </li>
        <li className="footer__item">
          <Link className="footer__link underline hover:no-underline">
            Contact Us
          </Link>
        </li>
      </ul>
      <br />
      <div>
        <span>Copyright © 2048 </span>
        <Link className="underline hover:no-underline">Your Company Name</Link>
      </div>
    </footer>
  );
};

export default Footer;
