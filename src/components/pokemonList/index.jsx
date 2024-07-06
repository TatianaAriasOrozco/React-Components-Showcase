import React, { useEffect, useState, useRef } from "react";
import Card from "../card";
import useMediaQuery from "../../hooks/useMediaQuery";

const PokemonsList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [types, setTypes] = useState([]);
  // se guardaran los datos filtrados de los pokemones
  const [filteredPokemons, setFilterPokemons] = useState([]);
  // hara referencia al selector
  const selectorRef = useRef();
  // obtener el size para la resolucion mobile
  const isSmallScreen = useMediaQuery('(max-width: 599px)');

  useEffect(() => {
    //cargamos los datos del archivo json
    const fetchPokemons = async () => {
      const response = await fetch("/src/data/pokemons.json");
      const result = await response.json();
      setPokemons(result);
      setFilterPokemons(result);
      // Mapear los tipos de pokemon, pasar a string, luego a array y filtrar elementos repetidos
      setTypes([...new Set(result.map((item) => item.types).join().split(','))]);
    };
    fetchPokemons();
  }, []);

  //Filtrar los pokemones según el tipo
  const setFilterTypes = () => {
    const selectionType = selectorRef.current.value;
    const filteredTypes = pokemons.filter(pokemon => pokemon.types.includes(selectionType));
    if (selectionType === "all") {
      setFilterPokemons(pokemons);
    } else {
      setFilterPokemons(filteredTypes);
    }
  }

  return (
    <div style={{
      padding: "4rem",
    }}>
      <h2 style={{
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "32px",
        color: "#171717",
      }}>
        Filter
      </h2>
      <p style={{
          fontSize: "18px",
          lineHeight: "32px",
          color: "#171717",
        }}
      >
        Descripción: Componente que muestra la lista de pokemones, con sus respectivos nombres,
        tipos e imagenes. Pueden ser filtrados segun sus tipos, mediante un selector.
      </p>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto auto",
          maxWidth: "298px",
          fontSize: "14px",
        }}>
        <label htmlFor="types-selector"
          style={{
            fontWeight: 500,
            lineHeight: "12px",
            color: "#171717",
            marginBottom: "1rem"
          }
          }>Filter by type</label>
        <select 
          id="types-selector"
          style={{
            border: "1px solid #D4D4D4",
            borderRadius: "6px",
            padding: "12px 8px",
            outline: "none"
          }} 
          ref={selectorRef}
          onChange={() => setFilterTypes()}
        >
          <option value={"all"}>All types</option>
          {types.map((type, index) => {
            return <option value={type} key={index}>{type}</option>
          })};
        </select>
      </div>
      <div style={{
        display: "grid",
        gap: "16px",
        gridTemplateColumns: isSmallScreen ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        maxWidth: "824px",
        margin: "40px auto auto",
      }}>
        {filteredPokemons.map((pokemon, index) => {
          return <Card
            imageUrl={pokemon.image_url}
            pokemonName={pokemon.name}
            pokemonType={pokemon.types}
            key={index}
          />
        })}
      </div>
    </div>
  );
};

export default PokemonsList;
