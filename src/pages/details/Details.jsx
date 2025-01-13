// import { doc, getDoc, updateDoc } from "firebase/firestore";
// import { useEffect, useState } from "react";
// import db, { CONTACTS_DATABASE_ID } from "../../db";
// import { useParams } from "react-router-dom";
// import Button from "../../components/button/Button";

// const Details = () => {
//     const [contact, setContact] = useState();
//     const [isEditMode, setIsEditMode] = useState(false);
//     const { id } = useParams();

//     const handleFirstNameInput=(event)=>{
//         setContact({
//             ...contact,
//             firstName: event.target.value,
//         });
//     };
//     const handleLastNameInput=(event)=>{
//         setContact({
//             ...contact,
//             lastName: event.target.value,
//         });
//     };
//     const handleEmailInput=(event)=>{
//         setContact({
//             ...contact,
//             email: event.target.value,
//         });
//     };
//     const handlePhoneInput=(event)=>{
//         setContact({
//             ...contact,
//             phone: event.target.value,
//         });
//     };
//     const handleAgeInput=(event)=>{
//         setContact({
//             ...contact,
//             age: event.target.value,
//         });
//     };
//     const getContact = async()=>{
//         const docRef = doc(db, CONTACTS_DATABASE_ID, id);
//         const docSnap = await getDoc(docRef);
//         if(docSnap.exists()){
//             console.log("Contact", docSnap.data());
//             setContact(docSnap.data());
//         }else{
//             console.log("No document with id", id, "found");
//         }
//     };
//     const handleEditContact = () => {
//        setIsEditMode(true);
//     };
//     const handleSubmit = async () => {
//         const docRef = doc(db, CONTACTS_DATABASE_ID, id);
//         await updateDoc(docRef, contact);
//         setIsEditMode(false);
//         getContact();
//     };
//     useEffect(()=>{
//         getContact();   
//     },[]);

//     return (
//         <div>
//             <Button onClick={handleEditContact}>Edit</Button>
//             <h5>Contact Details:</h5>
//             <>
//             {!isEditMode && contact && (<div>
//                 <p>Name: {contact.firstName}</p>
//                 <p>Last name: {contact.lastName}</p>
//                 <p>E-mail: {contact.email}</p>
//                 <p>Phone: {contact.phone}</p>
//                 <p>Age: {contact.age}</p>
//             </div>)}        
//             </>
//             {isEditMode && contact && (
//                 <div className = "modal">
//                 <h2>Contact Form</h2>
//                 <label>
//                     First Name
//                     <input 
//                         type="text" 
//                         name="firstName" 
//                         value={contact.firstName} 
//                         onChange={handleFirstNameInput} 
//                     />
//                 </label>
//                 <label>
//                     Last Name
//                     <input 
//                         type="text" 
//                         name="lastName" 
//                         value={contact.lastName} 
//                         onChange={handleLastNameInput} 
//                     />
//                 </label>
//                 <label>
//                     E-mail
//                     <input 
//                         type="text" 
//                         name="email" 
//                         value={contact.email} 
//                         onChange={handleEmailInput} 
//                     />
//                 </label>
//                 <label>
//                     Phone
//                     <input 
//                         type="text" 
//                         name="phone" 
//                         value={contact.phone} 
//                         onChange={handlePhoneInput} 
//                     />
//                 </label>
//                 <label>
//                     Age
//                     <input 
//                         type="number" 
//                         name="age" 
//                         value={contact.age} 
//                         onChange={handleAgeInput} 
//                     />
//                 </label>
//                 <Button 
//                     onClick={handleSubmit}>Submit
//                 </Button>
//             </div> 
//             )}          
//         </div>
//     );
// };

// export default Details;

import { useState, useEffect } from "react";
import db, { CONTACTS_DATABASE_ID } from "../../db";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import "./details.css";
import Button from "../../components/button/Button";

