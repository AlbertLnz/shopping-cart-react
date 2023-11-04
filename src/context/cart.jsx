import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    // producto está en el carrito
    const productInCartIndex = cart.findIndex((item) => item.id === product.id);
    // FORMA USANDO EL STRUCTURE CLONE
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    // producto no está en el carrito
    setCart((prevState) => [...prevState, { ...product, quantity: 1 }]);
  };
  const clearCart = () => {
    setCart([]);
  };

  const removeFromCart = (product) => {
    setCart((prevState) => prevState.filter((item) => item.id !== product.id));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
