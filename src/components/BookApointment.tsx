import { CalendarHeart } from "lucide-react";
import patternImage from "../assets/Y So Serious Pattern.png";

const BookAppointmentSection = () => {
  return (
    <div className="relative px-6 py-20 overflow-hidden bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-pink-500/5 ">
      {/* Pattern Background Flow */}
      <div
        className="absolute inset-0 z-0 animate-scroll-up opacity-10"
        style={{
          backgroundImage: `url(${patternImage})`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px",
        }}
      ></div>
      {/* Content */}
      <div className="relative z-20 max-w-2xl mx-auto text-center">
        <h2 className="mb-4 text-3xl font-bold text-purple-900 sm:text-4xl">
          Cherish the Memory of Your Loved Ones
        </h2>
        <p className="mb-8 text-lg text-gray-700">
          Turn emotions into everlasting impressions. Book your 3D casting
          session today and preserve the warmth of togetherness forever.
        </p>
        <button className="flex items-center gap-2 px-5 py-2 text-[#7808D0] border border-[#7808D0] rounded-full hover:bg-[#7808D0] hover:text-white transition-all duration-300 font-medium">
          <CalendarHeart size={18} />
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default BookAppointmentSection;
