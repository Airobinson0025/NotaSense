import { defineConfig, Config } from 'drizzle-kit'


export default defineConfig({
    schema: './src/db/schema.ts',
    out: '.drizzle/migrations',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL || '',
    }

} as Config)