export interface GameState {
  questions: TQuestion[];
}

export interface AnswerResultParams {
  isCorrect: boolean,
  currentQuestion: {
    price: number
  },
  index: number
}

export type TQuestion = {
  question: string,
  answers: string[],
  correctAnswers: string[],
  price: number
};
