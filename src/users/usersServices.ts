import { UserInterface } from "../types";
import { signUpUserDal, signInUserDal, addToCartDal } from "./usersDal";

export const signUpUserService = async (user: UserInterface) =>
  await signUpUserDal(user);

export const signInUserService = async (user: UserInterface) =>
  await signInUserDal(user);

export const addToCartService = async (userId: string, productId: string) =>
  await addToCartDal(userId, productId);
