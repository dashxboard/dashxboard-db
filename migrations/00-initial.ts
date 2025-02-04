import { Kysely, sql } from "kysely";
import { SnowflakeDataType, uuidColumnBuilder } from "../utils.js";

export async function up(db: Kysely<any>): Promise<void> {
  // Users
  await db.schema
    .createTable("users")
    .addColumn("id", "uuid", uuidColumnBuilder)
    .addColumn("snowflake", SnowflakeDataType, (col) => col.notNull().unique())
    .addColumn("username", "text", (col) => col.notNull())
    .addColumn("discriminator", "varchar(4)", (col) => col.notNull())
    .addColumn("avatar", "text", (col) => col.notNull())
    .addColumn("public", "boolean", (col) => col.notNull().defaultTo(false))
    .addColumn("moderator", "boolean", (col) => col.notNull().defaultTo(false))
    .addColumn("reputation", "integer", (col) => col.notNull().defaultTo(0))
    .execute();

  await db.schema
    .createIndex("users_snowflake_index")
    .on("users")
    .column("snowflake")
    .execute();

  await db.schema
    .createIndex("users_reputation_index")
    .on("users")
    .column("reputation")
    .execute();

  // Channels
  await db.schema
    .createTable("channels")
    .addColumn("id", "uuid", uuidColumnBuilder)
    .addColumn("snowflake", SnowflakeDataType, (col) => col.notNull().unique())
    .addColumn("name", "text", (col) => col.notNull())
    .addColumn("type", "int2", (col) => col.notNull())
    .addColumn("topic", "text", (col) => col.notNull())
    .execute();

  // Proposals
  await db.schema
    .createTable("posts")
    .addColumn("id", "uuid", uuidColumnBuilder)
    .addColumn("snowflake", SnowflakeDataType, (col) => col.notNull().unique())
    .addColumn("title", "text", (col) => col.notNull())
    .addColumn("locked", "boolean", (col) => col.notNull())
    .addColumn("created", "timestamptz", (col) => col.notNull())
    .addColumn("edited", "timestamptz")
    .addColumn("active", "timestamptz", (col) =>
      col.notNull().defaultTo(sql`now()`)
    )
    .addColumn("indexed", "boolean", (col) => col.notNull().defaultTo(true))
    .addColumn("user", SnowflakeDataType)
    .addColumn("channel", SnowflakeDataType)
    .addColumn("status", SnowflakeDataType)
    .addColumn("category", SnowflakeDataType)
    .execute();

  await db.schema
    .createIndex("posts_snowflake_index")
    .on("posts")
    .column("snowflake")
    .execute();

  await db.schema
    .createIndex("posts_indexed_index")
    .on("posts")
    .column("indexed")
    .execute();

  await db.schema
    .createIndex("posts_user_index")
    .on("posts")
    .column("user")
    .execute();

  await db.schema
    .createIndex("posts_channel_index")
    .on("posts")
    .column("channel")
    .execute();

  // Messages
  await db.schema
    .createTable("messages")
    .addColumn("id", "uuid", uuidColumnBuilder)
    .addColumn("snowflake", SnowflakeDataType, (col) => col.notNull().unique())
    .addColumn("content", "text", (col) => col.notNull())
    .addColumn("created", "timestamptz", (col) => col.notNull())
    .addColumn("edited", "timestamptz")
    .addColumn("user", SnowflakeDataType, (col) => col.notNull())
    .addColumn("post", SnowflakeDataType, (col) => col.notNull())
    .addColumn("reply", SnowflakeDataType)
    .execute();

  await db.schema
    .createIndex("messages_snowflake_index")
    .on("messages")
    .column("snowflake")
    .execute();

  await db.schema
    .createIndex("messages_user_index")
    .on("messages")
    .column("user")
    .execute();

  await db.schema
    .createIndex("messages_post_index")
    .on("messages")
    .column("post")
    .execute();

  await db.schema
    .createIndex("messages_reply_index")
    .on("messages")
    .column("reply")
    .execute();

  // Attachments
  await db.schema
    .createTable("attachments")
    .addColumn("id", "uuid", uuidColumnBuilder)
    .addColumn("snowflake", SnowflakeDataType, (col) => col.notNull().unique())
    .addColumn("url", "text", (col) => col.notNull())
    .addColumn("name", "text", (col) => col.notNull())
    .addColumn("content", "text")
    .addColumn("message", SnowflakeDataType, (col) => col.notNull())
    .execute();

  await db.schema
    .createIndex("attachments_snowflake_index")
    .on("attachments")
    .column("snowflake")
    .execute();

  await db.schema
    .createIndex("attachments_message_index")
    .on("attachments")
    .column("message")
    .execute();
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable("attachments").execute();
  await db.schema.dropTable("messages").execute();
  await db.schema.dropTable("posts").execute();
  await db.schema.dropTable("channels").execute();
  await db.schema.dropTable("users").execute();
}
