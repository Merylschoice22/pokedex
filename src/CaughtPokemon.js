import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const catchPokemon = () => {
    setCaught(caught.concat("Weedle"));
  };

  return (
    <div>
      <button onClick={catchPokemon}>Catch Pokemon</button>
      <p>
        Caught {caught.length} Pokemon on {props.date}
      </p>
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
    </div>
  );
};

export default CaughtPokemon;
