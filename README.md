# Codex

Codex is a **mock online eBook store** built with **React** and powered by **Vite**.

It serves as a sample front-end for experimenting with API integrations, authentication, and modern React development workflows.

---

### Frontend

- **React** (UI library)
- **Redux** (State Management)
- **Redux Tool Kit** (Simplified Redux Development)
- **Vite** (Fast Development + Build Tool)
- **ESLint** (Linting)

### Backend

The backend for the application is [**codex-server**](https://github.com/s-varun22/codex-server), a mock eBook API server that:

- Runs an **Express** app in **TypeScript**
- Mounts **json-server** for a file-based REST API
- Adds **json-server-auth** for:
  - User registration
  - Login
  - JWT-based authentication
  - Resource-based permission rules
- Provides REST API endpoints

  ```yml
  POST   /login                     # User login
  POST   /register                  # User registration
  GET    /products                  # Get all products
  GET    /products/:id              # Get a single product by ID
  GET    /products?name_like=term   # Search products by name
  GET    /featured_products         # Get featured products
  POST   /orders                    # Create a new order (auth required)
  GET    /orders?user.id={id}       # Get all orders for a user (auth required)
  GET    /users/{id}                # Get user details (auth required)
  ```

---

## Getting Started

  ### 1. Clone the repositories

  **Frontend**

  ```bash
  git clone https://github.com/s-varun22/codex.git
  ```

  **Backend**

  ```bash
  git clone https://github.com/s-varun22/codex-server.git
  ```

---

  ### 2. Install dependencies

  **Frontend**

  ```bash
  cd codex
  npm install
  ```

  **Backend**

  ```bash
  cd codex-server
  npm install
  ```

---

 ### 3. Start development servers

**Backend**

```bash
npm run build; npm run start
```

**Frontend**

```bash
npm run dev
```

---

### 4. Access the app

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:8000](http://localhost:8000)
- Live Demo: [https://codex.varun-srivastava.com](https://codex.varun-srivastava.com)

---
