import { Pool } from 'pg'
import { config } from '../config'

export class PostgresLoader {
    constructor() {
        new Pool({
            max: 20,
            connectionString: 'postgres://postgres:mypassword@localhost:5432/iupidb',
            idleTimeoutMillis: 30000,
        })
    }
}