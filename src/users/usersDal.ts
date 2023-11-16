import { UserInterface } from "../types";
import { User } from "./userModel";
import { Cart } from "./cartModel";

const getCartFromData = async (userId: string) => {
  try {
    const cartFromData = await Cart.findOne({ user_id: userId });
    if (!cartFromData)
      throw Error(`Something is wrong can't find cart by user ID`);
    return cartFromData.products_id;
  } catch (err) {
    console.error(err);
    return err;
  }
};

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
      const cartFromData = await Cart.findOne({ user_id: findUser._id });
      if (!cartFromData)
        throw Error(`Something is wrong can't find cart by user ID`);
      return { userId: findUser._id, cart: cartFromData.products_id };
    } else {
      throw Error(`User is not exist`);
    }
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const addToCartDal = async (userId: string, productId: string) => {
  // מחכה לסכמת/מודל עגלה
  // try {
  //   const productsData = await Product.find({ category_id: category });
  //   if (productsData.length > 0) {
  //     return productsData;
  //   } else throw Error(`Can'not find products by category ${category}`);
  // } catch (err) {
  //   return err;
  // }
};

export const deleteFromCartDal = async (userId: string, productId: string) => {
  // מחכה לסכמת/מודל עגלה
  // try {
  //   const productsData = await Product.find({ category_id: category });
  //   if (productsData.length > 0) {
  //     return productsData;
  //   } else throw Error(`Can'not find products by category ${category}`);
  // } catch (err) {
  //   return err;
  // }
};
