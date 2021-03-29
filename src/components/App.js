import React, { Component } from "react";
import CreateCards from "./CreateCards.js"

class App extends Component{

    render() {
        return(
            <div className="page-container">
                <header className="title-content">
                    <h1>Hola Mundo</h1>
                </header>
                <section className="body-content">
                    <CreateCards/>
                </section>
            </div>
        )
    }
}

export default App;