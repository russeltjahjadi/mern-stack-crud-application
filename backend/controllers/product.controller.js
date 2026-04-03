import mongoose from "mongoose";
import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    // The empty object {} means we want to find all products without any filter
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.error("Error in Get Products: ", error);
    return res.status(500).json({ success: false, message: "Server error." });
  }
};

export const createProduct = async (req, res) => {
  // User will send this data
  const product = req.body;
  console.log("this is the product:", product);
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
};

export const updateProduct = async (req, res) => {
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
};

export const deleteProduct = async (req, res) => {
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
};
