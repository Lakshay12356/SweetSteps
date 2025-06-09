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
        <button className="relative px-6 py-3 overflow-hidden font-semibold text-white rounded-full shadow-lg">
          <span className="absolute inset-0 animate-swirl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-[length:200%_200%] rounded-full z-0"></span>
          <span className="relative z-10">Book an Appointment</span>
        </button>
      </div>
    </div>
  );
};

export default BookAppointmentSection;
