import logolivro from '../../assets/logolivro.png'
import lupa from '../../assets/lupa.png'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Inicio from '../../pages/inicio/Inicio'
import s from './header.module.scss'
import LivrosDoados from '../../pages/LivrosDoados/LivrosDoados'
import QueroDoar from '../../pages/queroDoar/QueroDoar'




export default function Header(){
    return(
        <BrowserRouter>
        <header className={s.header}>
            <section className={s.logoHeader}>
                <img src={logolivro} alt="Imagem de ilustração de livro com capa azul aberto" />
                <h1>Livros Vai na Web</h1>
            </section>
            <nav className={s.navHeader}>
                <ul>
                    <li><Link className={s.link}  to='/Inicio'>Início</Link></li>
                    <li><Link className={s.link} to='/livrosDoados'>Livros Doados</Link></li>
                    <li><Link className={s.link} to='/doarLivros'>Quero doar</Link></li>
                </ul>
            </nav>
            <section className={s.barraDeBusca}>
                <input type="search" placeholder='O que você procura ?'/>
                <button><img src={lupa} alt="Imagem de lupa branca" /></button>
            </section>
        </header>
        <Routes>
            <Route path='/Inicio' element={<Inicio />}/>
            <Route path='/livrosDoados' element={<LivrosDoados />} />
            <Route path='/doarLivros' element={<QueroDoar />} />
        </Routes>
        </BrowserRouter>
    )
}