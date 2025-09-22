import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Dashboard.style.scss";

export default function Dashboard() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Header />
        <main className="main">
          <h1>Dashboard</h1>
        </main>
      </div>
    </div>
  );
}
