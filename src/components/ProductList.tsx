import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CartContext } from "../contexts/CartContext";

const products: any[] = [];

const ProductListItem = ({ product, onAddToCart }: any) => {
  const navigation = useNavigation<any>();

  const openDetails = () => {
    navigation.push("ProductDetails");
  };

  return (
    <View style={styles.productListItem}>
      <TouchableOpacity onPress={openDetails}>
        <Image source={product.image} style={styles.productImage} />
      </TouchableOpacity>
      <View style={styles.productDetails}>
        <TouchableOpacity onPress={openDetails}>
          <Text style={styles.productName}>{product.name.slice(0, 40)}</Text>
          <Text style={styles.productBarcode}>{product.barcode}</Text>
        </TouchableOpacity>
      </View>
      <Ionicons
        onPress={() => onAddToCart(product)}
        name="add-circle"
        size={24}
      />
    </View>
  );
};

export default function ProductList() {
  const { addItem } = useContext(CartContext);

  const addToCart = (product: any) => {
    addItem({ id: product.id, name: product.name });
  };

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductListItem product={item} onAddToCart={addToCart} />
      )}
    />
  );
}

const styles = StyleSheet.create({
  productListItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productBarcode: {
    fontSize: 14,
    color: "gray",
    marginBottom: 8,
  },
});
