import { Categories } from "./productModel";

export const getCategoriesDal = async () => {
  try {
    const categories = await Categories.find({});
    console.log(categories);
    return categories;
  } catch (error) {
    console.log(error);
  }
};

export const topCategoriesDal = async () => {
  try {
    const categories = await Categories.find().sort({ view: -1 }).limit(5);
    console.log(categories);
    return categories;
  } catch (error) {}
};
