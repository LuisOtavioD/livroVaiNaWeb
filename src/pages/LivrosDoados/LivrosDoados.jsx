import livroProtagonista from '../../assets/livroprotagonista.png'
import s from './livrosDoados.module.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function LivrosDoados(){

    const [livros, setLivros] = useState([])
 
    const puxarLivros = async() =>{
       const resposta = await axios.get("https://apidesafio-efva.onrender.com/livros")
       console.log(resposta)
       setLivros(resposta.data);
    }
    useEffect(() => {
      puxarLivros()
    },[])

    return(
      <section className={s.sectionLivrosDoados} >
        <h2>Livros Doados</h2>
        <section className={s.sectionCards}>
        {livros.map((livro) =>(
             <section>
             <img src={livro.image_url}  />
              <div>
                <h3>{livro.titulo}</h3>
                </div>
                
             </section>
              ))}
        </section>
      </section>
  
    )
}