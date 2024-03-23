import express, { Application } from "express";
import dotenv from "dotenv";
import { WordsController } from "./controllers/words/words.controller";
import cors from "cors";
import router from "./routes/words/words.route";
import { SetsController } from "./controllers/sets/sets.controller";

dotenv.config();

const app: Application = express();
const PORT = process.env.BACKEND_PORT;

app.use(express.json());
app.use(cors());
app.get("/sets", SetsController.getSets);

// app.get("/", WordsController.getWords);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
