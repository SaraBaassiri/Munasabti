import React from "react";
import "./Home.css";
import { BsSearch } from "react-icons/bs";

//Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";

//Material Ui imports
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { db } from "../../../firebase";
import AnimatedRoutes from "../../../Components/AnimatedRoutes";

export default function Home() {
  const navigate = useNavigate();
  const swiperRef = React.useRef(null);
  const [showTopBtn, setShowTopBtn] = React.useState(false);
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    document.title = "Munasabti | Home";

    db.collection("Users")
      .where("isVendor", "==", true)
      .limit(3)
      .get()
      .then((querySnapshot) => {
        const tempData = [];
        querySnapshot.forEach((doc) => {
          tempData.push(doc.data());
        });
        setData(tempData);
      });

    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

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
    <AnimatedRoutes>
      <div>
        {showTopBtn && (
          <div
            className="ScrollToTop"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <i class="fa-solid fa-chevron-up"></i>
          </div>
        )}

        <div className="Hero">
          <div className="Hero-image">
            <div className="hero-text">
              <h1>
                Find exactly what you???re looking for or check out what???s out
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
            <div className="firstinp">
              <input type="text" placeholder="Search for vendors..." id="inp1"/>
              <input type="text" placeholder="in Where..." id="inp2"/>
              <BsSearch className="searchIcon" color="#0C3651" size={20}/>
            </div>
          </div>

          <div className="HomeSwiper">
            <Swiper
              ref={swiperRef}
              initialSlide={1}
              effect={"coverflow"}
              centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={370}
              className="mySwiperHome"
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
                      {/* {item?.isFeatured && (
                      <div className="HomeSwiper-slide-text-featured">
                        <p>Featured</p>
                      </div>
                    )} */}
                      <h1>{item.name}</h1>
                      <p>{item.description}</p>
                    </div>
                    <div className="HomeSwiper-slide-image">
                      <img
                        src={"/images/SliderImageTemp.png"}
                        alt={item.name}
                      />
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
        <div className="ManageEvents">
          <div className="HomeBanner">
            <img src="/images/Banner.png" alt="" />
          </div>
          <h1>Manage your event</h1>
          <div className="ManageItems">
            <Grid
              container
              justifyContent={{ xs: "center" }}
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={4} md={4}>
                <div className="grid">
                  <img src="/images/Filler1.png" alt="" />
                  <h4>Guest List</h4>
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <div className="grid">
                  <img src="/images/Filler2.png" alt="" />
                  <h4>Profile</h4>
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <div className="grid">
                  <img src="/images/Filler3.png" alt="" />
                  <h4>Chat</h4>
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <div className="grid">
                  <img src="/images/Filler4.png" alt="" />
                  <h4>My Events</h4>
                </div>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <div className="grid">
                  <img src="/images/Filler5.png" alt="" />
                  <h4>Manage Vendors</h4>
                </div>
              </Grid>
            </Grid>
          </div>
          <button className="planningButton">Start Planning</button>
        </div>
        <div className="moodboard">
          <h2>Moodboard</h2>
          <p>
            An intricately curated archive of our favorite events and sceneries
            to get you inspired!
          </p>
          <div className="moodboardImages">
            <div className="rows">
              <div className="imagesOne">
                <img src="/images/MB1.png" alt="" />
                <img src="/images/MB2.png" alt="" />
              </div>
              <div className="imagesTwo">
                <img src="/images/MB3.png" alt="" />
                <img src="/images/MB4.png" alt="" />
              </div>
              <div className="imagesThree">
                <img src="/images/MB5.png" alt="" />
                <img src="/images/MB6.png" alt="" />
              </div>
            </div>
            <button className="moodboardButton">View All</button>
          </div>
        </div>
      </div>
    </AnimatedRoutes>
  );
}
