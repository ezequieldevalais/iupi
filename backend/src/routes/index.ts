import { Router } from 'express'
import { BaseController } from '../controllers/BaseController'
import { TodosController } from '../controllers/TodosController'

export const baseRouter = Router()

const baseController = new BaseController()
const todosController = new TodosController()

/*userRouter.post('/new', 
  middleware.useCORS,
  middleware.rateLimit,
  // + any other middleware 
  ...
  (req, res) => createUserController.execute(req, res)
);
*/

baseRouter.get('/', (req, res) => baseController.landingMessage(req, res))
baseRouter.get('/todos', async (req, res) => await todosController.get(req, res))

baseRouter.get('/todos/test', (req, res) => todosController.getw(req, res))