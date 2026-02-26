import { IoIosLeaf } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import BestServiceSliderTemplate from "./BestServiceSliderTemplate";
import { SwiperSlide } from "swiper/react";
import { lazy, Suspense } from "react";
import SliderLoadingTemplate from "./SliderLoadingTemplate";

export default function BestService() {
  const Slider = lazy(() => import("./Slider"));

  return (
    <section className="second-container w-full bg-[#0F3714] bg-custom overflow-hidden py-20">
      <div className="landscop-container">
        {/* text */}
        <div className="w-full flex max-lg:flex-col max-lg:gap-y-5 items-center max-lg:items-start justify-between">
          <div className="text-white flex flex-col items-start gap-y-4">
            <p className="flex items-center flex-row-reverse gap-x-2">
              بهترین خدمات برای شما
              <span>
                <IoIosLeaf size={24} className="text-[#97B545] rotate-40" />
              </span>
            </p>
            <h2 className="text-[45px] max-lg:text-3xl">
              فضای شما. مراقبت ما. طبیعتاً بهتر
            </h2>
            <p className="text-[#FFFFFFCC] text-[17px] max-w-155">
              از طرح‌های رویایی گرفته تا نگهداری باشکوه، خدمات ما فضاهای بیرونی
              شما را به آثار هنری زنده تبدیل می‌کند.
            </p>
          </div>
          <button className="flex h-12 items-center gap-x-4 text-white bg-primary-color rounded-lg p-4 cursor-pointer">
            مشاهده همه خدمات
            <span>
              <IoArrowBack />
            </span>
          </button>
        </div>
        {/* slider */}

        {/* <BestServiceSlider /> */}
        <Suspense
          fallback={
            <div className="max-sm:flex-wrap gap-y-8 flex items-center my-8 gap-x-8">
              <SliderLoadingTemplate />
              <SliderLoadingTemplate />
              <SliderLoadingTemplate />
            </div>
          }
        >
          <Slider customStyles={"best-service_slider"}>
            <SwiperSlide>
              <BestServiceSliderTemplate />
            </SwiperSlide>
            <SwiperSlide>
              <BestServiceSliderTemplate />
            </SwiperSlide>
            <SwiperSlide>
              <BestServiceSliderTemplate />
            </SwiperSlide>
            <SwiperSlide>
              <BestServiceSliderTemplate />
            </SwiperSlide>
            <SwiperSlide>
              <BestServiceSliderTemplate />
            </SwiperSlide>
          </Slider>
        </Suspense>
      </div>
    </section>
  );
}
