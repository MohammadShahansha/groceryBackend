import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
// import router from './app/routes/index.js';
const app: Application = express();
// const port = 3000;

//parsers
app.use(express.json());
app.use(cors());

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hellow Word');
});

export default app;
