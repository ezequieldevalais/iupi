
import { Pool, QueryResult } from "pg";
import { TodoDto } from "../models/TodoDto";
 
export class Todos {
  #pool: Pool; // connection pool
 
  constructor(pool: Pool) {
    this.#pool = pool;
  }
 
  async findByState(
    isFinished: boolean
  ): Promise<TodoDto[]> {
    const res = await this.#pool.query(`
    SELECT * FROM todos
    `);
    return Todos.mapTodoResult(res);
  }
 

  async findAll(): Promise<TodoDto[]> {
    const res = await this.#pool.query(`
    SELECT * FROM todos
    `);
    return Todos.mapTodoResult(res);
  }
 
  private static mapTodoResult = (
    res: QueryResult
  ): TodoDto[] => // projection
    res.rows.map((r) => ({
      id: r.id,
      title: r.title,
      description: r.description,
      isFinished: r.isFinished,
    }));
}