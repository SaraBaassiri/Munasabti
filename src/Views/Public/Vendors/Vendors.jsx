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
      name: "Souvenirs",
      image: "/images/Souvenir.png",
    },
    {
      id: 2,
      name: "Event Planner",
      image: "/images/EventPlanner.png",
    },
    {
      id: 3,
      name: "Catering",
      image: "/images/Catering.png",
    },
    {
      id: 4,
      name: "Venue",
      image: "/images/Venues.png",
    },
    {
      id: 5,
      name: "Entertainment",
      image: "/images/Entertainment.png",
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

        <div className="VendorSwiper">
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
                <div className="VendorSwiper-Container">
                  <h1>{item.name}</h1>
                  <img src={item.image} alt={item.name} />
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
