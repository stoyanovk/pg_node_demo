import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import json from 'koa-json';

export const initMiddleware = (app: Koa) => {
  app.use(bodyParser());
  app.use(logger());
  app.use(json());
};
