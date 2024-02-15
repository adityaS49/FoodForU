import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  
  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]); 
    setTotalPrice(totalPrice + item.price);
  };

  const cartContextValue = {
    cartItems,
    totalPrice,
    addItemToCart,
  };
console.log(cartItems);

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
