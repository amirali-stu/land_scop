import { IoArrowBack } from "react-icons/io5";
import { FaComments, FaUser } from "react-icons/fa";

export default function OurBlogTemplate() {
  return (
    <article className="rounded-[25px] p-4 overflow-hidden relative md:max-w-[480px] max-md:w-full h-[394px] group">
      <img
        src="images/bg1.jpg"
        loading="lazy"
        className="absolute -z-10 inset-0 w-full h-full"
      />

      <a
        href="#"
        className="absolute top-10 left-10 scale-0 delay-75 -rotate-220 mr-auto transition-all duration-500 group-hover:scale-100 bg-white rounded-full w-15 h-15 flex-center"
      >
        <IoArrowBack size={28} />
      </a>

      <div className="relative z-10">
        {/* date */}
        <div className="w-[70px] group-hover:opacity-0 group-hover:mt-20 transition-all duration-500 overflow-hidden  bg-white rounded-md rounded-tl-[20px] rounded-br-[20px] flex-center flex-col">
          <h5 className="text-secondary-color text-[40px] flex-center font-bold">
            01
          </h5>
          <span className="bg-[#eaf0da] w-full text-xs flex-center py-1.5 text-secondary-color text-center">
            شهریور
          </span>
        </div>

        {/* description */}
        <h5 className="font-bold delay-100 mt-50 transition-all duration-500 group-hover:opacity-0 group-hover:-mb-20 text-white text-lg w-full text-wrap">
          <a>بازسازی بالکن رمزگشایی شد: از فضای کوچک شهری تا بهشت کوچک </a>
        </h5>
      </div>

      <div className="relative z-10 p-7">
        {/* describe hover */}
        <h5 className=" translate-y-0 transition-all opacity-0 duration-500 group-hover:opacity-100 group-hover:-translate-y-55  text-white text-[17px] w-full text-wrap">
          <a>بازسازی بالکن رمزگشایی شد: از فضای کوچک شهری تا بهشت کوچک </a>
        </h5>

        <p className="translate-y-0 opacity-0 transition-all duration-500 group-hover:-translate-y-50 group-hover:opacity-100  text-white text-[15px] font-normal ">
          هزینه‌های واقع‌بینانه محوطه‌سازی برای نوسازی باغ خود را کشف کنید. از
          قبل برنامه‌ریزی کنید، انتظارات را مدیریت کنید و باغ رویایی خود را با
          بودجه…
        </p>

        <div className="flex items-center gap-x-5 transition-all duration-500 translate-y-0 opacity-0 group-hover:-translate-y-40 group-hover:opacity-100">
          <p className="text-[12px] text-white flex flex-row-reverse items-center gap-x-2">
            توسط: سان کد
            <span>
              <FaUser />
            </span>
          </p>
          <p className="text-[12px] text-white flex flex-row-reverse items-center gap-x-2">
            0 نظر
            <span>
              <FaComments />
            </span>
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 group-hover:h-[70%] delay-200 rounded-b-[25px] transition-all rounded-tr-[25px] duration-500 opacity-100 left-0 right-auto w-full h-[40%] linear-gradient-custom-bg" />
    </article>
  );
}
