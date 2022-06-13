import { Router } from 'express';

export const router = Router();

router.all( '/', ( req, res ) => {
    res.send( { message : 'Hello from Express!' } );
} );
  
