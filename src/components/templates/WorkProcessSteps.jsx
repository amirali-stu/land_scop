export default function WorkProcessSteps() {
  return (
    <div className="group styles">
      <div className="w-full h-full transition-all duration-500 show">
        <p className="text-[120px] leading-16 opacity-75 bg-linear_custom">
          01
        </p>
        <div
          id="svg-style"
          className="bg-four-color text-white w-[97px] h-[97px] flex-center rounded-full"
        >
          <img src="images/svgs/consulting.svg" />
        </div>
        <h5 className="text-white text-2xl leading-6">مشاوره و برنامه ریزی</h5>
      </div>
      <div className="w-full h-full transition-all duration-500 shadow-[0px_10px_40px] shadow-white hid">
        <h5 className="text-secondary-color text-xl">مشاوره و برنامه ریزی</h5>
        <p className="text-secondary-color text-[17px] leading-6">
          ما به دقت به دیدگاه شما گوش می‌دهیم، فضای شما را ارزیابی می‌کنیم و یک
          برنامه شخصی‌سازی‌شده تدوین می‌کنیم که زیبایی، کارایی و رشد بلندمدت را
          با هم ترکیب می‌کند.
        </p>
      </div>
    </div>
  );
}
