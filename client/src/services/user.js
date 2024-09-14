import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export const loginUser = async (login, senha) => {
  return api.post("/user/login", { login, senha });
};

export const registerUser = async (nome, login, senha) => {
  return api.post("/user/register", { nome, login, senha });
};

export const logoutUser = async () => {
  return api.post("/user/logout");
};

export const getUserInfo = async () => {
  try {
    const response = await api.get("/user/info");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Erro ao obter informações do usuário:", error);
    throw error;
  }
};
