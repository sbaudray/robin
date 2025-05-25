import { Args, Command } from '@oclif/core'
import path from 'path'
import { migrationsFolderPath, writeFileSafe } from '../file_system_helpers.js'

export default class Create extends Command {
  static override args = {
    migration_name: Args.string({ required: true, description: 'name of migration' }),
  }
  static override description = `Create a migration file in the "migrations" folder at the root of your project.
  The root of your project is the directory containing a package.json.
  Migration files are SQL files, ordered by timestamp.
  Write your migration as an SQL command, then execute it with "robin up".
   `
  static override examples = ['<%= config.bin %> <%= command.id %> add-users-table']

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Create)

    const timestamp = new Date().toISOString().replace(/[-:.]/g, '').slice(0, 15)
    const filename = timestamp + '-' + args.migration_name + '.sql'
    const filePath = path.join(migrationsFolderPath(), filename)

    writeFileSafe({
      filePath,
      content: `-- WRITE YOUR SQL COMMAND HERE, FOR EXAMPLE:
-- CREATE TABLE IF NOT EXISTS users (
--   id SERIAL PRIMARY KEY,
--   username VARCHAR(255)
-- );`,
    })

    console.log(`Created ${filePath}`)
    process.exit(0)
  }
}
