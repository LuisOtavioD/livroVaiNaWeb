import iconeLivro from '../../assets/iconelivro.png'
import s from './QueroDoar.module.scss'

export default function QueroDoar(){
    return(
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form action="">
                <div>
                    <img src={iconeLivro} alt="Imagem de um desenho de um livro de borda azul" />
                     <h2>Informações do livro</h2>
                </div>
                <input type="text" name="" placeholder='Titulo' />
                <input type="text" name="" placeholder='Categoria' />
                <input type="text" name="" placeholder='Autor' />
                <input type="text" name="" placeholder='Link da imagem' />
                <input type="submit" value="Doar" className={s.buttonDoar}/>
            </form>
        </section>
    )
}