import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Card = (props) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const HandleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return(
        <ReactCardFlip isFlipped ={isFlipped} flipDirection = "vertical">
            <div className="card-front" onClick ={HandleClick}>
                <img src={props.icon} className="image"></img>
            </div>
            <div className="card-back" onClick={HandleClick}>
                <h1 className="back-title">React</h1>
            </div>
        </ReactCardFlip> 
    );
}

export default Card;