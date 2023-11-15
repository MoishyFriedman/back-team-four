import { Categories } from "./productModel";

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
