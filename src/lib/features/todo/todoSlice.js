import {
  deleteLocalStorageTodo,
  setStoredData,
  updateStatus,
  updateStatusHelper,
  updateTodo,
} from "@/lib/utils";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addInitialState: (state, action) => {
      state.todo = action.payload;
    },
    getTodo: (state, action) => {},
    addTodo: (state, action) => {
      setStoredData("todos", action.payload);
      const maxId = state.todo?.slice(-1)[0]
        ? state.todo?.slice(-1)[0]?.id + 1
        : 1;
      const newData = {
        ...action.payload,
        id: maxId,
        complete: false,
      };
      if (state.todo.length) {
        state.todo = [...state.todo, newData];
      } else {
        state.todo.push(newData);
      }
    },
    editTodo: (state, action) => {
      updateTodo(action.payload.id, action.payload.data);
      const index = state.todo.findIndex((t) => t.id === action.payload.id);
      state.todo[index] = action.payload.data;
    },
    updateTodoStatus: (state, action) => {
      updateStatus(action.payload.id, action.payload.status);
      const index = state.todo.findIndex((t) => t.id == action.payload.id);
      const newTodo = { ...state.todo[index], complete: action.payload.status };
      state.todo[index] = newTodo;
    },
    deleteTodo: (state, action) => {
      deleteLocalStorageTodo(action.payload);
      state.todo = state.todo.filter((t) => t.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getTodo,
  addInitialState,
  addTodo,
  editTodo,
  updateTodoStatus,
  deleteTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
