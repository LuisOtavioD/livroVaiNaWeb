import s from './inicio.module.scss'
import imagem1 from '../../assets/imagem1doaçao.png'
import imagem2 from '../../assets/imagem2doaçao.png'
import imagem3 from '../../assets/imagem3doaçao.png'
import imagem4 from '../../assets/imagem4doaçao.png'



export default function Inicio(){
    return(
        <main>
            <section className={s.primeiraSessaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.porqueDoarSection}>
            <h2>porque devo doar?</h2>
                   <section className={s.cardMotivos}>
                  
                        <section>
                                <img src={imagem1} alt="Circulo com desenho de pessoas" />
                                <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                        </section>
                        <section>
                            <img src={imagem2} alt="Desenho de uma pessoa lendo um livro" />
                            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                        </section>
                        <section>
                            <img src={imagem3} alt="Desenho de uma mão com conexoes para pessoas" />
                            <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas..</p>
                        </section>
                        <section>
                            <img src={imagem4} alt="Desenho de uma balança antiga" />
                            <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                        </section>
                   </section>
            </section>
        </main>
    )
}