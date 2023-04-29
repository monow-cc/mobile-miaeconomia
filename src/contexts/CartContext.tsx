import React, { createContext, useState } from "react";

interface CartContextData {
  cartItems: any[];
  addItem: (item: any) => void;
  removeItem: (itemId: any) => void;
  clearCart: () => void;
}

// {
//   "id": 1,
//   "marketId": 1,
//   "description": "teste",
//   "ammount": 2,
//   "value": 2,
//   "costValue": 2,
//   "lastUpdated": "teste",
//   "updatedAt": "2023-04-29T18:44:49.3337398-03:00",
//   "createdAt": "2023-04-29T18:44:49.3342103-03:00",
//   "market": "Miltinho"
// }

export const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: any) {
  const [cartItems, setCartItems] = useState<any>([]);

  function addItem(itemToAdd: any) {
    setCartItems((prevCart: any) => {
      const itemIndex = prevCart.findIndex(
        (item: any) => item.id === itemToAdd.id
      );

      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex] = {
          ...updatedCart[itemIndex],
          quantity: updatedCart[itemIndex].quantity + 1,
        };
        return updatedCart;
      }

      return [...prevCart, { ...itemToAdd, quantity: 1 }];
    });
  }

  function removeItem(itemId: any) {
    setCartItems((prevCart: any) => {
      const itemIndex = prevCart.findIndex((item: any) => item.id === itemId);

      if (itemIndex !== -1) {
        const updatedCart = [...prevCart];
        if (updatedCart[itemIndex].quantity > 1) {
          updatedCart[itemIndex] = {
            ...updatedCart[itemIndex],
            quantity: updatedCart[itemIndex].quantity - 1,
          };
        } else {
          updatedCart.splice(itemIndex, 1);
        }
        return updatedCart;
      }

      return prevCart;
    });
  }

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
