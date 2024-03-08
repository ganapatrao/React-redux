import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "udayTodos",
  initialState: {
    data: [],
    edited: {},
  },
  reducers: {
    addTodo: (state, action) => {
      console.log("Action:", action);
      state.data.push(action.payload);
    },

    editTodo: (state, action) => {
      // console.log("Action:", action);
      state.edited = action.payload;
    },
    removeTodo: (state, action) => {
      state.data = state.data.filter((item) => item.id !== action.payload);
    },
    clearAllTodos: (state, action) => {
      state.data = [];
    },
    updateTodo: (state, action) => {
      console.log("Action1:", action.payload.id);
      const index = state.data.findIndex(
        (item) => item.id === action.payload.id
      );

      state.data[index] = { ...state.data[index], ...action.payload };
      state.edited = {};
    },
  },
});

export const { addTodo, editTodo, removeTodo, clearAllTodos, updateTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
