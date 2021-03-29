import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const Card = (props) => {
  const [isFlipped, setIsFlipped] = useState(true);

  const HandleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const cardClicked = () => {
    HandleClick();
    props.move();

    if (isFlipped && props !== undefined) {
      props.checking(props.icon);
    }
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
      <div className="card-front" onClick={HandleClick}>
        <img src={props.icon} className="image" alt="Ups! La imagen no fue encontrada :(" />
      </div>
      <div className="card-back" onClick={cardClicked}>
        <h1 className="back-title">Pairs</h1>
      </div>
    </ReactCardFlip>
  );
};

export default Card;
