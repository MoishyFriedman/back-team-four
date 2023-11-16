import { Cart } from "../users/cartModel";

// const getCartFromData = async (userId: string) => {
//   try {
//     const cartFromData = await Cart.findOne({ user_id: userId });
//     if (!cartFromData)
//       throw Error(`Something is wrong can't find cart by user ID`);
//     return cartFromData.products_id;
//   } catch (err) {
//     console.error(err);
//     return err;
//   }
// };

export const getCartDal = async (userId: string) => {
  try {
    const cartFromData = await Cart.findOne({ user_id: userId });
    if (!cartFromData) throw Error(`Cart is not found`);
    return cartFromData.products_id;
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const addToCartDal = async (userId: string, productId: string) => {
  try {
    const updateProductsData = await Cart.findOneAndUpdate(
      { user_id: userId },
      { $push: { products_id: productId } },
      { new: true }
    );
    if (updateProductsData) {
      return updateProductsData.products_id;
    } else throw Error(`Cart with this parameters not found`);
  } catch (err) {
    return err;
  }
};

export const deleteFromCartDal = async (userId: string, productId: string) => {
  try {
    const updateProductsData = await Cart.findOneAndUpdate(
      { user_id: userId },
      { $pull: { products_id: productId } },
      { new: true }
    );
    if (updateProductsData) {
      return updateProductsData.products_id;
    } else throw Error(`Cart with this parameters not found`);
  } catch (err) {
    return err;
  }
};
