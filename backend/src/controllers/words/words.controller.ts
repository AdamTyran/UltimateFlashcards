import { Request, Response } from "express";
import { WordsService } from "../../services/words/words.service";
import { z } from "zod";

export class WordsController {
  static validateWords(words: Request) {
    const wordsSchema = z.object({
      user_id: z.number(),
      set_id: z.number(),
    });
    return wordsSchema.parse(words);
  }

  static async getWords(req: Request, res: Response) {
    try {
      const words = await WordsService.getWords(
        req.body.user_id,
        req.body.set_id
      );
      try {
        this.validateWords(req.body);
      } catch (err) {
        console.error(err);
        res.sendStatus(400);
      }
      res.status(200).json(words);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }
}
