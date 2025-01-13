import "./button.css";

const Button = ({ children, onClick }) => {
  return (
      <button
        className="btn new-contact-button fs-4 fw-semibold"
        onClick={onClick}
      >
        {children}
      </button>
  );
};

export default Button;
