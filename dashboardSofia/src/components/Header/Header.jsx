import logo from "../../assets/logo.svg";
import "./Header.style.scss";

const Header = () => {
  const handleLogoClick = () => {
    window.location.href = "/";
  };
  return (
    <div className="headerContainer">
      <img
        onClick={handleLogoClick}
        src={logo}
        alt="Logo"
        className="headerLogo"
      />
    </div>
  );
};

export default Header;
