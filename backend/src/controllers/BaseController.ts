import { Request, Response } from 'express'

export class BaseController {
    public landingMessage(req: Request, res: Response) {
        console.log(req)
        res.type('application/json')
        return res.status(200).json({ result: 'todo ok' })
    }
}
