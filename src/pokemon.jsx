import React, { useState } from 'react';
import Pokedex from './components/pokedex';
import './pokemon.css'; // Import the CSS file for styling

const Pokemon = () => {
  const [sprite, setSprite] = useState(null);
  const [type, setType] = useState(null);
  const [name, setName] = useState(null);
  const [showPokedex, setShowPokedex] = useState(false); // State to control visibility of Pokedex
  const [buttonVisible, setButtonVisible] = useState(true); // State to control visibility of the Fetch Pokemon button

  const fetchPokemon = async () => {
    const pokemonName = prompt("Enter the Pokemon name").toLowerCase();
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      if (!response.ok) {
        throw new Error('Could not fetch resource');
      }
      const data = await response.json();
      const newSprite = data.sprites.front_default;
      const newType = data.types[0].type.name;

      setSprite(newSprite);
      setType(newType);
      setName(pokemonName);
      setShowPokedex(true); // Show Pokedex after successfully fetching data
      setButtonVisible(false); // Hide the Fetch Pokemon button after successful fetch
    } catch (error) {
      console.error(error);
      setShowPokedex(false); // Hide Pokedex if fetch fails
      setButtonVisible(true); // Show the Fetch Pokemon button again if fetch fails
    }
  };

  return (
    <div className="centered-container">
      {buttonVisible ? (
        <button onClick={fetchPokemon} className='Butt'>Fetch Pokemon</button>
      ) : null}
      {showPokedex && <Pokedex sprite={sprite} type={type} pokemonName={name} />}
    </div>
  );
};

export default Pokemon;
