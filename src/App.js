import React, { Fragment, useContext } from "react";

import Navbar from "./components/Navbar/Navbar";
import Pokemon from "./components/Pokemon";
import { PokemonContext } from "./context/PokemonContext";

import "./css/App.css";

function App() {
    const { pokemon } = useContext(PokemonContext);

    return (
        <Fragment>
            <Navbar />
            {pokemon && <Pokemon url={pokemon.url} name={pokemon.name} />}
        </Fragment>
    );
}

export default App;
