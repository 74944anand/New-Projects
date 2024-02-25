import React from "react";

interface Props {
  title: string;
  clearCanvas: () => void;
}
const Button = ({ title, clearCanvas }: Props) => {
  return (
    <div>
      <button id="btn" onClick={clearCanvas} className={title} type="button">
        {title}
      </button>
    </div>
  );
};

export default Button;
