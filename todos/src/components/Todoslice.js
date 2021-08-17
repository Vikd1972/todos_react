import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "items",
  initialState: [
    { id: 1, title: "todo1", completed: false },
    { id: 2, title: "todo2", completed: false },
    { id: 3, title: "todo3", completed: true },
    { id: 4, title: "todo4", completed: false },
    { id: 5, title: "todo5", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      const item = {
        text: action.payload.text,
        done: false,
        dateID: new Date().getTime(),
      };
      state.push(item);
    },
    selectNote: (state, action) => {
      const idx = state.findIndex((item) => item.dateID === action.payload.dateID);
      state[idx].done = action.payload.done;
    },
  },
});

export const { addTodo, selectNote } = todoSlice.actions;

export default todoSlice.reducer;
