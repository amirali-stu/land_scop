import { IoIosLeaf } from "react-icons/io";
import PricingPackage from "./PricingPackage";

export default function PricingPackagesSmart() {
  return (
    <section className="second-container w-full pricing-package_bg py-20 flex flex-col gap-y-10">
      <div className="text-black flex flex-col items-center gap-y-4">
        <p className="flex items-center text-[22px] font-bold text-secondary-color flex-row-reverse gap-x-2">
          بسته‌های قیمت‌گذاری هوشمند
          <span>
            <IoIosLeaf size={24} className="text-[#97B545] rotate-40" />
          </span>
        </p>
        <h2 className="text-4xl">ساده، واضح و سفارشی برای شما</h2>
        <p className="text-[#0F3714CC] text-[17px] max-w-155 text-center">
          بسته‌های شفاف و انعطاف‌پذیر که متناسب با هر باغ و بودجه‌ای طراحی
          شده‌اند. آنچه را که برای شما مناسب است انتخاب کنید. ما بقیه کارها را
          انجام خواهیم داد.
        </p>
      </div>

      <div className="flex items-center gap-x-8 mt-20">
        <PricingPackage />
        <PricingPackage best={"top_level"} />
        <PricingPackage />
      </div>
    </section>
  );
}
