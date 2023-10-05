import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ModalEditar(props) {
  const { produto, isOpen, onClose, onEdit } = props;
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
    
    onEdit(editedProduct);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h1>Editar Produto</h1>
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="editName">Nome:</label>
          <input
            type="text"
            id="editName"
            name="nome"
            value={editedProduct.nome}
            onChange={handleChange}
          />
          <label htmlFor="editDescription">Descrição:</label>
          <input
            type="text"
            id="editDescription"
            name="desc"
            value={editedProduct.desc}
            onChange={handleChange}
          />
          <label htmlFor="editPrice">Preço:</label>
          <input
            type="text"
            id="editPrice"
            name="preco"
            value={editedProduct.preco}
            onChange={handleChange}
          />
          <button type="submit">Salvar</button>
          <button type="button" onClick={onClose}>
            Fechar
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalEditar;