import { IoArrowBack } from "react-icons/io5";

export default function BestServiceSliderTemplate() {
  return (
    <article className="rounded-[25px] bg-white p-5 flex flex-col gap-y-4 group">
      <div className="rounded-2xl relative overflow-hidden h-[308px]">
        <img
          src="images/best-service/img1.webp"
          className=" object-cover duration-500 w-full h-full  transition-all group-hover:scale-[1.06]"
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <h4 className="text-[#0A250E] text-xl cursor-pointer">
          <a href="#">بسته‌های نگهداری فضای سبز</a>
        </h4>

        <p className="text-[#3E5F42] text-[15px]">
          مراقبت از باغ در تمام طول سال آسان شده است - از هرس کردن گرفته تا
          کنترل آفات، ما فضای سبز شما را سالم نگه…
        </p>

        <ul className="text-[#3E5F42] text-[15px] font-bold list-style-flash">
          <li>مراقبت از چمن فصلی</li>
          <li>خدمات هرس و کوتاه کردن</li>
          <li>مدیریت علف های هرز و آفات</li>
        </ul>
      </div>

      <div className="flex items-center gap-x-1">
        <div className="flex-1 border-t border-dashed border-t-primary-color h-0.5" />
        <a href="#" className="cursor-pointer">
          <div className="flex items-center gap-x-2 cursor-pointer text-sm">
            <p>اطلاعات بیشتر</p>
            <div className="bg-primary-color rounded-full p-1.5 flex-center text-white ">
              {" "}
              <IoArrowBack size={13} />{" "}
            </div>
          </div>
        </a>
      </div>
    </article>
  );
}
