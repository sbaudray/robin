import { Args, Command, Flags } from '@oclif/core'
import { runMigrations } from '../migrator.js'

export default class Up extends Command {
  // static override args = {
  //   file: Args.string({description: 'file to read'}),
  // }
  static override description = 'Run all non-executed migrations'
  static override examples = ['<%= config.bin %> <%= command.id %>']
  // static override flags = {
  // flag with no value (-f, --force)
  // force: Flags.boolean({char: 'f'}),
  // flag with a value (-n, --name=VALUE)
  //   name: Flags.string({char: 'n', description: 'name to print'}),
  // }

  public async run(): Promise<void> {
    const { args, flags } = await this.parse(Up)

    await runMigrations()

    console.log(`All done`)
    process.exit(0)
  }
}
