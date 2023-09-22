import React from "react";
import { motion } from "framer-motion";
import {
  endScreenContainerVariants,
  endScreenItemVariants,
} from "../animations.js";

export default function End({ numberOfMoves, onRestart }) {
  return (
    <motion.div
      variants={endScreenContainerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="flex flex-col justify-center items-center gap-y-12 h-full w-full mx-auto"
    >
      <div className="bg-gray-100 w-full py-6 rounded-3xl flex flex-col gap-y-6 items-center py-12">
        <motion.h1
          variants={endScreenItemVariants}
          className="text-center flex flex-col saturate-50 text-6xl"
        >
          Game Completed
        </motion.h1>
        <motion.span
          variants={endScreenItemVariants}
          className="text-4xl text-gray-500"
        >
          You've won with {numberOfMoves} moves
        </motion.span>
        <motion.button
          variants={endScreenItemVariants}
          onClick={onRestart}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.8,
          }}
          className="shadow-inner flex items-center justify-center gap-x-3 bg-gradient-to-tr from-purple-400 to-amber-400 text-white rounded-full shadow-lg px-6 py-2"
        >
          <span className="text-4xl">Restart Game</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
