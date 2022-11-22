import { Question } from '../../entities/Question';

export interface GetAllQuestionUseCase {
  execute(): Promise<Question[]>;
}

export interface GetQuestionByIdUseCase {
  execute(id: number): Promise<Question>;
}

export interface CreateQuestionUseCase {
  execute(value: string): Promise<Question>;
}
