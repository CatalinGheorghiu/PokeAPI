import React, { Fragment, useState, useContext } from "react";
import Select from "react-select";
import { PokemonContext } from "../../context/PokemonContext";
import "../SearchBar/searchBar.css";


const SearchBar = () => {
    const { pokemons, setPokemon } = useContext(PokemonContext);
    const options = pokemons.map((p) => ({ label: p.name, value: p.url }));

    const [display, setDisplay] = useState(false);
    const [search, setSearch] = useState("");

    const filteredPokemons = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(search.toLowerCase());
    });

    // const options = filteredPokemons.map((pokemon) => pokemon);
    console.log(options);
    const [selectedOption, setSelectedOption] = useState(null);


    const handleInputChange = (e) =>{
        setDisplay(!display)
        setSearch(e)
        console.log(e);
    }

    return (
        <Fragment>
            {/* <div className="search-bar-container">
                <input
                    className="search-bar"
                    type="text"
                    placeholder="Search Pokemon"
                    onChange={(e) => setSearch(e.target.value)}
                    onClick={() => setDisplay(!display)}
                ></input>
                <i className="fas fa-search"></i>
            </div>
            <div className="results-container">
                {display &&
                    filteredPokemons.map((pokemon, index) => (
                        <div key={index} className="results">
                            <button
                                className="pokemon-item"
                                onClick={() => setPokemon(pokemon)}
                            >
                                {pokemon.name}
                            </button>
                        </div>
                    ))}
            </div> */}
            {/* <Select
                options={options}
                menuIsOpen={display}
                onChange={handleChange}
                onInputChange={handleInputChange}
            /> */}
            <Select
                // defaultValue={selectedOption}
                onChange={setSelectedOption}
                
                options={options}
                menuIsOpen={display}
                onInputChange={handleInputChange}
            />
        </Fragment>
    );
};

export default SearchBar;
