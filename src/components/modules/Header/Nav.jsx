import { GoSearch } from "react-icons/go";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";

export default function NavHeader() {
  return (
    <div className="second-container w-full flex items-center justify-between lg:py-6 py-4">
      <div className="flex items-center gap-x-12">
        <img src="images/icons/logo.png" alt="logo web header" />

        <nav className="h-14 hidden lg:block">
          <ul className="w-full h-full flex items-center gap-x-12  text-[#0F3714]">
            {["صفحه اصلی", "صفحات", "خدمات", "پروژه ها"].map((item) => (
              <li
                className="
    group relative h-full flex items-center
    hover:text-[#DDB01D]
    cursor-pointer
    after:content-['▼']
    after:absolute after:right-0 after:-translate-x-1/2
    after:bottom-0
    after:opacity-0 after:translate-y-2
    after:transition-all after:duration-300
    hover:after:opacity-100 hover:after:translate-y-0
  "
              >
                <span className="transition-all duration-300 group-hover:-translate-y-4">
                  صفحه اصلی
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex items-center gap-x-8">
        <div className="items-center gap-x-3 hidden lg:flex">
          <div className="p-5 rounded-full flex-center cursor-pointer bg-[#97B54533] text-xl text-[#0f3714] transition-all duration-500 hover:bg-[#0f3714] hover:text-white">
            <GoSearch />
          </div>
          <div className="p-5 rounded-full flex-center cursor-pointer bg-[#97B54533] text-xl text-[#0f3714] transition-all duration-500 hover:bg-[#0f3714] hover:text-white">
            <MdOutlineLocalGroceryStore />
          </div>
        </div>

        <button className="bg-[#97b545] text-white px-6 py-3.5 rounded-md text-[14px] transition-all duration-500 hover:bg-[#0f3714] hover:text-white cursor-pointer  hidden lg:block">
          تماس رایگان!
        </button>

        <span className="block lg:hidden">
          <CgMenuLeft size={28} />
        </span>
      </div>
    </div>
  );
}
