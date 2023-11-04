import { Cart } from "./components/Cart.jsx";
import { Footer } from "./components/Footer.jsx";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { IS_DEVELOPMENT } from "./config.js";
import { CartProvider } from "./context/cart.jsx";
import { useFilters } from "./hooks/useFilters.js";
import { products as initialProducts } from "./mock/products.json";

function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      {IS_DEVELOPMENT && <Footer />}
    </CartProvider>
  );
}

export default App;
