import React from 'react';

interface CardProps {
  imageUrl: string;
  alt?: string;
  loading?: "eager" | "lazy";
}

const Card: React.FC<CardProps> = ({ imageUrl, alt = "Card", loading = "eager" }) => {
  return (
    <div className="flex justify-center">
      <div className="relative w-[90%] sm:w-[70%] md:w-[60%] lg:w-[400px] transition-transform duration-300 ease-in-out group hover:rotate-[5deg]">
        {/* Main card */}
        <div className="relative aspect-[3/2] bg-white border-2 border-black p-[5%] pb-[15%] cursor-pointer transition-transform duration-150 ease-in-out">
          {/* Stack layers */}
          <div className="absolute top-0 left-0 w-full h-full bg-white border-2 border-black z-[-1] transition-transform duration-150 ease-in-out rotate-[-6deg] group-hover:-translate-y-[2%] group-hover:-rotate-[4deg]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-white border-2 border-black z-[-2] transition-transform duration-150 ease-in-out rotate-[6deg] group-hover:translate-y-[2%] group-hover:rotate-[4deg]"></div>

          {/* Inner image */}
          <div className="w-full overflow-hidden bg-transparent border-2 border-black aspect-square">
            <img src={imageUrl} alt={alt} loading={loading} className="object-contain w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
