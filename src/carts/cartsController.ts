import { Request, Response } from "express";
import {
  getCartService,
  addToCartService,
  deleteFromCartService,
} from "./cartsServices";

export const getCart = async (req: Request, res: Response) => {
  try {
    const cartData = await getCartService(req.params.userId);
    if (Array.isArray(cartData)) res.status(200).json(cartData);
    else throw cartData;
  } catch (err) {
    console.error(err);
    res.status(403).json(err);
  }
};

export const addToCart = async (req: Request, res: Response) => {
  try {
    const addToCartResult = await addToCartService(
      req.params.userId,
      req.params.productId
    );
    if (Array.isArray(addToCartResult)) res.status(200).json(addToCartResult);
    else throw addToCartResult;
  } catch (err) {
    res.status(403).json(err);
    console.error(err);
  }
};

export const deleteFromCart = async (req: Request, res: Response) => {
  try {
    const deleteFromCartResult = await deleteFromCartService(
      req.params.userId,
      req.params.productId
    );
    if (Array.isArray(deleteFromCartResult))
      res.status(200).json(deleteFromCartResult);
    else throw deleteFromCartResult;
  } catch (err) {
    res.status(403).json(err);
    console.error(err);
  }
};
