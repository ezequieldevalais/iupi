import 'dotenv/config'

export const config = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
    logDir: process.env.LOGDIR || 'logs',
    postgresPassword: process.env.POSTGRES_PASSWORD || 'password',
    postgresUser: process.env.POSTGRES_USER || 'user',
    postgresDB: process.env.POSTGRES_DB || 'mydb',
    postgres: {
        host: process.env.PG_HOST || 'postgres',
        port: parseInt(process.env.POSTGRES_PORT || '5432'),
        user: process.env.POSTGRES_USER || 'user',
        password: process.env.POSTGRES_PASSWORD || 'password',
        database: process.env.POSTGRES_DB || 'mydb',
        ssl: false,
    }
}
