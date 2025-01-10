import './modal.css';
const Modal = ({open}) => {
    return open ? (
        <div className = "container">
            <div className = "modal"></div>
        </div> 
    ) : null;
}; 

export default Modal;
