import { DataSource } from "typeorm";
import { DBHOST, DBNAME, DBPASSWORD, DBPORT, DBUSERNAME } from "./envs";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DBHOST,
  port: DBPORT,
  username: DBUSERNAME,
  password: DBPASSWORD,
  database: DBNAME,
  synchronize: true,
  // dropSchema: true,
  //logging: true,
  entities: ["src/entities/*.ts"],
  subscribers: [],
  migrations: [],
});
