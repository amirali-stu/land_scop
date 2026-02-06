import AchievementBox from "./AchievementBox";

export default function AchievementContainer() {
  return (
    <section className="w-full h-96 achievement-bg">
      <div className="flex items-center justify-center gap-x-6 w-full h-full relative z-10">
        <AchievementBox />
        <AchievementBox />
        <AchievementBox />
        <AchievementBox />
      </div>
    </section>
  );
}
