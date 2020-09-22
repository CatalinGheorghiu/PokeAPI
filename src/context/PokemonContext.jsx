import React, { useState, useEffect, createContext } from "react";
import Axios from "axios";

export const PokemonContext = createContext();

export const PokemonProvider = (props) => {
    const url = "http://pokeapi.co/api/v2/pokemon/?limit=811";
    const [pokemons, setPokemons] = useState([]);
    const [pokemon, setPokemon] = useState(null);


    useEffect(() => {
        Axios.get(url).then((res) => {
            // console.log(res.data.results);
            setPokemons(res.data.results);
        });
    }, [url]);
    return (
        <PokemonContext.Provider value={{pokemons, pokemon, setPokemon}}>
            {props.children}
        </PokemonContext.Provider>
    );
};
