import { UserInterface } from "../types";
import { User } from "./userModel";
import { Cart } from "./cartModel";

export const signUpUserDal = async (user: UserInterface) => {
  const newUser = new User(user);
  try {
    const checking = await User.findOne(user);
    if (!checking) {
      const result = await newUser.save();
      if (result) {
        const userId = result._id;
        const newCart = new Cart({ user_id: userId, products_id: [] });
        const cartResult = await newCart.save();
        if (cartResult) return userId;
        else throw Error(`Failed to create cart`);
      }
    } else {
      throw Error(`User already exists`);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const signInUserDal = async (user: UserInterface) => {
  try {
    const findUser = await User.findOne(user);
    if (findUser) {
      return findUser._id;
    } else {
      throw Error(`User is not exist`);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
};
