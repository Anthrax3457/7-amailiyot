import React from "react";

// styles
import "./style.css";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section id="blog" className="grid grid-cols-2 gap-x-[6rem] gap-y-[5rem]">
      <div className="w-[42rem] h-[26.6rem]">
        <h2 className="text-[#183544] mb-[1.2rem] text-[2.8rem]">
          Morbi sed nulla ac est cursus
        </h2>
        <div className="mb-[1rem]">
          October 30, 2048 | <strong>Author:</strong>{" "}
          <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#cc3399]">
            Martin
          </Link>{" "}
          | <strong>Category:</strong>{" "}
          <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#cc3399]">
            CSS Templates
          </Link>
        </div>
        <div className="flex mb-[3.1rem]">
          <img
            src="images/templatemo_image_04.jpg"
            alt=""
            className="w-[13rem] h-[13rem] mr-[2rem] border-[1px] border-white p-[0.4rem] shrink-0"
          />
          <p>
            Vestibulum auctor euismod mi et tincidunt. Mauris vitae ipsum diam,
            sagittis tempor velit. Sed fringilla accumsan mi, et gravida mauris
            elementum ac. Praesent vel felis id lectus bibendum tempor sed
            sagittis tellus. Morbi mattis, nunc at euismod luctus, lacus neque
            volutpat est, at pharetra lacus erat nec mauris
          </p>
        </div>
        <div className="flex justify-between">
          <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#cc3399]">
            128 comments
          </Link>
          <Link className="services-box__btn ml-auto block w-[8.2rem] h-[2.2rem] pt-[2px] text-[#492545] font-bold text-center hover:text-white">
            More
          </Link>
        </div>
      </div>
      <div className="w-[42rem] h-[26.6rem]">
        <h2 className="text-[#183544] mb-[1.2rem] text-[2.8rem]">
          Sed eu libero quis neque
        </h2>
        <div className="mb-[1rem]">
          October 25, 2048 | <strong>Author:</strong>{" "}
          <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#cc3399]">
            John
          </Link>{" "}
          | <strong>Category:</strong>{" "}
          <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#cc3399]">
            Web Design
          </Link>
        </div>
        <div className="flex mb-[2rem]">
          <img
            src="images/templatemo_image_05.jpg"
            alt=""
            className="w-[13rem] h-[13rem] mr-[2rem] border-[1px] border-white p-[0.4rem] shrink-0"
          />
          <p>
            Ut eu dolor nunc. Nam in nunc sed mi adipiscing lacinia suscipit
            eget tortor. Vivamus lacinia lectus in velit aliquet ac placerat
            magna euismod. In hac habitasse platea dictumst. Integer eget nibh
            eu libero cursus ultricies. Nam ac eros erat. Integer varius
            pulvinar molestie. Validate{" "}
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
        <div className="flex justify-between">
          <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#cc3399]">
            149 comments
          </Link>
          <Link className="services-box__btn ml-auto block w-[8.2rem] h-[2.2rem] pt-[2px] text-[#492545] font-bold text-center hover:text-white">
            More
          </Link>
        </div>
      </div>
      <div className="w-[42rem] h-[26.6rem]">
        <h2 className="text-[#183544] mb-[1.2rem] text-[2.8rem]">
          Fusce elit metus, elementum nec
        </h2>
        <div className="mb-[1rem]">
          October 20, 2048 | <strong>Author:</strong>{" "}
          <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#cc3399]">
            Thomas
          </Link>{" "}
          | <strong>Category:</strong>{" "}
          <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#cc3399]">
            Flash Templates
          </Link>
        </div>
        <div className="flex mb-[3.1rem]">
          <img
            src="images/templatemo_image_06.jpg"
            alt=""
            className="w-[13rem] h-[13rem] mr-[2rem] border-[1px] border-white p-[0.4rem] shrink-0"
          />
          <p>
            Nam at arcu libero, ut venenatis elit. Nulla eget risus turpis, non
            aliquet dui. Vivamus augue felis, ultricies elementum convallis non,
            ornare vitae urna. Morbi et nisi eros, ut venenatis ipsum.
            Suspendisse ut mauris justo, semper posuere ipsum. Sed in urna diam.
            Ut pharetra odio sed purus molestie dapibus cursus lacus sodales.
          </p>
        </div>
        <div className="flex justify-between">
          <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#cc3399]">
            209 comments
          </Link>
          <Link className="services-box__btn ml-auto block w-[8.2rem] h-[2.2rem] pt-[2px] text-[#492545] font-bold text-center hover:text-white">
            More
          </Link>
        </div>
      </div>
      <div className="w-[42rem] h-[26.6rem]">
        <h2 className="text-[#183544] mb-[1.2rem] text-[2.8rem]">
          Aliquam sit amet odio vitae dui
        </h2>
        <div className="mb-[1rem]">
          October 15, 2048 | <strong>Author:</strong>{" "}
          <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#cc3399]">
            Mary
          </Link>{" "}
          | <strong>Category:</strong>{" "}
          <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#cc3399]">
            Graphics
          </Link>
        </div>
        <div className="flex mb-[3.1rem]">
          <img
            src="images/templatemo_image_07.jpg"
            alt=""
            className="w-[13rem] h-[13rem] mr-[2rem] border-[1px] border-white p-[0.4rem] shrink-0"
          />
          <p>
            In hac habitasse platea dictumst. Pellentesque vel urna dui. Morbi
            et quam sed est ultrices cursus. Etiam laoreet consectetur nisi in
            vehicula. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Mauris ac nisl ut arcu hendrerit
            aliquet. Praesent eget porttitor dui.
          </p>
        </div>
        <div className="flex justify-between">
          <Link className="text-[#0eb4fa] underline hover:no-underline hover:text-[#cc3399]">
            137 comments
          </Link>
          <Link className="services-box__btn ml-auto block w-[8.2rem] h-[2.2rem] pt-[2px] text-[#492545] font-bold text-center hover:text-white">
            More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
