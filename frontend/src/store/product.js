// Global state
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.image || !newProduct.price) {
      return { success: false, message: "Please fill in all fields!!" };
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      const data = await res.json();

      if (data.success == false) {
        return { success: false, message: data.message };
      }
      set((state) => ({ products: [...state.products, data.data] }));
      return { success: true, message: "Product created successfully" };
    } catch {
      return { success: false, message: "Server error" };
    }
  },
  fetchProducts: async () => {
    try {
      const res = await fetch("/api/products");

      if (!res.ok) throw new Error(`HTTP error: ${res.status}`);

      const text = await res.text();
      if (!text) return;

      const data = JSON.parse(text);
      set({ products: data.data });
    } catch (error) {
      console.error("Failed to fetch products:", error.message);
    }
  },
  deleteProduct: async (productId) => {
    const res = await fetch(`/api/products/${productId}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!data.success) return { success: false, message: data.message };

    set((state) => ({
      // This updates the ui immediately without the need to refresh
      products: state.products.filter((product) => product._id !== productId),
    }));

    return { success: true, message: data.message };
  },
  updateProduct: async (productId, updatedProduct) => {
    const res = await fetch(`/api/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    const data = await res.json();
    if (!data.success) return { success: false, message: data.message };

    // update ui immediately without refresh
    set((state) => ({
      products: state.products.map((product) =>
        product._id === productId ? data.data : product,
      ),
    }));
    return { success: true, message: data.message };
  },
}));
