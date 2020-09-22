import React from "react";
import "../Navbar/navbar.css";
import Searchbar from "../SearchBar/SearchBar";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="x">
                <Searchbar />
            </div>
            <ul className="navbar-nav">
                <li className="logo">PokeDex</li>
            </ul>
        </nav>
    );
};

export default Navbar;
