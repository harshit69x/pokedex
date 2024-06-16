import React from 'react';
import './pokedex.css'; // Ensure this CSS file includes styles for the form

const Pokedex = ({ pokemonName, sprite, type }) => {
  
  return (
    <div className="bg">
      <div className="nft">
        <div className="main">
          {sprite ? (
            <img
              className="tokenImage"
              src={sprite}
              alt={pokemonName || "Pokemon"}
            />
          ) : (
            <img
              className="tokenImage"
              src={"https://i.pinimg.com/736x/85/9e/03/859e0396b1c628832ba6b7c47c4a95b5.jpg"}
              alt={pokemonName || "Pokemon"}
            />
          )}
          <h2>{pokemonName ? `Pokemon Name: ${pokemonName}` : 'Pokemon'}</h2>
          <p className="description" style={{ fontWeight: '100' }}>
            Type: <span style={{ backgroundColor: 'white', borderRadius: '5px', color: 'black' }}>{type || "Type"}</span>
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
