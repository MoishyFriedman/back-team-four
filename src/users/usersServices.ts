import { UserInterface } from "../types";
import { signUpUserDal, signInUserDal } from "./usersDal";

export const signUpUserService = async (user: UserInterface) =>
  await signUpUserDal(user);

export const signInUserService = async (user: UserInterface) =>
  await signInUserDal(user);
