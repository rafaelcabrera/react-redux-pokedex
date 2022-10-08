import React from "react";
import PokemonCard from "./PokemonCard";
import './PokemonList.css';

const PokemonList = ({ pokemons }) =>{
    return (
      <div className="PokemonList">
        {pokemons.map((pokemon) => {
          return <PokemonCard name={pokemon.name} key={pokemon.name} />;
        })}
      </div>
    );
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill('autofill')
}

export default PokemonList;