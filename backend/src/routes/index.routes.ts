import wordsRouter from "./words/words.route";
import setsRouter from "./sets/sets.route";
import express from "express";

const router = express.Router({ mergeParams: true });

router.use("/words", wordsRouter);
router.use("/sets", setsRouter);

export default router;
