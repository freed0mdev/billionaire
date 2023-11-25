import { combineReducers, configureStore } from '@reduxjs/toolkit';
import questionsReducer from 'src/redux/questionsSlice';

export const store = configureStore({
  reducer: combineReducers({
    questions: questionsReducer,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
