import server from "./server";
import { PORT } from "./config/envs";
import "reflect-metadata";
import { AppDataSource } from "./config/AppDataSource";
import { seedCategories, seedProducts } from "./helpers/preloadDta";

const InitializeApp = async () => {
  await AppDataSource.initialize().then(() => {
    console.log("Database has been connected");
  });
  await seedCategories();
  await seedProducts();
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

InitializeApp();
