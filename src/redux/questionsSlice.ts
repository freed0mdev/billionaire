import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GameState } from '../types';

const initialState: GameState = {
  questions: [],
};

export const fetchQuestions = createAsyncThunk('game/fetchQuestions', async (_, thunkAPI) => {
  try {
    const response = await fetch('questions.json');

    return await response.json();
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
