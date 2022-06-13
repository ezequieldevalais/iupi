import { Router } from 'express';
import { BaseController } from '../controllers/BaseController';

export const baseRouter = Router();

const baseController = new BaseController();

/*userRouter.post('/new', 
  middleware.useCORS,
  middleware.rateLimit,
  // + any other middleware 
  ...
  (req, res) => createUserController.execute(req, res)
);
*/
  
baseRouter.get('/', (req, res) => baseController.landingMessage(req,res) );
