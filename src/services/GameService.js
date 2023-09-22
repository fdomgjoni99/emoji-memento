import emojis from "../data/emojis.json";

const GameService = {
    shuffleCards: (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    showCard: (cards, id) => {
      cards = cards.map((item) => {
        if (item.id === id) {
          item.show = true;
          return item;
        }
        return item;
      });
      return cards;
    },
    hideCards: (cards) => {
      cards = cards.map((card) => {
        if (card.show) {
          card.show = !card.show;
        }
        return card;
      });
      return cards;
    },
    getRandomEmojis: (numberOfEmojis) => {
        // Shuffle the array using the Fisher-Yates shuffle algorithm
        const shuffledArray = [...emojis];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        // Select the first numberOfEmojis elements from the shuffled array
        return shuffledArray.slice(0, numberOfEmojis);
      }
  };
  
  export default GameService;  