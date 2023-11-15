import { Categories, Product } from "./productModel";

export const getCategoriesDal = async () => {
  const categories = await Categories.find({});
  console.log(categories);

  return categories;
};

<<<<<<< HEAD
export const topCategoriesDal = async () => {};

export const getProductsDal = async (category: string) => {
  try {
    const productsData = await Product.find({ category_id: category });
    if (productsData.length > 0) {
      return productsData;
    } else throw Error(`Can'not find products by category ${category}`);
  } catch (err) {
    return err;
  }
=======
export const topCategoriesDal = async () => {
  const categories = await Categories.find().sort({ view: -1 }).limit(5);
  console.log(categories);

  return categories;
>>>>>>> main
};
