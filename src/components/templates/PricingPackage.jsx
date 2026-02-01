import { IoIosLeaf } from "react-icons/io";

export default function PricingPackage({ best = "" }) {
  return (
    <article
      id={best}
      className="min-w-[406px] relative pt-[41px] px-10 pb-[6px] rounded-[25px] bg-white"
    >
      {best && (
        <img
          src="images/top-level.svg"
          className="absolute -top-[7.5px] left-10 rotate-y-180"
        />
      )}

      <h4 className="text-2xl text-secondary-color flex items-center gap-x-2">
        <IoIosLeaf size={24} className="text-[#97B545] rotate-80" />
        بسته پایه
      </h4>

      <div className="text-secondary-color flex items-center">
        <span className="text-[25px] mb-2">ماهانه</span>
        <h3 className="text-[70px]">80</h3>
        <span className="text-[17px] mt-5">تومان</span>
      </div>

      <button
        className={`${best ? "bg-primary-color" : "bg-secondary-color "} my-5 text-white rounded-lg w-full py-4 text-sm`}
      >
        انتخاب بسته قیمت‌گذاری
      </button>

      <h5 className="text-xl text-secondary-color py-4 border-b border-b-primary-color border-dashed">
        خدمات شامل
      </h5>

      <ul className="list-style-tick flex flex-col text-[16px] items-start gap-y-3 mr-6 my-4 mb-15">
        <li className="!text-black">چمن زنی</li>
        <li className="!text-black">هرس پرچین و درختچه</li>
        <li className="!text-black">جابجایی برگ با باد</li>
        <li className="!text-black">کنترل علف‌های هرز اولیه</li>
        <li className="!text-black">مرتب کردن باغ</li>
        <li className="!text-black">بازدید ماهانه تعمیر و نگهداری</li>
      </ul>
    </article>
  );
}
