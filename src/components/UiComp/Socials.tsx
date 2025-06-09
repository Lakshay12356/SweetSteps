import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Card: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-4 w-fit h-fit">
      <a
        href="https://www.instagram.com/sweet_.steps__"
        className="relative w-[52px] h-[52px] flex items-center rounded-full justify-center overflow-hidden bg-[#2c2c2c] transition duration-500 hover:bg-[#d62976] group"
      >
        <FaInstagram className="w-[20px] h-[20px] text-white relative z-10" />
      </a>

      <a
        href="#"
        className="w-[52px] h-[52px] flex items-center rounded-full justify-center bg-[#2c2c2c] hover:bg-[#00acee] transition duration-300 active:scale-90"
      >
        <FaTwitter className="w-[20px] h-[20px] text-white" />
      </a>

      <a
        href="https://www.facebook.com/profile.php?id=61558591102585"
        className="w-[52px] h-[52px] flex items-center rounded-full justify-center bg-[#2c2c2c] hover:bg-[#1877F2] transition duration-300 active:scale-90"
      >
        <FaFacebookF className="w-[20px] h-[20px] text-white" />
      </a>

      <a
        href="https://wa.me/+91-9413867088"
        className="w-[52px] h-[52px] flex items-center rounded-full justify-center bg-[#2c2c2c] hover:bg-[#25D366] transition duration-300 active:scale-90"
      >
        <FaWhatsapp className="w-[20px] h-[20px] text-white" />
      </a>
    </div>
  );
};

export default Card;
