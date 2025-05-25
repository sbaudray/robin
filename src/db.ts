import postgres from 'postgres'
import dotenv from 'dotenv'
import path from 'path'
import { findProjectRoot } from './file_system_helpers.js'

dotenv.config({
  path: path.join(findProjectRoot() ?? process.cwd(), '.env'),
})

if (!process.env.PGDATABASE || !process.env.PGUSERNAME || !process.env.PGPASSWORD) {
  console.error(`Missing environment variables for the postgres connection.
Required:
PGDATABASE
PGUSERNAME
PGPASSWORD
Optional:
PGHOST (default: localhost)
PGPORT (default: 5432)
`)
  process.exit(1)
}

const sql = postgres({
  host: process.env.PGHOST ?? 'localhost',
  port: process.env.PORT ? parseInt(process.env.PORT) : 5432,
  database: process.env.PGDATABASE,
  username: process.env.PGUSERNAME,
  password: process.env.PGPASSWORD,
  onnotice(notice) {
    if (notice.message.includes(`"robin_migrations" already exists`)) {
      return
    }

    console.log(notice)
  },
})

export { sql }
