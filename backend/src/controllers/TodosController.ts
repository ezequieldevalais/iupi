import { Request, Response } from 'express'
import { todos } from '../pg'
import { TodoDto } from '../models/TodoDto';
export class TodosController {
    public async get(req: Request, res: Response) {
        res.type('application/json')
        try{
        const todoDto: TodoDto[] = await todos.findAll();
        console.log('todoDto','todoDto');
        return res.status(200).json(todoDto)
        } catch(err) {
            console.log('fail to find all',err)
            return res.status(500).send({})
        }
    }

    public getw(req: Request, res: Response) {
        res.type('application/json')
        const todoDto: TodoDto = {id: 1, title: 'asd', description: 'asdasd', isFinished: true}
        console.log('todoDto');
        return res.status(200).json(todoDto)
    }
    
}
