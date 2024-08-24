import { OptionModel } from './optionModel';

export type QuestionModel = {
  id: number;
  question: string;
  options: OptionModel[];
};
