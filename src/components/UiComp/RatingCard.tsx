import { Star } from "lucide-react";

interface Props {
  name: string;
  rating: number;
  review: string;
  avatar: string;
}

const RatingCard: React.FC<Props> = ({ name, rating, review, avatar }) => {
  return (
    <div className="flex flex-col justify-between h-full p-6 transition bg-white shadow-md rounded-2xl hover:shadow-lg">
      <div className="flex items-center mb-4 space-x-4">
        <img
          src={avatar}
          alt={name}
          className="object-cover w-12 h-12 border border-gray-200 rounded-full"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < rating ? "text-yellow-400" : "text-gray-300"
                } fill-current`}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-gray-600">{review}</p>
    </div>
  );
};

export default RatingCard;
