import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import logo from "../assets/Logo.jpg";
import Card from "./UiComp/Socials";
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#fefaff] ml-10 mr-10 rounded-3xl p-10 text-[#001a2c]">
      <div className="flex flex-col justify-between gap-10 mx-auto max-w-7xl md:flex-row">
        {/* Logo and Contact */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src={logo}
              alt="Sweet Steps Logo"
              className="w-10 h-10 mr-2 rounded-full"
            />
            <h2 className="text-2xl font-bold">Sweet Steps</h2>
          </div>
          <p>73/47, Param Hans Marg, Mansarovar</p>
          <div className="flex items-center mt-2">
            <FaPhoneAlt className="mr-2" />
            <span>Call Us: +91-9413867088</span>
          </div>
          <div className="flex items-center mt-2">
            <FaEnvelope className="mr-2" />
            <span>sweetsteps05@gmail.com</span>
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-wrap gap-16 space-between">
          <div className="flex flex-col space-y-4">
            <span>Baby Casting Service</span>
            <span>Couple Casting Service</span>
            <span>Family Casting Service</span>
            <span>Elderly Casting Service</span>
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-start justify-center space-y-4">
          <Card />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="pt-4 mt-10 text-sm text-center border-t">
        Sweet Steps Impression © 2021 All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
