const ClickableButton = ({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) => {
  return (
    <button
      className={`px-2 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 bg-[#e8c5e5] text-white text-xs sm:text-sm md:text-base font-semibold rounded-xl shadow-md hover:bg-[#f19ed2] hover:text-yellow-100 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75 transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default ClickableButton;
