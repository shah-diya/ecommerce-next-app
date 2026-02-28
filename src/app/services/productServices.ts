import { fetchAPI } from "./services_base";

export async function getAllProducts() {
  return fetchAPI("/products");
}

export async function getProductById(id: string) {
  return fetchAPI(`/products/${id}`);
}