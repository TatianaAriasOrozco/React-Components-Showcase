import Pokemons from "./pokemon";
import Title from "./title";
import Counter from "./counter";

function App() {
  return (
    <div style={{
      fontFamily: "Inter, sans-serif",
    }}>
      <Title />
      <Counter />
      <Pokemons />
    </div>
  );
}

export default App;
