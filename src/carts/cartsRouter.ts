import express from "express";
import { getCart, addToCart, deleteFromCart } from "./cartsController";

const router = express.Router();

router.get(`/cart/:userId`, getCart);

router.put(`/add/:userId/:productId`, addToCart);

router.put(`/delete/:userId/:productId`, deleteFromCart);

export default router;
