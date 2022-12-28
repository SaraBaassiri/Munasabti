import React from "react";
import "./Vendors.css";
import { useNavigate } from "react-router-dom";

//Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";

//material UI Imports
import { Grid, Rating } from "@mui/material";

export default function Vendors() {
  const navigate = useNavigate();
  const swiperRef = React.useRef(null);

  React.useEffect(() => {
    document.title = "Munasabti | Vendors";
  }, []);

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
      image: "/images/Temp.png",
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
        <input type="text" placeholder="Enter text here..." />

        <div className="VendorSwiper">
          <Swiper
            ref={swiperRef}
            initialSlide={2}
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={"auto"}
            spaceBetween={100}
            className="mySwiperVendor"
            slideActiveClass="VendorSwiper-ActiveSlide"
            onActiveIndexChange={(swiper) => {
              console.log(swiper.activeIndex);
            }}
            loop={tempData.length > 1 ? true : false}
            navigation={true}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow, Navigation]}
          >
            {tempData.map((item) => (
              <SwiperSlide
                key={item.id}
                onClick={() => {
                  navigate("/vendors/" + item.name);
                }}
              >
                <div className="VendorSwiper-Container">
                  <h1>{item.name}</h1>
                  <div className="VendorSwiperImage">
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
            className="SlideLeftVendor"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </div>
          <div
            onClick={() => {
              swiperRef.current.swiper.slideNext();
            }}
            className="SlideRightVendor"
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
      <div className="TopVendors">
        <h2>Our Top Vendors</h2>
        <div className="VendorGrid">
          <Grid
            container
            justifyContent={{ xs: "center" }}
            spacing={{ xs: 2, md: 4 }}
            columns={{ xs: 2, sm: 8, md: 12 }}
          >
            {Array.from(Array(8)).map((item, index) => (
              <Grid item xs={2} sm={4} md={3}>
                <div
                  className="gridVendor"
                  onClick={() => {
                    navigate("/vendor/" + index);
                  }}
                >
                  <img src="/images/vendorFiller.png" alt="" />
                  <div>
                    <h2>thingy {index}</h2>
                    <p>Location</p>
                    <div className="InnerVendorGrid">
                      <Rating
                        size="small"
                        name="read-only"
                        value={0}
                        precision={0.5}
                        readOnly
                        className="Rating"
                      />
                      <p>{index} reviews</p>
                    </div>
                  </div>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div className="vendorRegister">
        <h2>Register your business with us</h2>
        <p>For venues, vendors, and value providers</p>
        <div className="RegisterBus">
          <div className="RegisterImage">
            <div className="RgeisterVendorInner">
              <h1>Get Listed</h1>
              <p>
                We’re always on the look out for caterers with a passion for
                taste, spaces with an affinity for the magical, and entertainers
                with an ability to uplift crowds. Create your account to start
                accepting requests and benefit from our CRM & quotation
                platforms! Growing your client base one conversion at a time
              </p>
              <button>Register Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
