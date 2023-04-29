import React from "react";
import Routes from "./src/Routes";
import { CartProvider } from "./src/contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
}

export default App;
