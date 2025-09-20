import { useState } from "react";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import saly from "../../assets/saly-14.svg";
import "./Login.style.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    //IMPLEMENT LOGIN ACTION
  };

  return (
    <div className="loginPage">
      <div className="loginPageContainer">
        <div className="loginPageTitleContainer">
          <p className="loginTitle">Faça seu login em</p>
          <div className="line">
            <p className="meuTitle">Meu</p>
            <p className="gestorTitle">Gestor</p>
          </div>
        </div>
        <div className="subtitleAndSaly">
          <div className="loginPageSubtitleContainer">
            <p className="loginSubtitleRegular">
              Se você ainda não tem uma conta,
            </p>
            <div className="line">
              <p className="loginSubtitleRegular">Você pode se</p>
              &nbsp;
              <p className="registerText">Registrar aqui!</p>
            </div>
          </div>
          <img src={saly} alt="saly" className="salyImage" />
        </div>
      </div>

      <LoginComponent
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
    </div>
  );
};

export default Login;
