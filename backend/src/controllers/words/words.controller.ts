import { Request, Response } from "express";
import { WordsService } from "../../services/words/words.service";

export class WordsController {
  static async getWords(req: Request, res: Response) {
    const words = await WordsService.getWords(
      req.body.owner_id,
      req.body.set_id
    );
    console.log(req.body.owner_id, req.body.set_id);
    res.status(200).json(words);
  }
}
