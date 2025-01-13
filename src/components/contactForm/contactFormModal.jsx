/*import Button from '../button/Button';
import './modal.css';
import { useEffect, useState } from 'react';
import {collection, addDoc}  from 'firebase/firestore';
import db, { CONTACTS_DATABASE_ID } from '../../db';

const Modal = ({ open, onCloseModal }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");

    const handleFirstNameInput=(event)=>{
        setFirstName(event.target.value);
    };
    const handleLastNameInput=(event)=>{
        setLastName(event.target.value);
    };
    const handleEmailInput=(event)=>{
        setEmail(event.target.value);
    };
    const handlePhoneInput=(event)=>{
        setPhone(event.target.value);
    };
    const handleAgeInput=(event)=>{
        setAge(event.target.value);
    };
    const handleSubmit = async () => {
        const newContact = {
            firstName,
            lastName,
            email,
            phone,
            age
          }
        const collectionRef = collection(db, CONTACTS_DATABASE_ID);
        await addDoc(collectionRef, newContact);
        onCloseModal();
    };

    return open ? (
        <div className = "container">
            <div className = "modal">
                <h2>Contact Form</h2>
                <label>
                    First Name
                    <input 
                        type="text" 
                        name="firstName" 
                        value={firstName} 
                        onChange={handleFirstNameInput} 
                    />
                </label>
                <label>
                    Last Name
                    <input 
                        type="text" 
                        name="lastName" 
                        value={lastName} 
                        onChange={handleLastNameInput} 
                    />
                </label>
                <label>
                    E-mail
                    <input 
                        type="text" 
                        name="email" 
                        value={email} 
                        onChange={handleEmailInput} 
                    />
                </label>
                <label>
                    Phone
                    <input 
                        type="text" 
                        name="phone" 
                        value={phone} 
                        onChange={handlePhoneInput} 
                    />
                </label>
                <label>
                    Age
                    <input 
                        type="text" 
                        name="age" 
                        value={age} 
                        onChange={handleAgeInput} 
                    />
                </label>
                <Button 
                    onClick={handleSubmit}>Submit
                </Button>
            </div>
        </div> 
    ) : null;
}; 

export default Modal;*/

import { useState } from "react";
import Button from "../button/Button";
import "./modal.css";
import { collection, addDoc } from "firebase/firestore";
import db, { CONTACTS_DATABASE_ID } from "../../db";

const Modal = ({ open, onCloseModal }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleFirstNameInput = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameInput = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeInput = (event) => {
    setAge(event.target.value);
  };

  const handleEmailInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneInput = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = async () => {
    const newContact = {
      firstName: firstName,
      lastName: lastName,
      age: age,
      email: email,
      phone: phone,
    };
    const collectionRef = collection(db, CONTACTS_DATABASE_ID);
    await addDoc(collectionRef, newContact);
    onCloseModal();
  };

  return open ? (
    <div className="containerModal">
      <div className="modalAddNew p-5">
        <h2>Contact Form</h2>
        <label>
          <p className="mb-1 fw-medium">First Name</p>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleFirstNameInput}
          />
        </label>
        <label className="mt-4">
          <p className="mb-1 fw-medium">Last Name</p>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleLastNameInput}
          />
        </label>
        <label className="mt-4">
          <p className="mb-1 fw-medium">Age</p>
          <input
            type="number"
            name="age"
            value={age}
            onChange={handleAgeInput}
          />
        </label>
        <label className="mt-4">
          <p className="mb-1 fw-medium">Email</p>
          <input
            type="text"
            name="email"
            value={email}
            onChange={handleEmailInput}
          />
        </label>
        <label className="mt-4">
          <p className="mb-1 fw-medium">Phone</p>
          <input
            className="mb-5"
            type="text"
            name="phone"
            value={phone}
            onChange={handlePhoneInput}
          />
        </label>
        <div className="row d-flex flex-column text-center">
          <div className="col">
            <Button onClick={handleSubmit}>Submit</Button>
          </div>
          <div className="col mt-5">
            <button type="button" class="close bg-secondary text-light closeEdit" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              <a href="/" class="text-light closeEdit">Close</a>
            </button> 
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;

