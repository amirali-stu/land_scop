import { LuHandHelping } from "react-icons/lu";

export default function OurFeatures() {
  return (
    <section className="w-full lg:h-140 max-lg:py-10 bg-[#EAF0DA] mt-40 flex flex-wrap relative">
      <div className="lg:max-w-[1800px] mx-auto relative h-full flex !max-lg:flex-col !flex-wrap w-full max-lg:gap-y-8 max-lg:px-2">
        <div className="w-full h-full lg:h-60 flex relative z-10 lg:-mt-20">
          <div className="lg:w-[1400px] max-lg:max-w-[800px] h-full bg-[#1D5823] lg:rounded-t-2xl lg:rounded-br-2xl rounded-4xl flex max-lg:flex-col items-center overflow-hidden">
            <div
              src="images/our/img1.webp"
              className="bg-no-repeat w-full lg:h-full h-60 lg:w-[52%] bg-cover our-img1"
            />
            <div className="py-[47px] max-lg:py-[30px] px-[50px] max-lg:px-[30px] flex max-lg:flex-col max-lg:gap-y-4 items-start lg:items-center gap-x-10">
              <div className="min-w-[95px] h-[95px] rounded-lg flex-center bg-white text-[#1D5823]">
                <LuHandHelping size={45} />
              </div>

              <div className="flex flex-col gap-y-4 max-w-120 text-wrap text-white">
                <h3 className="text-2xl">ماموریت ما</h3>
                <p className="text-sm text-[#FFFFFFCC] leading-6 max-lg:max-w-200">
                  ما خود را وقف ایجاد فضاهای سبز هماهنگ، پایدار و الهام‌بخش
                  کرده‌ایم که کیفیت زندگی را افزایش می‌دهند. با خلاقیت و دقت،
                  مناظر و باغ‌هایی متناسب با دیدگاه، سبک و فضای منحصر به فرد هر
                  مشتری طراحی و اجرا می‌کنیم.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full lg:h-60 flex relative z-10 flex-row-reverse lg:-mt-40">
          <div className="lg:w-[1400px] max-lg:max-w-[800px] flex-row-reverse h-full bg-[#97B545] lg:rounded-b-2xl lg:rounded-tl-2x rounded-4xl flex max-lg:flex-col items-center overflow-hidden">
            <div
              src="images/our/img2.webp"
              className="bg-no-repeat w-full lg:h-full h-60 lg:w-[52%] bg-cover our-img2"
            />
            <div className="py-[47px] max-lg:py-[30px] px-[50px] max-lg:px-[30px] flex max-lg:flex-col max-lg:gap-y-4 items-start lg:items-center gap-x-10">
              <div className="min-w-[95px] h-[95px] rounded-lg flex-center bg-white text-[#1D5823]">
                <LuHandHelping size={45} />
              </div>

              <div className="flex flex-col gap-y-4 max-w-120 text-wrap text-white">
                <h3 className="text-2xl">چشم‌انداز ما</h3>
                <p className="text-sm text-[#FFFFFFCC] leading-6">
                  برای تبدیل شدن به یک استودیوی پیشرو در طراحی منظر و باغبانی که
                  به خاطر تبدیل فضاهای روزمره به پناهگاه‌های سبز الهام‌بخش
                  شناخته شده است. ما جهانی را تصور می‌کنیم که در آن طبیعت و
                  طراحی به زیبایی در کنار هم قرار می‌گیرند، زندگی را غنی می‌کنند
                  و محیطی که لمس می‌کنیم، رفاه را پرورش می‌دهند.
                </p>
              </div>
            </div>
            <div
              src="images/our/img2.webp"
              className="bg-no-repeat h-full flex-1 bg-cover our-img2"
            />
          </div>
        </div>
      </div>

      <img
        src="images/our/plant1.png"
        className="absolute max-lg:hidden bottom-0 right-0"
        loading="lazy"
      />
      <img
        src="images/our/plant2.png"
        className="absolute max-lg:hidden bottom-0 right-70"
        loading="lazy"
      />
      <img
        src="images/our/plant3.png"
        className="absolute max-lg:hidden bottom-0 left-0"
        loading="lazy"
      />
    </section>
  );
}
