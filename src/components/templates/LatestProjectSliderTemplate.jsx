import { IoIosLeaf } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import { FaLocationDot, FaPeopleGroup } from "react-icons/fa6";

function LatestProjectSliderTemplate() {
  return (
    <article className="w-[373px] h-[370px] relative bg-red-600 rounded-[25px] p-5  overflow-hidden group">
      <img
        src="images/our/img1.webp"
        className="w-full h-full absolute inset-0"
        loading="lazy"
      />

      <div className="absolute delay-75 w-full h-full inset-0 opacity-0 invisible bg-[#0f371480] group-hover:opacity-100 group-hover:visible transition-all duration-500" />

      <div className="relative z-10 space-y-5 ">
        <a
          href="#"
          className="scale-0 delay-75 -rotate-220 mr-auto transition-all duration-500 group-hover:scale-100 bg-white rounded-full w-15 h-15 flex-center"
        >
          <IoArrowBack size={28} />
        </a>

        <div className="w-auto mt-5 delay-100 inline-flex translate-y-10 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 px-4.5 py-2 text-sm rounded-lg bg-primary-color text-white items-center gap-x-1">
          <a href="#">باغ پشت بام</a>
          <span>
            <IoIosLeaf size={16} className="rotate-90" />
          </span>
          <a href="#">طراحی منظر</a>
        </div>

        <h4 className="text-white delay-200 text-xl opacity-0 transition-all duration-500 translate-x-10 group-hover:opacity-100 group-hover:translate-x-0">
          حیاط آبی زن
        </h4>

        <p className="text-[#ffffffcc] delay-75  text-[15px] transition-all duration-500 leading-7 opacity-0 -translate-y-10 group-hover:opacity-100 group-hover:translate-y-0">
          حیاط مینیمالیستی با یک برکه کوی مرکزی، کاشت بامبو و نورپردازی ملایم
          فانوس برای یک خلوتگاه آرام در خانه و استراحتی آرامش‌بخش.{" "}
        </p>

        <ul className="**:text-[14px] delay-200 translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-white flex items-center gap-x-4">
          <li className="flex items-center gap-x-1">
            <FaPeopleGroup /> <span>برج اداری بلوم</span>
          </li>
          <li className="flex items-center gap-x-1">
            <FaLocationDot /> <span>خیابان ریجنت، پلاک 55، لندن</span>
          </li>
        </ul>
      </div>

      <div className="absolute bottom-10 delay-200 rounded-b-[25px] transition-all rounded-tr-[25px] duration-500 opacity-0 group-hover:opacity-100 group-hover:bottom-0 left-0 right-auto w-full h-[40%] linear-gradient-custom-bg" />
    </article>
  );
}

export default LatestProjectSliderTemplate;
