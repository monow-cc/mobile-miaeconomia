import React from "react";
import { View } from "react-native";

import ProductList from "./ProductList";
import { SearchBar } from "./SearchBar";

const SeachProducts = () => {
  return (
    <View>
      <SearchBar />
      <ProductList />
    </View>
  );
};

export default SeachProducts;
