import { Categories } from "./productModel";

export const getCategoriesDal = async () => {
 const categories = await Categories.find({});
 console.log(categories);
 
  return categories
};

export const topCategoriesDal = async () => {};
