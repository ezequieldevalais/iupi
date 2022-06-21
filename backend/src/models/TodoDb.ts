import { TodoDto } from "./TodoDto";
 
export interface TodoDb {

    findByState(isFinished: boolean): Promise<TodoDto[]>;
    
    findAll(): Promise<TodoDto[]>;
 
}