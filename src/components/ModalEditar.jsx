import React, { useState } from "react";

function EditarModal(props) {
  const { produto, isOpen, onClose, onEdit } = props;

  const [editedProduct, setEditedProduct] = useState({ ...produto });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct({ ...editedProduct, [name]: value });
  };

  const handleSubmit = () => {
    // Faça a solicitação PUT ou PATCH para atualizar o produto no backend aqui
    // Depois, chame a função onEdit para atualizar o produto no estado da lista
    onEdit(editedProduct);
    onClose();
  };

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <h2>Editar Produto</h2>
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

export default EditarModal;
