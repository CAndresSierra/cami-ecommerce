import { AppDataSource } from "../config/AppDataSource";
import { Review } from "../entities/Review";

export const ReviewRepository = AppDataSource.getRepository(Review);
