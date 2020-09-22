import React, { useContext } from "react";
import Pokemon from "./Pokemon";
import { PokemonContext } from "../context/PokemonContext.jsx";

export default function Pokemons() {
    const {pokemons,setPokemons} = useContext(PokemonContext);

    return (
        <>
            <div className="bioDiv">
            {/* {pokemons.map((pokemon, key) => (
                    <div className="inner" key={key}>
                        <Pokemon name={pokemon.name} url={pokemon.url} />
                    </div>
                ))} */}
            </div>
        </>
    );
}
