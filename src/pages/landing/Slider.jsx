import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Slide from "./Slide";

const Slider = () => {
  return (
    <Swiper
      spaceBetween={0}
      autoplay={{
        delay: 3000, // Increased delay to 3 seconds
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      style={{ height: "100%", borderRadius: "2rem" }}
    >
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{ width: "100%", height: "100%", backgroundColor: "white" }}
        >
          Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{ width: "100%", height: "100%", backgroundColor: "white" }}
        >
          Slide 3
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div
          style={{ width: "100%", height: "100%", backgroundColor: "white" }}
        >
          Slide 4
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
