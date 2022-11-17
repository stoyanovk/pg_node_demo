import { Question } from '../../entities/Question';

export interface getAllQuestionUseCase {
  execute(): Promise<Question[]>;
}

export interface getQuestionByIdUseCase {
  execute(id: number): Promise<Question>;
}

export interface createQuestionUseCase {
  execute(value: string): Promise<Question>;
}
