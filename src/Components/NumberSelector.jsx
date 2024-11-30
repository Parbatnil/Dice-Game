import React from "react";

const NumberSelector = ({
  selectedNumberIndex,
  setSelectedNumberIndex,
  number,
  error,
}) => {
  const handleColor = (index) => {
    setSelectedNumberIndex(index);
  };

  return (
    <div className="mx-4 md:mx-10 space-y-6 my-10">
      {/* Error Message */}
      <h1 className="text-right md:text-xl text-red-600 text-sm">{error}</h1>

      {/* Number Buttons */}
      <div className="flex flex-wrap gap-4 justify-center md:justify-start mx-4">
        {number.map((value, i) => (
          <button
            className={`rounded-md border py-2 px-4 md:px-6 md:py-3 transition-all duration-300 ease-in-out ${
              selectedNumberIndex === i
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-500"
            } hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2`}
            onClick={() => handleColor(i)}
            key={i}
          >
            {value}
          </button>
        ))}
      </div>

      {/* Label */}
      <h1 className="text-center md:text-right font-semibold text-lg md:text-2xl mx-4">
        Select Number
      </h1>
    </div>
  );
};

export default NumberSelector;
