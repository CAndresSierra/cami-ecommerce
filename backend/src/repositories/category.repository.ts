import { AppDataSource } from "../config/AppDataSource";
import { Category } from "../entities/Category";

export const CategoryRepository = AppDataSource.getRepository(Category);
