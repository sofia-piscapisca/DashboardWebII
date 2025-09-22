import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { api } from "../../services/api";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api("https://api-node-test-6c4b0a5d4c87.herokuapp.com/products")
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <h1 className="text-2xl font-bold mb-4">Produtos</h1>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-4 py-2">Nome</th>
                <th className="border px-4 py-2">Marca</th>
                <th className="border px-4 py-2">Preço</th>
                <th className="border px-4 py-2">Validade</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-4 py-2">{p.nome}</td>
                  <td className="border px-4 py-2">{p.marca}</td>
                  <td className="border px-4 py-2">R$ {p.preco}</td>
                  <td className="border px-4 py-2">{p.validade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
}