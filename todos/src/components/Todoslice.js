import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "items",
  initialState: {
    notes: [
      { text: "todo1", done: false, dateID: 1 },
      { text: "todo2", done: true, dateID: 2 },
      { text: "todo3", done: false, dateID: 3 },
    ],
    show: "ALL",
  },

  reducers: {
    addNote: (state, action) => {
      const item = {
        text: action.payload.text,
        done: false,
        dateID: new Date().getTime(),
      };
      state.notes.push(item);
    },

    changeNote: (state, action) => {
      for (let item of state.notes) {
        if (item.dateID === action.payload.dateID) {
          item.text = action.payload.text;
        }
      }
     },

    selectNote: (state, action) => {
      for (let item of state.notes) {
        if (item.dateID === action.payload.dateID) {
          item.done = !item.done;
        }
      }
    },

    selectAll: (state, action) => {
      for (let item of state.notes) {
        item.done = action.payload.dones;
      }
    },

    deleteNote: (state, action) => {
      const index = state.notes.findIndex(
        (item) => item.dateID === action.payload.dateID
      );
      state.notes.splice(index, 1);
    },

    deleteDone: (state, action) => {
      console.log(state.notes);
      return {
        ...state,
        notes: state.notes.filter((item) => item.done === false)}
    },
    
    showFilter: (state, action) => {
      state.show = action.payload;
    },
  },
});

export const {
  addNote,
  changeNote,
  selectNote,
  selectAll,
  deleteNote,
  deleteDone,
  showFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
