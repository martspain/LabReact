import React from 'react';
import Card from './Card';

const CreateCards = (props) => {
  const cardImages = props.content;

  return (
    <React.Fragment>
      {
        cardImages.map((card, id) => <Card key={`carta: ${card}`} icon={cardImages[id]} move={props.keepTrack} checking={props.checking} />)
      }
    </React.Fragment>
  );
};

export default CreateCards;
