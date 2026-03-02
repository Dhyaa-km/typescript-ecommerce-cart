import type { Product } from "../types"
import { formatPrice } from "../utils/format"
import { addToCart } from "../services/cartService"
import { cart } from "../state/cartState"

const productsContainer = document.querySelector(".products") as HTMLElement

function updateCartCountDisplay() {
  const cartCountEl = document.querySelector(".cart-count") as HTMLElement
  const total = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCountEl.textContent = total.toString()
}

export function renderProducts(products: Product[]) {

  productsContainer.innerHTML = ""

  // Sync count on render (e.g. coming back to page)
  updateCartCountDisplay()

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
      updateCartCountDisplay()
    })

    productsContainer.appendChild(card)
  })
}