import { ColumnDefinitionBuilder, sql } from "kysely";

export const SnowflakeDataType = "varchar(40)";

export const uuidColumnBuilder = (col: ColumnDefinitionBuilder) =>
  col.primaryKey().defaultTo(sql`gen_random_uuid()`);
