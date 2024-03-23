import { Request, Response } from "express";
import { SetsService } from "../../services/sets/sets.service";

export class SetsController {
  static async getSets(req: Request, res: Response) {
    try {
      const sets = await SetsService.getSets(req.body.user_id);
      res.status(200).json(sets);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  }
}
