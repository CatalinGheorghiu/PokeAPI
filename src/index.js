import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./App";
import { PokemonProvider } from "./context/PokemonContext.jsx";

ReactDOM.render(
    <PokemonProvider>
        <App />
    </PokemonProvider>,

    document.getElementById("root")
);
