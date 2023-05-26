import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <div
      className="min-w-[80px] px-3 md:w-24 py-2 hover:cursor-pointer
                    flex flex-col justify-center
                    text-center rounded-lg shadow-xl border-2 border-blue-900
                    text-lg md:text-2xl bg-sky-500 text-white focus:bg-sky-600 active:bg-blue-600 "
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default Button;
