import React from "react";
import "./industery.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import card4 from "../../images/card4.png";
import card5 from "../../images/card5.png";
import card6 from "../../images/card6.png";
import Manufacturing from "../../images/industries/Manufacturing.webp";

const responsive = {
  // when window width is >= 320px
  360: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  // when window width is >= 480px
  640: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  // when window width is >= 640px
  1024: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
  1278: {
    slidesPerView: 4,
    spaceBetween: 30,
  },
};

const SliderCard = ({ text, image }) => {
  return (
    <div
      className={`industries-box web-Imbox`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="shadow-box box-shadow ">
        <div className="industries-text sliderbox text">{text}</div>
      </div>
    </div>
  );
};

const Industry = () => {
  return (
    <div className="expertise m-auto pb-12 lg:pt-8 lg:pb-24 bg-white px-6">
      <div className="flex flex-col max-w-xl text-center m-auto mb-10">
        <p className="text-black text-lg mt-8 pb-4">WE ARE SERVING IN</p>
        <h2 className="text-3xl lg:text-4xl font-bold pt-4 pb-12 text-center text-black">
          <span className="span-text">Industries</span> We Are Working With
        </h2>
      </div>
      <Swiper
        slidesPerView={4}
        loop
        autoplay
        spaceBetween={30}
        scrollbar={{ draggable: true }}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        breakpoints={responsive}
      >
        <SwiperSlide>
          <SliderCard text="Warehousing" image={card1.src} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard text="Manufacturing" image={card2.src} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard text="Food & Beverage" image={card3.src} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard text="Restaurants" image={card4.src} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard text="Hospitality" image={card5.src} />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard text="Event Services" image={card6.src} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Industry;
