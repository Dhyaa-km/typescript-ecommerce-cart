# 🛒 TypeScript E-Commerce Cart

A modular and state-driven shopping cart built with **Vanilla TypeScript**.

This project is built to practice TypeScript fundamentals, including clean architecture, state-driven UI updates, and safe DOM manipulation. It serves as a learning milestone in my TypeScript development journey.

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
            ├── types.ts
            ├── state/
            │     └── cartState.ts
            │
            ├── services/
            │     └── cartService.ts
            │
            ├── ui/
            │     ├── renderCart.ts
            │     └── cartEvents.ts
            │     └── renderProducts.ts
            │     └── search.ts
            │
            └── utils/
                └── format.ts
        ├── .gitignore
        ├── index.html
        ├── package-lock.json
        ├── package.json
        └── tsconfig.json
```

- `renderProducts.ts` → Product rendering
- `cartService.ts` → Cart logic (add/remove/update)
- `cartState.ts` → Centralized cart state
- `renderCart.ts` → UI rendering based on state

Cart UI is derived from state instead of manual DOM counters.

---

## 🛠 Tech Stack

- TypeScript
- DOM API
- Modular architecture (ES6 Modules)

---

## 📦 Installation

```bash
git clone https://github.com/Dhyaa-km/typescript-ecommerce-cart.git
cd ecommerce-carttt
npm install
npm run dev
```


