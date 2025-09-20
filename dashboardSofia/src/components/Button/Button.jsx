import "./Button.style.scss";

const Button = ({ label, buttonAction }) => {
  return (
    <div className="buttonBody" onClick={() => buttonAction("login")}>
      <p className="buttonLabel">{label}</p>
    </div>
  );
};

export default Button;
