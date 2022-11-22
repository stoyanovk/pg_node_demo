import request from 'supertest';
import { Question } from '../../../src/domain/entities/Question';
import { GetAllQuestionUseCase } from '../../../src/domain/interfaces/use-cases/QuestionUseCases';

import { createQuestionRoutes } from '../../../src/presentation/routers/question-router';
import { app } from '../../../src/app';

class MockGetAllQuestionUseCase implements GetAllQuestionUseCase {
  execute(): Promise<Question[]> {
    throw new Error('Method not implemented.');
  }
}

describe('Questions router', () => {
  let mockGetAllQuestionUseCase: GetAllQuestionUseCase;

  beforeAll(() => {
    mockGetAllQuestionUseCase = new MockGetAllQuestionUseCase();
    const router = createQuestionRoutes(mockGetAllQuestionUseCase);
    app.use(router.routes());
  });

  test('should return 200 with data', async () => {
    const server = app.listen(3000);
    const ExpectedData: Question[] = [
      { id: 1, value: 'test questions', answers: [{ id: 1, value: 'test', questionId: 1 }] },
    ];
    jest.spyOn(mockGetAllQuestionUseCase, 'execute').mockImplementation(() => Promise.resolve(ExpectedData));

    const response = await request(server).get('/questions');

    expect(response.status).toBe(200);
    expect(mockGetAllQuestionUseCase.execute).toBeCalledTimes(1);
    expect(response.body).toStrictEqual(ExpectedData);
  });
});
