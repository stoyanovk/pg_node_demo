// import pg from 'pg';
import Koa from 'koa';

import { initMiddleware } from './presentation/middleware/middleware';
// import { createQuestionRoutes } from './presentation/routers/question-router';

export const app = new Koa();
initMiddleware(app);
// const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_DB, POSTGRES_PASSWORD, POSTGRES_PORT } = process.env;
// const pool = new pg.Pool({
//   user: POSTGRES_USER,
//   host: POSTGRES_HOST,
//   database: POSTGRES_DB,
//   password: POSTGRES_PASSWORD,
//   port: POSTGRES_PORT,
// });
// createQuestionRoutes(

// );
