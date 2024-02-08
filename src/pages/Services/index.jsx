import React from "react";

// styles
import "./style.css";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <section id="service" className="flex justify-between">
        <div className="service__first w-[45rem] pr-[2.9rem] border-r">
          <div className="mb-[4.2rem]">
            <h2 className="text-black text-[2.8rem] mt-[-2px] mb-[2.3rem]">
              Service Overview
            </h2>
            <p className="mb-[1.5rem]">
              <em className="text-[#0d99d3]">
                Maecenas quis nibh dolor, pharetra tristique tellus. Nunc at
                posuere ligula. Suspendisse in tempus lectus. Nulla laoreet odio
                eu ligula rhoncus.
              </em>
            </p>
            <div className="block mb-[1.5rem]">
              <div className="float-left p-[0.6rem] border-[1px] border-[#333] bg-white mt-[0.3rem] mr-[1.5rem]">
                <img src="images/templatemo_image_02.jpg" alt="" />
              </div>
              <p className=" text-justify">
                Nam at arcu libero, ut venenatis elit. Nulla eget risus turpis,
                non aliquet dui. Vivamus augue felis, ultricies elementum
                convallis non, ornare vitae urna. Morbi et nisi eros, ut
                venenatis ipsum. Suspendisse ut mauris justo, semper posuere
                ipsum. Sed in urna diam. Ut pharetra odio sed purus molestie
                dapibus cursus lacus sodales. Nunc tincidunt malesuada lorem sed
                lobortis.
              </p>
            </div>
            <Link className="services-box__btn ml-auto block w-[8.2rem] h-[2.2rem] pt-[2px] text-[#492545] font-bold text-center hover:text-white">
              More <span>»</span>
            </Link>
          </div>
          <div className="mb-[0rem]">
            <h2 className="text-black text-[2.8rem] mt-[-2px] mb-[2.3rem]">
              Quality Services
            </h2>
            <p className="">
              <em className="text-[#0d99d3]">
                Nullam at erat ipsum, quis tincidunt mauris. Nunc sit amet
                sapien eget eros iaculis hendrerit quis a enim. Vestibulum at
                leo ante, vel auctor velit.
              </em>
            </p>
            <ul className="pt-[1.7rem] pb-[2rem] pl-[2rem] text-[#507a19] flex flex-col gap-y-[1.4rem]">
              <li className="service__list pb-[0.3rem] pl-[2.5rem]">
                Sed nec eros egestas nisl
              </li>
              <li className="service__list pb-[0.3rem] pl-[2.5rem]">
                Morbi sed nulla ac est cursus
              </li>
              <li className="service__list pb-[0.3rem] pl-[2.5rem]">
                Curabitur ullamcorper nibh
              </li>
              <li className="service__list pb-[0.3rem] pl-[2.5rem]">
                Pellentesque adipiscing
              </li>
              <li className="service__list pb-[0.3rem] pl-[2.5rem]">
                Morbi sed nulla ac est cursus
              </li>
            </ul>
          </div>
        </div>
        <div className="service__first w-[42rem]">
          <div className="mt-[0rem]">
            <h2 className="text-black text-[2.8rem] mt-[-2px] mb-[2.3rem]">
              Featured Services
            </h2>
            <div className="block mb-[1.8rem]">
              <div className="float-left p-[0.6rem] border-[1px] border-[#333] bg-white mt-[0.3rem] mr-[1.5rem]">
                <img src="images/templatemo_image_03.jpg" alt="" />
              </div>
              <p className=" text-justify">
                Vivamus consectetur, enim quis convallis semper, est leo
                ullamcorper nibh, quis eleifend nisl odio in lacus. Sed rutrum,
                metus nec iaculis accumsan, justo urna rhoncus sapien, sit amet
                vulputate ante purus at justo. In hac habitasse platea dictumst.
                Pellentesque vel urna dui. Morbi et quam sed est ultrices
                cursus. Etiam laoreet consectetur nisi in vehicula. Validate{" "}
                <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#CC3399]">
                  XHTML
                </Link>{" "}
                &{" "}
                <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#CC3399]">
                  CSS
                </Link>
                .
              </p>
            </div>
            <Link className="services-box__btn ml-auto block w-[8.2rem] h-[2.2rem] pt-[2px] text-[#492545] font-bold text-center hover:text-white">
              More <span>»</span>
            </Link>
          </div>
          <div className="mb-[0rem]">
            <h2 className="text-black text-[2.8rem] mt-[1.4em] mb-[0rem]">
              Testimonial
            </h2>
            <blockquote className="italic ml-[1rem] mr-[4rem] mt-[2.2rem] mb-[4.4rem]">
              <p className="mb-[1.5rem]">
                Aenean eu aliquam erat. Ut commodo, nulla eu pellentesque
                mollis, odio ante condimentum augue, eget facilisis dui magna ut
                ligula. Quisque sit amet adipiscing libero. Donec et tellus
                vitae velit pharetra lobortis.
              </p>
              <cite className="font-bold text-[#333]">
                Paul - <span className="text-[#7b949f]">Senior Webmaster</span>
              </cite>
            </blockquote>
            <blockquote className="italic ml-[1rem] mr-[4rem] mt-[1.2rem] mb-[1.5rem]">
              <p className="mb-[1.5rem]">
                Nulla fermentum diam ut magna condimentum quis suscipit nisi
                congue. Phasellus sodales iaculis elementum. Etiam est lectus,
                condimentum non adipiscing sed, dictum id arcu. Pellentesque
                ultricies sollicitudin metus.
              </p>
              <cite className="font-bold text-[#333]">
                Mike - <span className="text-[#7b949f]">Web Designer</span>
              </cite>
            </blockquote>
            <Link className="services-box__btn ml-auto block w-[8.2rem] h-[2.2rem] pt-[2px] text-[#492545] font-bold text-center hover:text-white">
              More <span>»</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
