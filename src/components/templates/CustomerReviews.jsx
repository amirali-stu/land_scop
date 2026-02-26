import { IoIosLeaf } from "react-icons/io";
import CommentTemplate from "./CommentTemplate";
import Slider from "./Slider";
import { SwiperSlide } from "swiper/react";

const breakpoints = {
  0: {
    slidesPerView: 1,
  },
  1023: {
    slidesPerView: 2,
  },
};

export default function CustomerReviews() {
  return (
    <section className="second-container w-full bg-[#0a250eb0] relative bg-custom_jangle pt-20 pb-30">
      <div className="landscop-container flex flex-col gap-y-10 ">
        <div className="w-full flex max-lg:flex-col max-lg:items-start max-lg:gap-y-8 items-center justify-between">
          <div className="text-white flex flex-col items-start gap-y-4">
            <p className="flex items-center flex-row-reverse gap-x-2">
              نظرات مشتریان
              <span>
                <IoIosLeaf size={24} className="text-[#97B545] rotate-40" />
              </span>
            </p>
            <h2 className="text-[45px] max-lg:text-[30px]">
              آنچه مشتریان ما در مورد خدمات ما می‌گویند
            </h2>
            <p className="text-[#FFFFFFCC] text-[17px] max-w-190">
              مشتریان ما، کیفیت و دقتی که در هر پروژه به کار می‌بریم را به خوبی
              توصیف می‌کنند. ببینید که چگونه ما به تبدیل رویاهای فضای باز به
              واقعیت، در هر باغ، کمک کرده‌ایم.
            </p>
          </div>
          <button className="flex h-12 items-center gap-x-4 text-white bg-primary-color rounded-lg p-4 cursor-pointer">
            مشاهده همه نظرات
          </button>
        </div>

        <Slider
          customStyles="customer-review_slider"
          gap={40}
          breakpointsCustom={breakpoints}
        >
          <SwiperSlide>
            <CommentTemplate />
          </SwiperSlide>
          <SwiperSlide>
            <CommentTemplate />
          </SwiperSlide>
          <SwiperSlide>
            <CommentTemplate />
          </SwiperSlide>
          <SwiperSlide>
            <CommentTemplate />
          </SwiperSlide>
        </Slider>
      </div>
    </section>
  );
}
