import { UserInterface } from "../types";
import { User } from "./userModel";
import { Cart } from "./cartModel";

const getCartFromData = async (userId: string) => {
  try {
    const cartFromData = await Cart.findOne({ user_id: userId });
    if (!cartFromData) throw(Error(`Something is wrong can't fid cart by user ID`))
    return cartFromData
  } catch (err) {
    console.error(err)
    return err
  }
};

const getUserIdByEmailAndPassword = (user: UserInterface) => {
  // באמצע
}

export const signUpUserDal = async (user: UserInterface) => {
  const newUser = new User(user);
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

  //החזרת עגלה + יצירת עגלה
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

  //החזרת עגלה
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
