import { useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { IS_DEVELOPMENT } from "./config.js";
import { useFilters } from "./hooks/useFilters.js";
import { products as initialProducts } from "./mock/products.json";

function App() {
  const [products] = useState(initialProducts);
  const { filters, filterProducts, setFilters } = useFilters();
  const filteredProducts = filterProducts(products);

  return (
    <>
      <Header changeFilters={setFilters} />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>
  );
}

export default App;
