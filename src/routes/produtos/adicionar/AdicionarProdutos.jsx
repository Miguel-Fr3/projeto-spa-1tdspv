import { json, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useSyncExternalStore } from "react";

export default function AdicionarProdutos (){

    const navigate = useNavigate();
        
    // function criarId(){
    //     let maiorId = 0;
    //     ListaProdutos.forEach(elemento=>{
    //         if (elemento.id > maiorId){
    //             maiorId = elemento.id;
    //         }
    //     })
    //     return maiorId + 1;
    // }   
    // const novoId = criarId();

   

    // const [produto, setProduto] = useState({
    //     id: novoId,
    //     nome: "",
    //     desc: "",
    //     preco: "",
    //     img: "https://picsum.photos/100/100"
    // });


    const [listaProdutosLocal, setListaProdutosLocal] = useState([{}])

    let novoId;

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

        novoId = (listaProdutosLocal[listaProdutosLocal.length - 1].id + 1)

    },[]);

    const [produto, setProduto] = useState({
        id: novoId,
        nome: "",
        desc: "",
        preco: "",
        img: ""
      });

    
    const handleChange = (event) =>{
        const{name,value} = event.target;
        setProduto({...produto, [name]:value})
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        
        fetch("http://localhost:5000/produtos",{
            method: "POST",
            body: JSON.stringify(produto),
            headers:{
                "Content-Type":"application/json",
            }
        })
        .then((response)=> response.json())
        .then((data)=>(console.log(data)))
        .catch(error => console.log(error))

        navigate("/produtos");
    }

    const handleCancel = () => {
        navigate("/produtos");
    }
    document.title = "Adicionar Produto";

    return(
        <>
            <div>
                <h1>Adicionar Produto</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <fieldset>
                            <legend>Informações do Produto</legend>
                            <input type="hidden" name="id" />
                            <div>
                                <label htmlFor="idProd">Nome do Produto</label>
                                <input type="text" name="nome" id="idProd" onChange={handleChange} value={produto.nome} />
                            </div>
                            <div>
                                <label htmlFor="idDesc">Descrição</label>
                                <input type="text" name="desc" id="idDesc" onChange={handleChange} value={produto.desc} />
                            </div>
                            <div>
                                <label htmlFor="idPreco">Preco</label>
                                <input type="text" name="preco" id="idPreco" onChange={handleChange} value={produto.preco} />
                            </div>
                            <div>
                                <label htmlFor="idImg">Preço do produto</label>
                                <input type="url" name="img" id="idImg" onChange={handleChange} value={produto.img} />
                            </div>
                            <button>Adicionar</button>
                            <button onClick={handleCancel}>Cancelar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
);}

