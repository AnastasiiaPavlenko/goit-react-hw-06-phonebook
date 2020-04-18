import { createAction } from '@reduxjs/toolkit';

const uuidv1 = require('uuid/v1');

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    contact: {
      name,
      number,
      id: uuidv1(),
    },
  },
}));

const removeContact = createAction('contacts/remove');
const changeFilter = createAction('contacts/changeFilter');

export default {
  addContact,
  removeContact,
  changeFilter,
};
