import { postgres } from "../../utils/database/connect-to-database";

export class WordsService {
  static async getWords(owner_id: number, set_id: number) {
    const words = await postgres
      .select("original_word", "translated_word")
      .from("words")
      .where({ owner_id: owner_id, set_id: set_id });
    return words;
  }
}
