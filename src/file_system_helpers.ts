import fs from 'fs'
import path from 'path'

let migrationsFolder: string

function findProjectRoot(): string | null {
  let currentDir = process.cwd()

  const { root } = path.parse(currentDir)

  while (currentDir !== root) {
    const packageJsonPath = path.join(currentDir, 'package.json')

    if (fs.existsSync(packageJsonPath)) {
      return currentDir
    }

    currentDir = path.dirname(currentDir)
  }

  return null
}

function migrationsFolderPath(): string {
  if (migrationsFolder) {
    return migrationsFolder
  }

  const projectRoot = findProjectRoot()

  if (!projectRoot) {
    console.error('Cannot find project root, searching for a directory with a package.json file.')
    process.exit(1)
  }

  migrationsFolder = path.join(projectRoot, 'migrations')

  return migrationsFolder
}

function writeFileSafe({ filePath, content }: { filePath: string; content: string }) {
  const dirname = path.dirname(filePath)

  if (!fs.existsSync(dirname)) {
    const newDir = fs.mkdirSync(dirname, { recursive: true })
    console.log(`Created ${newDir}.`)
  }

  fs.writeFileSync(filePath, content)
}

export { findProjectRoot, migrationsFolderPath, writeFileSafe }
