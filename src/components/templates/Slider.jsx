import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const breakpointsDefault = {
  0: {
    slidesPerView: 1,
  },
  640: {
    slidesPerView: 2,
  },
  1024: {
    slidesPerView: 3,
  },
};

export default function Slider({
  customStyles = "",
  gap = 16,
  breakpointsCustom = breakpointsDefault,
  children,
}) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        spaceBetween={gap}
        loop={true}
        modules={[Pagination]}
        className={customStyles}
        breakpoints={breakpointsCustom}
      >
        {children}
      </Swiper>
    </>
  );
}
