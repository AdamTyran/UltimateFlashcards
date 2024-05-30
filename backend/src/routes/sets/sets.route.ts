import express from "express";
import { SetsController } from "../../controllers/sets/sets.controller";

const router = express.Router({ mergeParams: true });
router.get("/sets", SetsController.getSets);

export default router;
