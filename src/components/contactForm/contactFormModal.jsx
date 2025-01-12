import './modal.css';
const Modal = ({open}) => {
    return open ? (
        <div className = "container">
            <div className = "modal">
                <div>
                    <label>
                        First Name
                        <input type="text" name="firstName" />
                    </label>
                    <label>
                        Last Name
                        <input type="text" name="lastName" />
                    </label>
                    <label>
                        E-mail
                        <input type="text" name="email" />
                    </label>
                    <label>
                        Phone
                        <input type="text" name="phone" />
                    </label>
                    <label>
                        Age
                        <input type="text" name="age" />
                    </label>
                </div>
            </div>
        </div> 
    ) : null;
}; 

export default Modal;
