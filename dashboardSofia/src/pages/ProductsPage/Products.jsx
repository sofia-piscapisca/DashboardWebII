import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { api } from "../../services/api";
import "./Products.style.scss";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api("https://api-node-test-6c4b0a5d4c87.herokuapp.com/products")
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Header />
        <main className="main">
          <h1>Produtos</h1>
          <table className="products-table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Marca</th>
                <th>Preço</th>
                <th>Validade</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, index) => (
                <tr key={index}>
                  <td>{p.nome}</td>
                  <td>{p.marca}</td>
                  <td>R$ {p.preco}</td>
                  <td>{p.validade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}
