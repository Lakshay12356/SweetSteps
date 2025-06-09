import TestimonialCard from "./UiComp/RatingCard";
import reviews from "../reviews.json";

const Testimonials = () => {
  const duplicatedReviews = [...reviews, ...reviews]; // Duplicate for seamless loop

  return (
    <div className="w-full py-10 overflow-hidden bg-white">
      <h1 className="mb-8 text-3xl font-bold text-center text-gray-900">
        Testimonials
      </h1>

      <div className="relative w-full">
        <div className="flex gap-6 animate-scroll">
          {duplicatedReviews.map((r, i) => (
            <div className="flex-shrink-0" key={i}>
              <TestimonialCard
                name={r.name}
                rating={r.rating}
                review={r.review}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
