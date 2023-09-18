import { useNavigate } from "react-router-dom";
import { ListaProdutos } from "../../../components/ListaProdutos";

export default function AdicionarProdutos(){
    const navigate = useNavigate();

    return(
        <main>
            <h1></h1>
            <form >
                <fieldset>
                    <label htmlFor="idNome">Nome:</label>
                    <input type="text" name="nome" id="idNome" />
                </fieldset>
            </form>
        </main>
    )
}
