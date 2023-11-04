import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { IS_DEVELOPMENT } from "./config.js";
import { useFilters } from "./hooks/useFilters.js";
import { products as initialProducts } from "./mock/products.json";

function App() {
  const { filters, filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <>
      <Header />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  );
}

export default App;
