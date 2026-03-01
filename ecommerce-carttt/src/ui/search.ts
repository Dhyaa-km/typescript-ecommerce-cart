import type { Product } from "../types"
import { renderProducts } from "./renderProducts"

const searchInput = document.querySelector(".search-bar input") as HTMLInputElement

export function initSearch(products: Product[]) {

  searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase()

    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(value)
    )

    renderProducts(filtered)
  })
}