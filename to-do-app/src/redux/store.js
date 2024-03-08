import { configureStore } from "@reduxjs/toolkit";
import toDos from "../pages/Todos/todos.slice";

const store = configureStore({
  reducer: {
    toDos,
  },
});

export default store;
