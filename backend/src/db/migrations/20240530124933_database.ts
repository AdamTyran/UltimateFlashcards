import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable("users", (table: Knex.CreateTableBuilder) => {
      table.increments("user_id").notNullable().unique().primary();
      table.string("username", 100).notNullable().unique();
      table.string("email", 100).notNullable().unique();
      table.string("password").notNullable();
    })
    .createTable("sets", (table: Knex.CreateTableBuilder) => {
      table.increments("set_id").notNullable().unique().primary();
      table
        .integer("user_id")
        .notNullable()
        .references("user_id")
        .inTable("users");
    })
    .createTable("scores", (table: Knex.CreateTableBuilder) => {
      table.increments("score_id").notNullable().unique().primary();
      table.integer("score");
      table
        .integer("user_id")
        .notNullable()
        .references("user_id")
        .inTable("users");
      table
        .integer("set_id")
        .notNullable()
        .references("set_id")
        .inTable("sets");
    })
    .createTable("languages", (table: Knex.CreateTableBuilder) => {
      table.increments("language_id").notNullable().unique().primary();
      table.string("language_name").notNullable();
    })
    .createTable("words", (table: Knex.CreateTableBuilder) => {
      table.increments("word_id").notNullable().unique().primary();
      table.string("original_word");
      table.string("translated_word");
      table
        .integer("user_id")
        .notNullable()
        .references("user_id")
        .inTable("users");
      table
        .integer("set_id")
        .notNullable()
        .references("set_id")
        .inTable("sets");
      table
        .integer("language_id")
        .notNullable()
        .references("language_id")
        .inTable("languages");
    })
    .createTable("tokens", (table: Knex.CreateTableBuilder) => {
      table.increments("token_id").notNullable().unique().primary();
      table
        .integer("user_id")
        .notNullable()
        .references("user_id")
        .inTable("users");
      table.string("token").notNullable().unique();
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable("users")
    .dropTable("sets")
    .dropTable("scores")
    .dropTable("languages")
    .dropTable("words")
    .dropTable("tokens");
}
