import express, { Express } from 'express';
import { router } from '../routes';
import { config } from '../config'


export class ExpressLoader {
    constructor () {
        const app: Express = express();
        const port = config.port;
        app.use('/',router);

        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
        });
    }
}