import { cart, setCart } from "../state/cartState"
import type { Product } from "../types"
import { renderCart } from "../ui/renderCart"

export function addToCart(product: Product) {

  const existingItem = cart.find(item => item.product.id === product.id)

  let updatedCart : any[] = []

  if (existingItem) {
    updatedCart = cart.map(item =>
      item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    )
  } else {
    updatedCart = [
      ...cart,
      {
        product,
        quantity: 1
      }
    ]
  }
  

  setCart(updatedCart)
  renderCart()
}

export function removeFromCart(productId: number) {

  const updatedCart = cart.filter(
    item => item.product.id !== productId
  )

  setCart(updatedCart)
  renderCart()
  
}

export function updateQuantity(productId: number, quantity: number) {

  if (quantity <= 0) {
    removeFromCart(productId)
    return 
  }

  const updatedCart = cart.map(item =>
    item.product.id === productId ? { ...item, quantity } : item
  )

  setCart(updatedCart)
  renderCart()
}