import type { CartItem } from "../types"

const CART_KEY = "shopx_cart"

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart))
}

export let cart: CartItem[] = loadCart()

export function setCart(newCart: CartItem[]) {
  cart = newCart
  saveCart(cart)
}