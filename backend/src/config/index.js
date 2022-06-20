import 'dotenv/config'

export const config = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
    logDir: process.env.LOGDIR || 'logs',
    postgresPassword: process.env.POSTGRES_PASSWORD || 'password',
    postgresUser: process.env.POSTGRES_USER || 'user',
    postgresDB: process.env.POSTGRES_DB || 'mydb',
}
