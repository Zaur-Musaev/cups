import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import language from '../features/languageSlice'

export const store = configureStore({
  reducer: {
    language: language
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
