import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import { useState } from "react";

export default function AdicionarProdutos (){

    const navegacao = useNavigate();
        
    function criarId(){
        let maiorId = 0;
        ListaProdutos.forEach(elemento=>{
            if (elemento.id > maiorId){
                maiorId = elemento.id;
            }
        })
        return maiorId + 1;
    }   
    const novoId = criarId();

    const [produto, setProduto] = useState({
        id: novoId,
        nome: "",
        desc: "",
        preco: "",
        img: "https://picsum.photos/100/100"
    });


    const handleChange = (event) =>{
        const{name,value} = event.target;
        setProduto({...produto, [name]:value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        ListaProdutos.push(produto);

        return navegacao("/produtos"); 
    }

    const handleCancel = () => {
        return navegacao("/produtos")
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
                                <input type="hidden" name="id"/>
                            <div>
                                <label htmlFor="idProduto">Nome do produto</label>
                                <input type="text" name = "nome" id="idProd"  onChange={handleChange}/>
                            </div>
                            <div>
                                <label htmlFor="idDesc">Descrição</label>
                                <input type="text" name = "desc" id="idDesc" onChange={handleChange}/>
                            </div>
                            <div>
                                <label htmlFor="idPreco">Preço do produto</label>
                                <input type="text" name = "preco" id="idPreco"  onChange={handleChange}/>
                            </div>
                            <button >Adicionar</button>
                            <button onClick={handleCancel}>Cancelar</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </>
);}