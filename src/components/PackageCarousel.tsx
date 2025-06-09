import React, { useEffect } from "react";
import { usePackage } from "./UserContext";
import Card from "./UiComp/ImageDisplay";
import baby from "../assets/1 sq.png";
import Button from "./UiComp/exploremore";


const images = [
  {
    label: "Chapter 1: First Prints — Forever Starts Here",
    url: baby,
    description:
      "Capturing the tiny details of your baby’s hands and feet is more than just a keepsake — it’s a timeless memory that lasts forever. Our Baby Impressions Casting service allows you to preserve those precious moments with stunning, high-quality 3D molds.",
  },
  {
    label: "Chapter 2: The Couple Impressions — Love, Captured in Time",
    url: "https://picsum.photos/id/1011/600/400",
    description: "Celebrate the bond you share with a lasting imprint. Our Couple Impressions Casting service beautifully preserves the touch of togetherness — whether it's holding hands, a warm embrace, or a special moment shared. These handcrafted 3D molds turn your love into timeless art you’ll cherish forever.",
  },
  {
    label: "Elderly",
    url: "https://picsum.photos/id/1027/600/400",
    description: "Cherishing time with the elderly.",
  },
  {
    label: "Family",
    url: "https://picsum.photos/id/1035/600/400",
    description: "A family that stays together, grows together.",
  },
];

const PackageCarousel: React.FC = () => {
  const { selectedPackage, setSelectedPackage, hasUserInteracted } =
    usePackage();

  useEffect(() => {
    if (hasUserInteracted) return;

    const interval = setInterval(() => {
      setSelectedPackage((prev: number | null) => {
        const next = prev === null ? 0 : (prev + 1) % images.length;
        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [hasUserInteracted, setSelectedPackage]);

  const currentIndex = selectedPackage === null ? 0 : selectedPackage;

  return (
  <div className="flex items-center min-h-screen px-4 py-8 md:px-10">
    <div className="flex flex-col-reverse w-full gap-6 md:grid md:grid-cols-5">
      {/* Text Section */}
      <div className="flex flex-col justify-center space-y-4 md:col-span-3">
        <h1 className="text-2xl font-bold md:text-3xl">{images[currentIndex].label}</h1>
        <p className="text-gray-600">{images[currentIndex].description}</p>
        <div className="w-fit">
          <Button />
        </div>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center md:col-span-2">
        <Card imageUrl={images[currentIndex].url} />
      </div>
    </div>
  </div>
);
};

export default PackageCarousel;
