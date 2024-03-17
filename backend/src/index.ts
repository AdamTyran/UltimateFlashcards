import express, { Application } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();
const PORT = process.env.BACKEND_PORT;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
