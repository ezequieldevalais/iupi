import express, { Express, Request, Response } from 'express';
const config = require( "../config" );

class ExpressLoader {
    constructor () {
        const app: Express = express();
        const port = config.port;

        app.get('/', (req: Request, res: Response) => {
            res.send('Express + TypeScript Server is running');
        });
        app.listen(port, () => {
            console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
        });
    }
}

module.exports = ExpressLoader;
