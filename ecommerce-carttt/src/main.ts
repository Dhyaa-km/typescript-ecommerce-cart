/* 
interface Product {
  id: string
  name: string
  price: number
}

interface CartItem {
  product: Product
  quantity: number
}

const addToCartButtons = document.querySelectorAll(".add-to-cart")
const cartItemsContainer = document.querySelector(".cart-items") as HTMLElement
const totalPriceElement = document.querySelector(".total-price") as HTMLElement
const cartCountElement = document.querySelector(".cart-count") as HTMLElement

// ==============================
// STATE (SOURCE OF TRUTH)
// ==============================

let cart: CartItem[] = []


addToCartButtons.forEach(button => {
  button.addEventListener("click", (event) => {

    const productCard = (event.currentTarget as HTMLElement)
      .closest(".product-card") as HTMLElement

    const nameElement = productCard.querySelector(".product-name") as HTMLElement
    const priceElement = productCard.querySelector(".product-price") as HTMLElement

    const name = nameElement.textContent ?? "Product"
    const rawPrice = priceElement.textContent ?? "0"
    const price = Number(rawPrice.replace("$", ""))

    const product: Product = {
      id: name, 
      name,
      price
    }

    addToCart(product)
  })
})


function addToCart(product: Product) {

  const existingItem = cart.find(item => item.product.id === product.id)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      product,
      quantity: 1
    })
  }

  renderCart()
}

function removeFromCart(productId: string) {
  cart = cart.filter(item => item.product.id !== productId)
  renderCart()
}

function updateQuantity(productId: string, quantity: number) {

  const item = cart.find(item => item.product.id === productId) 

  if (!item) return;

  if (quantity <= 0) {
    removeFromCart(productId)
  } else {
    item.quantity = quantity // Ensure quantity is at least 1
  }

  renderCart()
}


function renderCart() {

  cartItemsContainer.innerHTML = ""

  cart.forEach(item => {

    const cartItem = document.createElement("div")
    cartItem.classList.add("cart-item")

    cartItem.innerHTML = `
      <div class="item-info">
        <span class="item-name">${item.product.name}</span>
        <input 
          type="number" 
          value="${item.quantity}" 
          min="1" 
          class="item-quantity"
          data-id="${item.product.id}"
        />
      </div>
      <div class="item-price">${item.product.price.toFixed(2)}</div>
      <button class="remove-btn" data-id="${item.product.id}">
        Remove
      </button>
    `

    cartItemsContainer.appendChild(cartItem)
  })

  attachCartEvents()
  updateTotalPrice()
  updateCartCount()
}


function attachCartEvents() { 

  const removeButtons = document.querySelectorAll(".remove-btn")
  const quantityInputs = document.querySelectorAll(".item-quantity")

  removeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const id = (button as HTMLElement).dataset.id as string 
      removeFromCart(id)
    })
  })

  quantityInputs.forEach(input => { 
    input.addEventListener("input", () => {
      const id = (input as HTMLElement).dataset.id as string 
      const value = Number((input as HTMLInputElement).value)
      updateQuantity(id, value) 
    })
  })
}


function updateTotalPrice() {

  const total = cart.reduce((sum, item) => {
    return sum + item.product.price * item.quantity
  }, 0)

  totalPriceElement.textContent = `$${total.toFixed(2)}`
}


function updateCartCount() {

  const totalItems = cart.reduce((sum, item) => {
    return sum + item.quantity
  }, 0)

  cartCountElement.textContent = String(totalItems)
} */
import { fetchProducts } from "./services/productService"
import { renderProducts } from "./ui/renderProducts"
import { initSearch } from "./ui/search"

async function init() {

  const products = await fetchProducts()

  renderProducts(products)
  initSearch(products)
}

init()