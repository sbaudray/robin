import { Command, Flags } from '@oclif/core'
import { execUnrunMigrations } from '../migrator.js'
import { sqlInstance } from '../db.js'

export default class Up extends Command {
  static override description = `Executes all unrun migrations.
  You can use these environment variables instead of using CLI arguments:
  PGHOST
  PGPORT
  PGUSERNAME
  PGPASSWORD
  PGDATABASE`
  static override examples = ['<%= config.bin %> <%= command.id %>']
  static override flags = {
    host: Flags.string({
      char: 'h',
      description: 'POSTGRES HOST, defaults to localhost',
      env: 'PGHOST',
    }),
    port: Flags.string({ char: 'p', description: 'POSTGRES PORT, defaults to 5432', env: 'PGPORT' }),
    database: Flags.string({
      required: true,
      char: 'd',
      description: 'POSTGRES DATABASE',
      env: 'PGDATABASE',
    }),
    username: Flags.string({
      required: true,
      char: 'u',
      description: 'POSTGRES USERNAME',
      env: 'PGUSERNAME',
    }),
    password: Flags.string({
      required: true,
      char: 'w',
      description: 'POSTGRES PASSWORD',
      env: 'PGPASSWORD',
    }),
  }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Up)

    const sql = sqlInstance(flags)

    await execUnrunMigrations(sql)

    await sql.end()

    console.log(`All done`)
    process.exit(0)
  }
}
