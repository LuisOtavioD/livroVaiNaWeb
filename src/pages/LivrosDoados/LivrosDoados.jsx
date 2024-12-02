import livroProtagonista from '../../assets/livroprotagonista.png'
import s from './livrosDoados.module.scss'


export default function LivrosDoados(){
    return(
      <section className={s.sectionLivrosDoados} >
        <h2>Livros Doados</h2>
        <section className={s.sectionCards}>
             <section>
                <img src={livroProtagonista} alt="Imagem do livro O protagonista de sussane andrade" />
                <div>
                <h3>O protagonista</h3>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
                </div>
             </section>
        </section>
      </section>
  
    )
}