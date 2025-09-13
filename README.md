# Opinionated Nuxt4 Starter

## Using Bun

- ESLint (antfu)
- Test
- Tailwindcss

## Local Development

# SQLite

- Confirm you are using wrangler v3.0+ `bun x wrangler -v`
- To update the version of Wrangler used in your project `bun add -D wrangler@latest`
- Start a local development session `bun x wrangler dev`
- View local database `bun drizzle-kit studio --config=drizzle-dev.config.ts`
- Migration `bun x wrangler d1 migrations apply "test-db"`

- ref https://developers.cloudflare.com/d1/best-practices/local-development/
- ref https://www.firdausng.com/posts/setup-d1-cloudflare-worker-with-drizzle
