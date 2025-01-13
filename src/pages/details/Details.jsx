import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db, { CONTACTS_DATABASE_ID } from "../../db";
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";

const Details = () => {
    const [contact, setContact] = useState();
    const [isEditMode, setIsEditMode] = useState(false);
    const { id } = useParams();

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
    const getContact = async()=>{
        const docRef = doc(db, CONTACTS_DATABASE_ID, id);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log("Contact", docSnap.data());
            setContact(docSnap.data());
        }else{
            console.log("No document with id", id, "found");
        }
    };
    const handleEditContact = () => {
       console.log("Edit contact"); 
       setIsEditMode(true);
    };
    const handleSubmit = async () => {};
    useEffect(()=>{
        getContact();   
    },[]);

    return (
        <div>
            <Button onClick={handleEditContact}>Edit</Button>
            <h5>Contact Details:</h5>
            <>
            {!isEditMode && contact && (<div>
                <p>Name: {contact.firstName}</p>
                <p>Last name: {contact.lastName}</p>
                <p>E-mail: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <p>Age: {contact.age}</p>
            </div>)}        
            </>
            {isEditMode && contact && (
                <div className = "modal">
                <h2>Contact Form</h2>
                <label>
                    First Name
                    <input 
                        type="text" 
                        name="firstName" 
                        value={contact.firstName} 
                        onChange={handleFirstNameInput} 
                    />
                </label>
                <label>
                    Last Name
                    <input 
                        type="text" 
                        name="lastName" 
                        value={contact.lastName} 
                        onChange={handleLastNameInput} 
                    />
                </label>
                <label>
                    E-mail
                    <input 
                        type="text" 
                        name="email" 
                        value={contact.email} 
                        onChange={handleEmailInput} 
                    />
                </label>
                <label>
                    Phone
                    <input 
                        type="text" 
                        name="phone" 
                        value={contact.phone} 
                        onChange={handlePhoneInput} 
                    />
                </label>
                <label>
                    Age
                    <input 
                        type="text" 
                        name="age" 
                        value={contact.age} 
                        onChange={handleAgeInput} 
                    />
                </label>
                <Button 
                    onClick={handleSubmit}>Submit
                </Button>
            </div> 
            )}          
        </div>
    );
};

export default Details;