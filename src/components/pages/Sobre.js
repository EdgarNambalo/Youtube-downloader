import Container from "../layouts/Container";

import styles from "./pages.module.css";

function Sobre() {
    return (
        <Container customClass="start">
            <section className={styles.sobre}>
            <div className="sobre-nav">
                <h1>YouTube Downloader</h1>
            </div>
                <div className="dialogo">
                <h2>Sobre o aplicativo</h2>
                <p>O melhor aplicativo para baixar videos do YouTube de forma rapida, facil e muito iterativa</p>
                <p><span>Desenvolvedores</span></p>
                <p><span>Edgar Nambalo : Frontend</span></p>
                <p><span>Luiz Muhele : Backend</span></p>
                </div>
                
            </section>
        </Container>
    )
}
export default Sobre;