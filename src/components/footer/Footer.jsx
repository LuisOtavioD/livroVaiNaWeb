import logoInstagram from '../../assets/logoinsta.png'
import logoLinkedin from '../../assets/logolinkedin.png'
import logoTwitter from '../../assets/logotwitter.png'
import logoYoutube from '../../assets/logoyoutube.png'
import logoFacebook from '../../assets/logofacebook.png'

import s from './Footer.module.scss'



export default function Footer(){

    
    return(
        <footer className={s.footer}>
            <section className={s.contatosFooter}>
               <p>4002-8922</p>
               <nav>
               <a href=""><img src={logoFacebook} alt="Logo do facebook em  cor branca" /></a>
               <a href=""><img src={logoTwitter} alt="Logo do twitter em  cor branca" /></a>
               <a href=""><img src={logoYoutube} alt="Logo do youtube em  cor branca" /></a>
               <a href=""><img src={logoLinkedin} alt="Logo do Linkedin em  cor branca" /></a>
               <a href=""><img src={logoInstagram} alt="Logo do linkedin em cor branca" /></a>
               </nav>
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
            </section>
        </footer>
    )
}