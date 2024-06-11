import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: "",
  searchText: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    addStatus: (state, action) => {
      state.status = action.payload;
    },
    addSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addStatus, addSearchText } = filterSlice.actions;

export default filterSlice.reducer;
