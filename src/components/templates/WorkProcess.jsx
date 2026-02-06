import { IoIosLeaf } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";
import WorkProcessSteps from "./WorkProcessSteps";

export default function WorkProcess() {
  return (
    <section className="second-container w-full bg-[#0F3714] bg-custom overflow-hidden flex flex-col gap-y-30 py-20">
      <div className="w-full flex items-center justify-between">
        <div className="text-white flex flex-col items-start gap-y-4">
          <p className="flex items-center flex-row-reverse gap-x-2">
            فرآیند کاری ما
            <span>
              <IoIosLeaf size={24} className="text-[#97B545] rotate-40" />
            </span>
          </p>
          <h2 className="text-[45px]">پرورش ایده‌ها در فضاهای زندگی</h2>
          <p className="text-[#FFFFFFCC] text-[17px] max-w-155">
            اما با یک فرآیند گام به گام و واضح، محوطه‌سازی را آسان می‌کنیم. این
            فرآیند برای تبدیل ایده‌های شما به فضاهای سبز پررونق طراحی شده است.
          </p>
        </div>
        <button className="flex h-12 items-center gap-x-4 text-secondary-color bg-white rounded-lg p-4 cursor-pointer">
          مشاهده ویدئوی ما
          <span>
            <IoArrowBack />
          </span>
        </button>
      </div>
      <div className="relative flex items-center gap-x-20">
        <WorkProcessSteps />
        <img
          src="images/svgs/arrow-up.svg"
          className="absolute top-[55%] right-68 -translate-y-[50%] rotate-x-0 rotate-y-180"
        />
        <WorkProcessSteps />
        <img
          src="images/svgs/arrow-up.svg"
          className="absolute top-[50%] rotate-180 right-150"
        />
        <WorkProcessSteps />
        <img
          src="images/svgs/arrow-up.svg"
          className="absolute top-[55%] right-234 -translate-y-[50%] rotate-x-0 rotate-y-180"
        />
        <WorkProcessSteps />
      </div>
    </section>
  );
}
