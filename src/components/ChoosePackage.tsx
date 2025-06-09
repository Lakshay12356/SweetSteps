import React from 'react';
import { usePackage } from './UserContext';

const headings = ["Baby", "Couple", "Elderly", "Family"];

const PackageSelector: React.FC = () => {
  const { selectedPackage, setSelectedPackage, hasUserInteracted, setHasUserInteracted } = usePackage();

  const handleClick = (index: number) => {
    setSelectedPackage(index);
    if (!hasUserInteracted) setHasUserInteracted(true);
  };

  const handleMouseEnter = () => {
    if (!hasUserInteracted) setHasUserInteracted(true);
  };

  return (
    <div className="flex flex-col items-center gap-8 mt-12 mb-12">
      <h2 className="text-2xl font-bold text-gray-800">Choose Your Package</h2>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {headings.map((title, index) => {
          const isSelected = selectedPackage === index && hasUserInteracted;

          return (
            <div key={index} className="relative overflow-visible">
              <button
                onClick={() => handleClick(index)}
                onMouseEnter={handleMouseEnter}
                className={`sm:w-24 sm:h-24 w-20 h-20 rounded-full overflow-hidden relative
                  ${isSelected ? 'bg-[#7A10E2] text-white' : 'bg-[#FEFAFF] text-gray-800'}
                  flex items-center justify-center font-medium group cursor-pointer shadow
                  ${hasUserInteracted ? 'transition duration-300' : ''}`}
              >
                <span
                  className={`absolute inset-0 bg-[#7A10E2] rounded-full 
                    ${isSelected ? 'scale-100' : 'scale-0 group-hover:scale-110'}
                    ${hasUserInteracted ? 'transition-transform duration-500' : ''}
                    origin-center z-0`}
                />
                <span className={`z-10 px-2 ${hasUserInteracted ? 'transition-colors duration-500 group-hover:text-white' : ''}`}>
                  {title}
                </span>
              </button>

              {isSelected && hasUserInteracted && (
                <div className="absolute bottom-[-9px] left-1/2 -translate-x-1/2 w-0 h-0 
                  border-l-[8px] border-r-[8px] border-t-[10px] 
                  border-l-transparent border-r-transparent border-t-[#7A10E2]" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PackageSelector;
