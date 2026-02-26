export default function InfinitySlider() {
  return (
    <section className="logo-slider">
      <div className="wrapper-slider">
        <div className="slide-track">
          <img src="images/svgs/logos/logo1.svg" />
          <img src="images/svgs/logos/logo2.svg" />
          <img src="images/svgs/logos/logo3.svg" />
          <img src="images/svgs/logos/logo4.svg" />
          <img src="images/svgs/logos/logo5.svg" />
          <img src="images/svgs/logos/logo6.svg" />

          {/* duplicate برای infinite واقعی */}
          <img src="images/svgs/logos/logo1.svg" />
          <img src="images/svgs/logos/logo2.svg" />
          <img src="images/svgs/logos/logo3.svg" />
          <img src="images/svgs/logos/logo4.svg" />
          <img src="images/svgs/logos/logo5.svg" />
          <img src="images/svgs/logos/logo6.svg" />
        </div>
      </div>
    </section>
  );
}
