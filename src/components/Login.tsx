import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { login } from "../services/api";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as SecureStore from "expo-secure-store";

export default function LoginScreen() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const navigation = useNavigation<any>();

  const handleLogin = async () => {
    try {
      const data = await login(username, password);
      if (data?.token) {
        await SecureStore.setItemAsync("authToken", data.token);
        navigation.push("Home");
      } else {
        Alert.alert("Usuário ou senha incorreto(s)");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/Logo.png")} />

      <TextInput
        style={styles.input}
        placeholder="Digite seu usuário"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  input: {
    height: 40,
    width: "80%",
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    paddingVertical: 10,
    marginTop: 30,
    width: "80%",
  },
  buttonText: {
    color: "#FFFFFF",
    marginRight: 10,
  },
  forgotPasswordButton: {
    marginTop: 20,
  },
  forgotPasswordText: {
    color: "#000000",
    textDecorationLine: "underline",
  },
});
