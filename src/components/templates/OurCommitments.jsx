import { IoArrowBack } from "react-icons/io5";

export default function OurCommitments() {
  return (
    <article className="max-w-[429px] h-full flex flex-col px-7.5 py-10 items-center justify-between bg-[#0F3714]">
      <div>
        <h3 className="text-[30px] text-center text-white">تعهدات ما</h3>
        <p className="text-white text-[15px] text-center">
          “در لنداسکوپ، ما متعهد به ایجاد فضاهای سبز با دقت و با استفاده از
          روش‌های سازگار با محیط زیست، تضمین کیفیت و ارائه یک تجربه عالی هستیم.”
        </p>
      </div>
      <div className="w-full flex justify-between items-center gap-x-2">
        <div className="flex items-center gap-x-2">
          <img
            src="images/kianmehr.webp"
            className="w-[60px] h-[60px] rounded-full"
          />
          <div className="flex flex-col gap-y-1">
            <p className="text-white text-[17px]">کیانمهر ایرانی</p>
            <span className="text-white italic text-xs">مدیرعامل شرکت</span>
          </div>
        </div>
        <img src="images/svgs/signature.svg" />
      </div>
      <button className="text-[#0F3714] bg-white rounded-lg px-7.5 py-4 flex items-center gap-x-3 cursor-pointer text-center">
        چگونه کار می‌کنیم
        <span>
          <IoArrowBack size={22} />
        </span>
      </button>
    </article>
  );
}
