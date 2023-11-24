import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GameState } from '../types';

const questionMock = [
  {
    question: 'What is 2 + 2?',
    answers: ['3', '4', '5', '6'],
    correctAnswers: ['4'],
    price: 500,
  },
  {
    question: 'Which planet is known as the Red Planet?',
    answers: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswers: ['Mars'],
    price: 1000,
  },
  {
    question: 'In which year did World War II end?',
    answers: ['1943', '1945', '1947', '1950'],
    correctAnswers: ['1945'],
    price: 2000,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
    correctAnswers: ['William Shakespeare'],
    price: 4000,
  },
  {
    question: 'What is the largest mammal in the world?',
    answers: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    correctAnswers: ['Blue Whale'],
    price: 8000,
  },
  {
    question: "Which country is known as the 'Land of the Rising Sun'?",
    answers: ['China', 'Japan', 'South Korea', 'Thailand'],
    correctAnswers: ['Japan'],
    price: 16000,
  },
  {
    question: 'Who painted the Mona Lisa?',
    answers: ['Leonardo da Vinci', 'Vincent van Gogh', 'Pablo Picasso', 'Claude Monet'],
    correctAnswers: ['Leonardo da Vinci'],
    price: 32000,
  },
  {
    question: 'What is the currency of Japan?',
    answers: ['Yuan', 'Won', 'Ringgit', 'Yen'],
    correctAnswers: ['Yen'],
    price: 64000,
  },
  {
    question: "Which element has the chemical symbol 'O'?",
    answers: ['Oxygen', 'Gold', 'Iron', 'Silver'],
    correctAnswers: ['Oxygen'],
    price: 128000,
  },
  {
    question: "Who is known as the 'Father of Computer Science'?",
    answers: ['Alan Turing', 'Bill Gates', 'Steve Jobs', 'Mark Zuckerberg'],
    correctAnswers: ['Alan Turing'],
    price: 256000,
  },
  {
    question: 'In which year did the Titanic sink?',
    answers: ['1912', '1915', '1920', '1925'],
    correctAnswers: ['1912'],
    price: 512000,
  },
  {
    question: 'What is the largest ocean on Earth?',
    answers: ['Atlantic Ocean', 'Indian Ocean', 'Southern Ocean', 'Pacific Ocean'],
    correctAnswers: ['Pacific Ocean'],
    price: 1000000,
  },
];

const initialState: GameState = {
  questions: []
  ,
};

export const fetchQuestions = createAsyncThunk('game/fetchQuestions', async (_, thunkAPI) => {
  try {
    // const response = await fetch('questions.json');

    return questionMock;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

const questionsSlice = createSlice({
  name: 'questions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuestions.fulfilled, (state, action) => ({
      ...state,
      questions: action.payload,
    }));
  },
});

const { reducer } = questionsSlice;

export default reducer;
