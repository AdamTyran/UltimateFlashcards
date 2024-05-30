import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.routes";

dotenv.config();

const app: Application = express();
const PORT = process.env.BACKEND_PORT;

app.use(express.json());
app.use(cors());
app.get("/api", router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
