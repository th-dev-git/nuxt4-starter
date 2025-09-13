import { drizzle } from "drizzle-orm/d1";

import env from "../env";
import * as schema from "./schema";

const db = drizzle(env?.DATABASE_URL || "http://localhost:8787", {
  casing: "snake_case",
  schema,
});

export default db;
