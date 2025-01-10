import { useEffect, useState } from 'react';
import './App.css';
import { collection, getDocs } from 'firebase/firestore';
import db, { CONTACTS_DATABASE_ID } from './db';
import { Link } from 'react-router-dom';

function App() {
  const [contacts, setContacts] = useState();
  const getContacts = async () => {
    const contactList = [];
    const querySnapshot = await getDocs(collection(db, CONTACTS_DATABASE_ID));
    querySnapshot.forEach((doc)=>{
      const data = doc.data();
      contactList.push({
        id: doc.id,
        ...data,
      });
    });
    setContacts(contactList);
  };

  useEffect(()=>{
    getContacts();
  }, []);
  console.log(contacts);
  return (
    <>
      <ul className='list'>
        {contacts ? (
          contacts.map((contact)=><Link to={`/details/${contact.id}`} key={contact.id}>{contact.lastName}</Link>)
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </>
  );
}

export default App
