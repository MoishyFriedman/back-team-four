import { UserInterface } from "../types";
import { User } from "./userModel";

export const signUpUserDal = async (user: UserInterface) => {
  const newUser = new User(user);
  try {
    const checking = await User.findOne(user);
    if (!checking) {
      const result = await newUser.save();
      if (result) return user;
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
      return findUser;
    } else {
      return `User is not exist`;
    }
  } catch (err) {
    console.error(err);
  }
};
