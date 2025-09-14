import type { Config } from "drizzle-kit";

import { D1Helper } from "@nerdfolio/drizzle-d1-helpers";
import { defineConfig } from "drizzle-kit";

import env from "./lib/env";

const config: Config = {
  out: "./lib/db/migrations",
  schema: "./lib/db/schema/index.ts",
  casing: "snake_case",
  dialect: "sqlite",
};

if (env.NODE_ENV === "development") {
  const crawledDbHelper = D1Helper.get("DB");
  const c: Config = {
    dialect: "sqlite",
    dbCredentials: {
      url: crawledDbHelper.sqliteLocalFileCredentials.url,
    },
  };
  Object.assign(config, c);
}
else {
  const c: Config = {
    dialect: "sqlite",
    driver: "d1-http",
    dbCredentials: {
      accountId: env.CLOUDFLARE_ACCOUNT_ID,
      databaseId: env.CLOUDFLARE_DATABASE_ID,
      token: env.CLOUDFLARE_D1_TOKEN,
    },
  };
  Object.assign(config, c);
}

export default defineConfig(config);
