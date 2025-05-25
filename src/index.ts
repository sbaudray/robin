import { findProjectRoot } from './file_system_helpers.js'
import dotenv from 'dotenv'
import path from 'node:path'

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

export { run } from '@oclif/core'
