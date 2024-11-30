import React, { useState } from "react";
import Swal from "sweetalert2";
const RollDice = ({ rollDice, diceImages, dice, resetScore }) => {
  const showRules = () => {
    Swal.fire({
      title: "How to play dice game?",
      html: `1. Select any number<br><br> 
      2. After clicking on the dice, if the selected number is equal to the dice number, you will get the same point. <br> <br> 
      3. If you get the wrong guess, then 2 points will be deducted.`,
      icon: "question",
    });
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center mt-10">
        {" "}
        <img
          src={diceImages[dice]}
          alt={`Dice ${dice + 1}`}
          className="h-40 cursor-pointer"
          onClick={rollDice}
        />
        <p className="text-2xl font-semibold text-center">
          Click on dice to roll
        </p>
        <div className=" flex flex-col justify-center items-center">
          {" "}
          <button
            className=" text-black bg-white px-9 py-2 my-5 hover:text-white  border border-black  rounded-md hover:bg-black  transition delay-50"
            onClick={resetScore}
          >
            Reset Score
          </button>
          <button
            className="bg-black text-white px-9 py-2 my-5 hover:text-black border border-black  rounded-md hover:bg-white transition delay-50"
            onClick={showRules}
          >
            Show Rules
          </button>
        </div>
      </div>
    </div>
  );
};

export default RollDice;
