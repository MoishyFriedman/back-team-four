import { UserInterface } from "../types";
import { User } from "./userModel";

export const signUpUserDal = async (user: UserInterface) => {
 const newUser = new User(user)
 await newUser.save();
};