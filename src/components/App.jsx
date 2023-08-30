import ContactForm from './ContactForm/ContactForm'
import ContactList from './ContactList/ContactList'
import Filter from "./Filter/Filter";

import { selectError, selectIsLoading } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';


export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  if (error) {
    alert(`Somethitg has went wrong. The reason is: ` + error);
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && <p>Loading...</p>}
      {!isLoading && !error && <ContactList />}
    </>
  )
};