import reactLogo from "./assets/react.svg"
import Cabecalho from './components/Cabecalho'
import Conteudo from "./components/Conteudo"
import Rodape from "./components/Rodape"
export default function App() {

  //Area Declarativa

  let reactLogoTextoAlt = "Logo do React"
  
  return (
    <>
      {/* Area imperativo */}
      <div>
        {/* Um cabeçalho com um header, um h1, uma lista ul com 3 items com 3 links */}
        <Cabecalho/>
        {/* Um sessão com uma div com 3 paragrafos, com 3 linhas de lorem, uma imagem */}
        <Conteudo reactLogoProps={reactLogo} reactLogoTextoAltProps={reactLogoTextoAlt}/>
        {/* Um rodapé com uma div, uma lista ul com 3 itens e links para redes sociais*/}
        <Rodape/>
      </div>

    </>
  )
}
