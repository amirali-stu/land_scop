import {
  FaLocationDot,
  FaClock,
  FaFacebookF,
  FaGooglePlusG,
} from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import SocialMediaTemplate from "./SocialMediaTemplate";

export default function TopHeader() {
  return (
    <div className="second-container w-full flex items-center justify-between">
      <div className="w-full flex items-center justify-between  border-b border-b-gray-200 py-5">
        <ul className="flex items-center *:flex *:flex-row-reverse *:items-center *:gap-x-2 **:text-[#50680F] *:text-sm *:transition-all *:duration-300 *:hover:text-[#97b545] *:px-2.5 *:relative">
          <li>
            تهران، خیابان آزادی، خیابان بهبودی، ساختمان 101
            <FaLocationDot size={16} className="text-[#1C4B21]" />
          </li>
          <li>
            amiralimosolo279@gmail.com
            <MdEmail size={16} className="text-[#1C4B21]" />
          </li>
          <li>
            شنبه - چهارشنبه: 9:00 - 19:00 / آخر هفته تعطیل
            <FaLocationDot size={16} className="text-[#1C4B21]" />
          </li>
        </ul>

        <div className="flex items-center gap-x-2">
          <SocialMediaTemplate icon={FaFacebookF} />
          <SocialMediaTemplate icon={FaTwitter} />
          <SocialMediaTemplate icon={BsInstagram} />
          <SocialMediaTemplate icon={FaGooglePlusG} />
        </div>
      </div>
    </div>
  );
}
