import React from "react";

// styles
import "./style.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <>
      <section id="gallery">
        <h1 className="text-[2.8rem] mb-[2.2rem] text-black">Web Gallery</h1>
        <p className="gallery__text mb-[4.2rem] md:text-[12px]">
          Vivamus laoreet pharetra eros. In quam nibh, placerat ac, porta ac,
          molestie non, purus. Curabitur sem ante, condimentum non, cursus quis,
          eleifend non, libero. Nunc a nulla. Suspendisse vitae orci a ligula
          egestas bibendum. Vestibulum ultrices. Pellentesque tempus sapien nec
          sem commodo ullamcorper. Aenean neque. Cras feugiat. Validate{" "}
          <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#CC3399]">
            XHTML
          </Link>{" "}
          &{" "}
          <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#CC3399]">
            CSS
          </Link>
          .
        </p>
        <ul className="flex flex-wrap justify-between gap-y-[3rem]">
          <li className="w-[42rem] h-[11.6] flex justify-between items-center">
            <div className="w-[11rem] h-[11rem]">
              <Link to="images/gallery/image_01_b.jpg" className="w-full">
                <img
                  src="images/gallery/image_01.jpg"
                  alt=""
                  className="w-[11rem] h-[11rem] border-[5px] border-white"
                />
              </Link>
            </div>
            <div className="w-[30rem] h-[11.5rem]">
              <h5 className="text-[1.6rem] mb-[0.7rem] text-black font-bold">
                Church Site
              </h5>
              <p className="mb-[1.5rem]">
                Aliquam lacus turpis, dapibus eget, tincidunt eu, lobortis et,
                magna. Integer pellentesque dignissim diam. Quisque ornare
                pulvinar lorem.
              </p>
              <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#CC3399]">
                Visit site <span>»</span>
              </Link>
            </div>
          </li>
          <li className="w-[42rem] h-[11.6] flex justify-between items-center">
            <div className="w-[11rem] h-[11rem]">
              <Link to="images/gallery/image_02_b.jpg" className="w-full">
                <img
                  src="images/gallery/image_02.jpg"
                  alt=""
                  className="w-[11rem] h-[11rem] border-[5px] border-white"
                />
              </Link>
            </div>
            <div className="w-[30rem] h-[11.5rem]">
              <h5 className="text-[1.6rem] mb-[0.7rem] text-black font-bold">
                Tea & Meal
              </h5>
              <p className="mb-[1.5rem]">
                Nam sodales, pede vel dapibus lobortis, ipsum diam molestie
                risus, a vulputate risus nisl pulvinar lacus.
              </p>
              <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#CC3399]">
                Visit site <span>»</span>
              </Link>
            </div>
          </li>
          <li className="w-[42rem] h-[11.6] flex justify-between items-center">
            <div className="w-[11rem] h-[11rem]">
              <Link to="images/gallery/image_03_b.jpg" className="w-full">
                <img
                  src="images/gallery/image_03.jpg"
                  alt=""
                  className="w-[11rem] h-[11rem] border-[5px] border-white"
                />
              </Link>
            </div>
            <div className="w-[30rem] h-[11.5rem]">
              <h5 className="text-[1.6rem] mb-[0.7rem] text-black font-bold">
                3D Graphics
              </h5>
              <p className="mb-[1.5rem]">
                Donec nunc neque, pulvinar a, vestibulum eget, luctus id, orci.
                Pellentesque elementum enim a augue. Donec in nisi. Etiam sit
                amet turpis.
              </p>
              <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#CC3399]">
                Visit site <span>»</span>
              </Link>
            </div>
          </li>
          <li className="w-[42rem] h-[11.6] flex justify-between items-center">
            <div className="w-[11rem] h-[11rem]">
              <Link to="images/gallery/image_04_b.jpg" className="w-full">
                <img
                  src="images/gallery/image_04.jpg"
                  alt=""
                  className="w-[11rem] h-[11rem] border-[5px] border-white"
                />
              </Link>
            </div>
            <div className="w-[30rem] h-[11.5rem]">
              <h5 className="text-[1.6rem] mb-[0.7rem] text-black font-bold">
                Yellow Blog Theme
              </h5>
              <p className="mb-[1.5rem]">
                Donec enim enim, imperdiet quis, mollis a, elementum a, diam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                et nunc commodo ante.
              </p>
              <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#CC3399]">
                Visit site <span>»</span>
              </Link>
            </div>
          </li>
          <li className="w-[42rem] h-[11.6] flex justify-between items-center">
            <div className="w-[11rem] h-[11rem]">
              <Link to="images/gallery/image_05_b.jpg" className="w-full">
                <img
                  src="images/gallery/image_05.jpg"
                  alt=""
                  className="w-[11rem] h-[11rem] border-[5px] border-white"
                />
              </Link>
            </div>
            <div className="w-[30rem] h-[11.5rem]">
              <h5 className="text-[1.6rem] mb-[0.7rem] text-black font-bold">
                Tech Gadgets
              </h5>
              <p className="mb-[1.5rem]">
                Nullam rutrum volutpat justo in porta. Proin et lectus tellus.
                Pellentesque et quam massa. Aliquam erat volutpat.
              </p>
              <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#CC3399]">
                Visit site <span>»</span>
              </Link>
            </div>
          </li>
          <li className="w-[42rem] h-[11.6] flex justify-between items-center">
            <div className="w-[11rem] h-[11rem]">
              <Link to="images/gallery/image_06_b.jpg" className="w-full">
                <img
                  src="images/gallery/image_06.jpg"
                  alt=""
                  className="w-[11rem] h-[11rem] border-[5px] border-white"
                />
              </Link>
            </div>
            <div className="w-[30rem] h-[11.5rem]">
              <h5 className="text-[1.6rem] mb-[0.7rem] text-black font-bold">
                Garden Project
              </h5>
              <p className="mb-[1.5rem]">
                Fusce purus tellus, pulvinar quis feugiat sed, vulputate rhoncus
                mi. Mauris gravida mauris sit amet lectus luctus ac sollicitudin
                lacus convallis.
              </p>
              <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#CC3399]">
                Visit site <span>»</span>
              </Link>
            </div>
          </li>
        </ul>
      </section>
      <p className="h-[33px]"></p>
    </>
  );
};

export default Gallery;
