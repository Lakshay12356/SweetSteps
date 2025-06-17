import React from 'react';

const Button: React.FC = () => {
  return (
    <div className="grid place-content-center">
      <style>
        {`
          @keyframes text-rotation {
            to {
              rotate: 360deg;
            }
          }

          .text-rotate {
            animation: text-rotation 8s linear infinite;
          }

          .button:hover {
            background: #ffffff;
            transform: scale(1.05);
          }

          .button:hover .button__icon {
            color: #000;
          }

          .button:hover .button__icon:first-child {
            transition: transform 0.3s ease-in-out;
            transform: translate(150%, -150%);
          }

          .button:hover .button__icon--copy {
            transition: transform 0.3s ease-in-out 0.1s;
            transform: translate(0);
          }

          .char {
            position: absolute;
            inset: 7px;
          }
        `}
      </style>
      <button
        type="button"
        className="button w-[150px] h-[150px] rounded-full bg-[#fef6f7] text-[#db5275] border-none grid place-content-center font-semibold overflow-hidden relative transition-all duration-300 ease-in-out"
      >
        <p
          className="absolute inset-0 text-rotate"
          aria-label="Book Now circular text"
        >
          {'BOOK NOW  BOOK NOW'.split('').map((char, index) => (
            <span
              key={index}
              className="char"
              style={{ transform: `rotate(${index * 19}deg)` }}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </p>

        <div className="relative w-10 h-10 bg-white text-[#db5275] rounded-full flex items-center justify-center overflow-hidden">
          <svg
            width={14}
            className="button__icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 15"
          >
            <path
              fill="currentColor"
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            />
          </svg>
          <svg
            className="absolute button__icon button__icon--copy"
            style={{ transform: 'translate(-150%, 150%)' }}
            xmlns="http://www.w3.org/2000/svg"
            width={14}
            fill="none"
            viewBox="0 0 14 15"
          >
            <path
              fill="currentColor"
              d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Button;
