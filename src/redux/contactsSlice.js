import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = [
  { id: 0, name: "George", number: "895-58-74" },
  { id: 1, name: "Get good at JavaScript", number: "369-85-72" },
  { id: 2, name: "Master React", number: "456-85-89" },
  { id: 3, name: "Discover Redux", number: "051-75-98" },
  { id: 4, name: "Build amazing apps", number: "742-86-32" },
];

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name: name.trim(),
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;