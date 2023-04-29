import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { TextInputMask } from "react-native-masked-text";

export default function ScanProducts() {
  const [codigo, setCodigo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [mercado, setMercado] = useState("Mercado A");

  const cadastrarProduto = () => {
    // Lógica para cadastrar o produto
  };

  const options = {
    precision: 2,
    separator: ",",
    delimiter: ".",
    unit: "R$ ",
    suffixUnit: "",
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Mercado:</Text>
        <Picker
          style={styles.picker}
          selectedValue={mercado}
          onValueChange={setMercado}
        >
          <Picker.Item label="Mercado A" value="Mercado A" />
          <Picker.Item label="Mercado B" value="Mercado B" />
          <Picker.Item label="Mercado C" value="Mercado C" />
        </Picker>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Descrição:</Text>
        <TextInput
          style={styles.input}
          value={descricao}
          onChangeText={setDescricao}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Código de barras:</Text>
        <TextInput
          style={styles.input}
          value={codigo}
          onChangeText={setCodigo}
        />
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>Preço:</Text>
        <TextInputMask
          type={"money"}
          options={options}
          value={preco}
          onChangeText={setPreco}
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={cadastrarProduto}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 16,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  picker: {
    flex: 1,
    height: 40,
  },
  button: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
  },
  buttonText: {
    color: "#fff",
  },
});
