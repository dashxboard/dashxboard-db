/**
 * This file was generated by kysely-codegen.
 * Please do not edit it manually.
 */

import type { ColumnType } from "kysely";

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;

export type Timestamp = ColumnType<Date, Date | string, Date | string>;

export interface Attachments {
  content: string | null;
  id: Generated<string>;
  message: string;
  name: string;
  snowflake: string;
  url: string;
}

export interface Channels {
  id: Generated<string>;
  name: string;
  snowflake: string;
  topic: string;
  type: number;
}

export interface Messages {
  content: string;
  created: Timestamp;
  edited: Timestamp | null;
  id: Generated<string>;
  post: string;
  reply: string | null;
  snowflake: string;
  user: string;
}

export interface Posts {
  active: Generated<Timestamp>;
  category: string | null;
  channel: string | null;
  created: Timestamp;
  edited: Timestamp | null;
  id: Generated<string>;
  indexed: Generated<boolean>;
  locked: boolean;
  snowflake: string;
  status: string | null;
  title: string;
  user: string | null;
}

export interface Users {
  avatar: string;
  discriminator: string;
  id: Generated<string>;
  moderator: Generated<boolean>;
  public: Generated<boolean>;
  reputation: Generated<number>;
  snowflake: string;
  username: string;
}

export interface DB {
  attachments: Attachments;
  channels: Channels;
  messages: Messages;
  posts: Posts;
  users: Users;
}