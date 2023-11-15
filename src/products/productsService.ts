import {
  getCategoriesDal,
  topCategoriesDal,
  getProductsDal,
} from "./productsDal";

export const getCategoriesService = async () => await getCategoriesDal();

export const topCategoriesService = async () => await topCategoriesDal();

export const getProductsService = async (category: string) =>
  await getProductsDal(category);
  


