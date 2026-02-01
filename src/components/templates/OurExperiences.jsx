export default function OurExperiences() {
  return (
    <article className="max-w-[429px] h-full flex flex-col px-7.5 py-10 items-center justify-between bg-[#F5F2EC]">
      <div className="space-y-4">
        <h3 className="text-[30px] text-center text-[#0F3714]">
          ما از سال 1389 هستیم!
        </h3>
        <p className="text-[#0F3714CC] text-[15px] text-center">
          لنداسکوپ از سال ۱۹۸۹ مشغول خلق مناظر زیبا و پایدار است. با دهه‌ها
          تجربه، ما شور و اشتیاق و تخصص را به هر پروژه‌ای می‌آوریم.
        </p>
      </div>
      <div className="flex items-center gap-x-2">
        <div className="flex flex-col justify-center items-center gap-y-2">
          <img src="images/null.svg" className="w-[70px] h-[70px]" />
          <p className="max-w-40 text-wrap text-center text-[#0F3714] text-[17px]">
            شیوه‌های بدون آفت‌کش
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-2">
          <img src="images/green.svg" className="w-[70px] h-[70px]" />
          <p className="max-w-40 text-wrap text-center text-[#0F3714] text-[17px]">
            راهکارهای سبز بلندمدت
          </p>
        </div>
      </div>
    </article>
  );
}
