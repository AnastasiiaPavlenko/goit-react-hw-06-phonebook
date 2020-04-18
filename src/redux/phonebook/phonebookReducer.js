import { createReducer } from '@reduxjs/toolkit';
import phonebookActions from './phonebookActions';

const addContact = (state, action) => [...state, action.payload.contact];
const removeContact = (state, action) =>
  state.filter(contact => contact.id !== action.payload);

const contacts = createReducer([], {
  [phonebookActions.addContact]: addContact,
  [phonebookActions.removeContact]: removeContact,
});

const filter = createReducer('', {
  [phonebookActions.changeFilter]: (state, action) => action.payload,
});

export default {
  contacts,
  filter,
};
