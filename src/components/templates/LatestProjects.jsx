import { useState } from "react";
import { IoIosLeaf } from "react-icons/io";
import LatestProjectSliderTemplate from "./LatestProjectSliderTemplate";

const projects = [
  { id: 1, name: "project1", identity: "garden" },
  { id: 2, name: "project2", identity: "design" },
  { id: 3, name: "project3", identity: "agriculture" },
  { id: 4, name: "project4", identity: "lighting" },
  { id: 5, name: "project5", identity: "lighting" },
  { id: 6, name: "project6", identity: "design" },
];

const filters = [
  { label: "همه", value: "all" },
  { label: "باغ پشت بام", value: "garden" },
  { label: "طراحی منظر", value: "design" },
  { label: "کشاورزی شهری", value: "agriculture" },
  { label: "نورپردازی فضای باز", value: "lighting" },
];

export default function LatestProjects() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const filterProjects = (filter) => {
    setSelectedFilter(filter);

    if (filter === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((item) => item.identity === filter));
    }
  };

  return (
    <section className="w-full py-20">
      {/* text */}
      <div className="text-black w-full flex flex-col items-center gap-y-4">
        <p className="flex items-center flex-row-reverse gap-x-2 text-[#0F3714]">
          پروژه‌های ویژه
          <span>
            <IoIosLeaf size={24} className="text-[#97B545] rotate-40" />
          </span>
        </p>
        <h2 className="text-4xl">آخرین ساخته‌های سبز ما تازه تمام شده‌اند!</h2>
        <p className="text-[#0F3714CC] text-[17px] max-w-200 text-center">
          گزیده‌ای از پروژه‌های باغبانی برجسته ما را کاوش کنید – هر یک ترکیبی
          منحصر به فرد از طراحی متفکرانه، کیفیت ساخت بالا و عشق عمیق به فضاهای
          سبز.
        </p>
      </div>

      {/* filter - slider */}
      <div className="w-full mt-10 flex flex-col gap-y-8">
        <div className="second-container  w-full flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            {filters.map((item) => (
              <button
                key={item.value}
                onClick={() => filterProjects(item.value)}
                className={`px-6 py-3 rounded-lg border transition-all duration-300
        ${
          selectedFilter === item.value
            ? "bg-secondary-color text-white border-secondary-color"
            : "bg-transparent text-secondary-color border-primary-color hover:bg-secondary-color hover:text-white"
        }
      `}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="flex h-12 items-center gap-x-4 text-white bg-primary-color rounded-lg p-4 cursor-pointer">
            مشاهده همه پروژه ها
            {/* <span>
              <IoArrowBack />
            </span> */}
          </button>
        </div>

        <div className="w-full flex items-center justify-center gap-x-4 ">
          {filteredProjects.map((item) => (
            <LatestProjectSliderTemplate />
          ))}
        </div>
      </div>


    </section>
  );
}
