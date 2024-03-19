import express, { Application } from "express";
import dotenv from "dotenv";
import knex from "knex";

dotenv.config();

const app: Application = express();
const PORT = process.env.BACKEND_PORT;

app.use(express.json());

const connectToDatabase = knex({
  client: "pg",
  connection: {
    host: process.env.PG_ADDRESS,
    port: 5433,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  },
});

// const result = connectToDatabase("users")
//   .insert({
//     username: "abcde",
//     email: "abcde@gmail.com",
//     password: "123",
//   })
//   .then((abc) => {
//     console.log(abc);
//   });

const getData = async () => {
  try {
    const result = await connectToDatabase.select().from("users");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

getData();

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
