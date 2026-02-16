import { IoLocationSharp } from "react-icons/io5";
import { MdAccessTimeFilled, MdMarkEmailUnread } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { ImInstagram } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="second-container w-full py-20 bg-[#1C4A21]">
      <div className="landscop-container flex max-lg:flex-col max-lg:gap-y-10 gap-x-20">
        {/* contact us */}
        <div className="flex flex-col gap-y-10">
          <img src="images/footer/landscop.png" loading="lazy" className="max-lg:w-[183px] max-lg:h-[40px]" />

          <ul className="flex flex-col gap-y-5">
            <li className="flex items-center gap-x-2">
              <div className="p-2 rounded-full bg-[#DDB01D] text-white flex-center">
                <IoLocationSharp size={24} />
              </div>

              <p className="text-white text-sm lg:max-w-40">
                تهران، خیابان آزادی، خیابان بهبودی، ساختمان 101
              </p>
            </li>
            <li className="flex items-center gap-x-2">
              <div className="p-2 rounded-full bg-[#DDB01D] text-white flex-center">
                <MdAccessTimeFilled size={24} />
              </div>

              <p className="text-white text-sm lg:max-w-40">
                شنبه تا چهارشنبه: ۹:۰۰ صبح تا ۷:۰۰ بعد از ظهر، آخر هفته‌ها تعطیل
              </p>
            </li>
            <li className="flex items-center gap-x-2">
              <div className="p-2 rounded-full bg-[#DDB01D] text-white flex-center">
                <MdMarkEmailUnread size={24} />
              </div>

              <a
                href="malto:amiralimosolo279@gmail.com"
                className="text-white text-sm lg:max-w-40"
              >
                amiralimosolo279@gmail.com
              </a>
            </li>
          </ul>

          <div className="bg-white w-full max-lg:max-w-[220px] rounded-full p-2 flex items-center gap-x-2  ">
            <div className="bg-primary-color text-white p-2 rounded-full">
              <BiSupport size={28} />
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="text-primary-color text-xs">تلفن پشتیبانی 24/7:</p>
              <a
                href="tel:025123456789"
                className="text-lg text-secondary-color"
              >
                025123456789
              </a>
            </div>
          </div>
        </div>
        {/* our services */}
        <div className="w-[254px] flex flex-col gap-y-10">
          <h4 className="text-white text-2xl before_line">خدمات ما</h4>

          <ul className="flex flex-col gap-y-4 text-[15px] text-white">
            <li>
              <a
                href="#"
                className="flex items-center gap-x-1 relative group transition-all duration-300 hover:pr-5"
              >
                <img
                  src="images/svgs/flash.svg"
                  className="-right-2 absolute scale-0 transition-all duration-300 group-hover:scale-100 group-hover:right-1"
                />
                <span>طراحی و برنامه ریزی منظر</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-x-1 relative group transition-all duration-300 hover:pr-5"
              >
                <img
                  src="images/svgs/flash.svg"
                  className="-right-2 absolute scale-0 transition-all duration-300 group-hover:scale-100 group-hover:right-1"
                />
                <span>راهکارهای آبیاری و زهکشی</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-x-1 relative group transition-all duration-300 hover:pr-5"
              >
                <img
                  src="images/svgs/flash.svg"
                  className="-right-2 absolute scale-0 transition-all duration-300 group-hover:scale-100 group-hover:right-1"
                />
                <span>بسته‌های نگهداری سبز</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-x-1 relative group transition-all duration-300 hover:pr-5"
              >
                <img
                  src="images/svgs/flash.svg"
                  className="-right-2 absolute scale-0 transition-all duration-300 group-hover:scale-100 group-hover:right-1"
                />
                <span>محوطه سازی و نورپردازی</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-x-1 relative group transition-all duration-300 hover:pr-5"
              >
                <img
                  src="images/svgs/flash.svg"
                  className="-right-2 absolute scale-0 transition-all duration-300 group-hover:scale-100 group-hover:right-1"
                />
                <span>ارتقاء باغ پشت بام</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="w-[259px]  flex flex-col gap-y-10">
          <h4 className="text-white text-2xl before_line">لینک‌های مفید</h4>

          <ul className="flex flex-col gap-y-4 text-[15px] text-white">
            <li>
              <a
                href="#"
                className="flex items-center gap-x-1 relative group transition-all duration-300 hover:pr-5 active-link"
              >
                <img
                  src="images/svgs/flash.svg"
                  className="svg-link_active -right-2 absolute scale-0 transition-all duration-300 group-hover:scale-100 group-hover:right-1"
                />
                <span>صفحه اصلی</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-x-1 relative group transition-all duration-300 hover:pr-5"
              >
                <img
                  src="images/svgs/flash.svg"
                  className="-right-2 absolute scale-0 transition-all duration-300 group-hover:scale-100 group-hover:right-1"
                />
                <span>درباره ما</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-x-1 relative group transition-all duration-300 hover:pr-5"
              >
                <img
                  src="images/svgs/flash.svg"
                  className="-right-2 absolute scale-0 transition-all duration-300 group-hover:scale-100 group-hover:right-1"
                />
                <span>چرا ما را انتخاب کنید</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-x-1 relative group transition-all duration-300 hover:pr-5"
              >
                <img
                  src="images/svgs/flash.svg"
                  className="-right-2 absolute scale-0 transition-all duration-300 group-hover:scale-100 group-hover:right-1"
                />
                <span>پروژه‌های ویژه</span>
              </a>
            </li>
          </ul>
        </div>
        {/* newsletter */}
        <div className="lg:w-[282px] flex flex-col gap-y-10">
          <h4 className="text-white text-2xl before_line">دریافت خبرنامه ما</h4>

          <p className="text-sm text-white">
            نکات، ایده‌ها و پیشنهادات باغبانی—مستقیماً در صندوق ورودی شما.
          </p>

          <ul className="flex items-center gap-x-5">
            <li className="rounded-full w-12.5 h-12.5 flex-center bg-[#eaf0da80] text-white transition-all duration-300 hover:bg-primary-color">
              <a href="#">
                <BsInstagram size={22} />
              </a>
            </li>
            <li className="rounded-full w-12.5 h-12.5 flex-center bg-[#eaf0da80] text-white transition-all duration-300 hover:bg-primary-color">
              <a href="#">
                <BsInstagram size={22} />
              </a>
            </li>
            <li className="rounded-full w-12.5 h-12.5 flex-center bg-[#eaf0da80] text-white transition-all duration-300 hover:bg-primary-color">
              <a href="#">
                <BsInstagram size={22} />
              </a>
            </li>
            <li className="rounded-full w-12.5 h-12.5 flex-center bg-[#eaf0da80] text-white transition-all duration-300 hover:bg-primary-color">
              <a href="#">
                <BsInstagram size={22} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
