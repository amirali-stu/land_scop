import AchievementContainer from "./components/templates/AchievementContainer";
import BestService from "./components/templates/BestService";
import CustomerReviews from "./components/templates/CustomerReviews";
import Describe from "./components/templates/Describe";
import LatestProjects from "./components/templates/latestProjects";
import OurBlogs from "./components/templates/OurBlogs";
import OurFeatures from "./components/templates/OurFeatures";
import PricingPackagesSmart from "./components/templates/PricingPackagesSmart";
import Slider from "./components/templates/Slider";
import WhatUs from "./components/templates/WhatUs";
import WhyUs from "./components/templates/WhyUs";
import WorkProcess from "./components/templates/WorkProcess";

export default function AppContainer() {
  return (
    <>
      <Slider />
      <WhatUs />
      <Describe />
      <OurFeatures />
      <AchievementContainer />
      <BestService />
      <LatestProjects />
      <WhyUs />
      <WorkProcess />
      <PricingPackagesSmart />
      <CustomerReviews />
      <OurBlogs />
    </>
  );
}
