// import { useEffect, useState } from 'react';
// import './App.css';
// import { 
//   collection, 
//   getDocs, 
//   query, 
//   orderBy, 
//   deleteDoc,
//   doc,
// } from 'firebase/firestore';
// import db, { CONTACTS_DATABASE_ID } from './db';
// import { Link } from 'react-router-dom';
// import Button from "./components/button/Button";
// import './components/button/button.css';
// import ContactFormModal from "./components/contactForm/ContactFormModal";

// function App() {
//   const [contacts, setContacts] = useState();
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedContactId, setSelectedContactId] = useState();

//   const getContacts = async () => {
//     const contactList = [];
//     const collectionRef = collection(db, CONTACTS_DATABASE_ID);
//     const contactQuery = query(collectionRef, orderBy("lastName", "asc"));
//     const querySnapshot = await getDocs(contactQuery);
//     querySnapshot.forEach((doc)=>{
//       const data = doc.data();
//       contactList.push({
//         id: doc.id,
//         ...data,
//       });
//     });
//     setContacts(contactList);
//   };
//   const handleOpenContactFormModal = () => {
//     setOpenModal(true);
//   };
//   const handleDeleteContact = async (id) => {
//     const deleteDocRef = doc(db, CONTACTS_DATABASE_ID, id);
//     await deleteDoc(deleteDocRef);
//     getContacts();
//   }

//   useEffect(()=>{
//     getContacts();
//   }, []);
  
//   return (
//     <>
//     <Button
//     onClick={handleOpenContactFormModal}>New Contact</Button>
//       <ul className='list'>
//         {contacts ? (
//           contacts.map((contact)=>(
//             <li  key={contact.id}>
//               <Link to={`/details/${contact.id}`}>
//                 {/* {contact.lastName} */}
//                 {contact.lastName} {contact.firstName}
//               </Link>
//               <Button className="btnDelete"
//                 onClick={() => {
//                   handleDeleteContact(contact.id);
//                 }}>Delete</Button>
//             </li>
//           ))
//         ) : (
//           <p>Loading...</p>
//         )}
//       </ul>
//       <ContactFormModal 
//         open={openModal}
//         // contactId={selectedContactId} 
//         onCloseModal={() => {
//           setOpenModal(false); // close modal
//           getContacts(); // refresh page
//         }}
//       />
//     </>
//   );
// }

// export default App

import { useState, useEffect } from 'react';
import './App.css';
import { collection, getDocs, orderBy, query, deleteDoc, doc} from "firebase/firestore";
import db, { CONTACTS_DATABASE_ID } from "../src/db";
import { Link } from 'react-router-dom';
import Button from './components/button/Button';
import ContactFormModal from './components/contactForm/ContactFormModal';
import Modal from './components/contactForm/ContactFormModal';


function App() {
  const [contacts, setContacts] = useState();
  const [openModal, setOpenModal] = useState(false);
  const [selectedContactId, setSelectedContactId] = useState();

  const getContacts = async () => {
    const contactList = [];
    const collectionRef = collection(db, CONTACTS_DATABASE_ID);
    const contactQuery = query(collectionRef, orderBy("lastName", "asc"));
    const querySnapshot = await getDocs(contactQuery);
    querySnapshot.forEach((doc) => {
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
  };

  const handleDeleteContact = async (id) => {
     const deleteDocRef = doc(db, CONTACTS_DATABASE_ID, id);
     await deleteDoc(deleteDocRef);
     getContacts();
  }

  useEffect(() => {
    getContacts();
  }, [])

  return (
     
      <div className='container containerContacts pb-md-5'>
        <div className='ps-lg-5 ps-md-5 p-sm-3 w-100 pt-lg-5 pt-4'>
            <Button onClick={handleOpenContactFormModal}>New Contact</Button>
            <h1 className='display-4 text-white mb-4 mt-4 text-center'>Contacts</h1>
            <ul className='d-flex flex-column w-100 ps-0 m-auto'>
              {contacts ? (
                  contacts.map((contact) => (
                    <li className='contact-names m-1 p-1 fs-5 text-dark bg-light' key={contact.id}>
                      <div className='d-flex align-items-center'>
                          <span className='col-lg-10 col-md-8 col-sm-6 ps-lg-5 ps-md-4 ps-sm-3'>
                          <Link to={`/details/${contact.id}`}>{contact.lastName} {contact.firstName}</Link>
                          </span>
                          <span className='col-lg-2 col-md-4 col-sm-6 ms-auto'>
                          <Button onClick={() => {
                            handleDeleteContact(contact.id);
                          }}>Delete</Button>
                          </span>
                      </div>
                    </li>
                  ))
                ) : (
                  <p>Loading...</p>
                )}
            </ul>
            <ContactFormModal open={openModal} onCloseModal={() => {
              setOpenModal(false);
              getContacts();
            }} />
        </div>
      </div>     
  )
}

export default App;

