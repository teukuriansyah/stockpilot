import axios from "axios"

const api = axios.create({
  baseUrl:import.meta.env.BASE_URL
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
  const data = await api.get("/order")
  return data
}