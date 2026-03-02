# 🛒 TypeScript E-Commerce Cart

A modular and state-driven shopping cart built with **Vanilla TypeScript**.

This project is built to practice TypeScript fundamentals, including clean architecture, state-driven UI updates, and safe DOM manipulation. It serves as a learning milestone in my TypeScript development journey.

---

## 🚀 Features

- Fetch real products from the [Fake Store API](https://fakestoreapi.com)
- Search and filter products in real time
- Add products to cart
- Remove products from cart
- Update product quantity
- Dynamic cart counter (persists across pages)
- Dedicated cart page with order summary
- State-based cart management with `localStorage` persistence
- Clean separation of concerns
- Fully responsive (desktop, tablet, mobile)

---

## 🧠 Architecture

The project follows a modular structure:

```
└── 📁ecomCart
    └── 📁.vscode
        ├── settings.json
    └── 📁ecommerce-carttt
        └── 📁public
            ├── typescript.svg
            ├── vite.svg
        └── 📁src
            ├── main.ts              
            ├── cartPage.ts          
            ├── types.ts
            ├── state/
            │     └── cartState.ts
            │
            ├── services/
            │     ├── cartService.ts
            │     └── productService.ts
            │
            ├── ui/
            │     ├── renderCart.ts
            │     ├── cartEvents.ts
            │     ├── renderProducts.ts
            │     └── search.ts
            │
            └── utils/
                └── format.ts
        ├── .gitignore
        ├── index.html               ← Shop page
        ├── cart.html                ← Cart page
        ├── package-lock.json
        ├── package.json
        └── tsconfig.json
```

- `renderProducts.ts` → Product grid rendering + cart count sync
- `cartService.ts` → Cart logic (add / remove / update quantity)
- `cartState.ts` → Centralized cart state with `localStorage` persistence
- `renderCart.ts` → Cart UI rendering based on state
- `cartPage.ts` → Full cart page rendering with quantity controls and order summary
- `productService.ts` → Fetches products from Fake Store API
- `search.ts` → Real-time product filtering

Cart UI is derived from state instead of manual DOM counters. The cart persists across page navigation via `localStorage`.

---

## 🛠 Tech Stack

- TypeScript
- Vite
- DOM API
- Fake Store API
- Modular architecture (ES6 Modules)

---

## 📦 Installation

```bash
git clone https://github.com/Dhyaa-km/typescript-ecommerce-cart.git
cd ecommerce-carttt
npm install
npm run dev
```