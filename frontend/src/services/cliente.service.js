import axios from "axios";

const API_URL = "http://localhost:3000/api"; // Ajusta según tu configuración

export async function getCliente() {
    try {
      const { data } = await axios.get(`${API_URL}/cliente/`);
      return data;
    } catch (error) {
      console.error("Error al obtener clientes:", error);
      return [];
    }
  }

export async function createCliente(clienteData) {
  try {
    const { data } = await axios.post(`${API_URL}/cliente/`, clienteData);
    return data;
  } catch (error) {
    console.error("Error al crear cliente:", error);
    throw error;
  }
}

export async function updateCliente(id, clienteData) {
  try {
    const { data } = await axios.put(`${API_URL}/cliente/${id}`, clienteData);
    return data;
  } catch (error) {
    console.error("Error al actualizar cliente:", error);
    throw error;
  }
}
