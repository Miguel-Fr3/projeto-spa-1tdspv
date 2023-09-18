import { useNavigate } from "react-router-dom";
import { ListaProdutos } from "../../../components/ListaProdutos";

export default function AdicionarProdutos(){
    const navigate = useNavigate();

    return(
        <main>
            <h1></h1>
            <form >
                <fieldset>
                    <div>
                        <label htmlFor="idNome">Nome:</label>
                        <input type="text" name="nome" id="idNome" />
                    </div>
                    <div>
                        <label htmlFor="idDesc">Descrição:</label>
                        <input type="text" name="desc" id="idDesc" />
                    </div>
                    <div>
                        <label htmlFor="idPreco">Preço:</label>
                        <input type="number" min="0" name="preco" id="idPreco" />
                    </div>
                    <div>
                        <label htmlFor="idImg">Imagem:</label>
                        <input type="text" name="Img" id="idImg" />
                    </div>
                    <button type="submit">Add</button>
                </fieldset>
            </form>
        </main>
    )
}
