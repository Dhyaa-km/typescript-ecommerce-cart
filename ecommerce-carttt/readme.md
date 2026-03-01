# 🛒 TypeScript E-Commerce Cart

A modular and state-driven shopping cart built with **Vanilla TypeScript**.

This project demonstrates clean architecture, state management, and DOM manipulation without any frontend framework.

---

## 🚀 Features

- Add products to cart
- Remove products from cart
- Update product quantity
- Dynamic cart counter
- State-based cart management
- Clean separation of concerns

---

## 🧠 Architecture

The project follows a modular structure:

- `renderProducts.ts` → Product rendering
- `cartService.ts` → Cart logic (add/remove/update)
- `cartState.ts` → Centralized cart state
- `renderCart.ts` → UI rendering based on state

Cart UI is derived from state instead of manual DOM counters.

---

## 🛠 Tech Stack

- TypeScript
- DOM API
- Modular architecture (ES Modules)

---

## 📦 Installation

```bash
git clone https://github.com/YOUR_USERNAME/typescript-ecommerce-cart.git
cd typescript-ecommerce-cart
npm install
npm run dev
```

---

## 🎯 What I Learned

- TypeScript strict typing
- Managing state without frameworks
- Avoiding `any`
- Deriving UI from state
- Clean code architecture

---

## 📌 Future Improvements

- LocalStorage persistence
- Total price calculation
- Product quantity merging
- UI animations
- Convert to React version

---

## 👨‍💻 Author

Kerrouche