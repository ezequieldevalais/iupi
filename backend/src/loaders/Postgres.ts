//import { Pool } from 'pg'
import { config } from '../config'

export class PostgresLoader {
  // pool: Pool
    
    constructor() {
        console.log('config',{
            max: 20,
            idleTimeoutMillis: 30000,
            ...config.postgres
        })
        /*this.pool = new Pool({
            max: 20,
            idleTimeoutMillis: 30000,
            ...config.postgres
        })*/
    }

    /*public getPool(){
       // return this.pool;
    }*/
}