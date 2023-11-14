import { UserInterface } from "../types";
import { User } from "./userModel";

export const signUpUserDal = async (user: UserInterface) => {
  const newUser = new User(user);
  try {
    const result = await newUser.save();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

export const signInUserDal = async (user: UserInterface) => {};
