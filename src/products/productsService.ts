import { getCategoriesDal } from "./productsDal";

export const getCategoriesService = async () => await getCategoriesDal();

export const topCategoriesService = async () => await getCategoriesDal();
