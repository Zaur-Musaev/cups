import { createSlice } from "@reduxjs/toolkit";
import { translations } from "../utils/constants";

const initialState = translations.en;

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeLanguage } = languageSlice.actions;
export default languageSlice.reducer;
