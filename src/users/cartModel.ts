import { Schema, model } from "mongoose";
import { ICart } from "../types";

const cartSchema = new Schema<ICart>({
  user_id: {
    type: String,
    required: true,
  },
  products_id: {
    type: [String],
    required: true,
  },
}); 

export const Cart = model<ICart>("Cart", cartSchema);
