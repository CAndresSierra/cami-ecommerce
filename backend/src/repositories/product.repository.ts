import { AppDataSource } from "../config/AppDataSource";
import { Product } from "../entities/Product";

export const ProductRepository = AppDataSource.getRepository(Product);
