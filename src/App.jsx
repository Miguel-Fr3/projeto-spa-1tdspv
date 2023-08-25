import reactLogo from "./assets/react.svg"
import Cabecalho from './components/Cabecalho.jsx'

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
        <section>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore dolorem praesentium fuga iste ab. Corporis dicta sed dignissimos, adipisci itaque accusantium provident. Pariatur, est! Nemo ab at temporibus quidem earum?</p>
            <p>Saepe reprehenderit repudiandae inventore facere deleniti! Pariatur animi obcaecati labore, quasi molestias dignissimos dolore! Ducimus recusandae iusto sit voluptate odio debitis nulla aliquam similique natus? Modi delectus fugit esse ea.</p>
            <p>Doloremque eos voluptas cum. Modi dolorum necessitatibus cum iste magnam delectus vel tempora voluptatem. Excepturi voluptate facere sunt unde beatae doloremque, modi exercitationem, eligendi minus inventore blanditiis quae accusamus labore!</p>
            <img src={reactLogo} alt={reactLogoTextoAlt} />
          </div>
        </section>
        {/* Um rodapé com uma div, uma lista ul com 3 itens e links para redes sociais*/}
          <footer>
            <div>
              <ul>
                <li><a href="">Git Hub</a></li>
                <li><a href="">X</a></li>
                <li><a href="">reddit</a></li>
              </ul>
            </div>
          </footer>
      </div>

    </>
  )
}
