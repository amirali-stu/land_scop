import { IoIosLeaf } from "react-icons/io";
import OurBlogTemplate from "./OurBlogTemplate";

export default function OurBlogs() {
  return (
    <>
      <section className="second-container w-full py-20">
        <div className="landscop-container flex flex-col gap-y-10 ">
          <div className="w-full flex flex-col max-lg:items-start items-center text-secondary-color gap-y-2">
            <p className="flex font-bold items-center flex-row-reverse gap-x-2">
              وبلاگ و اخبار ما
              <span>
                <IoIosLeaf size={24} className="text-[#97B545] rotate-40" />
              </span>
            </p>
            <h2 className="text-[45px] max-lg:text-[30px]">
              نکات، داستان‌ها و به‌روزرسانی‌ها از دنیای سبز ما
            </h2>
            <p className="text-[#0F3714CC] text-center max-lg:text-start text-[17px] max-w-170">
              نکات تخصصی، روندهای باغبانی و ایده‌های الهام‌بخش را بررسی کنید تا
              به شما در ایجاد و حفظ فضاهای باز زیبا و سالم در تمام طول سال کمک
              کند.
            </p>
          </div>
          <div className="flex items-center gap-x-10 max-lg:hidden">
            <OurBlogTemplate />
            <OurBlogTemplate />
          </div>
        </div>
      </section>
    </>
  );
}
