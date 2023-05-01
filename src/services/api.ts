import axios from "axios";
import * as SecureStore from 'expo-secure-store';

const api = axios.create({
  baseURL: "http://192.168.0.112:5269/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const getToken = async (): Promise<string | null> => {
  return await SecureStore.getItemAsync('token');
};

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post("/user/auth", {
      email: username,
      password: password,
    });
    return response.data;
  } catch (error: any) {
    console.log(error.message); //ToDo tratar
  }
};

export const products = async () => {
  const token = await getToken();

  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  //ToDo redirecionar para login token

  try {
    const response = await api.get("/product");
    return response.data;
  } catch (error: any) {
    console.log(error.message); //ToDo tratar
  }
};
