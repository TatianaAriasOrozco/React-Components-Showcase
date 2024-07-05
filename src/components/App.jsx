import Title from "./title";
import Counter from "./counter";
import PokemonsList from "./pokemonList";

function App() {
  return (
    <div style={{
      fontFamily: "Inter, sans-serif",
    }}>
      <Title />
      <Counter />
      <PokemonsList />
    </div>
  );
}

export default App;
