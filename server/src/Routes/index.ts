/**
 * Root Router
 * Redirections to Routers
 */

 import express, { Request, Response } from 'express';
 import helloRouter from './hellowRouter';
 import goodbyeRouter from "./goodbyeRouter"
 import { LogInfo } from '../utils/logger';
 
 // Server instance
 const server = express();
 
 // Router instance
 const rootRouter = express.Router();
 
 
 // Activate for requests to http://localhost:8000/api
 
 // GET: http://localhost:8000/api/
 rootRouter.get('/', (req: Request, res: Response) => {
     LogInfo('GET: http://localhost:8000/api/')
     // Send Hello World
     res.send('Welcome to my API Restful: Express + TS + Nodemon + Jest + Swagger + Mongoose');
 });
 
 
 // Redirections to Routers & Controllers
 server.use('/', rootRouter); // http://localhost:8000/api/
 server.use('/hello', helloRouter); // http://localhost:8000/api/hello --> HelloRouter
 server.use('/goodbye', goodbyeRouter); // http://localhost:8000/api/goodbye --> goodbyeRouter
 // Add more routes to the app
 
 export default server;
 