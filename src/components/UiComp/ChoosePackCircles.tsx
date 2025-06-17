import React from "react";

interface ChoosePackCirclesProps {
  topText: string;
  bottomText: string;
  icon: React.ReactNode; // ✅ plain JSX
}

const ChoosePackCircles: React.FC<ChoosePackCirclesProps> = ({
  topText,
  bottomText,
  icon,
}) => {
  return (
    <div className="relative w-[200px] h-[200px] rounded-full flex items-center justify-center border-2 border-purple-100 bg-white shadow-md">
      {/* Top text */}
      <div className="absolute w-full text-xs font-semibold tracking-widest text-center top-2">
        {topText}
      </div>

      {/* Icon in center */}
      <div className="z-10 flex items-center justify-center bg-transparent rounded-full w-14 h-14">
        {icon}
      </div>

      {/* Bottom text */}
      <div className="absolute w-full text-xs font-semibold tracking-widest text-center bottom-2">
        {bottomText}
      </div>
    </div>
  );
};

export default ChoosePackCircles;