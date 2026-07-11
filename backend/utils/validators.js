export const validatePrice = (price) => {
  if (price === null || price === undefined || price === "") {
    return { valid: false, message: "Price is required." };
  }

  const parsed =
    typeof price === "number" ? price : Number(String(price).trim());

  if (Number.isNaN(parsed)) {
    return { valid: false, message: "Price must be a valid number." };
  }

  if (parsed < 0) {
    return { valid: false, message: "Price cannot be negative." };
  }

  return { valid: true, value: parsed };
};
