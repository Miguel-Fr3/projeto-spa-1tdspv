import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ModalEditar(props) {
 
  const { produto } = props;

  const navigate = useNavigate(); 
  const [setProdutoParaEditar, setProdutoEditado] = useState({ ...produto });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProdutoEditado({ ...setProdutoParaEditar, [name]: value });
  };

  const handleSubmit = () => {
    fetch(`http://localhost:5000/produtos/${setProdutoParaEditar.id}`, { 
      method: "PUT",
      body: JSON.stringify(setProdutoParaEditar), 
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
    <div className={`modal`}>
      <div className="modal-content">
        <h1>Editar Produto</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="fechar">
          <span onClick={()=> props.setOpenEditar(false)}>X</span>
          </div>
          <div>
            <label htmlFor="editName">Nome:</label>
            <input
              type="text"
              id="editName"
              name="nome"
              value={setProdutoParaEditar.nome}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="editDescription">Descrição:</label>
            <input
              type="text"
              id="editDescription"
              name="desc"
              value={setProdutoParaEditar.desc}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="editPrice">Preço:</label>
            <input
              type="text"
              id="editPrice"
              name="preco"
              value={setProdutoParaEditar.preco}
              onChange={handleChange}
            />
          </div>
          <div className="botao"> 
            <button type="submit">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalEditar;
