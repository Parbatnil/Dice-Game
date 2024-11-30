import React, { useState } from "react";
import StartGame from "./Components/StartGame";
import GamePlay from "./Components/GamePlay";

const App = () => {
  const [isgameStarted, setIsGameStarted] = useState(true);
  const toggleGampley = () => {
    setIsGameStarted((prev) => !prev);
  };
  return (
    <div>
      {!isgameStarted ? <StartGame toggle={toggleGampley} /> : <GamePlay />}
    </div>
  );
};

export default App;
