import { useState } from "react";
import "./App.css";
import { AnimatePresence, motion } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import Game from "./screens/Game";
import Start from "./screens/Start";
import End from "./screens/End";

export default function App() {
  const [screen, setScreen] = useState("start");
  const [difficulty, setDifficulty] = useState("easy");
  const [numberOfMoves, setNumberOfMoves] = useState(0);
  const onStart = () => {
    setScreen("game");
  };

  const onGameEnd = (numberOfMoves) => {
    setNumberOfMoves(numberOfMoves);
    setScreen("end");
  };

  const getScreen = () => {
    if (screen === "start") {
      return (
        <Start
          key="start"
          onStart={onStart}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
        />
      );
    }
    if (screen === "end") {
      return (
        <End
          key="end"
          numberOfMoves={numberOfMoves}
          onRestart={() => setScreen("start")}
        />
      );
    }
    return (
      <Game
        key="game"
        difficulty={difficulty}
        onGameEnd={(numberOfMoves) => onGameEnd(numberOfMoves)}
      />
    );
  };
  return (
    <div className="App p-5 h-screen text-gray-700 max-w-xl mx-auto overflow-y-hidden overflow-x-hidden flex flex-col justify-center">
      <AnimatePresence mode="wait">{getScreen()}</AnimatePresence>
    </div>
  );
}
