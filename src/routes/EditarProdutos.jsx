import { useParams } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos";
import Produtos from "./Produtos";
import { useState } from "react";

export default function EditarProdutos() {

    const {id} = useParams();

    document.title = "EDITAR PRODUTOS" + id;

    const produtoRetornadoDoFiltro = ListaProdutos.filter(Produto => Produto.id == id)

    const [produto, setProduto] = useState("")

    return (
      <div>
          <h1>EditarProdutos</h1>

          <p>Objeto selecionado : {produtoRetornadoDoFiltro[0].nome}</p>

          <div>
            <form>
              <fieldset>
                <legend>Produto Selecionado</legend>
                <input type="hidden" defaultValue={produtoRetornadoDoFiltro[0].id}/>
                <div>
                  <label htmlFor="idProd">Nome do Produto</label>
                  <input type="text" name="nome" id="idProd" defaultValue={produtoRetornadoDoFiltro[0].nome} />
                </div>
                <div>
                  <label htmlFor="idDesc">Descrição</label>
                  <input type="text" name="desc" id="idDesc" defaultValue={produtoRetornadoDoFiltro[0].desc} />
                </div>
                <div>
                  <label htmlFor="idPreco">Preço</label>
                  <input type="text" name="preco" id="idPreco" defaultValue={produtoRetornadoDoFiltro[0].preco} />
                </div>
                <div>
                  <button>EDITAR</button>
                </div>
              </fieldset>
            </form>
          </div>
      </div>
    )
  }
  