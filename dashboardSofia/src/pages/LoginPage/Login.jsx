import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../services/authService";
import LoginComponent from "../../components/LoginComponent/LoginComponent";
import saly from "../../assets/saly-14.svg";
import "./Login.style.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    try {
      setLoading(true);
      const data = await loginUser(email, password);

      // Salva usuário e token
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", data.token);

      // Redireciona
      navigate("/dashboard");
    } catch (err) {
      setError("Usuário ou senha inválidos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginLeft">
        <h1>
          Faça seu login em <span className="highlight">MeuGestor</span>
        </h1>
        <p>
          Se você ainda não tem uma conta,
          <br />
          você pode se <a href="#">registrar aqui!</a>
        </p>
        <img src={saly} alt="Login Illustration" />
      </div>

      <div className="loginRight">
        <form className="loginForm" onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="errorMessage">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Entrando..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
