import { Request, Response } from "express";
import {
  getCategoriesService,
  topCategoriesService,
  getProductsService,
  // addToCartService,
} from "./productsService";
import { IProduct } from "../types";

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categoriesData = await getCategoriesService();
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(403).json(err);
    console.error(err);
  }
};

export const getTop5Categories = async (req: Request, res: Response) => {
  try {
    const topCategoriesData = await topCategoriesService();
    res.status(200).json(topCategoriesData);
  } catch (err) {
    res.status(403).json(err);
    console.error(err);
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const productsData = await getProductsService(req.params.categoryId);
    if (Array.isArray(productsData) && productsData.length > 0)
      res.status(200).json(productsData);
    else throw productsData;
  } catch (err) {
    res.status(403).json(err);
    console.error(err);
  }
};




