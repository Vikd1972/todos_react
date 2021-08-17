import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "items",
  initialState: [
    { text: "todo1", done: false, dateID: 1 },
    { text: "todo2", done: true, dateID: 2 },
    { text: "todo2", done: false, dateID: 3 },
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
  },
});

export const { addNote, selectNote } = todoSlice.actions;

export default todoSlice.reducer;
