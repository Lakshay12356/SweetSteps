import React from "react";
import Card from "./UiComp/Socials";
import { Phone, Mail } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-[#fefaff] ml-10 mr-10 rounded-3xl p-10 text-[#001a2c]"
      style={{ minHeight: "200px" }}
    >
      <div className="flex flex-col justify-between gap-10 mx-auto max-w-7xl md:flex-row">
        {/* Logo and Contact */}
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/src/assets/Logo.webp"
              alt="Sweet Steps Logo"
              width="40"
              height="40"
              className="w-10 h-10 mr-2 rounded-full"
            />
            <h2 className="text-2xl font-bold">Sweet Steps</h2>
          </div>
          <p>73/47, Param Hans Marg, Mansarovar</p>
          <div className="flex items-center mt-2">
            <Phone className="w-4 h-4 mr-2" />
            <span>Call Us: +91-9413867088</span>
          </div>
          <div className="flex items-center mt-2">
            <Mail className="w-4 h-4 mr-2" />
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
