import path from 'node:path'
import { migrationsFolderPath } from './file_system_helpers.js'
import { readdir } from 'node:fs/promises'
import postgres from 'postgres'

const TABLE_NAME = 'robin_migrations'

async function execUnrunMigrations(sql: postgres.Sql) {
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

export { execUnrunMigrations }
