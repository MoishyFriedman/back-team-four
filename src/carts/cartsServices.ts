import { UserInterface } from "../types";
import { getCartDal, addToCartDal, deleteFromCartDal } from "./cartsDal";

export const getCartService = async (userId: string) =>
  await getCartDal(userId);

export const addToCartService = async (userId: string, productId: string) =>
  await addToCartDal(userId, productId);

export const deleteFromCartService = async (
  userId: string,
  productId: string
) => await deleteFromCartDal(userId, productId);
