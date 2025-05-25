# robin

Migration tool for PostgreSQL

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/robin.svg)](https://npmjs.org/package/robin)
[![Downloads/week](https://img.shields.io/npm/dw/robin.svg)](https://npmjs.org/package/robin)

<!-- toc -->
* [robin](#robin)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g robin
$ robin COMMAND
running command...
$ robin (--version)
robin/0.0.0 linux-x64 node-v22.15.1
$ robin --help [COMMAND]
USAGE
  $ robin COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`robin create MIGRATION_NAME`](#robin-create-migration_name)
* [`robin help [COMMAND]`](#robin-help-command)
* [`robin plugins`](#robin-plugins)
* [`robin plugins add PLUGIN`](#robin-plugins-add-plugin)
* [`robin plugins:inspect PLUGIN...`](#robin-pluginsinspect-plugin)
* [`robin plugins install PLUGIN`](#robin-plugins-install-plugin)
* [`robin plugins link PATH`](#robin-plugins-link-path)
* [`robin plugins remove [PLUGIN]`](#robin-plugins-remove-plugin)
* [`robin plugins reset`](#robin-plugins-reset)
* [`robin plugins uninstall [PLUGIN]`](#robin-plugins-uninstall-plugin)
* [`robin plugins unlink [PLUGIN]`](#robin-plugins-unlink-plugin)
* [`robin plugins update`](#robin-plugins-update)
* [`robin up`](#robin-up)

## `robin create MIGRATION_NAME`

Create a migration file in the "migrations" folder at the root of your project.

```
USAGE
  $ robin create MIGRATION_NAME

ARGUMENTS
  MIGRATION_NAME  name of migration

DESCRIPTION
  Create a migration file in the "migrations" folder at the root of your project.
  The root of your project is the directory containing a package.json.
  Migration files are SQL files, ordered by timestamp.
  Write your migration as an SQL command, then execute it with "robin up".


EXAMPLES
  $ robin create add-users-table
```

_See code: [src/commands/create.ts](https://github.com/sbaudray/robin/blob/v0.0.0/src/commands/create.ts)_

## `robin help [COMMAND]`

Display help for robin.

```
USAGE
  $ robin help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for robin.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.28/src/commands/help.ts)_

## `robin plugins`

List installed plugins.

```
USAGE
  $ robin plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ robin plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/index.ts)_

## `robin plugins add PLUGIN`

Installs a plugin into robin.

```
USAGE
  $ robin plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into robin.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ROBIN_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ROBIN_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ robin plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ robin plugins add myplugin

  Install a plugin from a github url.

    $ robin plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ robin plugins add someuser/someplugin
```

## `robin plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ robin plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ robin plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/inspect.ts)_

## `robin plugins install PLUGIN`

Installs a plugin into robin.

```
USAGE
  $ robin plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into robin.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the ROBIN_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the ROBIN_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ robin plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ robin plugins install myplugin

  Install a plugin from a github url.

    $ robin plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ robin plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/install.ts)_

## `robin plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ robin plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ robin plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/link.ts)_

## `robin plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ robin plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ robin plugins unlink
  $ robin plugins remove

EXAMPLES
  $ robin plugins remove myplugin
```

## `robin plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ robin plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/reset.ts)_

## `robin plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ robin plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ robin plugins unlink
  $ robin plugins remove

EXAMPLES
  $ robin plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/uninstall.ts)_

## `robin plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ robin plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ robin plugins unlink
  $ robin plugins remove

EXAMPLES
  $ robin plugins unlink myplugin
```

## `robin plugins update`

Update installed plugins.

```
USAGE
  $ robin plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.38/src/commands/plugins/update.ts)_

## `robin up`

Executes all unrun migrations.

```
USAGE
  $ robin up -d <value> -u <value> -w <value> [-h <value>] [-p <value>]

FLAGS
  -d, --database=<value>  (required) POSTGRES DATABASE
  -h, --host=<value>      POSTGRES HOST, defaults to localhost
  -p, --port=<value>      POSTGRES PORT, defaults to 5432
  -u, --username=<value>  (required) POSTGRES USERNAME
  -w, --password=<value>  (required) POSTGRES PASSWORD

DESCRIPTION
  Executes all unrun migrations.
  You can use these environment variables instead of using CLI arguments:
  PGHOST
  PGPORT
  PGUSERNAME
  PGPASSWORD
  PGDATABASE

EXAMPLES
  $ robin up
```

_See code: [src/commands/up.ts](https://github.com/sbaudray/robin/blob/v0.0.0/src/commands/up.ts)_
<!-- commandsstop -->
