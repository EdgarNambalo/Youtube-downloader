
import Container from "../layouts/Container";

import styles from "./pages.module.css";

function Doacao() {
    return (
        <Container customClass="column"> 
            <div className={styles.daocaoDiv}>
                <h1>YouTube Downloader</h1>
                <h2>Faça uma daoção</h2>
                <p>O meu aplicativo para baixar video do YouTube</p>
                <p>Faça uma doação para fazer aplicativo crescer</p>
            </div>
            
        </Container>
    )
}
export default Doacao;