import { Products } from "./components/Products";
import { products } from "./mock/products.json";

function App() {
  return (
    <>
      <h1>Shopping card</h1>
      <Products products={products} />
    </>
  );
}

export default App;
