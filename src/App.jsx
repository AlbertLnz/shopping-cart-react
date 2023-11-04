import { useContext, useState } from "react";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { FiltersContext } from "./components/context/filters.jsx";
import { IS_DEVELOPMENT } from "./config.js";
import { products as initialProducts } from "./mock/products.json";

function useFilters() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filters, filterProducts, setFilters };
}

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
