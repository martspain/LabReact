import React from "react";
import Card from "./Card.js";
import teslaImg from "../assets/images/tesla.jpg";
import mclarenImg from "../assets/images/mclaren.jpg";

const CreateCards = () =>{
    
    const cardImages = [teslaImg, mclarenImg];

    return(
        <React.Fragment>
            {
                cardImages.map((card, id) => 
                    <Card key={card} icon={cardImages[id]}/>
                )
            }
        </React.Fragment>
    )
}

export default CreateCards;