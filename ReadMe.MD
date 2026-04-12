# 🛍️ MERN Stack Product Manager

A full-stack CRUD application for managing products, built with MongoDB, Express, React, and Node.js.

🌐 **Live Site:** [https://mern-stack-crud-application-nupk.onrender.com](https://mern-stack-crud-application-nupk.onrender.com)

---

## Tech Stack

**Frontend**

- React (Vite)
- Chakra UI v3
- Zustand (state management)
- React Router DOM

**Backend**

- Node.js
- Express
- Mongoose
- dotenv
- body-parser

**Database**

- MongoDB Atlas

**Deployment**

- [Render](https://render.com) (full-stack — frontend + backend on a single service)

---

## Features

- View all products
- Create a new product
- Edit an existing product
- Delete a product
- Responsive design with light/dark mode

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm
- MongoDB Atlas account (or local MongoDB)
- Postman (optional, for API testing)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mern-stack-crud-application.git
cd mern-stack-crud-application
```

### 2. Set up environment variables

Create a `.env` file in the root directory:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

> ⚠️ **Never commit your `.env` file to GitHub.** It should be listed in `.gitignore`. This step just tells you what variables to create locally — the actual secret values stay on your machine.

### 3. Install dependencies

```bash
# Install backend dependencies
npm install

# Install frontend dependencies
npm install --prefix frontend
```

### 4. Run the app in development

You need to run the backend and frontend in **two separate terminals**, both from the **root directory**:

**Terminal 1 — Backend:**

```bash
npm run dev
```

Runs on `http://localhost:3000`

**Terminal 2 — Frontend:**

```bash
cd frontend
npm run dev
```

Runs on `http://localhost:5173`

In production, both are served from a single port (`3000`) — Express serves the built React app as static files.

---

## API Endpoints

| Method | Endpoint            | Description          |
| ------ | ------------------- | -------------------- |
| GET    | `/api/products`     | Get all products     |
| POST   | `/api/products`     | Create a new product |
| PUT    | `/api/products/:id` | Update a product     |
| DELETE | `/api/products/:id` | Delete a product     |

> **Tip:** If testing with Postman, make sure the **Postman Desktop Agent** is running. You can select it from the bottom-right corner of the Postman web app to communicate with your localhost.

---

## Scripts

| Command         | Description                                         |
| --------------- | --------------------------------------------------- |
| `npm run dev`   | Run backend in development with nodemon (from root) |
| `npm run build` | Install all dependencies and build the frontend     |
| `npm start`     | Run backend in production mode                      |

---

## Deployment

### Render (Full-Stack)

This app is deployed as a single service on Render. Express serves the built React frontend as static files in production, so everything runs on one port.

1. Connect your GitHub repo to [Render](https://render.com)
2. Set the **build command** to `npm run build`
3. Set the **start command** to `npm start`
4. Add environment variables in Render's dashboard: `MONGO_URI`, `PORT`

---

## Project Structure

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

## Reference: https://www.youtube.com/watch?v=O3BUHwfHf84&pp=ygUlbWVybiBjcnVkIHN0YWNrIHByb2R1Y3Qgc3RvcmUgbWFuYWdlcg%3D%3D


## License

© 2025 Russel Tjahjadi. All rights reserved.
