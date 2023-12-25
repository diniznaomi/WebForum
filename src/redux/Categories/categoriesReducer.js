import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: "soccer",
};

const categoriesSlice = createSlice({
  name: "selectedCategory",
  initialState,
  reducers: {
    setCategory(state, action) {
        state.selectedCategory = action.payload;
      },
  },
});

export const { setCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;