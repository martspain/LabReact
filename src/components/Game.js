import React, { useState } from 'react';
import CreateCards from './CreateCards';
import Counter from './Counter';

const Game = (props) => {
  const [resolved, setResolved] = useState([]);
  const [count, setCount] = useState(0);
  const [cardsFlipped, setCardsFlipped] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addAns = (item) => {
    const newArray = resolved.concat(item);
    setResolved(newArray);
  };

  const checkCards = (card) => {
    if (cardsFlipped.length === 3) {
      const newArray = [];

      if (cardsFlipped[1] === cardsFlipped[2] && !resolved.includes(cardsFlipped[1])) {
        alert('Bien hecho, lograste una!');
        addAns(cardsFlipped[1]);
      }

      if (resolved.length === 7) {
        alert('Felicidades! Has ganado');
      }
      setCardsFlipped(newArray);
    } else {
      const newArray = cardsFlipped.concat(card);
      setCardsFlipped(newArray);
      // console.log(`Cartas volteadas: ${cardsFlipped}`);
    }
    // console.log(`${resolved.length}`)
  };

  const cardImages = props.content;

  return (
    <div className="page-container">
      <header className="title-content">
        <h1>Matching Pairs</h1>
        <Counter init={count} />
      </header>
      <section className="body-content">
        <CreateCards keepTrack={increment} content={cardImages} checking={checkCards} />
      </section>
    </div>
  );
};

export default Game;
