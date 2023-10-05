import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ModalEditar(props) {
 
  const { produto } = props;

  const navigate = useNavigate(); 
  const [editedProduct, setEditedProduct] = useState({ ...produto });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSubmit = () => {
    fetch(`http://localhost:5000/produtos/${editedProduct.id}`, { 
      method: "PUT",
      body: JSON.stringify(editedProduct), 
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
              value={editedProduct.nome}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="editDescription">Descrição:</label>
            <input
              type="text"
              id="editDescription"
              name="desc"
              value={editedProduct.desc}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="editPrice">Preço:</label>
            <input
              type="text"
              id="editPrice"
              name="preco"
              value={editedProduct.preco}
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
