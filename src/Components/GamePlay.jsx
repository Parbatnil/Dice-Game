import React, { useState } from "react";
import Score from "./Score";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";
import dice_1 from "../../public/dice_1.png";
import dice_2 from "../../public/dice_2.png";
import dice_3 from "../../public/dice_3.png";
import dice_4 from "../../public/dice_4.png";
import dice_5 from "../../public/dice_5.png";
import dice_6 from "../../public/dice_6.png";

const GamePlay = () => {
  const number = [1, 2, 3, 4, 5, 6];
  const [score, setScore] = useState(0);
  const [error, setError] = useState("");
  const [selectedNumberIndex, setSelectedNumberIndex] = useState(null);
  const [dice, setDice] = useState(0);
  const diceImages = [dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];
  const generateRandom = () => Math.floor(Math.random() * 6); // 0 to 5

  const rollDice = () => {
    if (selectedNumberIndex === null) {
      setError("You have not selected any numbers");
      return;
    }
    setError("");
    const randomNumber = generateRandom();
    setDice(randomNumber);
    console.log(`Rolled dice: ${randomNumber + 1}`);

    if (number[selectedNumberIndex] === randomNumber + 1) {
      setScore(score + 4);
    } else {
      setScore(score - 2);
    }
    setSelectedNumberIndex(null);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <div>
      <div className=" flex  justify-between">
        <Score score={score} />
        <NumberSelector
          selectedNumberIndex={selectedNumberIndex}
          setSelectedNumberIndex={setSelectedNumberIndex}
          number={number}
          error={error}
        />
      </div>
      <RollDice
        rollDice={rollDice}
        diceImages={diceImages}
        dice={dice}
        resetScore={resetScore}
      />
    </div>
  );
};

export default GamePlay;
