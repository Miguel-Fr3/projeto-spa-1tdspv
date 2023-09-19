import { ListaProdutos } from "../components/ListaProdutos";
import { Link } from "react-router-dom";
import {AiFillEdit as Editar, AiOutlineDelete as Excluir} from "react-icons/ai";
import classes from "./Produtos.module.css";
import { useEffect, useState } from "react";

export default function Produtos() {

    document.title = "Lista de Produtos";

    const [exemplo, setexemplo] = useState([{}])

    const [count, setcount] = useState(0)


    useEffect(()=>{
      console.log("aaaaaa")
    });


    useEffect(()=>{
      console.log("aaaaaa one time")

        setexemplo(ListaProdutos)

    },[]);

    useEffect(()=>{
      console.log("aaaaaa objeto ou coponente ou elemento que esta no array de dependecia ")
    },[count]);




    return (
      <div>
          <h1>LISTA DE PRODUTOS</h1>

        <div>
          <button onClick={()=> setcount(count + 1)}>conta - {count}</button>
        </div>
        <div>
          <table className={classes.tableStyle}>
            <thead >
              <tr className={classes.tableHeaderStyle}>
                <th className={classes.tableHeaderStyle}>ID</th>
                <th className={classes.tableHeaderStyle}>Nome</th>
                <th className={classes.tableHeaderStyle}>Descrição</th>
                <th className={classes.tableHeaderStyle}>Preço</th>
                <th className={classes.tableHeaderStyle}>Imagem</th>
                <th className={classes.tableHeaderStyle}>Editar/Excluir</th>
                </tr>
            </thead>
            <tbody>
              {ListaProdutos.map((produto, index) => (
                <tr key={index} className={classes.tableLineStyle}>
                  <td className={classes.tableDataStyle}>{produto.id}</td>
                  <td className={classes.tableDataStyle}>{produto.nome}</td>
                  <td className={classes.tableDataStyle}>{produto.desc}</td>
                  <td className={classes.tableDataStyle}>{produto.preco}</td>
                  <td className={classes.tableDataStyle}><img src={produto.img} alt={produto.desc} /></td>
                  <td className={classes.tableDataStyle}><Link to={`/editar/produtos/
                  ${produto.id}`}><Editar/></Link> | <Link to={`/excluir/produtos/
                  ${produto.id}`}><Excluir/></Link></td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5" className={classes.tableDataStyle}>Total de Produtos: {ListaProdutos.length}</td>
              </tr>
              <tr>
                <td colSpan ="6"><Link to={`/adicionar/produtos/`}>Adicionar Produto</Link></td>
              </tr>
            </tfoot>
          </table>
        </div>

      </div>
    )
  }
  