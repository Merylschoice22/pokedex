import React, { useState } from "react";
import "./App.css";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);
  const [inputState, setInputState] = useState("");

  const catchPokemon = () => {
    if (pokemonNameInput) {
      setCaught(caught.concat(pokemonNameInput));
      setPokemonNameInput("");
    } else {
      // setInputState("invalid-input");
      alert("Please type a Pokemon name");
    }
  };

  const [pokemonNameInput, setPokemonNameInput] = useState("");

  const handleInputChange = (event) => {
    setPokemonNameInput(event.target.value);
  };

  return (
    <div>
      <input
        // className={inputState}
        type="text"
        value={pokemonNameInput}
        onChange={handleInputChange}
      ></input>
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
