# 🛍️ ShelfFlow

A full-stack CRUD application for managing products, built with the **MERN** stack (MongoDB, Express, React, Node.js).

> 🔗 **Live Demo:** [mern-stack-crud-application-nupk.onrender.com](https://mern-stack-crud-application-nupk.onrender.com)

---

## ✨ Features

- 📋 View all products in a responsive grid
- ➕ Create a new product
- ✏️ Edit an existing product
- 🗑️ Delete a product
- 🌗 Light & dark mode (Chakra UI v3)
- 📱 Fully responsive layout

---

## 🧰 Tech Stack

**Frontend** — React (Vite) · Chakra UI v3 · Zustand · React Router DOM
**Backend** — Node.js · Express · Mongoose · body-parser
**Database** — MongoDB Atlas
**Deployment** — [Render](https://render.com) (single-service full-stack)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **npm**
- **MongoDB Atlas** account (or a local MongoDB instance)
- **Postman** *(optional, for API testing)*

### 1. Clone the repo

```bash
git clone https://github.com/your-username/mern-stack-crud-application.git
cd mern-stack-crud-application
```

### 2. Configure environment variables

Create a `.env` file in the **root directory**:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

> ⚠️ **Never commit your `.env` file.** Add it to `.gitignore` — actual secret values stay on your machine.

### 3. Install dependencies

```bash
# Backend (run from root)
npm install

# Frontend
npm install --prefix frontend
```

### 4. Run in development

You need **two terminals**, both started from the **root directory**:

| # | Terminal | Command                | URL                    |
| - | -------- | ---------------------- | ---------------------- |
| 1 | Backend  | `npm run dev`          | `http://localhost:3000`|
| 2 | Frontend | `npm run dev --prefix frontend` | `http://localhost:5173` |

The frontend proxies API requests to the backend (see `vite.config.js`).

### 5. Run in production *(single port)*

```bash
# Build the React app (output is served by Express)
npm run build

# Start the backend — serves both API and built frontend
npm start
```

App runs on **`http://localhost:3000`**.

---

## 📡 API Endpoints

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/products`     | Get all products     |
| POST   | `/api/products`     | Create a new product |
| PUT    | `/api/products/:id` | Update a product     |
| DELETE | `/api/products/:id` | Delete a product     |

> 💡 **Postman tip:** If using the Postman web app, make sure the **Postman Desktop Agent** is running — select it from the bottom-right corner to talk to your localhost.

---

## 📜 Scripts

| Command         | Description                                                              |
| --------------- | ------------------------------------------------------------------------ |
| `npm run dev`   | Run backend in development with nodemon                                   |
| `npm run build` | Install all dependencies and build the frontend for production            |
| `npm start`     | Run backend in production — also serves the built React app on `:3000`   |

---

## ☁️ Deployment (Render)

Deployed as a **single Render service** — Express serves the built React frontend as static files.

1. Connect your GitHub repo to [Render](https://render.com)
2. **Build command:** `npm run build`
3. **Start command:** `npm start`
4. Add environment variables in the Render dashboard: `MONGO_URI`, `PORT`

---

## 🗂️ Project Structure

```
mern-stack-crud-application/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   │   └── product.routes.js
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── ProductCard.jsx
│   │   ├── pages/
│   │   │   ├── HomePage.jsx
│   │   │   └── CreatePage.jsx
│   │   ├── store/
│   │   │   └── product.js
│   │   └── App.jsx
│   └── vite.config.js
├── .env
└── package.json
```

---

## 🐛 Troubleshooting

| Problem                                        | Fix                                                                    |
| ---------------------------------------------- | ---------------------------------------------------------------------- |
| `ECONNREFUSED 127.0.0.1:27017`                 | Start local MongoDB, or check your Atlas `MONGO_URI`                   |
| `EADDRINUSE :::3000`                           | Another process is on port 3000 — kill it or change `PORT` in `.env`   |
| Frontend can't reach backend                   | Verify the `proxy` in `frontend/vite.config.js` points to port `3000`  |
| Postman returns `Network Error`                | Make sure **Postman Desktop Agent** is running                         |

---

## 🙏 Credits

Built following this tutorial:
[Build a MERN Stack CRUD App — YouTube](https://www.youtube.com/watch?v=O3BUHwfHf84)

---

## 📄 License

© 2025 Russel Tjahjadi. All rights reserved.
