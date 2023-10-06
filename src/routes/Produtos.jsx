import { Link } from "react-router-dom";
import { AiFillEdit as Editar, AiOutlineDelete as Excluir } from "react-icons/ai";
import { useEffect, useState } from "react";
import ModalInserir from "../components/ModalInserir";
import ModalEditar from "../components/ModalEditar"; 
import "./Produtos.scss";

export default function Produtos() {
  document.title = "Lista de Produtos";

  const [listaProdutoLocal, setListaProdutoLocal] = useState([{}]);

  useEffect(() => {
    fetch("http://localhost:5000/produtos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setListaProdutoLocal(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [open, setOpen] = useState(false);
  const [openEditar, setOpenEditar] = useState(false);
  const [produtoParaEditar, setProdutoParaEditar] = useState(null);

  const handleOpenEditarModal = (produto) => {
    setProdutoParaEditar(produto);
    setOpenEditar(true);
  };

  return (
    <div>
      <h1>LISTA DE PRODUTOS</h1>

      {open ? <ModalInserir open={open} setOpen={setOpen} /> : ""}

      {openEditar && (
        <ModalEditar
          produto={produtoParaEditar}
          setOpenEditar={setOpenEditar}
        />
      )}

      <Link className="linkStyle" onClick={() => setOpen(true)}>
        Cadastrar Produtos
      </Link>

      <div>
        <table className="tableStyle">
          <thead className="tableHeaderStyle">
            <tr >
              <th >ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Imagem</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            {listaProdutoLocal.map((produto, index) => (
              <tr key={index}>
                <td className="tableLineStyle">{produto.id}</td>
                <td className="tableLineStyle">{produto.nome}</td>
                <td className="tableLineStyle">{produto.desc}</td>
                <td className="tableLineStyle">{produto.preco}</td>
                <td className="tableLineStyle">
                  <img src={produto.img} alt={produto.desc} width={100} />
                </td>
                <td className="tableLineStyle">
                  <button
                    onClick={() => handleOpenEditarModal(produto)}
                  >
                    <Editar />
                  </button>{" "}
                  |{" "}
                  <Link to={`/excluir/produtos/${produto.id}`}>
                    <Excluir />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5" className="tableDataStyle">
                Total de Produtos: {listaProdutoLocal.length}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}
