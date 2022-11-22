import Router from 'koa-router';
import {
  GetAllQuestionUseCase,
  // CreateQuestionUseCase,
  // GetQuestionByIdUseCase,
} from '../../domain/interfaces/use-cases/QuestionUseCases';

export const createQuestionRoutes = (
  getAllQuestionUseCase: GetAllQuestionUseCase
  // getQuestionByIdUseCase,
  // createQuestionUseCase
) => {
  const router = new Router();

  router.get('/questions', async (ctx, next) => {
    const questions = await getAllQuestionUseCase.execute();
    ctx.body = questions;
    next();
  });
  // router.get('/questions/:id', () => {});
  // router.post('/questions', () => {});
  return router;
};
