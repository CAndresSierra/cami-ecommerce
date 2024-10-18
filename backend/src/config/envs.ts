import "dotenv/config";

export const PORT: number = Number(process.env.PORT!);
export const JWT_SECRET: string = process.env.JWT_SECRET!;
export const DBHOST: string = process.env.DBHOST!;
export const DBPORT: number = Number(process.env.DBPORT!);
export const DBUSERNAME: string = process.env.DBUSERNAME!;
export const DBPASSWORD: string = process.env.DBPASSWORD!;
export const DBNAME: string = process.env.DBNAME!;
