import './modal.css';
import { useState } from 'react';
const Modal = ({open}) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");

    const handleFirstNameInput=(event)=>{
        setFirstName(event.target.value);
    }
    const handleLastNameInput=(event)=>{
        setLastName(event.target.value);
    }
    const handleEmailInput=(event)=>{
        setEmail(event.target.value);
    }
    const handlePhoneInput=(event)=>{
        setPhone(event.target.value);
    }
    const handleAgeInput=(event)=>{
        setAge(event.target.value);
    }

    return open ? (
        <div className = "container">
            <div className = "modal">
                <label>
                    First Name
                    <input type="text" name="firstName" value={firstName} onChange={handleFirstNameInput} />
                </label>
                <label>
                    Last Name
                    <input type="text" name="lastName" value={lastName} onChange={handleLastNameInput} />
                </label>
                <label>
                    E-mail
                    <input type="text" name="email" value={email} onChange={handleEmailInput} />
                </label>
                <label>
                    Phone
                    <input type="text" name="phone" value={phone} onChange={handlePhoneInput} />
                </label>
                <label>
                    Age
                    <input type="text" name="age" value={age} onChange={handleAgeInput} />
                </label>
            </div>
        </div> 
    ) : null;
}; 

export default Modal;
