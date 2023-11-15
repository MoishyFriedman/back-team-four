import {
  getCategoriesDal,
  topCategoriesDal,
  getProductsDal,
  getTop5ProductsDal,
} from "./productsDal";

export const getCategoriesService = async () => await getCategoriesDal();

export const topCategoriesService = async () => await topCategoriesDal();

export const getProductsService = async (category: string) =>
  await getProductsDal(category);

export const getTop5ProductsService = async () => await getTop5ProductsDal();
