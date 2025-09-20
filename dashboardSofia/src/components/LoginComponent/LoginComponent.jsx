import TextBox from "../TextBox/TextBox";
import Button from "../Button/Button";
import LoginSocial from "../LoginSocial/LoginSocial";
import "./LoginComponent.style.scss";

const LoginComponent = ({
  email,
  setEmail,
  password,
  setPassword,
  handleLogin,
}) => {
  return (
    <div className="loginComponentContainer">
      <p className="loginComponentTitle">Login</p>
      <div className="loginComponentBody">
        <TextBox label="E-mail" value={email} setValue={setEmail} />
        <div className="passwordContainer">
          <TextBox
            label="Senha"
            password={true}
            value={password}
            setValue={setPassword}
          />
          <p className="forgotPassword">Esqueceu sua senha?</p>
        </div>
        <Button label="Login" buttonAction={handleLogin} />
        <p className="orText">Ou continue com</p>
        <LoginSocial />
      </div>
    </div>
  );
};
export default LoginComponent;
