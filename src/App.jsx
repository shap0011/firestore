import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { collection, getDocs } from 'firebase/firestore';
import db, { CONTACTS_DATABASE_ID } from './db';

function App() {
  
  const getContacts = async () =>{
    const contactList = [];
    const querySnapshot = await getDocs(collection(db, CONTACTS_DATABASE_ID));
    querySnapshot.forEach((doc)=>{
      const data = doc.data();
      console.log(doc.id);
      console.log(data);
      contactList.push({
        id:doc.id,
        ...data,
      });
      // [
      //   {
      //     id: "hhuhudeurfgtij56b3v",
      //     name: "John",
      //     lastName: "Doe",
      //     eMail: "jd!@jd.com",
      //     age: 30,
      //   }
      // ]
    });
    console.log(contactList);
  };

  useEffect(()=>{
    getContacts();
  },[])

  return <><h1>Hello World!</h1></>
}

export default App
