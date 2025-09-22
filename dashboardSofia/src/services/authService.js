import axios from "axios";

const API_URL = "https://api-node-test-6c4b0a5d4c87.herokuapp.com";

export const login = async (email, senha) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      senha,
    });

    // Se a API retornar sucesso, salvar no localStorage
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Erro ao fazer login.";
  }
};

export const logout = () => {
  localStorage.removeItem("user");
};

export const getUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
