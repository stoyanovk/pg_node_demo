import { Answer } from '../../entities/Answer';

export interface AnswerRepository {
  getAnswersByQuestionId(id: number): Promise<Answer[]>;
  createAnswer(Answer): Promise<Answer>;
  deleteAnswer(): void;
}
