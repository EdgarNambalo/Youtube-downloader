import { useState } from 'react';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './Navbar.module.css'
import Container from'./Container'
function MostrarLink({vils, name, img, btnText, linkslink, linkbaixar }) {
    
    const [link, setLink] = useState(linkslink || {});
    
    function baixar(e) {
        e.preventDefault()
        linkbaixar(link)
    }
    
    function handleOnChange(e) {
        setLink({ ...link, [e.target.name]: e.target.value })
    }
    
    return (
        <Container customClass="column">
        <div className={styles.contents} id="encontrado">
            <div className={styles.detalhes}>
                <h2>{name}</h2>
                <img src={img} alt=""/>
            </div>
            <div className={styles.viws}>
                <span>Visualizações:{vils}</span>
                <form onSubmit={baixar} >
                    <Select text="Selecione a estensão do video"
                        name="tipo_resolucao"
                    handleOnChange={handleOnChange}/>
                    <SubmitButton text={btnText} />
                </form>
            </div>
            </div>
        </Container>    
    )
}

export default MostrarLink;