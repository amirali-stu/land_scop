import { BsStarFill } from "react-icons/bs";

export default function CommentTemplate() {
  return (
    <article className="relative lg:max-w-[600px] max-lg:w-full pt-[19px] px-10 pb-[57px] rounded-[25px] bg-white">
      <img
        src="images/user.webp"
        className="rounded-full w-25 h-25 absolute -top-7"
        loading="lazy"
      />
      <div className="flex max-sm:flex-wrap max-sm:justify-around max-sm:gap-y-2 items-center justify-between border-b border-dashed border-b-primary-color pb-8 pt-2.5 pr-28">
        <div className="flex items-center gap-x-5">
          <div className="text-secondary-color flex flex-col gap-y-1">
            <h5 className=" text-[17px] font-semibold">الناز رضایی مقدم</h5>
            <p className=" text-[15px] italic">ایران، سرای من</p>
          </div>
        </div>
        <div className="flex items-center gap-x-1 text-yellow-400">
          <BsStarFill size={18} />
          <BsStarFill size={18} />
          <BsStarFill size={18} />
          <BsStarFill size={18} />
          <BsStarFill size={18} />
        </div>
      </div>
      <p className="text-[15px] text-secondary-color font-normal leading-7 py-5">
        “تیم فوق‌العاده‌ای در کل. بسیار حرفه‌ای، مودب و خوش‌برخورد. ما از باغ
        جدیدمان بسیار راضی هستیم و مشتاقانه منتظریم که در فضای باز بنشینیم و از
        باغ زیبا و کم‌هزینه‌مان لذت ببریم. از همه افراد درگیر در این کار بسیار
        سپاسگزارم.”
      </p>

      <div className="absolute -bottom-4 left-10 text-primary-color">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="109"
          height="77"
          viewBox="0 0 109 77"
          fill="none"
        >
          <path
            d="M41.6057 14.1842C28.1956 16.886 18.5678 25.6667 18.5678 36.4737C20.9748 35.1228 24.0694 34.1096 28.1956 34.1096C38.8549 34.1096 47.4511 41.5395 47.4511 54.7105C47.4511 67.5439 38.511 77 24.7571 77C11.0032 77 2.13816e-06 65.8552 0 47.6184C0 22.9649 17.5363 3.37719 41.6057 0V14.1842Z"
            fill="url(#paint0_linear_283_58)"
          ></path>
          <path
            d="M103.155 14.1842C89.7445 16.886 80.1167 25.6667 80.1167 36.136C82.5237 34.7851 85.6183 34.1096 89.4006 34.1096C100.06 34.1096 109 41.5395 109 54.7105C109 67.5439 99.7161 77 86.306 77C72.2082 77 61.2051 65.8552 61.205 47.6184C61.205 22.9649 79.0852 3.37719 103.155 0V14.1842Z"
            fill="url(#paint1_linear_283_58)"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_283_58"
              x1="54.5"
              y1="54.9043"
              x2="54.5"
              y2="6.36087"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="currentColor"></stop>
              <stop offset="1" stop-color="white"></stop>
            </linearGradient>
            <linearGradient
              id="paint1_linear_283_58"
              x1="54.5"
              y1="54.9043"
              x2="54.5"
              y2="6.36087"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="currentColor"></stop>
              <stop offset="1" stop-color="white"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* <img src="images/qoute.svg" /> */}
    </article>
  );
}
