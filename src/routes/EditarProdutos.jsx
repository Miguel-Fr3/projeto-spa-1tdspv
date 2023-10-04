import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./Editar/EditarProdutos.scss"

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


  return (
    <div>
      <h1>Editar Produto</h1>
      <div>
        <form>
          <fieldset>
            <legend>Produto Selecionado</legend>
            <input type="hidden" name="id" value={produto.id} />
            <div>
              <label htmlFor="idProd">Nome do Produto</label>
              <input
                type="text"
                name="nome"
                id="idProd"
                value={produto.nome}
              />
            </div>
            <div>
              <label htmlFor="idDesc">Descrição</label>
              <input
                type="text"
                name="desc"
                id="idDesc"
                value={produto.desc}
              />
            </div>
            <div>
              <label htmlFor="idPreco">Preço</label>
              <input
                type="text"
                name="preco"
                id="idPreco"
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