import express, { Application } from "express";
import dotenv from "dotenv";
import { WordsController } from "./controllers/words/words.controller";

dotenv.config();

const app: Application = express();
const PORT = process.env.BACKEND_PORT;

app.use(express.json());

// const getData = async () => {
//   try {
//     const result = await postgres.select("*").from("users");
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// getData();

app.get("/", WordsController.getWords);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
