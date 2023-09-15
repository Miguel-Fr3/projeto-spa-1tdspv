import { Navigate, useNavigate, useParams } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos";

export default function ExcluirProdutos() {

  document.title = "Excluir Produto"

  const {id} = useParams();

  const navigate = useNavigate;

  const produto = ListaProdutos.filter((item) => item.id == id)[0];

  const handleDelete = () =>{

    let indice = ListaProdutos.findIndex(item => item.id == produto.id)
    ListaProdutos.splice(indice,1);
    alert("Produto excluido com sucesso!");
    navigate("/produtos");
  }



  return (
    <>
    <h1>ExcluirProdutos</h1>
    <div>
        <section>
          <h2>PRODUTO SELECIONADO PARA EXCLUSÃO</h2>
          <h3>Você tem certeza de que deseja excluir esse produto?</h3>
          <figure>
            <img src="" alt="" />
            <figcaption>
              {produto.nome} - R$ {produto.preco}
            </figcaption>
          </figure>
          <button onClick={handleDelete}>Excuir</button>
          <button onClick={() =>navigate("/produto")}>Cancelar</button>
        </section>
    </div>
    </>
  )
}
