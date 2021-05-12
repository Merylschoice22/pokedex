import React, { useState, useEffect } from "react";

const PokemonMoves = (props) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    console.log("Fetching Pokemon data");
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`)
      .then((response) => response.json())
      .then((data) => {
        console.log("Here's the fetch", data);
        setPokemonData(data);
      });
  }, [props.pokemonId]);

  /****IF STATEMENT ****/
  // if (pokemonData) {
  //   return (
  //     <div>
  //       <p>{pokemonData.name}'s moves:</p>
  //       <ul>
  //         {pokemonData.moves.slice(0, 5).map((move, index) => {
  //           return <li key={index}>{move.move.name}</li>;
  //         })}
  //       </ul>
  //     </div>
  //   );
  // } else {
  //   return <h2>Loading moves...</h2>;
  // }

  /**** TERNARY STATEMENT ****/
  return (
    <div>
      {pokemonData ? (
        <div>
          <p>{pokemonData.name}'s moves:</p>
          <ul>
            {pokemonData.moves.slice(0, 5).map((move, index) => {
              return <li key={index}>{move.move.name}</li>;
            })}
          </ul>
        </div>
      ) : (
        <h2>Loading moves...</h2>
      )}
    </div>
  );
};

export default PokemonMoves;
