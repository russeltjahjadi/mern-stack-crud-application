import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";
const router = express.Router();

router.post("/", async (req, res) => {
  const product = req.body; // User will send this data

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields." });
  }

  const newProduct = new Product(product);
  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create Product: ", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  // Mongoose can't query at all because of invalid format of id
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid product ID format." });
  }

  try {
    const product = await Product.findByIdAndDelete(id);

    // Mongoose queries successfully but finds nothing
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "No product found with that ID." });
    }

    res
      .status(200)
      .json({ success: true, message: "Product deleted successfully." });
  } catch (error) {
    console.error("Error in Delete Product: ", error);

    return res.status(500).json({ success: false, message: "Server error." });
  }
});

router.get("/", async (req, res) => {
  try {
    // The empty object {} means we want to find all products without any filter
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in Get Products: ", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ success: false, message: "Invalid product ID format." });
  }

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Product updated successfully.",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error in Update Product: ", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
});

export default router;
