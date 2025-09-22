import { use, useState } from "react";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import saly from "../../assets/saly-14.svg";
import "./Login.style.scss";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit (e) {
    e.preventDefault();
    
    if(!email.trim() || !password.trim()) {
      setError("Todos os campos devem ser preenchidos");
      return;
    }

    setError(null);
    setLoading(true);
  
    try {
      const user = await pegarLoginPegarUsuario(email, password);
      console.log("Usuário realizou o login:", user);
      navigate("/Dashboard");
    } catch (err) {
      const apiMsg = err?.response?.data || err?.message || "Erro ao fazer login.";
      console.log("Erro ao fazer login:", apiMsg);
      setError(typeof apiMsg === "string" ? apiMsg : "Erro ao fazer login.");
    } finally {
      setLoading(false);      
    }
  
  }

  const handleLogin = () => {
    setLoading(true);
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
