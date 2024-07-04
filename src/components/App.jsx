import pokemons from "../data/pokemons.json";
import Title from "./title";
import Counter from "./counter";

function App() {
  console.log(pokemons);
  return (
    <>
      <Title />
      <Counter />
    </>
  );
}

export default App;
