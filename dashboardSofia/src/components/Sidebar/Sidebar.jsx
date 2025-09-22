import { NavLink, useNavigate } from "react-router-dom";
import "./Sidebar.style.scss";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("nome");
    navigate("/login");
  };

  return (
    <aside className="sidebar">
      <nav>
        <NavLink to="/dashboard" className="menu-item">
          Dashboard
        </NavLink>
        <NavLink to="/products" className="menu-item">
          Produtos
        </NavLink>

        <button onClick={logout} className="menu-item logout">
          Sair
        </button>
      </nav>
    </aside>
  );
}
