import { UserInterface } from "../types";
import {
  signUpUserDal,
  signInUserDal,
  addToCartDal,
  deleteFromCartDal,
} from "./usersDal";

export const signUpUserService = async (user: UserInterface) =>
  await signUpUserDal(user);

export const signInUserService = async (user: UserInterface) =>
  await signInUserDal(user);

export const addToCartService = async (userId: string, productId: string) =>
  await addToCartDal(userId, productId);

export const deleteFromCartService = async (
  userId: string,
  productId: string
) => await deleteFromCartDal(userId, productId);
