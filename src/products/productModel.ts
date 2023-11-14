import mongoose, { Schema } from "mongoose";
import { ICategory, IProduct } from "../types";

// Mongoose schema for the product
const productSchema = new Schema<IProduct>({
  product_name: { type: String, required: true },
  product_image_url: { type: String, required: true },
  description: { type: String, required: true },
  category_id: { type: String, required: true },
  price: { type: Number, required: true },
  stock_quantity: { type: Number, required: true },
  view: { type: Number, required: true },
});

// Mongoose schema for the category
const categorySchema = new Schema<ICategory>({
  category_name: { type: String, required: true },
  view: { type: Number, required: true },
});

const Product = mongoose.model<IProduct>("Product", productSchema);
const Category = mongoose.model<ICategory>("Category", categorySchema);

export { Product, Category };
