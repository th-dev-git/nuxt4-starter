import type { Config } from "drizzle-kit";

import { D1Helper } from "@nerdfolio/drizzle-d1-helpers";

const crawledDbHelper = D1Helper.get("DB"); // * binding name

const config: Config = {
  out: "./lib/db/migrations",
  schema: "./lib/db/schema/index.ts",
  casing: "snake_case",
  dialect: "sqlite",
  dbCredentials: {
    url: crawledDbHelper.sqliteLocalFileCredentials.url,
  },
};

export default config;
