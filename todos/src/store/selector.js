import { createSelector } from "reselect";

const getShow = (state) => state.items.show;
const getNotes = (state) => state.items.notes

export const getShowNotes = createSelector(
  [getShow, getNotes],
  (show, notes) => {
    switch (show) {
      case "ALL":
        return notes;
      case "DONE":
        return notes.filter((item) => item.done);
      case "LEFT":
        return notes.filter((item) => !item.done);
      default:
    }
  }
);