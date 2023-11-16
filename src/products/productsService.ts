import {
  getCategoriesDal,
  topCategoriesDal,
  getProductsDal,
  getTop5ProductsDal,
  categoryRatingDal,
  productRatingDal,
} from "./productsDal";

export const getCategoriesService = async () => await getCategoriesDal();

export const topCategoriesService = async () => await topCategoriesDal();

export const getProductsService = async (category: string) =>
  await getProductsDal(category);

export const getTop5ProductsService = async () => await getTop5ProductsDal();

export const categoryRatingService = async (categoryId: string) =>
  await categoryRatingDal(categoryId);

export const productRatingService = async (productId: string) =>
  await productRatingDal(productId);
