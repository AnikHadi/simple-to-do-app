import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";
import filterReducer from "./features/filter/filterSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      todos: todoReducer,
      filters: filterReducer,
    },
  });
};
