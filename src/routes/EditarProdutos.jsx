import { useParams } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos";
import Produtos from "./Produtos";
import { useState } from "react";

export default function EditarProdutos() {

    const {id} = useParams();

    document.title = "EDITAR PRODUTOS" + id;

    const produtoRetornadoDoFiltro = ListaProdutos.filter(Produto => Produto.id == id)

    const [produto, setProduto] = useState("gratis")

    return (
      <div>
          <h1>EditarProdutos</h1>
          <p>Valor do state = {produto}</p>
          <button onClick={()=> setProduto("Nome")}>MUDAR O STATE</button>


          <div>
            <form>
              <fieldset>
                <legend>Produto Selecionado</legend>

                <div>
                    <label htmlFor="idProd">Nome do Produto</label>
                    <input type="text" name="nome" id="idProd" defaultValue={produtoRetornadoDoFiltro[0].nome } />
                </div>
                <div>
                    <label htmlFor="idDesc">Descrição</label>
                    <input type="text" name="desc" id="idDesc" defaultValue={produtoRetornadoDoFiltro[0].desc } />
                </div>
                <div>
                    <label htmlFor="idPreco">Preco</label>
                    <input type="text" name="preco" id="idPreco" defaultValue={produtoRetornadoDoFiltro[0].preco } />
                </div>
                <div>
                  <button>Editar</button>
                </div>
              </fieldset>
            </form>
          </div>

      </div>
    )
  }
  