import React from "react";

const Score = ({ score }) => {
  return (
    <div>
      <div className=" px-4 max-w-28 ">
        <h1 className="md:text-7xl font-semibold text-center text-6xl">
          {score}
        </h1>
        <p className=" font-medium text-center">Totalscore</p>
      </div>
    </div>
  );
};

export default Score;
