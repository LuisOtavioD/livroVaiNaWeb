import iconeLivro from '../../assets/iconelivro.png'
import s from './QueroDoar.module.scss'
import { useState } from 'react'
import axios from "axios"

export default function QueroDoar(){
    const [titulo,setTitulo] = useState("")
    const [categoria, setCategoria] = useState("")
    const [autor, setAutor] = useState("")
    const [image_url, setImage_url] = useState("")

    const capturaTitulo = (e) =>{
        setTitulo(e.target.value)
    }
    const capturaCategoria = (e) =>{
        setCategoria(e.target.value)
    }
    const capturaAutor = (e) =>{
        setAutor(e.target.value)
    }
    const capturaImage_url = (e) =>{
        setImage_url(e.target.value)
    }
    const envioDados = async() =>{
        const dadosParaEnviar = {
            titulo,
            categoria,
            autor,
            image_url
        }
        await axios.post("https://apidesafio-efva.onrender.com/doar", dadosParaEnviar)
    }



    return(
        <section className={s.queroDoarSection}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form onSubmit={(e)=>e.preventDefault()}>
                <div>
                    <img src={iconeLivro} alt="Imagem de um desenho de um livro de borda azul" />
                     <h2>Informações do livro</h2>
                </div>
                <input type="text" name="" placeholder='Titulo' onChange={capturaTitulo} required />
                <input type="text" name="" placeholder='Categoria' onChange={capturaCategoria} required/>
                <input type="text" name="" placeholder='Autor'onChange={capturaAutor} required/>
                <input type="url" name="" placeholder='Link da imagem' onChange={capturaImage_url} required/>
                <input type="submit" value="Doar" className={s.buttonDoar} onClick={envioDados}/>
            </form>
        </section>
    )
}