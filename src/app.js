import express from 'express';
import MainRouter from '../routes/routes.main.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.set('port', PORT);

app.use(MainRouter)

export default app