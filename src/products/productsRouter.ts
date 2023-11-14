import express from "express";
import { getAllCategories, getTop5Categories } from "./productsController";

const router = express.Router();

router.get(`/categories`, getAllCategories);

router.get(`/topCategories`, getTop5Categories);

export default router;
