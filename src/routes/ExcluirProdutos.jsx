import { useNavigate, useParams } from "react-router-dom"
import { ListaProdutos } from "../components/ListaProdutos";
import style from "./Excluir.module.css";

export default function ExcluirProdutos() {

  document.title = "Excluir Produto"

  const {id} = useParams();

  const navigate = useNavigate();

  const produto = ListaProdutos.filter((item) => item.id == id)[0];

  const handleDelete = () =>{

    let indice = ListaProdutos.findIndex(item => item.id == produto.id)
    ListaProdutos.splice(indice,1);
    alert("Produto excluido com sucesso!");
    navigate("/produtos");
  }



  return (
    <div className={style.containerExcluir}>
      <div className={style.cardExcluir}>
    <h1>ExcluirProdutos</h1>
    <div>
        <section>
          <h2>PRODUTO SELECIONADO PARA EXCLUSÃO</h2>
          <h3 className={style.alertMsg}>Você tem certeza de que deseja excluir esse produto?</h3>
          <figure>
            <img src={produto.img} alt={produto.desc} />
            <figcaption>
              {produto.nome} - R$ {produto.preco}
            </figcaption>
          </figure>
          <div>
          <button onClick={handleDelete}>Excuir</button>
          <button onClick={() => navigate("/produtos")}>Cancelar</button>
          </div>
        </section>
        </div>
    </div>
    </div>
  )
}
