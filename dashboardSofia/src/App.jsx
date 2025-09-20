import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router";
import Login from "./pages/LoginPage/Login";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
