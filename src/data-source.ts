import "reflect-metadata";
import { DataSource } from "typeorm";
import { Airport } from "./entity/Airport";
import { City } from "./entity/City";
import { Country } from "./entity/Country";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,  // Default port for PostgreSQL
  username: "postgres",  // Replace with your PostgreSQL username
  password: "Madhav@123",  // Replace with your PostgreSQL password
  database: "airport_db",  // Replace with your PostgreSQL database name
  synchronize: true,
  logging: false,
  entities: [Airport, City, Country],
  migrations: [],
  subscribers: [],
});
