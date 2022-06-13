import express, { Express } from 'express';
import { baseRouter } from '../routes';
import { config } from '../config'


export class ExpressLoader {
    constructor () {
        const app: Express = express();
        const port = config.port;
        app.use('/',baseRouter);

        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
        });
    }
}