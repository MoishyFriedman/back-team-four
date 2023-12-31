import { Request, Response } from "express";
import {
  getCategoriesService,
  topCategoriesService,
  getProductsService,
  getTop5ProductsService,
  categoryRatingService,
  productRatingService
} from "./productsService";

export const getAllCategories = async (req: Request, res: Response) => {
  try {
    const categoriesData = await getCategoriesService();
    res.status(200).json(categoriesData);
  } catch (err) {
    console.error(err);
    res.status(403).json(err);
  }
};

export const getTop5Categories = async (req: Request, res: Response) => {
  try {
    const topCategoriesData = await topCategoriesService();
    res.status(200).json(topCategoriesData);
  } catch (err) {
    console.error(err);
    res.status(403).json(err);
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const productsData = await getProductsService(req.params.categoryId);
    if (Array.isArray(productsData) && productsData.length > 0)
      res.status(200).json(productsData);
    else throw productsData;
  } catch (err) {
    console.error(err);
    res.status(403).json(err);
  }
};

export const getTop5Products = async (req: Request, res: Response) => {
  try {
    const productsData = await getTop5ProductsService();
    if (Array.isArray(productsData) && productsData.length > 0)
      res.status(200).json(productsData);
    else throw productsData;
  } catch (err) {
    console.error(err);
    res.status(403).json(err);
  }
};

export const categoryRating = async (req: Request, res: Response) => {
  try {
    const categoryRatingUpdate = await categoryRatingService(req.params.categoryId);
    if (typeof categoryRatingUpdate === `number`)
      res.status(200).json(categoryRatingUpdate);
    else throw categoryRatingUpdate;
  } catch (err) {
    console.error(err);
    res.status(403).json(err);
  }
};

export const productRating = async (req: Request, res: Response) => {
  try {
    const productRatingUpdate = await productRatingService(req.params.productId);
    if (typeof productRatingUpdate === `number`)
      res.status(200).json(productRatingUpdate);
    else throw productRatingUpdate;
  } catch (err) {
    console.error(err);
    res.status(403).json(err);
  }
};



