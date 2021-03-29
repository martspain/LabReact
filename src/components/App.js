import React, { Component } from "react";
import Game from "./Game.js";

import shuffle from "../utils.js";
import teslaImg from "../assets/images/tesla.jpg";
import mclarenImg from "../assets/images/mclaren.jpg";
import astonImg from "../assets/images/aston.jpg";
import bentley from "../assets/images/bentley.jpg";
import ferrari from "../assets/images/ferrari.jpg";
import lambo from "../assets/images/lambo.jpg";
import maserati from "../assets/images/maserati.jpg";
import porsche from "../assets/images/porsche.jpg";

const initCardImages = [teslaImg, mclarenImg, astonImg, bentley, ferrari, lambo, maserati, porsche,
    teslaImg, mclarenImg, astonImg, bentley, ferrari, lambo, maserati, porsche];
const cardImages = shuffle(initCardImages);

class App extends Component{
    render() {
        return(
            <Game content={cardImages}/>
        )
    }
}

export default App;