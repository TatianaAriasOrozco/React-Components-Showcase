import Title from "./title";
import Counter from "./counter";
import PokemonsList from "./pokemonList";
import ShoppingCart from "./shoppingCart";

function App() {
  return (
    <div style={{
      fontFamily: "Inter, sans-serif",
    }}>
      <Title />
      <Counter />
      <PokemonsList />
      <ShoppingCart />
    </div>
  );
}

export default App;
