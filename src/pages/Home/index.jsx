import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper/modules";

// styles
import "./style.css";
import { Link } from "react-router-dom";

const Home = () => {
  const sliderInfo = [
    {
      sliderImg: "images/content_slider/image1.jpg",
      sliderTitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      sliderDesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt condimentum lacus. Pellentesque ut diam...,",
    },
    {
      sliderImg: "images/content_slider/image2.jpg",
      sliderTitle: "Vestibulum ante ipsum primis in faucibus orci luctus et",
      sliderDesc:
        "Vestibulum leo quam, accumsan nec porttitor a, euismod ac tortor. Sed ipsum lorem, sagittis non egestas id, suscipit....",
    },
    {
      sliderImg: "images/content_slider/image3.jpg",
      sliderTitle: "Nullam commodo, lorem id varius hendrerit",
      sliderDesc:
        "Nulla arcu turpis, ultricies a tempor at, vehicula consequat mi. Vivamus venenatis dui eget lacus adipiscing ornare. Praesent ultrices molestie nulla at semper. Morbi turpis lacus.....",
    },
    {
      sliderImg: "images/content_slider/image4.jpg",
      sliderTitle: "Etiam congue, leo sit amet iaculis interdum",
      sliderDesc:
        "Quisque sed orci ut lacus viverra interdum ornare sed est. Donec porta, erat eu pretium luctus, leo augue sodales....",
    },
  ];
  const sliderInfoSmall = [
    {
      sliderImg: "images/content_slider/image1-small.jpg",
      sliderDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      sliderImg: "images/content_slider/image2-small.jpg",
      sliderDesc: " Vestibulum ante ipsum primis in faucibus orci luctus et",
    },
    {
      sliderImg: "images/content_slider/image3-small.jpg",
      sliderDesc: "Nullam commodo, lorem id varius hendrerit",
    },
    {
      sliderImg: "images/content_slider/image4-small.jpg",
      sliderDesc: "Etiam congue, leo sit amet iaculis interdum",
    },
  ];

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      {/* Hero Slider */}
      <section className="hero w-full border-[0.5rem] border-[#e6d8e0] py-[0.62rem] px-[1.5rem] mb-[2.4rem]">
        <div className="flex items-center gap-[1.3rem]">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            autoplay={true}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className="mySwiper2"
          >
            {sliderInfo.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img.sliderImg} />
                <div className="swiper-info absolute text-left top-[17.78rem] left-0 w-full h-[7rem]">
                  <h3 className="text-[1.8rem] p-[0.5rem] text-white">
                    {img.sliderTitle}
                  </h3>
                  <p className="text-[1.1rem] text-[#f0f0f0] mx-[0.5rem] mt-[-0.5rem] leading-[1.4]">
                    {img.sliderDesc}
                    <Link>read more</Link>
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {sliderInfoSmall.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img.sliderImg} />
                <Link className="text-[1.1rem] text-left underline leading-[1.6]">
                  {img.sliderDesc}
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Services Box */}
      <section className="services-box pb-[3.5rem] border-b-[1px] border-[#ccc] mb-[1.9rem]">
        <ul className="services-box__list flex justify-between gap-[3rem]">
          <li className="services-box__item  w-[28rem]">
            <h3 className="services-box__title pt-[0.5rem] pl-[4.5rem] pb-[1rem] text-[2.2rem] text-[#b15387] mb-[0.7rem]">
              Web Design
            </h3>
            <p>
              Maecenas non turpis ipsum, viverra posuere sem. Ut vestibulum
              dictum tellus, ac lacinia lacus blandit eu. Etiam vitae metus vel
              massa consectetur vehicula. In sed lectus mauris.
            </p>
            <Link className="services-box__btn ml-auto block w-[8.2rem] h-[2.2rem] pt-[2px] text-[#492545] font-bold text-center hover:text-white">
              More
            </Link>
          </li>
          <li className="services-box__item  w-[28rem]">
            <h3 className="services-box__title2 pt-[0.5rem] pl-[4.5rem] pb-[1rem] text-[2.2rem] text-[#b15387] mb-[0.7rem]">
              Site Monitoring
            </h3>
            <p>
              Phasellus posuere lacinia enim sollicitudin congue. Sed volutpat
              urna vitae sapien sodales pellentesque. Integer et massa libero.
              Duis bibendum neque quis lectus vulputate blandit.
            </p>
            <Link className="services-box__btn ml-auto block w-[8.2rem] h-[2.2rem] pt-[2px] text-[#492545] font-bold text-center hover:text-white">
              More
            </Link>
          </li>
          <li className="services-box__item  w-[28rem]">
            <h3 className="services-box__title3 pt-[0.5rem] pl-[4.5rem] pb-[1rem] text-[2.2rem] text-[#b15387] mb-[0.7rem]">
              Global Reaching
            </h3>
            <p>
              Vivamus condimentum elementum arcu, ac fermentum lectus porttitor
              sed. Praesent ornare feugiat condimentum. Praesent sagittis metus
              id magna adipiscing convallis.
            </p>
            <Link className="services-box__btn ml-auto block w-[8.2rem] h-[2.2rem] pt-[2px] text-[#492545] font-bold text-center hover:text-white">
              More
            </Link>
          </li>
        </ul>
      </section>
      {/* Home post */}
      <section className="home-post flex justify-between">
        <div className="w-[45rem] pr-[2.9rem] border-r-[1px]">
          <h3 className="text-[2.8rem] mb-[0.7rem] pt-[1rem] pb-[1.5rem] text-black">
            Welcome to Pink Business
          </h3>
          <img
            src="images/templatemo_image_01.jpg"
            alt=""
            className="p-[0.6rem] border-[1px] border-[#333] mb-[1rem]"
          />
          <p className="mb-[1.5rem]">
            <em className="text-[#0d99d3]">
              Nam at arcu libero, ut venenatis elit. Nulla eget risus turpis,
              non aliquet dui. Vivamus augue felis, ultricies elementum
              convallis non, ornare vitae urna.
            </em>
          </p>
          <p className="mb-[1.5rem]">
            Pink Business is free website template by templatemo. Morbi et nisi
            eros, ut venenatis ipsum. Suspendisse ut mauris justo, semper
            posuere ipsum. Sed in urna diam. Ut pharetra odio sed purus molestie
            dapibus cursus lacus sodales. Nunc tincidunt malesuada lorem sed
            lobortis. Cras mauris turpis, vestibulum vitae bibendum non, commodo
            dapibus quam. Morbi euismod viverra leo ut condimentum. Validate{" "}
            <Link className="underline text-[#0d99d3] hover:text-[#CC3399] hover:no-underline">
              XHTML
            </Link>{" "}
            &{" "}
            <Link className="underline text-[#0d99d3] hover:text-[#CC3399] hover:no-underline">
              CSS
            </Link>
            .
          </p>
          <Link className="services-box__btn ml-auto block w-[8.2rem] h-[2.2rem] pt-[2px] text-[#492545] font-bold text-center hover:text-white">
            More
          </Link>
        </div>
        <div className="w-[42rem]">
          <h3 className="text-[2.8rem] mb-[0.8rem] pt-[1rem] pb-[1.5rem] text-black">
            Blog Posts
          </h3>
          <ul className="flex flex-col gap-[3rem]">
            <li className="home-post__item w-full flex gap-[1.8rem]">
              <div className="date w-[6.2rem] h-[6.2rem] text-white font-bold text-center text-[2.6rem]">
                29{" "}
                <span className="block text-[#d6b4c7] mb-[0.5rem] text-[1.2rem] mt-[-0.5rem]">
                  OCT
                </span>
              </div>
              <div>
                <h3 className="text-[#b15387] text-[2.2rem] mb-[0.8rem] mt-[-0.8rem]">
                  Sed rutrum, metus nec iaculis
                </h3>
                <div>
                  <strong>Posted by </strong>
                  <Link className="text-[#0eb4fa] underline hover:text-[#CC3399] hover:no-underline">
                    David
                  </Link>{" "}
                  |{" "}
                  <Link className="text-[#0eb4fa] underline hover:text-[#CC3399] hover:no-underline">
                    186 comments
                  </Link>
                </div>
              </div>
            </li>
            <li className="home-post__item w-full flex gap-[1.8rem]">
              <div className="date w-[6.2rem] h-[6.2rem] text-white font-bold text-center text-[2.6rem]">
                24{" "}
                <span className="block text-[#d6b4c7] mb-[0.5rem] text-[1.2rem] mt-[-0.5rem]">
                  OCT
                </span>
              </div>
              <div>
                <h3 className="text-[#b15387] text-[2.2rem] mb-[0.8rem] mt-[-0.8rem]">
                  Nam luctus ullamcorper volutpat
                </h3>
                <div>
                  <strong>Posted by </strong>
                  <Link className="text-[#0eb4fa] underline hover:text-[#CC3399] hover:no-underline">
                    Thomas
                  </Link>{" "}
                  |{" "}
                  <Link className="text-[#0eb4fa] underline hover:text-[#CC3399] hover:no-underline">
                    248 comments
                  </Link>
                </div>
              </div>
            </li>
            <li className="home-post__item w-full flex gap-[1.8rem]">
              <div className="date w-[6.2rem] h-[6.2rem] text-white font-bold text-center text-[2.6rem]">
                21{" "}
                <span className="block text-[#d6b4c7] mb-[0.5rem] text-[1.2rem] mt-[-0.5rem]">
                  OCT
                </span>
              </div>
              <div>
                <h3 className="text-[#b15387] text-[2.2rem] mb-[0.8rem] mt-[-0.8rem]">
                  Donec elementum lacus id neque
                </h3>
                <div>
                  <strong>Posted by </strong>
                  <Link className="text-[#0eb4fa] underline hover:text-[#CC3399] hover:no-underline">
                    Robert
                  </Link>{" "}
                  |{" "}
                  <Link className="text-[#0eb4fa] underline hover:text-[#CC3399] hover:no-underline">
                    284 comments
                  </Link>
                </div>
              </div>
            </li>
            <li className="home-post__item w-full flex gap-[1.8rem]">
              <div className="date w-[6.2rem] h-[6.2rem] text-white font-bold text-center text-[2.6rem]">
                16{" "}
                <span className="block text-[#d6b4c7] mb-[0.5rem] text-[1.2rem] mt-[-0.5rem]">
                  OCT
                </span>
              </div>
              <div>
                <h3 className="text-[#b15387] text-[2.2rem] mb-[0.8rem] mt-[-0.8rem]">
                  Pellentesque habitant tristique
                </h3>
                <div>
                  <strong>Posted by </strong>
                  <Link className="text-[#0eb4fa] underline hover:text-[#CC3399] hover:no-underline">
                    Jared
                  </Link>{" "}
                  |{" "}
                  <Link className="text-[#0eb4fa] underline hover:text-[#CC3399] hover:no-underline">
                    128 comments
                  </Link>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Home;
