import { IoArrowBack } from "react-icons/io5";

export default function ContactUsNow() {
  return (
    <article className="max-w-[429px] h-full flex flex-col px-7.5 py-10 items-center justify-between bg-[#EAF0DA]">
      <div>
        <h3 className="text-[30px] text-center text-[#0F3714]">
          بیایید امروز صحبت کنیم!
        </h3>
        <p className="text-[#0F3714] text-[15px] text-center">
          “در لنداسکوپ، ما متعهد به ایجاد فضاهای سبز با دقت و با استفاده از
          روش‌های سازگار با محیط زیست، تضمین کیفیت و ارائه یک تجربه عالی هستیم.”
        </p>
      </div>
      <div className="w-full flex flex-col items-center gap-y-4">
        <div className="relative leading-13 w-full h-12.5 pr-8">
          <div className="w-full h-full bg-white px-8 rounded-full">
            <a href="tel:025123456789" className="">
              025123456789
            </a>
          </div>

          <span className="absolute bg-primary-color w-12.5 h-12.5 rounded-full top-0 flex-center **:text-white right-0 group">
            <a
              href="tel:025123456789"
              className="transition-all flex-center duration-300 group-hover:animate-pulse"
            >
              <IoArrowBack size={22} />
            </a>
          </span>
        </div>
        <div className="relative leading-13 w-full h-12.5 pr-8">
          <div className="w-full h-full bg-white px-8  rounded-full">
            <a href="malto:amiralimosolo279@gmail.com">
              amiralimosolo279@gmail.com
            </a>
          </div>

          <span className="absolute bg-primary-color w-12.5 h-12.5 rounded-full top-0 flex-center **:text-white right-0 group">
            <a
              href="tel:025123456789"
              className="transition-all flex-center duration-300 group-hover:animate-pulse"
            >
              <IoArrowBack size={22} />
            </a>
          </span>
        </div>
      </div>
      <button className="text-white bg-[#0F3714] rounded-lg px-7.5 py-4 cursor-pointer text-center">
        تماس رایگان
      </button>
    </article>
  );
}