const Details = () => {
  const [contact, setContact] = useState();
  const [isEditMode, setIsEditMode] = useState(false);

  const { id } = useParams();

  const handleFirstNameInput = (event) => {
    setContact({
      ...contact,
      firstName: event.target.value,
    });
  };

  const handleLastNameInput = (event) => {
    setContact({
      ...contact,
      lastName: event.target.value,
    });
  };

  const handleAgeInput = (event) => {
    setContact({
      ...contact,
      age: event.target.value,
    });
  };

  const handleEmailInput = (event) => {
    setContact({
      ...contact,
      email: event.target.value,
    });
  };

  const handlePhoneInput = (event) => {
    setContact({
      ...contact,
      phone: event.target.value,
    });
  };

  const getContact = async () => {
    const docRef = doc(db, CONTACTS_DATABASE_ID, id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Contact", docSnap.data());
      setContact(docSnap.data());
    } else {
      console.log("No document with id", id, "found");
    }
  };

  const handleEditContact = () => {
    console.log("edit contact");
    setIsEditMode(true);
  };

  const handleSubmit = async () => {
    const docRef = doc(db, CONTACTS_DATABASE_ID, id);
    await updateDoc(docRef, contact);
    setIsEditMode(false);
    getContact();
  };

  useEffect(() => {
    getContact();
  }, []);

  return (
    <div className="container p-5 position-absolute">
      <p className="ms-5 fs-2 text-white">Contact Details:</p>
      <div className="row d-flex flex-column text-center">
            <div className="col">
              <Button onClick={handleEditContact}>Edit</Button>
            </div>
            <div className="col mt-5">
              <button
                type="button"
                class="close bg-secondary text-light closeEdit"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
                <a href="/" class="text-light closeEdit">
                  Close
                </a>
              </button>
            </div>
          </div>
      <>
        {!isEditMode && contact && (
          <div className="ms-4 fs-5 text-white border-top border-warning w-75 mt-5">
            <h1 className="display-4 text-white pb-3 border-bottom border-light mt-5">
              {contact.lastName} {contact.firstName}
            </h1>
            <p className="pb-3 pt-3 border-bottom border-light d-flex flex-column">
              <span>Age</span>
              <span className="">{contact.age}</span>
            </p>
            <p className="pb-3 pt-3 border-bottom border-light d-flex flex-column">
              <span>Email</span>
              <span className="text-warning">{contact.email}</span>
            </p>
            <p className="pb-3 pt-3 border-bottom border-light d-flex flex-column">
              <span>Phone</span>
              <span className="">{contact.phone}</span>
            </p>
          </div>
        )}
      </>
      {isEditMode && contact && (
        <div className="modalAddNew p-5">
          <h2>Contact Form</h2>
          <label>
            <p className="mb-1 fw-medium">First Name</p>
            <input
              type="text"
              name="firstName"
              value={contact.firstName}
              onChange={handleFirstNameInput}
            />
          </label>
          <label className="mt-4">
            <p className="mb-1 fw-medium">Last Name</p>
            <input
              type="text"
              name="lastName"
              value={contact.lastName}
              onChange={handleLastNameInput}
            />
          </label>
          <label className="mt-4">
            <p className="mb-1 fw-medium">Age</p>
            <input
              type="number"
              name="age"
              value={contact.age}
              onChange={handleAgeInput}
            />
          </label>
          <label className="mt-4">
            <p className="mb-1 fw-medium">Email</p>
            <input
              type="text"
              name="email"
              value={contact.email}
              onChange={handleEmailInput}
            />
          </label>
          <label className="mt-4">
            <p className="mb-1 fw-medium">Phone</p>
            <input
              className="mb-5"
              type="text"
              name="phone"
              value={contact.phone}
              onChange={handlePhoneInput}
            />
          </label>
          <div className="row d-flex flex-column text-center">
            <div className="col">
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
            <div className="col mt-5">
              <button
                type="button"
                class="close bg-secondary text-light closeEdit"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
                <a href="/" class="text-light closeEdit">
                  Close
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
