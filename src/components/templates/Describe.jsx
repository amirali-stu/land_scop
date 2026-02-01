import { FaLeaf } from "react-icons/fa";
import { IoIosLeaf } from "react-icons/io";

export default function Describe() {
  return (
    <div className="second-container w-full">
      <div className="flex items-center justify-center flex-col gap-y-4 my-28">
        <h2 className="text-4xl text-[#0A250E] font-bold">
          به فضاهای بیرونی خود جان ببخشید
        </h2>
        <p className="text-center text-[#0F3714B3] text-[17.5px] font-regular leading-7">
          “مناظر عالی خود به خود به وجود نمی‌آیند – آنها ابتدا در قلب تصور
          می‌شوند، سپس با دقت توسط دستانی که هم طبیعت و هم طراحی را درک می‌کنند،
          شکل می‌گیرند. هر باغ بازتابی آرام از مراقبت، خلاقیت و زمان است – فضایی
          زنده که در آن زیبایی به آرامی، متفکرانه و هدفمند رشد می‌کند.”
        </p>
      </div>

      <div className="flex text-center justify-between gap-x-10">
        <div className="w-[55%] relative">
          <img
            src="images/human.jpg"
            className="w-full h-full rounded-tr-[80px] rounded-bl-[80px]"
          />

          <div className="w-[220px] bg-secondary-color inline-flex flex-col max-w-full items-center pt-7 pb-11 absolute z-20 bottom-1/2 right-full translate-x-8/9 -translate-y-2/8 rounded-tr-[6px] rounded-bl-[6px] rounded-tl-[40px] rounded-br-[40px] overflow-hidden before:content-[''] before:block before:w-full before:h-full before:absolute before:bg-four-color before:opacity-60 before:z-10 before:rounded-full before:-right-1/2 before:top-1/2">
            <FaLeaf className="text-primary-color" size={40} />
            <h4 className="text-white text-[70px]">
              35<span className="text-2xl">+</span>
            </h4>
            <p className="text-white text-xl">سال باغی</p>
          </div>
        </div>
        <div className="w-[40%] flex items-start flex-col">
          <div className="w-full flex items-start flex-col border-b border-dashed border-b-[#97B545]">
            <p className="text-sm flex items-center gap-x-2 flex-row-reverse">
              ما که هستیم
              <span>
                <IoIosLeaf size={24} className="text-[#97B545] rotate-40" />
              </span>
            </p>
            <h4 className="text-4xl max-w-[500px] text-start">
              طراحی حرفه‌ای فضای سبز و مراقبت از باغ
            </h4>
            <p className="text-start my-10 text-[#0F3714CC]">
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
    </div>
  );
}
