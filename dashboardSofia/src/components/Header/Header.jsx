import logo from "../../assets/logo.svg";
import "./Header.style.scss";

const Header = () => {
  const nome = localStorage.getItem("nome");

  const handleLogoClick = () => {
    window.location.href = "/";
  };

  return (
    <header className="headerContainer">
      {/* Logo */}
      <img
        onClick={handleLogoClick}
        src={logo}
        alt="Logo"
        className="headerLogo"
      />

      {/* Usuário logado */}
      {nome && (
        <div className="user-info">
          <span>Olá, {nome}</span>
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="avatar"
          />
        </div>
      )}
    </header>
  );
};

export default Header;