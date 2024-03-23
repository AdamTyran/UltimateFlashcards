import express from "express";
import { WordsController } from "../../controllers/words/words.controller";

const router = express.Router({ mergeParams: true });
router.get("/words", WordsController.getWords);

export default router;
