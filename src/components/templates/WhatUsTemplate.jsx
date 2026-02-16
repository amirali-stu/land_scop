import { LiaShippingFastSolid } from "react-icons/lia";

export default function WhatUsTemplate() {
  return (
    <div className="min-w-[250px] h-[173px] bg-[#EAF0DA] rounded-[25px] flex-1 flex flex-col items-center justify-center relative border-l border-dashed border-l-green-800/40 last:border-l-0 group">
      <div className="p-4 rounded-lg bg-[#97b545] text-white absolute bottom-[80%] z-10">
        <LiaShippingFastSolid size={42} />
      </div>
      <h3 className="text-2xl title-with-line">خدمات به موقع</h3>

      <div className="absolute w-full opacity-0 z-20 scale-75 transform delay-75 transition-custom-style invisible bg-primary-color rounded-xl text-white group-hover:opacity-100 group-hover:scale-100 group-hover:visible py-18 px-5 flex-center flex-col gap-y-5 border-b-6 border-b-secondary-color/40">
        <h5 className="text-xl">خدمات به موقع</h5>
        <p className="line-clamp-4 mt-4 opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:mt-0">
          وقت شما مهم است. ما به برنامه‌ریزی دقیق و خدمات قابل اعتماد خود افتخار
          می‌کنیم و تضمین می‌کنیم که پروژه شما طبق برنامه پیش می‌رود و طبق وعده
          و بدون تأخیر یا بهانه به پایان می‌رسد.
        </p>
      </div>
    </div>
  );
}
