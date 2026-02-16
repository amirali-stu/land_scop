import { FaLeaf } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";

export default function Describe() {
  return (
    <section className="max-xl:px-5 max-lg:px-8 max-md:px-4 landscop-container w-full lg:mx-auto flex flex-col lg:gap-y-24 gap-y-12 lg:my-20 my-10">
      <div className="flex items-center justify-center flex-col gap-y-4">
        <h2 className="text-[45px] max-lg:text-3xl text-[#0A250E] font-bold max-lg:text-center">
          به فضاهای بیرونی خود جان ببخشید
        </h2>
        <p className="text-center text-[#0F3714B3] text-[17.5px] font-regular leading-7">
          “مناظر عالی خود به خود به وجود نمی‌آیند – آنها ابتدا در قلب تصور
          می‌شوند، سپس با دقت توسط دستانی که هم طبیعت و هم طراحی را درک می‌کنند،
          شکل می‌گیرند. هر باغ بازتابی آرام از مراقبت، خلاقیت و زمان است – فضایی
          زنده که در آن زیبایی به آرامی، متفکرانه و هدفمند رشد می‌کند.”
        </p>
      </div>

      <div className="flex max-lg:flex-col max-lg:gap-y-10 text-center justify-between gap-x-10 lg:px-10">
        <div className="w-[55%] max-lg:w-full relative">
          <div className="w-full h-[600px] bg-describe bg-cover lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded-tr-[40px] rounded-bl-[40px]" />

          <div className="lg:w-[220px] w-[180px] bg-secondary-color inline-flex flex-col -gap-y-10 items-center pt-7 lg:pb-11 pb-8 absolute z-20 bottom-1/2 right-full lg:translate-x-8/9 translate-x-8/8 max-lg:px-10 lg:-translate-y-3/8 -translate-y-5/8 rounded-tr-[6px] rounded-bl-[6px] lg:rounded-tl-[40px] rounded-tl-[20px] lg:rounded-br-[40px] rounded-br-[20px] overflow-hidden before:content-[''] before:block before:w-full before:h-full before:absolute before:bg-four-color before:opacity-60 before:z-10 before:rounded-full before:-right-1/2 before:top-1/2">
            <FaLeaf className="text-primary-color lg:text-4xl text-2xl" />
            <h4 className="text-white lg:text-[70px] text-[60px]">
              35<span className="text-2xl max-lg:text-xl">+</span>
            </h4>
            <p className="text-white text-xl">سال باغی</p>
          </div>
        </div>
        <div className="w-[40%]  max-lg:w-full flex items-start flex-col">
          <div className="w-full flex items-start flex-col border-b border-dashed border-b-[#97B545]">
            <p className="text-sm flex items-center gap-x-2 flex-row-reverse">
              ما که هستیم
              <span>
                <IoIosLeaf size={24} className="text-[#97B545] rotate-40" />
              </span>
            </p>
            <h4
              className="lg:text-4xl text-3xl max-lg:text-center
             max-w-[500px] text-start"
            >
              طراحی حرفه‌ای فضای سبز و مراقبت از باغ
            </h4>
            <p className="text-start lg:my-10 my-5 text-[#0F3714CC]">
              در لنداسکوپ، ما عاشق خلق فضاهای بیرونی زیبایی هستیم که بتوانید هر
              روز از آنها لذت ببرید. با سال‌ها تجربه و اشتیاق واقعی به باغبانی،
              ما اینجا هستیم تا رویاهای باغبانی شما را با دقت، خلاقیت و لبخند به
              واقعیت تبدیل کنیم.
            </p>
          </div>
          <div className="w-full flex flex-col items-start">
            <ul className="list-style-tick flex flex-col items-start gap-y-3 mr-6 my-8">
              <li className="!text-black">اشتیاق واقعی برای طبیعت</li>
              <li className="!text-black">تخصص و تجربه اثبات شده</li>
              <li className="!text-black">خدمات شخصی‌سازی‌شده و متفکرانه</li>
            </ul>

            <button className="bg-[#97b545] text-white px-6 py-3.5 rounded-md text-[14px] transition-all duration-500 hover:bg-[#0f3714] hover:text-white cursor-pointer">
              اطلاعات بیشتر
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
