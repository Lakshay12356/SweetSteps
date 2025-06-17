import React, { useState, useEffect } from "react";
import babyImg from "../assets/HeroFrames.webp";
import coupleImg from "../assets/HeroFrames.webp";
import elderlyImg from "../assets/HeroFrames.webp";
import familyImg from "../assets/HeroFrames.webp";
import Button from "./UiComp/explore";

interface Slide {
  image: string;
  text: string;
}

const slides: Slide[] = [
  {
    image: babyImg,
    text: "Capture Your Baby's Precious Moments",
  },
  {
    image: coupleImg,
    text: "Cherish Your Couple Memories",
  },
  {
    image: elderlyImg,
    text: "Celebrate the Wisdom of Elders",
  },
  {
    image: familyImg,
    text: "Create Lasting Family Impressions",
  },
];

const HeroCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[90vh] flex justify-center items-center overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-[80vh] flex items-center transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Text at bottom-left */}
          <div
            className={`absolute bottom-10 left-10 text-black text-4xl font-bold max-w-xl transition-transform duration-1000 ease-in-out ${
              index === currentIndex
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {slide.text}
          </div>

          {/* Image at right-center */}
          <div className="ml-auto mr-10">
            <div className="relative w-[32rem] h-[32rem] bg-white rounded-tl-[80px] rounded-tr-[20px] rounded-bl-[10px] rounded-br-[100px] overflow-hidden origin-top-left">
              <img
                src={slide.image}
                alt={slide.text}
                className="object-cover w-full h-full"
              />
              <div className="absolute right-2 bottom-2">
                <Button />
              </div>
            </div>

            {/* <img
              src={slide.image}
              alt={slide.text}
              // style={{
              //   boxShadow: "11px 10px 29px 0px rgba(218,218,218,0.75)",
              // }}
              className={`h-[100vh] object-cover rounded-lg transition-transform duration-1000 ease-in-out ${
                index === currentIndex
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            /> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroCarousel;
