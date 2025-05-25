import path from 'node:path'
import { migrationsFolderPath, writeFileSafe } from './file_system_helpers.js'
import { sql } from './db.js'
import { readdir } from 'node:fs/promises'

const TABLE_NAME = 'robin_migrations'

function filename(name: string) {
  const timestamp = new Date().toISOString().replace(/[-:.]/g, '').slice(0, 15)

  return timestamp + '-' + name + '.sql'
}

function createMigrationFile({ name }: { name: string }) {
  const filePath = path.join(migrationsFolderPath(), filename(name))

  writeFileSafe({
    filePath,
    content: `-- WRITE YOUR SQL COMMAND HERE, FOR EXAMPLE:
-- CREATE TABLE IF NOT EXISTS orders (
--   id SERIAL PRIMARY KEY,
--   username VARCHAR(255)
-- );`,
  })

  console.log(`Created ${filePath}`)
}

async function runMigrations() {
  await sql`
    CREATE TABLE IF NOT EXISTS ${sql(TABLE_NAME)} (
      id varchar(100)
    );
  `

  const [latest = {}] = await sql`
    SELECT id FROM ${sql(TABLE_NAME)} ORDER BY id DESC LIMIT 1;
  `

  const files = (await readdir(migrationsFolderPath())).sort()

  const unrun = files.slice(latest.id ? files.indexOf(latest.id) + 1 : 0)

  if (!unrun.length) {
    console.log('Nothing to run.')
    process.exit(0)
  }

  for (const migrationFileName of unrun) {
    await sql.file(path.join(migrationsFolderPath(), migrationFileName))

    await sql`INSERT INTO ${sql(TABLE_NAME)} (id) VALUES (${migrationFileName});`

    console.log(`Migration ${migrationFileName} executed.`)
  }
}

export { createMigrationFile, runMigrations }
