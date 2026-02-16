import AchievementBox from "./AchievementBox";

export default function AchievementContainer() {
  return (
    <section className="w-full lg:h-96 max-lg:py-10 achievement-bg">
      <div className="flex flex-wrap max-lg:gap-y-5 items-center justify-center gap-x-6 w-full h-full relative z-10">
        <AchievementBox />
        <AchievementBox />
        <AchievementBox />
        <AchievementBox />
      </div>
    </section>
  );
}
