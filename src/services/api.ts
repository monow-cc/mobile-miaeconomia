import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.1.7:5269/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

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
