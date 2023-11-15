import express from "express";
import {
  getAllCategories,
  getTop5Categories,
  getProducts,
  createCart,
  addToCart
} from "./productsController";

const router = express.Router();

router.get(`/categories`, getAllCategories);

router.get(`/topCategories`, getTop5Categories);

router.get(`/`, getProducts);

export default router;
