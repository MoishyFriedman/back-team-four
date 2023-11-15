import { Categories, Product } from "./productModel";

export const getCategoriesDal = async () => {
  const categories = await Categories.find({});
  console.log(categories);

  return categories;
};

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
};



