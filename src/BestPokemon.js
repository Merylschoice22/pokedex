import React from "react";

const BestPokemon = (props) => {
  return (
    <div>
      <p>My favourite Pokemon is Huffle Puff</p>
      <ul>
        {props.abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
