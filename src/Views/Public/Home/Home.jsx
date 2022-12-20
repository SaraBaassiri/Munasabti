import React from "react";
import "./Home.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Home() {
  React.useEffect(() => {
    document.title = "Munasabti | Home";
  });

  return (
    <div>
      <div className="Hero">
        <div className="Hero-image">
          <div className="hero-text">
            <h1>
              Find exactly what you’re looking for or check out what’s out
              there! Your go-to platform for a memorable event experience.
            </h1>
          </div>
        </div>
      </div>

      <div className="FindProv">
        <div className="FindProv-text">
          <h1>Find Your Provider</h1>
          <p>
            Browse our unique selection of venues and value providers near you
          </p>
          <input type="text" placeholder="Search for vendors..." />
        </div>

        <div className="HomeSwiper">
          <Swiper
            slidesPerView={3}
            initialSlide={1}
            spaceBetween={20}
            centeredSlides={true}
            slidesPerGroup={1}
            // loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
          >
            <SwiperSlide>
              <div className="InnerSwiper"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="InnerSwiper"></div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="InnerSwiper"></div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
