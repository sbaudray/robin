import postgres from 'postgres'

const sql = postgres({
  host: process.env.PGHOST ?? 'localhost',
  port: process.env.PORT ? parseInt(process.env.PORT) : 5432,
  database: process.env.PGDATABASE,
  username: process.env.PGUSERNAME,
  password: process.env.PGPASSWORD,
  onnotice(notice) {
    if (notice.message.includes(`"robin_migrations" already exists`)) {
      return
    }

    console.log(notice)
  },
})

export { sql }
