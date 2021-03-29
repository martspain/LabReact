import React from "react";
import Card from "./Card.js";

const CreateCards = (props) =>{

    const cardImages = props.content;

    return(
        <React.Fragment>
            {
                cardImages.map((card, id) => 
                    <Card key={`carta: ${card} con id: ${id}`} icon={cardImages[id]} move={props.keepTrack} checking={props.checking}/>
                )
            }
        </React.Fragment>
    )
}

export default CreateCards;