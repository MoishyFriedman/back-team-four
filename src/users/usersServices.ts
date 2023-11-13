import { User } from "../types";
import { signUpUserDal } from "./usersDal";

export const signUpUserService = async (user: User) =>
  await signUpUserDal(user);
