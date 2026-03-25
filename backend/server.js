import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";
dotenv.config();

const app = express();

app.use(express.json()); // middle layer - allows us to parse JSON data from the request body

app.use("/api/products", productRoutes);

// Connect to DB first, then start the server
const startServer = async () => {
  await connectDB();
  app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000");
  });
};

startServer();
