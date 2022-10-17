import { useState, useEffect } from 'react';
import { Box, Section, Results } from './App.styled';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const baseContacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || baseContacts
  );
  const [valueFilter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const deleteTodo = contactId => {
    setContacts(
      contacts.filter(contact => {
        toast.success(`${contact.name} removed from contacts `, {
          position: 'top-right',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: 'colored',
        });
        return contact.id !== contactId;
      })
    );
  };

  const getVisibleTodos = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(valueFilter.toLowerCase())
    );
  };

  const addContacts = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    if (
      contacts.some(
        contact =>
          contact.number.toLocaleLowerCase() === number.toLocaleLowerCase()
      )
    ) {
      toast.error(`${name} is already in contact`, {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      });
    } else {
      toast.success(`${name} added to contacts `, {
        position: 'top-right',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      });
      setContacts([newContact, ...contacts]);
    }
  };

  return (
    <Section>
      <Box>
        <h2>Contacts</h2>
        <Filter
          value={valueFilter}
          onChange={e => setFilter(e.currentTarget.value)}
        />
        {contacts.length === 0 ? (
          <Results>You don't have any contact 😓</Results>
        ) : (
          <>
            <ContactList
              contacts={getVisibleTodos()}
              onDeleteContact={deleteTodo}
            />
          </>
        )}
      </Box>
      <Box>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContacts} />
      </Box>
      <ToastContainer limit={1} />
    </Section>
  );
}
