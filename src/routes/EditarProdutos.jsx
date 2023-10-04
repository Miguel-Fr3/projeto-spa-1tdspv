import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";
import "./Editar./EditarProdutos.scss"

export default function EditarProdutos() {
  

  return (
    <div>
      <h1>EditarProdutos</h1>
      <div>
        <form onSubmit={handleSubmit} className="form">
          <fieldset>
            <legend>Produto Selecionado</legend>
            <input type="hidden" name="id" value={produto.id} />
            <div>
              <label htmlFor="idProd">Nome do Produto</label>
              <input type="text" name="nome" id="idProd" onChange={handleChange} value={produto.nome} />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição</label>
              <input type="text" name="desc" id="idDesc" onChange={handleChange} value={produto.desc} />
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
              <button>EDITAR</button>
            </div>
          </fieldset>
        </form>
      </div>

        <div>
          <p>Nome : {produto.nome}</p>
          <p>Desc : {produto.desc}</p>
          <p>Preço : {produto.preco}</p>
        </div>
    </div>
  );
}
