import React from "react";

const ClickableButton = ({ text }: { text: string }) => {
  return (
    <button className="px-4 py-2 sm:px-6 sm:py-2 bg-[#e8c5e5] text-white text-base sm:text-lg font-semibold rounded-lg shadow-md hover:bg-[#f19ed2] focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 transition duration-300">
      {text}
    </button>
  );
};

export default ClickableButton;
