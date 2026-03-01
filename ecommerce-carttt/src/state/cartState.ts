import type { CartItem } from "../types"

export let cart: CartItem[] = []

export function setCart(newCart: CartItem[]) {
  cart = newCart
}