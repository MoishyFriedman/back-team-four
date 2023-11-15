import { Categories, Product } from "./productModel";

export const getCategoriesDal = async () => {
  const categories = await Categories.find({});
  console.log(categories);

  return categories;
};

export const topCategoriesDal = async () => {
  const categories = await Categories.find().sort({ view: -1 }).limit(5);
  console.log(categories);
  return categories;
};

export const getProductsDal = async (category: string) => {
  try {
    const productsData = await Product.find({ category_id: category });
    if (productsData.length > 0) {
      return productsData;
    } else throw Error(`Can't find products by category ${category}`);
  } catch (err) {
    return err;
  }
};

export const getTop5ProductsDal = async () => {
  try {
    const productsData = await Product.find().sort({ view: -1 }).limit(5);
    if (productsData.length > 0) {
      return productsData;
    } else throw Error(`Getting the most viewed products was not successful`);
  } catch (err) {
    return err;
  }
};
