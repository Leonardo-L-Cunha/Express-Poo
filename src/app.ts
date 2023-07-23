import 'reflect-metadata';
import 'express-async-errors';
import express, { Application } from 'express';
import userRouter from './routers/user.route';
import { handleErros } from './error';

const app: Application = express();

app.use(express.json());

app.use('/users', userRouter);

app.use(handleErros.handleErro);

export default app;
