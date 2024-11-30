import React from "react";
import dice from "../../public/dices.png";
const StartGame = ({ toggle }) => {
  return (
    <div className="flex  flex-col justify-center items-center gap-7 min-h-screen my-auto md:flex-row ">
      <div>
        <img src={dice} alt="dice game" className="h-60 md:h-72 lg:h-96" />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-5xl font-bold md:text-6xl xl:text-7xl">
          DICE GAME
        </h1>
        <div>
          <button
            className="bg-black text-white px-9 py-2 my-5 hover:text-black border border-black  rounded-md hover:bg-white transition delay-50"
            onClick={toggle}
          >
            {" "}
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartGame;
