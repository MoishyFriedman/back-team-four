import { UserInterface } from "../types";
import { User } from "./userModel";

export const signUpUserDal = async (user: UserInterface) => {
  const newUser = new User(user);
  // await newUser.save();
  try {
    const checking = await User.findOne(user);
    if (!checking) {
      const result = await newUser.save();
      if (result) return `User created`;
    } else {
      return `User exist`;
    }
  } catch (err) {
    console.error(err);
  }
};

export const signInUserDal = async (user: UserInterface) => {
  try {
    const findUser = await User.findOne(user);
    if (findUser) {
      return `User exist`;
    } else {
      return `User is not exist`;
    }
  } catch (err) {
    console.error(err);
  }
};
