import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
//import ReactComponent from "react";
/*
class Card extends ReactComponent{
    render(){
        return(
            <button className="card"></button>
        )
    }
}
*/
const CardFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const HandleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return(
        <ReactCardFlip isFlipped ={isFlipped} flipDirection = "vertical">
            <div>
                <button className="card-front" onClick ={HandleClick}>Front</button>
            </div>
            <div>
                <button className="card-back" onClick={HandleClick}>Back</button>
            </div>
        </ReactCardFlip> 
    );
}

export default CardFlip;