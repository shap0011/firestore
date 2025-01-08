import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { collection, getDocs } from 'firebase/firestore';
import db, { CONTACTS_DATABASE_ID } from './db';

function App() {
  
  const getContacts = async () =>{
    const querySnapshot = await getDocs(collection(db, CONTACTS_DATABASE_ID));
  };

  useEffect(()=>{
    getContacts();
  },[])

  return <><h1>Hello World!</h1></>
}

export default App
