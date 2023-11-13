import { UserInterface } from "../types";
import { signUpUserDal, signInUserDal } from "./usersDal";

export const signUpUserService = async (user: UserInterface): boolean =>
  await signUpUserDal(user);
  
export const signInUserService = async (user: UserInterface): boolean =>
    await signInUserDal(user);