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

const Album = () => {
  return (
    <section className="section4 section">
      <div className="container">
        <div className="album">
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
