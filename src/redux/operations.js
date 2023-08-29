import { createAsyncThunk } from '@reduxjs/toolkit';

const baseURL = 'https://64ed87b41f8721827141595f.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${baseURL}/contacts`);

      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const options = {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
        },
      };
      const response = await fetch(`${baseURL}/contacts`, options);
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const options = {
        method: 'DELETE',
      };
      const response = await fetch(`${baseURL}/contacts/${id}`, options);

      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);