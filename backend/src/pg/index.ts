import { Pool, types } from 'pg';
import { TodoDb } from '../models/TodoDb'
import { Todos } from './Todos';
import { config } from '../config'


console.log('postgres config',config.postgres)
const pool = new Pool(config.postgres);

const NUMERIC_OID = 1700;

types.setTypeParser(NUMERIC_OID, (val) =>
  parseFloat(val)
);

export const todos: TodoDb = new Todos(pool);