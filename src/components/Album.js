import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
import img7 from "../img/7.jpg";
import img8 from "../img/8.jpg";
import img9 from "../img/9.jpg";
import img10 from "../img/10.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Album = () => {
  const showingText1 = useRef(null);

  useEffect(() => {
    const el1 = showingText1.current;
    gsap.fromTo(
      el1,
      { opacity: 0, y: 200 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        scrollTrigger: {
          trigger: el1,
        },
      }
    );
  });

  return (
    <section className="section4 section">
      <div className="container">
        <div className="album" ref={showingText1}>
          <h2 className="album-title">앨범</h2>
          <Swiper
            slidesPerView={"auto"}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img10} />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Album;
