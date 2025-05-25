import { Args, Command, Flags } from '@oclif/core'
import { createMigrationFile } from '../migrator.js'

export default class Create extends Command {
  static override args = {
    migration_name: Args.string({ required: true, description: 'name of migration' }),
  }
  static override description = `Create a migration file in the "migrations" folder at the root of your project.
  The root of your project is the directory containing a package.json.
  Migration files are SQL files, ordered by timestamp.
  Write your migration as an SQL command, then execute it with "robin up".
   `
  static override examples = ['<%= config.bin %> <%= command.id %> add_users_table']
  // static override flags = {
  //   // flag with no value (-f, --force)
  //   force: Flags.boolean({char: 'f'}),
  //   // flag with a value (-n, --name=VALUE)
  //   name: Flags.string({char: 'n', description: 'name to print'}),
  // }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Create)

    try {
      createMigrationFile({ name: args.migration_name })
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  }
}
