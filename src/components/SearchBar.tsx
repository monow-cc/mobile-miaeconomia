import React from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Pesquisar" />
      <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="search" size={24} />
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.iconButton}>
        <Ionicons name="qr-code" size={24} />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 8,
    padding: 8,
    margin: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 8,
  },
  iconButton: {
    padding: 8,
  },
});
