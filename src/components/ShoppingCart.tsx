import React, { useContext } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { CartContext } from "../contexts/CartContext";

const ShoppingCart = () => {
  const { cartItems, addItem, removeItem } = useContext(CartContext);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
        {cartItems.map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: "#FFF",
              alignItems: "center",
              flexDirection: "row",
              margin: 10,
              paddingHorizontal: 20,
              borderRadius: 5,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 50, height: 80, marginRight: 10 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                onPress={() => removeItem(item.id)}
                name="remove-circle"
                size={24}
              />

              <Text style={{ marginHorizontal: 10 }}>{item.quantity}</Text>
              <Ionicons
                onPress={() => addItem({ id: item.id, name: item.name })}
                name="add-circle"
                size={24}
              />
            </View>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={{
          display: cartItems.length ? "flex" : "none",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "black",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
        }}
      >
        <Text style={{ color: "#FFF" }}>Encontrar o melhor mercado</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingCart;
