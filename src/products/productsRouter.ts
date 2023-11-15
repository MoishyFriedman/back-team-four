import express from "express";
import {
  getAllCategories,
  getTop5Categories,
  getProducts,
<<<<<<< HEAD
  getTop5Products,
=======
  // createCart,
  // addToCart
>>>>>>> main
} from "./productsController";

const router = express.Router();

router.get(`/categories`, getAllCategories);

router.get(`/topCategories`, getTop5Categories);

<<<<<<< HEAD
router.get(`/allProducts/:categoryId`, getProducts);

router.get(`/topProducts`, getTop5Products);
=======
router.get(`/:categoryId`, getProducts);
>>>>>>> main

export default router;
