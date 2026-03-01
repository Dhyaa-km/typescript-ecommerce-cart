import type { Product } from "../types"

const API_URL = "https://fakestoreapi.com/products"

export async function fetchProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL)

    if (!response.ok) {
      throw new Error("Failed to fetch products")
    }

    return await response.json()

  } catch (error) {
    console.error(error)
    return []
  }
}