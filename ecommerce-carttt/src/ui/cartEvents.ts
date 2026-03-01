import { removeFromCart, updateQuantity } from "../services/cartService"

export function attachCartEvents() {

  const removeButtons = document.querySelectorAll(".remove-btn")
  const quantityInputs = document.querySelectorAll(".item-quantity")

  removeButtons.forEach(button => {
    button.addEventListener("click", () => {
      const id = (button as HTMLElement).dataset.id as string
      removeFromCart(Number(id))
     
    })
  })

  quantityInputs.forEach(input => {
    input.addEventListener("input", () => {
      const id = (input as HTMLElement).dataset.id as string
      const value = Number((input as HTMLInputElement).value)
      updateQuantity(Number(id), value)
    })
  })
}
