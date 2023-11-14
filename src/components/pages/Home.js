import { useState } from "react";
import AddLink from "../layouts/AddLink";
import Container from "../layouts/Container"
import MostrarLink from "../layouts/MostrarLink";
import Loading from "../layouts/Loading"


import styles from "./pages.module.css";

function Home() {

    const [link, setLink] = useState({})
    const [dados, setDados] = useState({})
    const [titulo, setTitulo] = useState('')
    const [click, setlick] = useState(false)
    //const [size, setSize] = useState('')
    
    async function proucuarVideo(links) {
        
        setlick(true)
        setTitulo('')
        await fetch("http://127.0.0.1:5000/pesquisar", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(links)
            }).then((resp) => resp.json())
            .then((data) => {
                console.log("mostarando os dados")
                console.log(data)
                setDados(data)
                setTitulo(data.titulo)
                setLink(links)
                //setSize(data.size) 
                //console.log(link)
            })
            .catch((err) => console.log(err))
        
        console.log('Mostrando o nome')
        //console.log(size)
        
    }
    console.log(link)
    //console.log(titulo)
    
    async function baivarVideo(tipoVideo) {
        const detalhes = {
            "link_video": link.link_video,
            "tipo_resolucao": tipoVideo.tipo_resolucao
        }

        console.log(detalhes)        
        await fetch("http://127.0.0.1:5000/baixar", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(detalhes)
            }).then((resp) => {
                resp.json()
                console.log(resp)
            })
            .then((data) => {
                console.log("mostarando os dados")
                console.log(data)
            })
            .catch((err) => console.log(err))
        
        console.log(tipoVideo)
        console.log(tipoVideo.tipo_resolucao)
    }
    
    return (
        <Container customClass="min-height">
            <AddLink proucuarLink={proucuarVideo} btnText="text" />
            {titulo && (
                <MostrarLink
                    name={titulo}
                    btnText="Baixar"
                    vils={dados.visualizacoes}
                    img={dados.img}
                    linkbaixar={baivarVideo}
                />
            )
            }{titulo.length === 0 && click && 
                <Loading />
            }{!click &&
                <div className={styles.home_inserir}>
                    <p>Insira o Link do video</p>
                </div>
            }
        </Container>
    )
}
export default Home;