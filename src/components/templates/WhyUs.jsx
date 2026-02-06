import { IoIosLeaf } from "react-icons/io";
import ContactUsNow from "./ContactUsNow";
import OurCommitments from "./OurCommitments";
import OurExperiences from "./OurExperiences";

export default function WhyUs() {
  return (
    <section className=" why-us_bg">
      <div className="second-container relative w-full bg-white h-[80%] flex flex-col gap-y-5">
        <img
          src="images/Vase.webp"
          className="absolute -right-8 top-0"
          loading="lazy"
        />
        <img
          src="images/our/plant2.png"
          className="absolute left-20 top-100"
          loading="lazy"
        />

        <div className="relative z-10 flex items-center justify-between -mt-10 px-10">
          <div className="text-black flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-4 mt-20">
              <p className="flex items-center gap-x-2">
                <span>
                  <IoIosLeaf size={24} className="text-[#97B545] rotate-40" />
                </span>
                بهترین خدمات برای شما
              </p>
              <h2 className="text-[45px]">چرا ما را انتخاب کنید</h2>
            </div>
            <p className="text-[#0F3714CC] text-[15px] max-w-140">
              ما خلاقیت، دقت و کیفیت را به هر فضایی می‌آوریم. با اشتیاق به فضای
              سبز، رویاهای باغ را به واقعیت تبدیل می‌کنیم – به زیبایی، با
              اطمینان و ساخته شده برای ماندگاری در طول فصول، سبک‌ها و لحظات
              روزمره.
            </p>

            <ul className="list-style-tick flex flex-col items-start gap-y-3 mr-6">
              <li className="!text-black">
                متعهد به ارائه کار و مواد با کیفیت
              </li>
              <li className="!text-black">
                تضمین ارتباط شفاف و صادقانه در سراسر سازمان
              </li>
              <li className="!text-black">ارائه خدمات جامع از طراحی تا اجرا</li>
            </ul>

            <button className="bg-[#97b545] text-white max-w-[140px] px-6 py-3.5 rounded-md text-[14px] transition-all duration-500 hover:bg-[#0f3714] hover:text-white cursor-pointer">
              اطلاعات بیشتر
            </button>
          </div>
          <img
            src="images/friends.webp"
            className="rounded-[25px] w-[600px] h-[507px]"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 mt-20 !min-h-[438px] overflow-hidden flex items-center rounded-[25px]">
          <OurExperiences />
          <OurCommitments />
          <ContactUsNow />
        </div>
      </div>
    </section>
  );
}
