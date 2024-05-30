import { Request, Response } from "express";
import { SetsService } from "../../services/sets/sets.service";
import { z } from "zod";

export class SetsController {
  static validateSets(sets: Request) {
    const wordsSchema = z.object({
      user_id: z.number(),
    });
    return wordsSchema.parse(sets);
  }

  static async getSets(req: Request, res: Response) {
    try {
      const sets = await SetsService.getSets(req.body.user_id);
      try {
        this.validateSets(req.body);
      } catch (err) {
        console.error(err);
        res.sendStatus(400);
      }
      res.status(200).json(sets);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }
}
