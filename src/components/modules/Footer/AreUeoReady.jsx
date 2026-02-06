export default function AreUeoReady() {
  return (
    <section className="second-container bg-custom_image w-full h-[343px] py-20 pl-40 bg-green-500 flex items-center gap-x-40">
      <img
        className="absolute bottom-0 right-0"
        src="images/footer/img1.webp"
        loading="lazy"
      />
      <img
        className="absolute top-0 right-0"
        src="images/footer/img2.png"
        loading="lazy"
      />
      <img
        className="absolute top-10 right-20"
        src="images/footer/img3.png"
        loading="lazy"
      />
      <img
        className="absolute top-0 left-0"
        src="images/footer/img4.png"
        loading="lazy"
      />

      <h2 className="relative z-10  text-[55px] text-white max-w-[600px]">
        آماده‌اید تا فضای بیرونی رویایی‌تان را پرورش دهید؟
      </h2>
      <div className="relative z-10 flex flex-col gap-y-6">
        <h5 className="text-sm leading-7 max-w-[400px] text-white">
          بگذارید تیم متخصصان فضای سبز ما به شما در طراحی مجدد، احیا و به نمایش
          گذاشتن بهترین‌ها در فضای بازتان کمک کنند – درست همانطور که تصورش را
          می‌کنید.
        </h5>

        <div className="flex items-center gap-x-4">
          <button className="bg-white text-secondary-color w-[120px] p-4 rounded-lg text-sm cursor-pointer">
            تماس باما
          </button>
          <button className="bg-white text-secondary-color w-[120px] p-4 rounded-lg text-sm cursor-pointer">
            تماس رایگان!
          </button>
        </div>
      </div>
    </section>
  );
}
