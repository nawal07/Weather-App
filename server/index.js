import express from 'express';
import router from './routes/index.js';
import cors from 'cors'

// db connection
import db from './db/dbConnection.js';

const app = express();

// middlewares
app.use(express.json());
app.use(cors())


app.listen(3000, () => {
  console.log('App is runnig');
});
