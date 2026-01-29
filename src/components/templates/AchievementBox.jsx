import { FaPeopleGroup } from "react-icons/fa6";

export default function AchievementBox() {
  return (
    <div className="relative w-[300px] h-[130px] rounded-[25px] bg-primary-color flex items-center justify-between p-10 px-5 group">
      <div>
        <h5 className="text-6xl flex  items-end -gap-x-2 text-white">
          300 <span className="text-4xl">+</span>
        </h5>
        <p className="text-sm text-[#fff]">درخت و گیاه انتخاب شده</p>
      </div>
      <FaPeopleGroup size={80} className="text-[#A8C163]" />

      {/* box hover */}
      <div className="absolute w-full right-0 opacity-0 z-20 scale-75 transform delay-75 transition-custom-style invisible bg-primary-color rounded-[25px] overflow-hidden text-white group-hover:opacity-100 group-hover:scale-100 group-hover:visible flex-center flex-col gap-y-5 shadow-[0px_-1px_7px_#ffffff66] ">
        <div className="flex items-center justify-between w-full p-5">
          <div>
            <h5 className="text-6xl flex  items-end -gap-x-2 text-white">
              300 <span className="text-4xl">+</span>
            </h5>
            <p className="text-sm text-[#fff]">درخت و گیاه انتخاب شده</p>
          </div>
          <FaPeopleGroup size={80} className="text-[#fff]" />
        </div>

        <div className="bg-[#6d9622] p-5">
          <p className="text-sm text-[rgba(255, 255, 255, 0.8)]">
            ۹۸٪ از مشتریان از خدمات باغبانی حرفه‌ای ما رضایت بالایی را گزارش
            کردند.
          </p>
        </div>
      </div>
    </div>
  );
}
