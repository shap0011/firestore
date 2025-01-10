import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import db, { CONTACTS_DATABASE_ID } from "../../db";
import { useParams } from "react-router-dom";

const Details = () => {
    const { id } = useParams();
    const getContact = async()=>{
        const docRef = doc(db, CONTACTS_DATABASE_ID, id);
        const docSnap = await getDoc(docRef);
        if(docSnap.exists()){
            console.log("Contact", docSnap.data());
        }else{
            console.log("No document with id", id, "found");
        }
    }
    useEffect(()=>{
        getContact();   
    },[])
    return <h1>Details</h1>
}

export default Details;