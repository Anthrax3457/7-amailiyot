import React from "react";

// styles
import "./style.css";
// images 
import Map from '.././../../public/images/map_thumb.jpg'

const Contact = () => {
  return <div>
    <h2 className="text-black text-[2.8rem] mt-[-2px] mb-[2.3rem]">
      Contact Us
    </h2>
    <p className="contact__text"> <em className="text-[#0d99d3] ">
      In ac libero urna. Suspendisse sed odio ut mi auctor blandit. Duis luctus nulla metus, a vulputate mauris. </em> <span>Integer sed nisi sapien, ut gravida mauris. Nam et tellus libero. Cras purus libero, dapibus nec rutrum in, dapibus nec risus. Ut interdum mi sit amet magna feugiat auctor. Validate<span className="ml-[4px] text-[#0d99d3] underline hover:no-underline hover:text-[#CC3399]">XHTML</span>  &  <span className="underline hover:no-underline hover:text-[#CC3399] text-[#0d99d3]">CSS</span>. </span>
    </p>
    <div className="flex justify-start gap-[2.39em] items-start">
      <div>
        <div>
          <h3 className="text-black text-[2.2rem] font-normal mt-[39px] mb-[17px]">
            Quick Contact
          </h3>
        </div>
        <div>
          <p className="text-[14px] text-[#333] leading-[1.5em]  mt-[6px]">Name:</p>
          <input className="w-[310px] p-[5px] py-[3px] border-[#999] bg-[#eee] border mt-[4.5px] mb-[5.5spx]" type="text" name="" id="" />
          <p className="text-[14px] text-[#333] leading-[1.5em] mt-[7px]">Email:</p>
          <input className="w-[310px] p-[5px] py-[3px] border-[#999] bg-[#eee] border mt-[4.5px] mb-[5.5spx]" type="text" name="" id="" />
          <p className="text-[14px] text-[#333] leading-[1.5em]  mt-[7px]">Subject:</p>
          <input className="w-[310px] p-[5px] py-[3px] border-[#999] bg-[#eee] border mt-[4.5px] mb-[5.5spx]" type="text" name="" id="" />
          <p className="text-[14px] text-[#333] leading-[1.5em]  mt-[7px]">Message:</p>
          <textarea className="w-[418px] h-[200px] border-[#999] bg-[#eee] px-[16px] py-[3px] border mt-[7px] mb-[5px]" name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="flex justify-between items-center mt-[6px] w-[420px]">
          <h6 className="m-0 font-extrabold text-[1.09em] py-[3px] text-black px-[13px] border-[#999] bg-[#eee] border">Send</h6>
          <h6 className="m-0 font-extrabold text-[1.09em] py-[3px] text-black px-[13px] border-[#999] bg-[#eee] border">Reset</h6>
        </div>
      </div>
      <p className="w-[1px] mt-[4%] h-[500px] bg-gray-300"></p>
      <div className="">
        <h3 className="text-black text-[2.17rem] font-normal mt-[40px] mb-[10px]">
          Our Location
        </h3>
        <p className="font-extrabold text-[1.19em] py-[3px] text-black ">Mailing Address</p>
        <p className="text-[12px] leading-[1.5em]  text-[#333]">890-740 Quisque odio quam, <br />
          Pulvinar sit amet convallis eget, 10710 <br />
          Venenatis ut turpis</p>
        <p className="text-[12px] leading-[1.5em] mt-[20px] text-[#333]">Tel: 030-080-6600</p>
        <p className="text-[12px] leading-[1.5em] mt-[1.8px] text-[#333]">Fax: 030-080-5500</p>
        <h3 className="text-black text-[1.2em] font-extrabold mt-[42px] mb-[0px]">Where We Are</h3>
        <div className="border p-[5px] border-[#999]">
          <img src={Map} alt="Map images" />
        </div>
      </div>
    </div>
  </div>;
};

export default Contact;
