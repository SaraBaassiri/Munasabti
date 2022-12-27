import React from "react";
import "./Vendors.css";
import { useNavigate } from "react-router-dom";

//Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Vendors() {
  const navigate = useNavigate();
  const swiperRef = React.useRef(null);

  const tempData = [
    {
      id: 1,
      name: "Venue 1",
      image: "/images/SliderImageTemp.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: 2,
      name: "Venue 2",
      image: "/images/SliderImageTemp.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
    {
      id: 3,
      name: "Venue 3",
      image: "/images/SliderImageTemp.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    },
  ];

  return (
    <div>
      <div className="VendorHero">
        <div className="VendorImage">
          <div className="VendorText">
            <h1>
              Find your perfect match and cover every detail of your event
            </h1>
          </div>
        </div>
      </div>
      <div className="VendorEvents">
        <h2>For Events Across Lebanon</h2>
        <p>Find suppliers and value providers near you wherever you are</p>
        <input type="text" placeholder="Enter text here..."/>

        <div className="HomeSwiper">
          <Swiper
            ref={swiperRef}
            initialSlide={1}
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={370}
            className="mySwiper"
            loop={tempData.length > 1 ? true : false}
            navigation={true}
            height={500}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 400,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation]}
          >
            {tempData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="HomeSwiper-Container">
                  <div className="HomeSwiper-slide-text">
                    <h1>{item.name}</h1>
                    <p>{item.description}</p>
                  </div>
                  <div className="HomeSwiper-slide-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div
            onClick={() => {
              swiperRef.current.swiper.slidePrev();
            }}
            className="SlideLeft"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div
            onClick={() => {
              swiperRef.current.swiper.slideNext();
            }}
            className="SlideRight"
          >
            <i class="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <div className="SliderButton">
          <button
            className="underSliderButton"
            onClick={() => {
              navigate("/vendors");
            }}
          >
            VIEW ALL
          </button>
        </div>
      </div>
    </div>
  )
}
