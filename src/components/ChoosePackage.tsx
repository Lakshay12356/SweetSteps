import React, { useEffect, useState } from "react";
import { usePackage } from "./UserContext";
import { FaBaby, FaBlind, FaHeart, FaUsers } from "react-icons/fa";

const headings = [
  {
    top: "BABY",
    bottom: "IMPRESSIONS",
    icon: <FaBaby size={24} />,
  },
  {
    top: "COUPLE",
    bottom: "IMPRESSIONS",
    icon: <FaHeart size={24} />,
  },
  {
    top: "ELDERLY",
    bottom: "BLESSINGS",
    icon: <FaBlind size={24} />,
  },
  {
    top: "FAMILY",
    bottom: "BOND",
    icon: <FaUsers size={24} />,
  },
];

const PackageSelector: React.FC = () => {
  const { setSelectedPackage, setHasUserInteracted } = usePackage();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (clickedIndex !== null || hoveredIndex !== null) {
      const timer = setTimeout(() => {
        setClickedIndex(null);
        setHoveredIndex(null);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [clickedIndex, hoveredIndex]);

  const handleClick = (index: number) => {
    setHasUserInteracted(true);
    setSelectedPackage(index);
    setClickedIndex(index);
  };

  const handleMouseEnter = (index: number) => {
    setHasUserInteracted(true);
    setHoveredIndex(index);
  };

  const isUserActive = (index: number) => {
    return clickedIndex === index || hoveredIndex === index;
  };

  return (
    <div className="flex flex-col items-center gap-8 mt-12">
      <h2 className="text-2xl font-bold text-gray-800">Choose Your Package</h2>

      <style>
        {`
          @keyframes text-rotation {
            to {
              rotate: 360deg;
            }
          }
          .text-rotate {
            animation: text-rotation 8s linear infinite;
          }
          .char {
            position: absolute;
            inset: 7px;
          }
        `}
      </style>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
        {headings.map((item, index) => {
          const isActive = isUserActive(index);
          const combinedText = `${item.top} ${item.bottom}`;
          const repeatedText = combinedText.repeat(2).toUpperCase();

          return (
            <div
              key={index}
              className="relative transition-transform duration-300 cursor-pointer group hover:scale-105"
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
            >
              {/* Circular Button */}
              <div className="w-[150px] h-[150px] rounded-full bg-[#fef6f7] text-[#db5275] border-none grid place-content-center font-semibold overflow-hidden relative transition-all duration-300 ease-in-out">
                {/* Rotating Text */}
                <p
                  className="absolute inset-0 text-rotate"
                  aria-label={`${item.top} ${item.bottom} circular text`}
                >
                  {repeatedText.split('').map((char, charIndex) => (
                    <span
                      key={charIndex}
                      className="char"
                      style={{ transform: `rotate(${charIndex * 10}deg)` }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  ))}
                </p>

                {/* Center Icon */}
                <div className="relative w-10 h-10 bg-white text-[#db5275] rounded-full flex items-center justify-center overflow-hidden z-10">
                  {item.icon}
                </div>
              </div>

              {/* Hover Glow */}
              <div
                className={`absolute inset-0 rounded-full z-0 transition duration-500 ${
                  isActive
                    ? "bg-[#7A10E2]/10"
                    : "bg-transparent group-hover:bg-[#7A10E2]/10"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackageSelector;