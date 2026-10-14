import axios from "axios"

const api = axios.create({
  baseURL:import.meta.env.VITE_BASEURL,
  headers:{
    'ngrok-skip-browser-warning': 'true'  
  }
})

export async function getCategories() {
  const data = await api.get("/categories")
  return data
}

export async function getSuppliers() {
  const data = await api.get("/suppliers")
  return data
}

export async function getProducts() {
  const data = await api.get("/products")
  return data
}

export async function getStock() {
  const data = await api.get("/stock")
  return data
}

export async function getOrder() {
  const data = await api.get("/orders")
  return data
}