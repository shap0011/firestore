import { useEffect } from "react";
import { CONTACTS_DATABASE_ID } from "../../db";
import { useParams } from "react-router-dom";

const Details = () => {
    const params = useParams();
    console.log(params);
    useEffect(()=>{
        // const docRef=doc(db, CONTACTS_DATABASE_ID, )
    },[])
    return <h1>Details</h1>
}

export default Details;