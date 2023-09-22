import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactCardFlip from "react-card-flip";
import GameService from "../services/GameService";
import { cardContainerVariants, cardVariants } from "../animations";

export default function Game({ onGameEnd, difficulty }) {
  const [emojis, setEmojis] = useState([]);
  const [numberOfMoves, setNumberOfMoves] = useState(0);
  const [cards, setCards] = useState([]);
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);

  useEffect(() => {
    if (matchedPairs === emojis.length && emojis.length > 0) {
      // All pairs are matched, the game is over
      setTimeout(() => {
        onGameEnd(numberOfMoves);
      }, 200);
    }
  }, [matchedPairs, emojis]);

  useEffect(() => {
    resetGame();
    // Generate and set random emojis
    const randomEmojis = GameService.getRandomEmojis(
      difficulty === "easy" ? 8 : 15
    );
    setEmojis(randomEmojis);

    // Shuffle and initialize cards when emojis change
    const newCards = [...randomEmojis, ...randomEmojis];
    const shuffledCards = GameService.shuffleCards(newCards);

    const mappedCards = shuffledCards.map((item, index) => ({
      id: index,
      value: item,
      show: false,
    }));

    setCards(mappedCards);
  }, []);

  const resetGame = () => {
    setCards([]);
    setFlippedCards([]);
    setMatchedPairs(0);
    setNumberOfMoves(0);
  };

  const showCard = (id) => {
    const card = cards.find((card) => card.id === id);

    if (card.show) {
      return; // Card is already showing, return early
    }

    if (flippedCards.length < 2) {
      const newCards = cards.map((card) => {
        if (card.id === id) {
          return {
            ...card,
            show: true,
          };
        }
        return card;
      });

      setCards(newCards);
      setFlippedCards([...flippedCards, id]);
      setNumberOfMoves(numberOfMoves + 1);

      if (flippedCards.length === 1) {
        // Two cards are flipped; check for a match
        const [firstCardId] = flippedCards;
        if (cards[firstCardId].value === cards[id].value) {
          // Match found, keep cards face-up and increment matchedPairs
          setMatchedPairs(matchedPairs + 1);
          setFlippedCards([]);
        } else {
          // No match, flip both cards back face-down after a delay
          setTimeout(() => {
            const resetCards = cards.map((card) =>
              flippedCards.includes(card.id) ? { ...card, show: false } : card
            );
            setCards(resetCards);
            setFlippedCards([]);
          }, 1000);
        }
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={cardContainerVariants}
      className={`grid ${
        difficulty == "easy" ? "grid-cols-4" : "grid-cols-6"
      } ${difficulty == "easy" ? "gap-2.5 lg:gap-5" : "gap-1.5 lg:gap-2"}`}
    >
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className="w-full aspect-square h-full"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          transition={{ type: "spring", delay: index * 0.1, duration: 1, bounce: 0.6}}
        >
          <ReactCardFlip isFlipped={card.show} flipDirection="horizontal">
            <motion.button
              whileTap={{
                scale: 0.9,
                transition: {
                  type: "spring",
                  duration: 0.3,
                },
              }}
              className="bg-gradient-to-tr from-indigo-200 to-purple-300 h-full w-full text-[100px] rounded-2xl shadow-lg"
              onClick={() => showCard(card.id)}
            ></motion.button>

            <motion.button
              className={`bg-gradient-to-tr from-indigo-600 to-purple-600 h-full w-full rounded-2xl shadow-lg
              ${
                difficulty == "easy"
                  ? "text-4xl lg:text-[70px]"
                  : "text-2xl lg:text-[50px]"
              }
              `}
              onClick={() => showCard(card.id)}
              style={{ fontFamily: "Noto Color Emoji" }}
            >
              {card.value}
            </motion.button>
          </ReactCardFlip>
        </motion.div>
      ))}
    </motion.div>
  );
}
