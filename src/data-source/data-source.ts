import "reflect-metadata";
import { DataSource } from "typeorm";
import 'dotenv/config';
import { Fabric } from "./entities/fabric";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  username: process.env.DB_USERNAME || "your_username",
  password: process.env.DB_PASSWORD || "your_password",
  database: process.env.DB_NAME || "your_database_name",
  synchronize: true, // For development, set to false in production
  logging: false,
  entities: [Fabric], // Register your entities here
  migrations: [],
  subscribers: [],
});