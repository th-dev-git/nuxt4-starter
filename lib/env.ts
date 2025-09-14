/* eslint-disable node/no-process-env */
import { z } from "zod/mini";

const EnvSchema = z.object({
  NODE_ENV: z.string(),
  DATABASE_URL: z.string(),
  CLOUDFLARE_ACCOUNT_ID: z.string(),
  CLOUDFLARE_DATABASE_ID: z.string(),
  CLOUDFLARE_D1_TOKEN: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

const result = z.safeParse(EnvSchema, process.env);
console.log("🚀 ~ :15 ~ process.env:", process.env);
if (!result.success) {
  let message = "Missing required values in .env:\n";
  result.error.issues.forEach((issue) => {
    message += `\t-->  ${String(issue.path[0])}\n`;
  });
  const e = new Error(message);
  e.stack = "";
  throw e;
}

export default result.data as EnvSchema;
