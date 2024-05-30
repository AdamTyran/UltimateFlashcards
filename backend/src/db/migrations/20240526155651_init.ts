import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("users", (table: Knex.CreateTableBuilder) => {
    table.increments("user_id").notNullable().unique();
    table.string("username", 100).notNullable().unique();
    table.string("email", 100).notNullable().unique();
    table.string("password").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("users");
}
