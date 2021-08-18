import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "items",
  initialState: [
    { text: "todo1", done: false, dateID: 1 },
    { text: "todo2", done: true, dateID: 2 },
    { text: "todo3", done: false, dateID: 3 },
  ],
  reducers: {
    addNote: (state, action) => {
      const item = {
        text: action.payload.text,
        done: false,
        dateID: new Date().getTime(),
      };
      state.push(item);
    },
    selectNote: (state, action) => {
      return state.map((item) =>
        item.dateID === action.payload.dateID
          ? { ...item, done: !item.done }
          : item
      );
    },
    deleteNote: (state, action) => {
      return state.filter((item) => item.dateID !== action.payload.dateID);
    },
    deleteDone: (state, action) => {
      return state.filter((item) => item.done !== true);
    },
  },
});

export const { addNote, selectNote, deleteNote, deleteDone } = todoSlice.actions;

export default todoSlice.reducer;
