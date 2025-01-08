import { useEffect, useState } from 'react';
import './App.css';
import { collection, getDocs } from 'firebase/firestore';
import db, { CONTACTS_DATABASE_ID } from './db';

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
      <ul>
        {contacts ? (
          contacts.map((contact)=><li key={contact.id}>{contact.name}</li>)
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </>
  );
}

export default App
