import postgres from 'postgres'

interface Props {
  host?: string
  port?: string
  database: string
  username: string
  password: string
}

function sqlInstance(props: Props) {
  return postgres({
    host: props.host ?? 'localhost',
    port: props.port ? parseInt(props.port) : 5432,
    database: props.database,
    username: props.username,
    password: props.password,
    onnotice(notice) {
      if (notice.message.includes(`"robin_migrations" already exists`)) {
        return
      }

      console.log(notice)
    },
  })
}

export { sqlInstance }
