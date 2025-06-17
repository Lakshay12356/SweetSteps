import { useNavigate } from "react-router-dom";

interface ButtonProps {
  link: string;
}

const Button: React.FC<ButtonProps> = ({ link }) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(link)}
      className="group inline-flex items-center gap-3 bg-[#7808d0] text-white font-semibold rounded-full px-6 py-3 transition-colors duration-300 hover:bg-black"
    >
      <span className="relative flex-shrink-0 w-[25px] h-[25px] bg-white text-[#7808d0] rounded-full grid place-items-center overflow-hidden group-hover:text-black transition-colors duration-300">
        {/* Original arrow */}
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={10}
          className="absolute transition-transform duration-300 group-hover:translate-x-[150%] group-hover:-translate-y-[150%]"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>

        {/* Second arrow sliding in */}
        <svg
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          width={10}
          className="absolute transition-transform duration-300 delay-100 translate-x-[-150%] translate-y-[150%] group-hover:translate-x-0 group-hover:translate-y-0"
        >
          <path
            d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            fill="currentColor"
          />
        </svg>
      </span>
      Explore All
    </button>
  );
};

export default Button;