import React from "react";

type Props = {
  name: string;
  rating: number;
  review: string;
};

const TestimonialCard: React.FC<Props> = ({ name, rating, review }) => {
  const avatarUrl = `https://api.dicebear.com/7.x/micah/svg?seed=${encodeURIComponent(name)}`;

  return (
    <div className="flex flex-col justify-start w-full max-w-sm p-6 transition-all duration-300 bg-white border border-gray-100 rounded-2xl shadow-xl hover:scale-105 hover:[box-shadow:13px_10px_101px_0px_rgba(142,142,142,0.3)]">
      {/* Avatar and Name */}
      <div className="flex items-center gap-4 mb-2">
        <div className="w-12 h-12 overflow-hidden bg-gray-200 rounded-full">
          <img src={avatarUrl} alt={name} className="object-cover w-full h-full" />
        </div>
        <p className="text-lg font-semibold text-gray-900">{name}</p>
      </div>

      {/* Rating */}
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`h-5 w-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09L5.5 12.545.999 8.91l6.061-.88L10 2.5l2.94 5.53 6.061.88-4.501 3.635 1.378 5.545z" />
          </svg>
        ))}
      </div>

      {/* Aligned review with quotes in-line */}
      <p className="text-sm italic text-gray-600">“{review}”</p>
    </div>
  );
};

export default TestimonialCard;
