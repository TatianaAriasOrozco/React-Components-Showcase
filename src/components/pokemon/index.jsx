import React, { useEffect, useState } from "react";

const Pokemons = () => {
  const [pokemon, setPokemon] = useState([]);
  const [options, setOptions] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    //cargamos los datos del archivo json
    const fetchPokemons = async () => {
      const response = await fetch("/src/data/pokemons.json");
      const result = await response.json();
      setPokemon(result);
      setOptions(result.map((item) => item.types));
    };
    fetchPokemons();
  }, []);

  console.log(options);

  return <div>Pokemon</div>;
};

export default Pokemons;
