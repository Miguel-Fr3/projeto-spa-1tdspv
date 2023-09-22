import { useNavigate, useParams } from "react-router-dom"
import style from "./Excluir.module.css";

export default function ExcluirProdutos() {

  document.title = "Excluir Produto"

  const {id} = useParams();

  const navigate = useNavigate();

 
  const [listaProdutosLocal, setListaProdutosLocal] = useState([{}])


  useEffect(()=>{
      fetch("http://localhost:5000/produtos", {
          method: "GET",
          headers:{
              "Content-Type" : "application/json",
          }
      })
      .then((response)=> response.json())
      .then((data)=>{
          setListaProdutosLocal(data);
      }).catch(error => console.log(error))


  },[]);

  const produto = listaProdutosLocal.filter((item) => item.id == id)[0];

  const handleDelete = () =>{

    let indice = listaProdutosLocal.findIndex(item => item.id == produto.id)
    listaProdutosLocal.splice(indice,1);
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
