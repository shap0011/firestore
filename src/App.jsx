import { useEffect, useState } from 'react';
import './App.css';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import db, { CONTACTS_DATABASE_ID } from './db';
import { Link } from 'react-router-dom';
import Button from "./components/button/Button";
import ContactFormModal from "./components/contactForm/ContactFormModal";

function App() {
  const [contacts, setContacts] = useState();
  const [openModal, setOpenModal] = useState(false);
  const getContacts = async () => {
    const contactList = [];
    const collectionRef = collection(db, CONTACTS_DATABASE_ID);
    const contactQuery = query(collectionRef, orderBy("lastName", "asc"));
    const querySnapshot = await getDocs(contactQuery);
    querySnapshot.forEach((doc)=>{
      const data = doc.data();
      contactList.push({
        id: doc.id,
        ...data,
      });
    });
    setContacts(contactList);
  };
  const handleOpenContactFormModal = () => {
    setOpenModal(true);
  }

  useEffect(()=>{
    getContacts();
  }, []);
  console.log(contacts);
  return (
    <>
    <Button
    onClick={handleOpenContactFormModal}>New Contact</Button>
      <ul className='list'>
        {contacts ? (
          contacts.map((contact)=>(
            <li  key={contact.id}>
              <Link to={`/details/${contact.id}`}>
                {contact.lastName}
              </Link>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      <ContactFormModal 
        open={openModal} 
        onCloseModal={() => {
          setOpenModal(false);
          getContacts();
        }}
      />
    </>
  );
}

export default App
