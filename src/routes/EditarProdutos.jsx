
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function EditarProdutos() {
  const { id } = useParams();

  document.title = "EDITAR PRODUTO " + id;

  const navigate = useNavigate();

  const [produto, setProduto] = useState({
    id: "",
    nome: "",
    desc: "",
    preco: "",
    img: "",
  });

  useEffect(() => {
    
    fetch(`http://localhost:5000/produtos/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setProduto(data); 
      })
      .catch((error) => console.log(error));
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduto({ ...produto, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    fetch(`http://localhost:5000/produtos/${id}`, {
      method: "PUT",
      body: JSON.stringify(produto),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/produtos");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h1>Editar Produto</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Produto Selecionado</legend>
            <input type="hidden" name="id" value={produto.id} />
            <div>
              <label htmlFor="idProd">Nome do Produto</label>
              <input
                type="text"
                name="nome"
                id="idProd"
                onChange={handleChange}
                value={produto.nome}
              />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição</label>
              <input
                type="text"
                name="desc"
                id="idDesc"
                onChange={handleChange}
                value={produto.desc}
              />
            </div>
            <div>
              <label htmlFor="idPreco">Preço</label>
              <input
                type="text"
                name="preco"
                id="idPreco"
                onChange={handleChange}
                value={produto.preco}
              />
            </div>
            <div>
              <button type="submit">EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}