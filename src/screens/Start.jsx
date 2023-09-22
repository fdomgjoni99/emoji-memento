import React from "react";
import { motion } from "framer-motion";
import {
  startScreenContainerVariants,
  startScreenItemVariants,
} from "../animations";

export default function Start({ onStart, difficulty, setDifficulty }) {
  return (
    <motion.div
      variants={startScreenContainerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="flex flex-col justify-center items-center gap-y-12 h-full"
    >
      <motion.div
        key="title"
        variants={startScreenItemVariants}
        className="bg-gray-700 w-full py-6 rounded-3xl shadow-lg border"
      >
        <motion.h1 className="text-center flex flex-col">
          <span className="saturate-[80%] text-8xl drop-shadow-lg">Emoji</span>
          <br />
          <span className="saturate-0 text-7xl">Memento</span>
        </motion.h1>
      </motion.div>
      <motion.div
        key="buttons"
        variants={startScreenItemVariants}
        className="w-full"
      >
        <div className="grid grid-cols-2 gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className={`shadow-[inset_0px_0px_10px_6px_#00000010] px-3 py-2 text-center text-4xl rounded-full text-white ${
              difficulty == "easy"
                ? "bg-gradient-to-bl from-purple-500 to-amber-500"
                : "bg-gray-400"
            }`}
            onClick={() => setDifficulty("easy")}
          >
            Easy
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            className={`shadow-[inset_0px_0px_10px_6px_#00000010] px-3 py-2 text-center text-4xl rounded-full text-white ${
              difficulty == "hard"
                ? "bg-gradient-to-bl from-purple-500 to-amber-500"
                : "bg-gray-400"
            }`}
            onClick={() => setDifficulty("hard")}
          >
            Hard
          </motion.button>
        </div>
      </motion.div>
      <motion.button
        variants={startScreenItemVariants}
        key="play-button"
        onClick={onStart}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.8,
        }}
        className="pl-2 shadow-inner w-20 w-20 aspect-square flex items-center justify-center bg-gradient-to-tr from-purple-400 to-amber-400 text-white rounded-full shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
          fill="#fff"
        >
          <path d="M3 22v-20l18 10-18 10z" />
        </svg>
      </motion.button>
    </motion.div>
  );
}
