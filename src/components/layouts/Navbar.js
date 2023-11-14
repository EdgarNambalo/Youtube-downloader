import { Link } from "react-router-dom";
import Container from "./Container";

import styles from './Navbar.module.css';

function Navbar() {
    return (
        <header>
            <nav className={styles.navbar}>
                <Container>
                    <Link to="/" className={styles.logo}>YouTube Downloader</Link>
                    <ul className={styles.list}>
                        <Link to="/doacao" className="styles.logo">Faça uma doação</Link>
                        <Link to="/sobre" className="styles.logo">Sobre</Link>
                    </ul>
                </Container>
            </nav>
        </header>
    )
}

export default Navbar;