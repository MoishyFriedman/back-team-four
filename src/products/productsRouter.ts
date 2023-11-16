import express from "express";
import {
  getAllCategories,
  getTop5Categories,
  getProducts,
  getTop5Products,
  categoryRating,
  productRating,
} from "./productsController";

const router = express.Router();

router.get(`/categories`, getAllCategories);

router.get(`/topCategories`, getTop5Categories);

router.get(`/allProducts/:categoryId`, getProducts);

router.get(`/topProducts`, getTop5Products);

router.put(`/categoryRating/:categoryId`, categoryRating);

router.put(`/productRating/:productId`, productRating);

export default router;
