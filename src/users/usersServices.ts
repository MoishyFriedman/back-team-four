import { UserInterface } from "../types";
import { signUpUserDal } from "./usersDal"

export const signUpUserService = async (user: UserInterface) =>
  await signUpUserDal(user);
