import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import db, { CONTACTS_DATABASE_ID } from "../../db";
import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";

const Details = () => {
    const [contact, setContact] = useState();
    const { id } = useParams();
    const getContact = async()=>{
        const docRef = doc(db, CONTACTS_DATABASE_ID, id);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log("Contact", docSnap.data());
            setContact(docSnap.data());
        }else{
            console.log("No document with id", id, "found");
        }
    }
    const handleEditContact = () => {
       console.log("Edit contact") 
    }
    useEffect(()=>{
        getContact();   
    },[])
    return <div>
        <Button onClick={handleEditContact}>Edit</Button>
        <h5>
            Contact Details:
        </h5>
        {contact && (<div>
            <p>Name: {contact.firstName}</p>
            <p>Last name: {contact.lastName}</p>
            <p>E-mail: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <p>Age: {contact.age}</p>
        </div>)}
        
        </div>
}

export default Details;