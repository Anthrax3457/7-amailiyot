import React from "react";

// styles
import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="h-[12rem] mx-auto text-center pt-[2rem]">
      <Link className="">
        <h1 className="text-[4rem] text-[#371233]">
          <strong className="text-[#fff]">Pink </strong>
          Business
        </h1>
        <span className="block text-[1.6rem] text-white mt-[-1.4rem]">
          Free CSS Template for everyone
        </span>
      </Link>
    </header>
  );
};

export default Header;
