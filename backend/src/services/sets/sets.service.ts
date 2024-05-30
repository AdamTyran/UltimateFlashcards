import { postgres } from "../../utils/database/connect-to-database";

export class SetsService {
  static async getSets(user_id: number) {
    const sets = await postgres
      .select("set_name")
      .from("sets")
      .where({ user_id: user_id });
    return sets;
  }
}
