import type { Product } from "../types"
import { formatPrice } from "../utils/format"
import { addToCart } from "../services/cartService"

const productsContainer = document.querySelector(".products") as HTMLElement
let cartCount = document.querySelector(".cart-count") as HTMLElement
export function renderProducts(products: Product[]) {
  let count = 0

  productsContainer.innerHTML = ""

  products.forEach(product => {

    const card = document.createElement("div")
    card.classList.add("product-card")

    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${product.title}" />
      </div>

      <h3 class="product-name">${product.title}</h3>
      <p class="product-price">${formatPrice(product.price)}</p>

      <button class="add-to-cart">Add to Cart</button>
    `

    const button = card.querySelector<HTMLButtonElement>(".add-to-cart")

    if (!button) return

    button.addEventListener("click", () => {
      addToCart(product)
      count++
      cartCount.textContent = count.toString()
    })

    productsContainer.appendChild(card)
  })
}