import { cart, setCart } from "./state/cartState"
import { formatPrice } from "./utils/format"
import type { CartItem } from "./types"



function syncHeaderCount() {
  const cartCountEl = document.querySelector(".cart-count") as HTMLElement
  const total = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCountEl.textContent = total.toString()
}


function removeItem(productId: number) {
  setCart(cart.filter(item => item.product.id !== productId))
  renderCartPage()
}



function updateQuantity(productId: number, quantity: number) {
  if (quantity <= 0) {
    removeItem(productId)
    return
  }
  setCart(
    cart.map(item =>
      item.product.id === productId ? { ...item, quantity } : item
    )
  )
  renderCartPage()
}



function renderCartPage() {
  const container = document.getElementById("cart-page-items") as HTMLElement
  const subtotalEl = document.getElementById("summary-subtotal") as HTMLElement
  const totalEl = document.getElementById("summary-total") as HTMLElement

  container.innerHTML = ""

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <p class="cart-empty-text">Your cart is empty</p>
        <a href="/" class="cart-empty-link">Start shopping →</a>
      </div>
    `
    subtotalEl.textContent = "$0.00"
    totalEl.textContent = "$0.00"
    syncHeaderCount()
    return
  }

  let subtotal = 0

  cart.forEach((item: CartItem) => {
    subtotal += item.product.price * item.quantity

    const row = document.createElement("div")
    row.className = "cart-page-item"

    row.innerHTML = `
      <div class="cpi-image">
        <img src="${item.product.image}" alt="${item.product.title}" />
      </div>
      <div class="cpi-info">
        <p class="cpi-name">${item.product.title}</p>
        <p class="cpi-category">${item.product.category}</p>
        <p class="cpi-unit-price">${formatPrice(item.product.price)} each</p>
      </div>
      <div class="cpi-controls">
        <button class="cpi-qty-btn minus" data-id="${item.product.id}">−</button>
        <span class="cpi-qty">${item.quantity}</span>
        <button class="cpi-qty-btn plus" data-id="${item.product.id}">+</button>
      </div>
      <div class="cpi-line-price">${formatPrice(item.product.price * item.quantity)}</div>
      <button class="cpi-remove" data-id="${item.product.id}">✕</button>
    `

    row.querySelector(".minus")!.addEventListener("click", () => {
      updateQuantity(item.product.id, item.quantity - 1)
    })
    row.querySelector(".plus")!.addEventListener("click", () => {
      updateQuantity(item.product.id, item.quantity + 1)
    })
    row.querySelector(".cpi-remove")!.addEventListener("click", () => {
      removeItem(item.product.id)
    })

    container.appendChild(row)
  })

  subtotalEl.textContent = formatPrice(subtotal)
  totalEl.textContent = formatPrice(subtotal)
  syncHeaderCount()
}

renderCartPage()