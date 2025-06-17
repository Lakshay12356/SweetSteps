import TestimonialCard from "./UiComp/RatingCard";
import reviews from "../reviews.json";

const Testimonials = () => {
  const duplicatedReviews = [...reviews, ...reviews]; // For seamless scroll

  return (
    <div className="w-full py-16 bg-white">
      <h1 className="mb-12 text-3xl font-bold text-center text-gray-900">
        Testimonials
      </h1>

      <div className="relative w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-6 px-6 py-4 animate-scroll">
          {duplicatedReviews.map((r, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[320px] sm:w-[350px] md:w-[380px] transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <TestimonialCard
                name={r.name}
                rating={r.rating}
                review={r.review}
                avatar={`https://api.dicebear.com/7.x/adventurer/svg?seed=${encodeURIComponent(
                  r.name
                )}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
