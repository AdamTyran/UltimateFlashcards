import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export const postgres = knex({
  client: "pg",
  connection: {
    host: process.env.PG_ADDRESS,
    port: Number(process.env.PG_PORT),
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  },
});
