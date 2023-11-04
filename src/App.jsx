import { useState } from "react";
import { Products } from "./components/Products";
import { products as initialProducts } from "./mock/products.json";

function App() {
  const [products] = useState(initialProducts);
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <>
      <h1>Shopping card</h1>
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
