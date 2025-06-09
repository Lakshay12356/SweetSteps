import React from 'react';
import styled from 'styled-components';

const Button: React.FC = () => {
  return (
    <StyledWrapper>
      <button className="button" type="button">
        <p className="button__text" aria-label="Book Now circular text">
          <span style={{ '--index': 0 } as React.CSSProperties}>B</span>
          <span style={{ '--index': 1 } as React.CSSProperties}>O</span>
          <span style={{ '--index': 2 } as React.CSSProperties}>O</span>
          <span style={{ '--index': 3 } as React.CSSProperties}>K</span>
          <span style={{ '--index': 4 } as React.CSSProperties} />
          <span style={{ '--index': 5 } as React.CSSProperties}>N</span>
          <span style={{ '--index': 6 } as React.CSSProperties}>O</span>
          <span style={{ '--index': 7 } as React.CSSProperties}>W</span>
          <span style={{ '--index': 8 } as React.CSSProperties} />
          <span style={{ '--index': 9 } as React.CSSProperties}>B</span>
          <span style={{ '--index': 10 } as React.CSSProperties}>O</span>
          <span style={{ '--index': 11 } as React.CSSProperties}>O</span>
          <span style={{ '--index': 12 } as React.CSSProperties}>K</span>
          <span style={{ '--index': 13 } as React.CSSProperties} />
          <span style={{ '--index': 14 } as React.CSSProperties}>N</span>
          <span style={{ '--index': 15 } as React.CSSProperties}>O</span>
          <span style={{ '--index': 16 } as React.CSSProperties}>W</span>
          <span style={{ '--index': 17 } as React.CSSProperties} />
        </p>
        <div className="button__circle" aria-hidden="true">
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
            className="button__icon button__icon--copy"
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
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    cursor: pointer;
    border: none;
    background: #fef6f7;
    color: #db5275;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: grid;
    place-content: center;
    transition: background 300ms, transform 200ms;
    font-weight: 600;
  }

  .button__text {
    position: absolute;
    inset: 0;
    animation: text-rotation 8s linear infinite;

    > span {
      position: absolute;
      transform: rotate(calc(19deg * var(--index)));
      inset: 7px;
    }
  }

  .button__circle {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: #fff;
    color: #db5275;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button__icon--copy {
    position: absolute;
    transform: translate(-150%, 150%);
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

  @keyframes text-rotation {
    to {
      rotate: 360deg;
    }
  }
`;

export default Button;
