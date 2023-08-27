import { createContext, useState } from "react";
const AppContext = createContext();


const CartProvider=({children})=>{

    const [idContext,setIdContext] = useState(1);
      const [cartItems, setCartItems] = useState([]);
      const [totalPrice, setTotalPrice] = useState(0);
    
      // Inside your addItemToCart function
      const addItemToCart = (item) => {
        const existingCartItem = cartItems.find(cartItem => cartItem.id === item.id);
        
        let updatedCartItems;
      
        if (existingCartItem) {
          updatedCartItems = cartItems.map(cartItem => {
            if (cartItem.id === item.id) {
              return { ...cartItem, count: cartItem.count + 1 };
            }
            return cartItem;
          });
        } else {
          updatedCartItems = [...cartItems, { ...item, count: 1 }];
        }
        
        const newTotalPrice = updatedCartItems.reduce((total, cartItem) => {
          return total + cartItem.price * cartItem.count;
        }, 0);
      
        setCartItems(updatedCartItems);
        setTotalPrice(newTotalPrice);
      };
      
    
    
    
      const cartContextValue = {
        cartItems,
        totalPrice,
        addItemToCart,
      };

      return(
        <AppContext.Provider value={{idContext,setIdContext,cartItems,setCartItems,totalPrice,cartContextValue,setTotalPrice,cartContextValue}}>
      
      {children}
    </AppContext.Provider>
      )

}    

  

export {CartProvider,AppContext};
