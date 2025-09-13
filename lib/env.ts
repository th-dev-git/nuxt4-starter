import { z } from "zod/mini";

const EnvSchema = z.object({
  NODE_ENV: z.string(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

// eslint-disable-next-line node/no-process-env
const result = z.safeParse(EnvSchema, process.env);
if (!result.success) {
  let message = "Missing required values in .env:\n";
  result.error.issues.forEach((issue) => {
    message += `\t-->  ${String(issue.path[0])}\n`;
  });
  const e = new Error(message);
  e.stack = "";
  throw e;
}

export default EnvSchema.parse(result.data);
