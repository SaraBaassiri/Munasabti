import React from "react";
import "./Home.css";

//Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

//Material Ui imports
import { Grid } from "@mui/material";

export default function Home() {
  React.useEffect(() => {
    document.title = "Munasabti | Home";
  });

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
            initialSlide={1}
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={420}
            className="mySwiper"
            loop
            navigation={true}
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
        </div>
      </div>
      <div className="HomeBanner" />
      <div className="ManageEvents">
        <h1>Manage your event</h1>
        <div className="ManageItems">
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <div>xs=2</div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}
