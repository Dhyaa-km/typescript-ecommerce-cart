import { cart } from "../state/cartState"
import { removeFromCart, updateQuantity } from "../services/cartService"

export function renderCart() {
  const cartCount = document.querySelector(".cart-count") as HTMLElement
  const cartContainer = document.querySelector(".cart-items") as HTMLElement
  const totalPriceEl = document.querySelector(".total-price") as HTMLElement

  cartContainer.innerHTML = ""

  let total = 0

  cart.forEach(item => {

    total = (item.product.price * item.quantity) + total

    const cartItem = document.createElement("div")
    cartItem.className = "cart-item"

    cartItem.innerHTML = `
      <div class="item-info">
        <span class="item-name">${item.product.title}</span>
        <input type="number" value="${item.quantity}" min="1" class="item-quantity" />
      </div>
      <div class="item-price">$${(item.product.price * item.quantity).toFixed(2)}</div>
      <button class="remove-btn">Remove</button>
    `

    const removeBtn = cartItem.querySelector(".remove-btn") as HTMLButtonElement
    const quantityInput = cartItem.querySelector(".item-quantity") as HTMLInputElement

    removeBtn.addEventListener("click", () => {
      removeFromCart(item.product.id)
    })

    quantityInput.addEventListener("change", (e) => {
      const newQuantity = Number((e.target as HTMLInputElement).value)
      updateQuantity(item.product.id, newQuantity)
    })
    const totalItems = cart.reduce((total, item) => {
      return total + item.quantity
    }, 0)
    cartCount.textContent = totalItems.toString()

    cartContainer.appendChild(cartItem)
  })

  totalPriceEl.textContent = `$${total.toFixed(2)}`
}